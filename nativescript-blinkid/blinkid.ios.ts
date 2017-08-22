declare var PPCameraCoordinator, PPCameraType, PPSettings, PPMrtdRecognizerSettings, PPPdf417RecognizerSettings,
    PPZXingRecognizerSettings, PPViewControllerFactory, UIInterfaceOrientationMaskAll, PPScanningDelegate,
    PPScanningViewController, PPMrtdRecognizerResult, PPPdf417RecognizerResult, PPZXingRecognizerResult, PPZXingBarcodeType, console;


export class PassportData {
    DateOfBirth?: Date;
    dateOfExpiry?: Date;
    documentCode?: string;
    documentNumber?: string;
    documentType?: number;
    immigrantCaseNumber?: string;
    issuer?: string;
    nationality?: string;
    primaryId?: string;
    secondaryId?: string;
    gender?: string;
}

export class ScanData {
    Type: BlinkIDType;
    PassportData: PassportData;
    Pdf417Data: string;
    QRCodeData: string;
}

export const enum BlinkIDType {
    PASSPORT = "PASSPORT",
    PDF417  = "PDF417",
    QRCODE = "QRCODE"
}

export class BlinkID {
    private _license: string;
    private _resolve: (value?: any) => void;
    constructor(licenseKey: string) {
        this._license = licenseKey;
    }

    coordinatorWithError(error, type: BlinkIDType, license) {
        if (PPCameraCoordinator.isScanningUnsupportedForCameraTypeError(PPCameraType.Back)) {
            return null;
        }
        let settings = PPSettings.alloc().init();
        settings.licenseSettings.licenseKey = license;

        if (type === BlinkIDType.PASSPORT) {
            let mrtdRecognizerSettings = PPMrtdRecognizerSettings.alloc().init();
            mrtdRecognizerSettings.dewarpFullDocument = false;
            settings.scanSettings.addRecognizerSettings(mrtdRecognizerSettings);

        }
        else if (type === BlinkIDType.PDF417) {
            let pdf417RecognizerSettings = PPPdf417RecognizerSettings.alloc().init();
            settings.scanSettings.addRecognizerSettings(pdf417RecognizerSettings);
        } else {
            let zxingRecognizerSettings = PPZXingRecognizerSettings.alloc().init();
            settings.scanSettings.addRecognizerSettings(zxingRecognizerSettings);
            zxingRecognizerSettings.scanQR = true;
        }
        let coordinator = PPCameraCoordinator.alloc().initWithSettings(settings);
        return coordinator;

    }

    public didTapScan(type: BlinkIDType): Promise<any> {
        return new Promise((resolve, reject) => {
            let error: NSError;
            let coordinator = this.coordinatorWithError(error, type, this._license);
            this._resolve = resolve;
            let listener = new BlinkIDDelegate();
            listener.initWithCallback(resolve, type);
            if (coordinator == null) {
                let message = error.localizedDescription;
                UIAlertView.alloc().initWithTitleMessageDelegateCancelButtonTitleOtherButtonTitles(
                    "Warning", message, null, "OK", null).show();
                return;
            }
            let scanViewController = PPViewControllerFactory.cameraViewControllerWithDelegateCoordinatorError(listener, coordinator);
            scanViewController.shouldAutorotateToInterfaceOrientation(UIInterfaceOrientation.LandscapeLeft);
            rootVC().presentViewControllerAnimatedCompletion(scanViewController, true, null);
        });
    }
}

class BlinkIDDelegate extends NSObject {
    public static ObjCProtocols = [PPScanningDelegate];
    private _resolve: (value?) => void;
    private _type: BlinkIDType;

    public initWithCallback(callback: (value?: any) => void, type: BlinkIDType) {
        this._resolve = callback;
        this._type = type;
        console.log(this._resolve);
    }

    public scanningViewControllerUnauthorizedCamera(scanningViewController) {
        // Add any logic which handles UI when app user doesn't allow usage of the phone's camera
    }

    scanningViewControllerDidFindError(scanningViewController, error: NSError) {
        // Can be ignored. See description of the method
    }

    scanningViewControllerDidClose(scanningViewController) {
        // As scanning view controller is presented full screen and modally, dismiss it
        rootVC().dismissViewControllerAnimatedCompletion(true, null);
    }

    scanningViewControllerDidOutputResults(scanningViewController, results: NSArray<any>) {
        console.log(results[0]);
        if (results[0] instanceof PPMrtdRecognizerResult) {
            let mrtdData = <PPMrtdRecognizerResult>results[0]
            let passportData = new PassportData();
            passportData.DateOfBirth = mrtdData.dateOfBirth;
            passportData.dateOfExpiry = mrtdData.dateOfExpiry;
            passportData.documentCode = mrtdData.documentCode;
            passportData.documentNumber = mrtdData.documentNumber;
            passportData.gender = mrtdData.sex;
            passportData.immigrantCaseNumber = mrtdData.immigrantCaseNumber;
            passportData.issuer = mrtdData.issuer;
            passportData.nationality = mrtdData.nationality;
            passportData.primaryId = mrtdData.primaryId;
            passportData.secondaryId = mrtdData.secondaryId;
            let scanData = new ScanData();
            scanData.Type = BlinkIDType.PASSPORT;
            scanData.PassportData = passportData;
            this._resolve(scanData);
            rootVC().dismissViewControllerAnimatedCompletion(true, null);
        } else if (results[0] instanceof PPPdf417RecognizerResult) {
            let pdf417Result = <PPPdf417RecognizerResult>results[0];
            let scanData = new ScanData();
            scanData.Type = BlinkIDType.PDF417;
            scanData.Pdf417Data = pdf417Result.stringUsingGuessedEncoding();
            this._resolve(scanData);
            rootVC().dismissViewControllerAnimatedCompletion(true, null);
        } else if (results[0] instanceof PPZXingRecognizerResult) {
            let zxingResult = <PPZXingRecognizerResult>results[0];
            if (zxingResult.barcodeType() === PPZXingBarcodeType.QR) {
                let scanData = new ScanData();
                scanData.Type = BlinkIDType.QRCODE;
                scanData.QRCodeData = zxingResult.stringUsingGuessedEncoding();
                this._resolve(scanData);
                rootVC().dismissViewControllerAnimatedCompletion(true, null);
            } else {
                // do not close the scanner view
            }
        } else {
            // do not close the scanner view
        }

    }

    alertViewClickedButtonAtIndex(alertView: UIAlertView, buttonIndex: number) {
        rootVC().dismissViewControllerAnimatedCompletion(true, null);
    }

}

const rootVC = function () {
    let appWindow = UIApplication.sharedApplication.keyWindow;
    return appWindow.rootViewController;
}
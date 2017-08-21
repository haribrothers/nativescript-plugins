declare var PPCameraCoordinator, PPCameraType, PPSettings, PPMrtdRecognizerSettings, PPPdf417RecognizerSettings,
PPZXingRecognizerSettings, PPViewControllerFactory, UIInterfaceOrientationMaskAll;

export class BlinkID {
    private _license: string;
    private _resolve: (value?: any) => void;
    constructor(licenseKey: string) {
        this._license = licenseKey;
    }

    coordinatorWithError(error, type, license) {
        if (PPCameraCoordinator.isScanningUnsupportedForCameraTypeError(PPCameraType.Back)) {
            return null;
        }
        let settings = PPSettings.alloc().init();
        settings.licenseSettings.licenseKey = license;
        if (type == "Passport") {
            let mrtdRecognizerSettings = PPMrtdRecognizerSettings.alloc().init();
            mrtdRecognizerSettings.dewarpFullDocument = false;
            //mrtdRecognizerSettings.mrtdRoi = CGRectMake(0.0f, 0.52f, 1.0f, 0.18f);
            settings.scanSettings.addRecognizerSettings(mrtdRecognizerSettings);

        }
        else {
            let pdf417RecognizerSettings = PPPdf417RecognizerSettings.alloc().init();
            settings.scanSettings.addRecognizerSettings(pdf417RecognizerSettings);

            let zxingRecognizerSettings = PPZXingRecognizerSettings.alloc().init();
            settings.scanSettings.addRecognizerSettings(zxingRecognizerSettings);
            zxingRecognizerSettings.scanQR = true;
        }
        let coordinator = PPCameraCoordinator.alloc().initWithSettings(settings);
        return coordinator;

    }

    public didTapScan(type: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let error: NSError;
            let coordinator = this.coordinatorWithError(error, type, this._license);
            this._resolve = resolve;
            if (coordinator == null) {
                let message = error.localizedDescription;
                UIAlertView.alloc().initWithTitleMessageDelegateCancelButtonTitleOtherButtonTitles(
                    "Warning", message, null, "OK", null).show();
                return;
            }
            let scanViewController = PPViewControllerFactory.cameraViewControllerWithDelegateCoordinatorError(BlinkIDDelegate.initWithOwner(new WeakRef(this)),coordinator);
            scanViewController.shouldAutorotateToInterfaceOrientation(UIInterfaceOrientation.LandscapeLeft);
            rootVC().presentViewControllerAnimatedCompletion(scanViewController,true,null);
        });
    }
}

class BlinkIDDelegate extends NSObject{
    public static ObjCProtocols = [PPScanningDelegate];
    private _owner: WeakRef<BlinkID>;

    public static initWithOwner(owner: WeakRef<BlinkID>): BlinkIDDelegate {
        let delegate = <BlinkIDDelegate>BlinkIDDelegate.new();
        delegate._owner = owner;
        return delegate;
      }

    public scanningViewControllerUnauthorizedCamera(scanningViewController:PPScanningViewController ) {
        // Add any logic which handles UI when app user doesn't allow usage of the phone's camera
    }

    scanningViewControllerDidFindError(scanningViewController:PPScanningViewController,error:NSError) {
        // Can be ignored. See description of the method
    }

    scanningViewControllerDidClose(scanningViewController:PPScanningViewController) {
        // As scanning view controller is presented full screen and modally, dismiss it
        rootVC().dismissViewControllerAnimatedCompletion(true,null);
    }

    scanningViewControllerDidOutputResults(scanningViewController,results:NSArray<any>) {
        console.log(results);
    }

    alertViewClickedButtonAtIndex(alertView:UIAlertView,buttonIndex:number) {
        rootVC().dismissViewControllerAnimatedCompletion(true,null);
    }

}

const rootVC = function () {
    let appWindow = UIApplication.sharedApplication.keyWindow;
    return appWindow.rootViewController;
}
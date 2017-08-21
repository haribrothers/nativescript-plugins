
declare function CGControlPointsForArcBetweenPointsWithRadius(startPoint: CGPoint, endPoint: CGPoint, radius: number, rightHandRule: boolean, controlPoint1: interop.Pointer | interop.Reference<CGPoint>, controlPoint2: interop.Pointer | interop.Reference<CGPoint>): void;

declare function CGDeltaMake(deltaX: number, deltaY: number): CGPoint;

interface CGLine {
	point1: CGPoint;
	point2: CGPoint;
}
declare var CGLine: interop.StructType<CGLine>;

declare function CGLineDelta(line: CGLine): CGPoint;

declare function CGLineDirection(line: CGLine): number;

declare function CGLineEqualToLine(line1: CGLine, line2: CGLine): boolean;

declare function CGLineIntersectsRectAtPoint(rect: CGRect, line: CGLine): CGPoint;

declare function CGLineLength(line: CGLine): number;

declare function CGLineMake(point1: CGPoint, point2: CGPoint): CGLine;

declare function CGLineMidPoint(line: CGLine): CGPoint;

declare function CGLineScale(line: CGLine, scale: number): CGLine;

declare function CGLineScaleOnMidPoint(line: CGLine, scale: number): CGLine;

declare function CGLineTranslate(line: CGLine, delta: CGPoint): CGLine;

declare function CGLinesAngle(line1: CGLine, line2: CGLine): number;

declare function CGLinesAreParallel(line1: CGLine, line2: CGLine): boolean;

declare function CGLinesIntersectAtPoint(line1: CGLine, line2: CGLine): CGPoint;

declare function CGPointAlongLine(line: CGLine, distance: number): CGPoint;

declare function CGPointDistance(p1: CGPoint, p2: CGPoint): number;

declare function CGPointRotatedAroundPoint(point: CGPoint, pivot: CGPoint, degrees: number): CGPoint;

declare function CGPointWithDelta(point: CGPoint, delta: CGPoint): CGPoint;

declare function CGRectBottomLeftPoint(rect: CGRect): CGPoint;

declare function CGRectBottomRightPoint(rect: CGRect): CGPoint;

declare function CGRectCenterPoint(rect: CGRect): CGPoint;

declare function CGRectClosestTwoCornerPoints(rect: CGRect, point: CGPoint, point1: interop.Pointer | interop.Reference<CGPoint>, point2: interop.Pointer | interop.Reference<CGPoint>): void;

declare function CGRectInsetEdge(rect: CGRect, edge: CGRectEdge, amount: number): CGRect;

declare function CGRectResize(rect: CGRect, newSize: CGSize): CGRect;

declare function CGRectStackedWithinRectFromEdge(rect: CGRect, size: CGSize, count: number, edge: CGRectEdge, reverse: boolean): CGRect;

declare function CGRectTopLeftPoint(rect: CGRect): CGPoint;

declare function CGRectTopRightPoint(rect: CGRect): CGPoint;

declare class PPApp extends NSObject {

	static alloc(): PPApp; // inherited from NSObject

	static instance(): PPApp;

	static new(): PPApp; // inherited from NSObject

	static verifyAndGetDefaultResourcesBundle(): NSBundle;

	language: string;

	resourcesBundle: NSBundle;

	isHelpShown(): boolean;

	popStatusBarHidden(): void;

	popStatusBarStyle(): void;

	pushStatusBarHidden(hidden: boolean): void;

	pushStatusBarStyle(statusBarStyle: UIStatusBarStyle): void;

	setDefaultLanguage(): void;

	setHelpShown(value: boolean): void;

	setLanguage(language: string): void;
}

declare class PPAusIDBackRecognizerResult extends PPMrtdRecognizerResult {

	static alloc(): PPAusIDBackRecognizerResult; // inherited from NSObject

	static new(): PPAusIDBackRecognizerResult; // inherited from NSObject

	readonly dateOfIssue: Date;

	readonly eyeColor: string;

	readonly height: string;

	readonly issuingAuthority: string;

	readonly placeOfBirth: string;

	readonly principalResidence: string;

	readonly rawDateOfIssue: string;
}

declare class PPAusIDBackRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static alloc(): PPAusIDBackRecognizerSettings; // inherited from NSObject

	static new(): PPAusIDBackRecognizerSettings; // inherited from NSObject

	displayFullDocumentImage: boolean;
}

declare class PPAusIDCombinedRecognizerResult extends PPRecognizerResult {

	static alloc(): PPAusIDCombinedRecognizerResult; // inherited from NSObject

	static new(): PPAusIDCombinedRecognizerResult; // inherited from NSObject

	readonly dateOfBirth: Date;

	readonly dateOfIssue: Date;

	readonly documentDateOfExpiry: Date;

	readonly documentNumber: string;

	readonly eyeColor: string;

	readonly faceImage: NSData;

	readonly firstName: string;

	readonly height: string;

	readonly issuingAuthority: string;

	readonly lastName: string;

	readonly matchingData: boolean;

	readonly mrtdVerified: boolean;

	readonly placeOfBirth: string;

	readonly principalResidence: string;

	readonly sex: string;

	readonly signature: NSData;

	readonly signatureVersion: string;
}

declare class PPAusIDCombinedRecognizerSettings extends PPCombinedRecognizerSettings {

	static FULL_DOCUMENT_IMAGE_BACK(): string;

	static FULL_DOCUMENT_IMAGE_FRONT(): string;

	static ID_FACE(): string;

	static ID_SIGNATURE(): string;

	static alloc(): PPAusIDCombinedRecognizerSettings; // inherited from NSObject

	static new(): PPAusIDCombinedRecognizerSettings; // inherited from NSObject

	encodeFacePhoto: boolean;

	encodeFullDocumentPhoto: boolean;

	encodeSignaturePhoto: boolean;

	returnFacePhoto: boolean;

	returnFullDocumentPhoto: boolean;

	returnSignaturePhoto: boolean;
}

declare class PPAusIDFrontRecognizerResult extends PPBlinkOcrRecognizerResult {

	static alloc(): PPAusIDFrontRecognizerResult; // inherited from NSObject

	static new(): PPAusIDFrontRecognizerResult; // inherited from NSObject

	readonly dateOfBirth: Date;

	readonly documentNumber: string;

	readonly firstName: string;

	readonly lastName: string;

	readonly rawDateOfBirth: string;

	readonly sex: string;
}

declare class PPAusIDFrontRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static ID_FACE(): string;

	static ID_SIGNATURE(): string;

	static alloc(): PPAusIDFrontRecognizerSettings; // inherited from NSObject

	static new(): PPAusIDFrontRecognizerSettings; // inherited from NSObject

	displayFacePhoto: boolean;

	displayFullDocumentImage: boolean;

	displaySignaturePhoto: boolean;
}

declare class PPAusPassportRecognizerResult extends PPBlinkOcrRecognizerResult {

	static alloc(): PPAusPassportRecognizerResult; // inherited from NSObject

	static new(): PPAusPassportRecognizerResult; // inherited from NSObject

	readonly authority: string;

	readonly dateOfBirth: Date;

	readonly dateOfExpiry: Date;

	readonly dateOfIssue: Date;

	readonly firstName: string;

	readonly height: string;

	readonly lastName: string;

	readonly nationality: string;

	readonly passportNumber: string;

	readonly placeOfBirth: string;

	readonly rawDateOfBirth: string;

	readonly rawDateOfExpiry: string;

	readonly rawDateOfIssue: string;

	readonly sex: string;
}

declare class PPAusPassportRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static ID_FACE(): string;

	static ID_SIGNATURE(): string;

	static alloc(): PPAusPassportRecognizerSettings; // inherited from NSObject

	static new(): PPAusPassportRecognizerSettings; // inherited from NSObject

	extractAuthority: boolean;

	extractDateOfBirth: boolean;

	extractDateOfExpiry: boolean;

	extractDateOfIssue: boolean;

	extractHeight: boolean;

	extractName: boolean;

	extractNationality: boolean;

	extractPassportNumber: boolean;

	extractPlaceOfBirth: boolean;

	extractSex: boolean;

	extractSurname: boolean;

	returnFacePhoto: boolean;

	returnFullDocumentPhoto: boolean;

	returnSignaturePhoto: boolean;
}

declare class PPAztecRecognizerResult extends PPRecognizerResult {

	static alloc(): PPAztecRecognizerResult; // inherited from NSObject

	static new(): PPAztecRecognizerResult; // inherited from NSObject

	readonly barcodeData: NSData;

	readonly barcodeLocation: PPQuadrangle;

	readonly barcodeStringWithGuessedEncoding: string;

	barcodeStringUsingEncoding(encoding: number): string;
}

declare class PPAztecRecognizerSettings extends PPRecognizerSettings {

	static alloc(): PPAztecRecognizerSettings; // inherited from NSObject

	static new(): PPAztecRecognizerSettings; // inherited from NSObject

	readonly manateeLibKey: string;

	constructor(o: { manateeLibKey: string; });

	initWithManateeLibKey(manateeLibKey: string): this;
}

declare const enum PPBarDecoderBarcodeType {

	Code128 = 0,

	Code39 = 1
}

declare class PPBarDecoderRecognizerResult extends PPRecognizerResult {

	static alloc(): PPBarDecoderRecognizerResult; // inherited from NSObject

	static new(): PPBarDecoderRecognizerResult; // inherited from NSObject

	static toTypeName(type: PPBarDecoderBarcodeType): string;

	barcodeType(): PPBarDecoderBarcodeType;

	data(): NSData;

	extendedData(): NSData;

	extendedRawData(): PPBarcodeDetailedData;

	extendedStringUsingEncoding(encoding: number): string;

	extendedStringUsingGuessedEncoding(): string;

	isUncertain(): boolean;

	rawData(): PPBarcodeDetailedData;

	stringUsingEncoding(encoding: number): string;

	stringUsingGuessedEncoding(): string;
}

declare class PPBarDecoderRecognizerSettings extends PPRecognizerSettings {

	static alloc(): PPBarDecoderRecognizerSettings; // inherited from NSObject

	static new(): PPBarDecoderRecognizerSettings; // inherited from NSObject

	autoDetectScale: boolean;

	scanCode128: boolean;

	scanCode39: boolean;

	scanInverse: boolean;

	tryHarder: boolean;
}

declare class PPBarcodeDetailedData extends NSObject {

	static alloc(): PPBarcodeDetailedData; // inherited from NSObject

	static new(): PPBarcodeDetailedData; // inherited from NSObject

	readonly barcodeElements: NSArray<any>;

	constructor(o: { elements: NSArray<any>; });

	getAllData(): NSData;

	initWithElements(barcodeElements: NSArray<any>): this;
}

declare class PPBarcodeElement extends NSObject {

	static alloc(): PPBarcodeElement; // inherited from NSObject

	static new(): PPBarcodeElement; // inherited from NSObject

	readonly elementBytes: NSData;

	readonly elementType: PPBarcodeElementType;

	constructor(o: { bytes: NSData; type: PPBarcodeElementType; });

	initWithBytesType(bytes: NSData, type: PPBarcodeElementType): this;
}

declare const enum PPBarcodeElementType {

	Text = 0,

	Byte = 1
}

declare class PPBarcodeOverlayViewController extends PPBaseBarcodeOverlayViewController {

	static alloc(): PPBarcodeOverlayViewController; // inherited from NSObject

	static new(): PPBarcodeOverlayViewController; // inherited from NSObject
}

declare class PPBarcodeRecognizerResult extends PPRecognizerResult {

	static alloc(): PPBarcodeRecognizerResult; // inherited from NSObject

	static new(): PPBarcodeRecognizerResult; // inherited from NSObject

	static toTypeName(type: PPBarcodeType): string;

	barcodeType(): PPBarcodeType;

	data(): NSData;

	rawData(): PPBarcodeDetailedData;

	stringUsingEncoding(encoding: number): string;

	stringUsingGuessedEncoding(): string;
}

declare class PPBarcodeRecognizerSettings extends PPRecognizerSettings {

	static alloc(): PPBarcodeRecognizerSettings; // inherited from NSObject

	static new(): PPBarcodeRecognizerSettings; // inherited from NSObject

	manateeKey: string;

	scanAztec: boolean;

	scanCode128: boolean;

	scanCode39: boolean;

	scanDataMatrix: boolean;

	scanEAN13: boolean;

	scanEAN8: boolean;

	scanITF: boolean;

	scanInverse: boolean;

	scanQR: boolean;

	scanUPCA: boolean;

	scanUPCE: boolean;

	useSlowerThoroughScan: boolean;
}

declare const enum PPBarcodeType {

	None = 0,

	TypeQR = 1,

	TypeDataMatrix = 2,

	TypeUPCE = 3,

	TypeUPCA = 4,

	TypeEAN8 = 5,

	TypeEAN13 = 6,

	TypeCode128 = 7,

	TypeCode39 = 8,

	TypeITF = 9,

	TypeAztec = 10
}

declare class PPBaseBarcodeOverlayViewController extends PPBaseOverlayViewController {

	static alloc(): PPBaseBarcodeOverlayViewController; // inherited from NSObject

	static new(): PPBaseBarcodeOverlayViewController; // inherited from NSObject

	buttonsMargin: number;
}

declare class PPBaseOverlayViewController extends PPOverlayViewController {

	static alloc(): PPBaseOverlayViewController; // inherited from NSObject

	static new(): PPBaseOverlayViewController; // inherited from NSObject

	overlaySubviewsDelegate: PPOverlaySubviewDelegate;

	registerOverlaySubview(subview: UIView): void;

	unregisterOverlaySubview(subview: UIView): void;
}

declare class PPBasePhotoPayOverlayViewController extends PPBaseOverlayViewController {

	static alloc(): PPBasePhotoPayOverlayViewController; // inherited from NSObject

	static new(): PPBasePhotoPayOverlayViewController; // inherited from NSObject

	buttonsMargin: number;

	hudMask: UIInterfaceOrientationMask;

	shouldDisplayHelpButton: boolean;
}

declare class PPBlinkOcrRecognizerResult extends PPTemplatingRecognizerResult {

	static alloc(): PPBlinkOcrRecognizerResult; // inherited from NSObject

	static new(): PPBlinkOcrRecognizerResult; // inherited from NSObject
}

declare class PPBlinkOcrRecognizerSettings extends PPTemplatingRecognizerSettings {

	static alloc(): PPBlinkOcrRecognizerSettings; // inherited from NSObject

	static new(): PPBlinkOcrRecognizerSettings; // inherited from NSObject

	allowFlippedRecognition: boolean;

	detectorSettings: PPDetectorSettings;

	documentClassifier: PPDocumentClassifier;
}

declare class PPBlurredFieldOfViewOverlaySubview extends PPOverlaySubview {

	static alloc(): PPBlurredFieldOfViewOverlaySubview; // inherited from NSObject

	static appearance(): PPBlurredFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPBlurredFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPBlurredFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PPBlurredFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPBlurredFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PPBlurredFieldOfViewOverlaySubview; // inherited from UIAppearance

	static new(): PPBlurredFieldOfViewOverlaySubview; // inherited from NSObject

	animationDuration: number;
}

declare const enum PPCameraAutofocusRestriction {

	None = 0,

	Near = 1,

	Far = 2
}

declare class PPCameraCoordinator extends PPCoordinator {

	static alloc(): PPCameraCoordinator; // inherited from NSObject

	static isScanningUnsupportedForCameraTypeError(type: PPCameraType): boolean;

	static new(): PPCameraCoordinator; // inherited from NSObject

	constructor(o: { settings: PPSettings; });

	cameraViewControllerWithDelegate(delegate: PPScanningDelegate): UIViewController;

	cameraViewControllerWithDelegateOverlayViewController(delegate: PPScanningDelegate, overlayViewController: PPOverlayViewController): UIViewController;

	initWithSettings(settings: PPSettings): this;

	isRecognitionPaused(): boolean;

	pauseRecognition(): void;

	resumeRecognition(): void;

	setScanningRegion(scanningRegion: CGRect): void;

	start(): void;

	stop(): void;
}

declare const enum PPCameraPreset {

	Preset480p = 0,

	Preset720p = 1,

	PresetOptimal = 2,

	PresetMax = 3,

	PresetPhoto = 4
}

declare class PPCameraSettings extends NSObject implements NSCopying {

	static alloc(): PPCameraSettings; // inherited from NSObject

	static new(): PPCameraSettings; // inherited from NSObject

	autofocusInterval: number;

	cameraAutofocusRestriction: PPCameraAutofocusRestriction;

	cameraMirroredHorizontally: boolean;

	cameraMirroredVertically: boolean;

	cameraPreset: PPCameraPreset;

	cameraType: PPCameraType;

	focusPoint: CGPoint;

	videoGravity: string;

	calcAutofocusRangeRestriction(): AVCaptureAutoFocusRangeRestriction;

	calcSessionPreset(): string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum PPCameraType {

	Back = 0,

	Front = 1
}

declare class PPCharWithVariants extends NSObject {

	static alloc(): PPCharWithVariants; // inherited from NSObject

	static new(): PPCharWithVariants; // inherited from NSObject

	character: PPOcrChar;

	variants: NSSet<any>;

	constructor(o: { value: PPOcrChar; });

	initWithValue(character: PPOcrChar): this;
}

declare class PPCombinedRecognizerSettings extends PPRecognizerSettings {

	static alloc(): PPCombinedRecognizerSettings; // inherited from NSObject

	static new(): PPCombinedRecognizerSettings; // inherited from NSObject

	shouldSignData: boolean;
}

declare class PPCoordinator extends NSObject {

	static alloc(): PPCoordinator; // inherited from NSObject

	static buildVersionString(): string;

	static new(): PPCoordinator; // inherited from NSObject

	currentSettings: PPSettings;

	delegate: PPCoordinatorDelegate;

	constructor(o: { settings: PPSettings; delegate: PPCoordinatorDelegate; });

	applySettings(): void;

	initWithSettingsDelegate(settings: PPSettings, delegate: PPCoordinatorDelegate): this;

	processImage(image: PPImage): void;

	resetState(): void;
}

interface PPCoordinatorDelegate extends NSObjectProtocol {

	coordinatorAffineTransformToScreen?(coordinator: PPCoordinator): CGAffineTransform;

	coordinatorDidFindError?(coordinator: PPCoordinator, error: NSError): void;

	coordinatorDidFindLivenessActionError?(coordinator: PPCoordinator, error: PPLivenessError): void;

	coordinatorDidFinishDetectionWithResult?(coordinator: PPCoordinator, result: PPDetectorResult): void;

	coordinatorDidFinishRecognition?(coordinator: PPCoordinator): void;

	coordinatorDidFinishRecognitionFirstSide?(coordinator: PPCoordinator, result: PPRecognizerResult): void;

	coordinatorDidObtainOcrResultWithResultName?(coordinator: PPCoordinator, ocrResult: PPOcrLayout, resultName: string): void;

	coordinatorDidOutputMetadata?(coordinator: PPCoordinator, metadata: PPMetadata): void;

	coordinatorDidOutputResults?(coordinator: PPCoordinator, results: NSArray<PPRecognizerResult>): void;

	coordinatorDidPublishProgress?(coordinator: PPCoordinator, progress: number): void;

	coordinatorDidRequestLivenessAction?(coordinator: PPCoordinator, action: PPLivenessAction): void;

	coordinatorDidStartDetection?(coordinator: PPCoordinator): void;

	coordinatorDidStartRecognition?(coordinator: PPCoordinator): void;

	coordinatorInvalidLicenseKeyWithError?(coordinator: PPCoordinator, error: NSError): void;
}
declare var PPCoordinatorDelegate: {

	prototype: PPCoordinatorDelegate;
};

declare class PPCroIDBackRecognizerResult extends PPMrtdRecognizerResult {

	static alloc(): PPCroIDBackRecognizerResult; // inherited from NSObject

	static new(): PPCroIDBackRecognizerResult; // inherited from NSObject

	readonly address: string;

	readonly documentDateOfIssue: Date;

	readonly isDocumentDateOfExpiryPermanent: boolean;

	readonly issuingAuthority: string;

	readonly rawDocumentDateOfIssue: string;
}

declare class PPCroIDBackRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static alloc(): PPCroIDBackRecognizerSettings; // inherited from NSObject

	static new(): PPCroIDBackRecognizerSettings; // inherited from NSObject

	displayFullDocumentImage: boolean;

	extractDateOfIssue: boolean;

	extractIssuingAuthority: boolean;
}

declare class PPCroIDCombinedRecognizerResult extends PPRecognizerResult {

	static alloc(): PPCroIDCombinedRecognizerResult; // inherited from NSObject

	static new(): PPCroIDCombinedRecognizerResult; // inherited from NSObject

	readonly address: string;

	readonly dateOfBirth: Date;

	readonly documentBilingual: boolean;

	readonly documentDateOfExpiry: Date;

	readonly documentDateOfIssue: Date;

	readonly faceImage: NSData;

	readonly firstName: string;

	readonly identityCardNumber: string;

	readonly isDocumentDateOfExpiryPermanent: boolean;

	readonly issuingAuthority: string;

	readonly lastName: string;

	readonly matchingData: boolean;

	readonly mrtdVerified: boolean;

	readonly nationality: string;

	readonly nonResident: boolean;

	readonly oib: string;

	readonly sex: string;

	readonly signature: NSData;

	readonly signatureVersion: string;
}

declare class PPCroIDCombinedRecognizerSettings extends PPCombinedRecognizerSettings {

	static FULL_DOCUMENT_IMAGE_BACK(): string;

	static FULL_DOCUMENT_IMAGE_FRONT(): string;

	static ID_FACE(): string;

	static ID_SIGNATURE(): string;

	static alloc(): PPCroIDCombinedRecognizerSettings; // inherited from NSObject

	static new(): PPCroIDCombinedRecognizerSettings; // inherited from NSObject

	encodeFacePhoto: boolean;

	encodeFullDocumentPhoto: boolean;

	encodeSignaturePhoto: boolean;

	returnFacePhoto: boolean;

	returnFullDocumentPhoto: boolean;

	returnSignaturePhoto: boolean;
}

declare class PPCroIDFrontRecognizerResult extends PPBlinkOcrRecognizerResult {

	static alloc(): PPCroIDFrontRecognizerResult; // inherited from NSObject

	static new(): PPCroIDFrontRecognizerResult; // inherited from NSObject

	readonly dateOfBirth: Date;

	readonly documentDateOfExpiry: Date;

	readonly firstName: string;

	readonly identityCardNumber: string;

	readonly isDocumentDateOfExpiryPermanent: boolean;

	readonly lastName: string;

	readonly nationality: string;

	readonly rawDateOfBirth: string;

	readonly rawDocumentDateOfExpiry: string;

	readonly sex: string;
}

declare class PPCroIDFrontRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static ID_FACE(): string;

	static ID_SIGNATURE(): string;

	static alloc(): PPCroIDFrontRecognizerSettings; // inherited from NSObject

	static new(): PPCroIDFrontRecognizerSettings; // inherited from NSObject

	displayFaceImage: boolean;

	displayFullDocumentImage: boolean;

	displaySignatureImage: boolean;

	extractCitizenship: boolean;

	extractDateOfBirth: boolean;

	extractDateOfExpiry: boolean;

	extractSex: boolean;
}

declare class PPCzIDBackRecognizerResult extends PPMrtdRecognizerResult {

	static alloc(): PPCzIDBackRecognizerResult; // inherited from NSObject

	static new(): PPCzIDBackRecognizerResult; // inherited from NSObject

	readonly address: string;

	readonly authority: string;

	readonly personalNumber: string;
}

declare class PPCzIDBackRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static alloc(): PPCzIDBackRecognizerSettings; // inherited from NSObject

	static new(): PPCzIDBackRecognizerSettings; // inherited from NSObject

	displayFullDocumentImage: boolean;
}

declare class PPCzIDCombinedRecognizerResult extends PPRecognizerResult {

	static alloc(): PPCzIDCombinedRecognizerResult; // inherited from NSObject

	static new(): PPCzIDCombinedRecognizerResult; // inherited from NSObject

	readonly address: string;

	readonly dateOfBirth: Date;

	readonly dateOfIssue: Date;

	readonly documentDateOfExpiry: Date;

	readonly faceImage: NSData;

	readonly firstName: string;

	readonly identityCardNumber: string;

	readonly issuingAuthority: string;

	readonly lastName: string;

	readonly matchingData: boolean;

	readonly mrtdVerified: boolean;

	readonly nationality: string;

	readonly personalIdentificationNumber: string;

	readonly placeOfBirth: string;

	readonly sex: string;

	readonly signature: NSData;

	readonly signatureVersion: string;
}

declare class PPCzIDCombinedRecognizerSettings extends PPCombinedRecognizerSettings {

	static FULL_DOCUMENT_IMAGE_BACK(): string;

	static FULL_DOCUMENT_IMAGE_FRONT(): string;

	static ID_FACE(): string;

	static ID_SIGNATURE(): string;

	static alloc(): PPCzIDCombinedRecognizerSettings; // inherited from NSObject

	static new(): PPCzIDCombinedRecognizerSettings; // inherited from NSObject

	encodeFacePhoto: boolean;

	encodeFullDocumentPhoto: boolean;

	encodeSignaturePhoto: boolean;

	returnFacePhoto: boolean;

	returnFullDocumentPhoto: boolean;

	returnSignaturePhoto: boolean;
}

declare class PPCzIDFrontRecognizerResult extends PPBlinkOcrRecognizerResult {

	static alloc(): PPCzIDFrontRecognizerResult; // inherited from NSObject

	static new(): PPCzIDFrontRecognizerResult; // inherited from NSObject

	readonly dateOfBirth: Date;

	readonly dateOfExpiry: Date;

	readonly dateOfIssue: Date;

	readonly firstName: string;

	readonly identityCardNumber: string;

	readonly lastName: string;

	readonly placeOfBirth: string;

	readonly rawDateOfBirth: string;

	readonly rawDateOfExpiry: string;

	readonly rawDateOfIssue: string;

	readonly sex: string;
}

declare class PPCzIDFrontRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static ID_FACE(): string;

	static ID_SIGNATURE(): string;

	static alloc(): PPCzIDFrontRecognizerSettings; // inherited from NSObject

	static new(): PPCzIDFrontRecognizerSettings; // inherited from NSObject

	displayFacePhoto: boolean;

	displayFullDocumentImage: boolean;

	displaySignaturePhoto: boolean;
}

declare class PPDateOcrParserFactory extends PPOcrParserFactory {

	static alloc(): PPDateOcrParserFactory; // inherited from NSObject

	static new(): PPDateOcrParserFactory; // inherited from NSObject
}

declare class PPDateResult extends NSObject implements PPNativeResult {

	static alloc(): PPDateResult; // inherited from NSObject

	static dateResultWithDayMonthYearOriginalDateString(day: number, month: number, year: number, originalDateString: string): PPDateResult;

	static new(): PPDateResult; // inherited from NSObject

	readonly date: Date;

	readonly originalDateString: string;

	constructor(o: { day: number; month: number; year: number; originalDateString: string; });

	initWithDayMonthYearOriginalDateString(day: number, month: number, year: number, originalDateString: string): this;

	nativeResult(): NSObject;

	stringResult(): string;
}

declare class PPDebugMetadata extends NSObject implements NSCopying {

	static alloc(): PPDebugMetadata; // inherited from NSObject

	static new(): PPDebugMetadata; // inherited from NSObject

	debugDetectionFrame: boolean;

	debugDewarpedElements: boolean;

	debugOcrInputFrame: boolean;

	deviceData: boolean;

	ocrData: boolean;

	recognitionData: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class PPDecodingInfo extends NSObject {

	static alloc(): PPDecodingInfo; // inherited from NSObject

	static new(): PPDecodingInfo; // inherited from NSObject

	dewarpedHeight: number;

	location: CGRect;

	uniqueId: string;

	constructor(o: { location: CGRect; dewarpedHeight: number; uniqueId: string; });

	initWithLocationDewarpedHeightUniqueId(location: CGRect, dewarpedHeight: number, uniqueId: string): this;
}

declare const enum PPDetectionCode {

	Fail = 0,

	Fallback = 1,

	Success = 2
}

declare const enum PPDetectionStatus {

	Success = 1,

	Fail = 2,

	CameraTooHigh = 4,

	CameraAtAngle = 8,

	CameraRotated = 16,

	QRSuccess = 64,

	Pdf417Success = 128,

	FallbackSuccess = 256,

	PartialForm = 512,

	CameraTooNear = 1024
}

declare class PPDetectorRecognizerResult extends PPRecognizerResult {

	static alloc(): PPDetectorRecognizerResult; // inherited from NSObject

	static new(): PPDetectorRecognizerResult; // inherited from NSObject

	readonly detectorResult: PPDetectorResult;
}

declare class PPDetectorRecognizerSettings extends PPRecognizerSettings {

	static alloc(): PPDetectorRecognizerSettings; // inherited from NSObject

	static new(): PPDetectorRecognizerSettings; // inherited from NSObject

	constructor(o: { detectorSettings: PPDetectorSettings; });

	initWithDetectorSettings(detectorSettings: PPDetectorSettings): this;
}

declare class PPDetectorResult extends NSObject {

	static alloc(): PPDetectorResult; // inherited from NSObject

	static new(): PPDetectorResult; // inherited from NSObject

	readonly code: PPDetectionCode;

	readonly status: PPDetectionStatus;

	transform: CGAffineTransform;

	constructor(o: { code: PPDetectionCode; status: PPDetectionStatus; });

	initWithCodeStatus(code: PPDetectionCode, status: PPDetectionStatus): this;
}

declare class PPDetectorSettings extends NSObject implements NSCopying {

	static alloc(): PPDetectorSettings; // inherited from NSObject

	static new(): PPDetectorSettings; // inherited from NSObject

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

interface PPDocumentClassifier extends NSObjectProtocol {

	classifyDocumentFromResult(result: PPTemplatingRecognizerResult): string;
}
declare var PPDocumentClassifier: {

	prototype: PPDocumentClassifier;
};

declare class PPDocumentDetectorResult extends PPQuadDetectorResult {

	static alloc(): PPDocumentDetectorResult; // inherited from NSObject

	static new(): PPDocumentDetectorResult; // inherited from NSObject

	aspectRatio: number;

	screenOrientation: UIInterfaceOrientation;
}

declare class PPDocumentDetectorSettings extends PPDetectorSettings {

	static alloc(): PPDocumentDetectorSettings; // inherited from NSObject

	static new(): PPDocumentDetectorSettings; // inherited from NSObject

	numStableDetectionsThreshold: number;

	constructor(o: { numStableDetectionsThreshold: number; });

	initWithNumStableDetectionsThreshold(threshold: number): this;

	setDocumentSpecifications(documentSpecifications: NSArray<PPDocumentSpecification>): void;
}

declare const enum PPDocumentFaceDetectorType {

	TD1 = 0,

	TD2 = 1,

	PassportsAndVisas = 2
}

declare class PPDocumentFaceRecognizerResult extends PPRecognizerResult {

	static alloc(): PPDocumentFaceRecognizerResult; // inherited from NSObject

	static new(): PPDocumentFaceRecognizerResult; // inherited from NSObject
}

declare class PPDocumentFaceRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static ID_FACE(): string;

	static alloc(): PPDocumentFaceRecognizerSettings; // inherited from NSObject

	static new(): PPDocumentFaceRecognizerSettings; // inherited from NSObject

	documentType: PPDocumentFaceDetectorType;

	encodeFaceImage: boolean;

	encodeFullDocument: boolean;

	returnFaceImage: boolean;

	returnFullDocument: boolean;
}

declare const enum PPDocumentPreset {

	Id1Card = 0,

	Id2Card = 1,

	Cheque = 2,

	A4Portrait = 3,

	A4Landscape = 4
}

declare class PPDocumentSpecification extends NSObject implements NSCopying {

	static alloc(): PPDocumentSpecification; // inherited from NSObject

	static new(): PPDocumentSpecification; // inherited from NSObject

	static newFromPreset(preset: PPDocumentPreset): PPDocumentSpecification;

	landscapeScale: PPScale;

	maxAngle: number;

	portraitScale: PPScale;

	scanningMode: PPScanningMode;

	xRange: PPRange;

	yRange: PPRange;

	constructor(o: { aspectRatio: number; decodingInfo: NSArray<PPDecodingInfo>; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithAspectRatioDecodingInfo(aspectRatio: number, decodingInfoArray: NSArray<PPDecodingInfo>): this;

	setDecodingInfo(decodingInfoArray: NSArray<PPDecodingInfo>): void;

	setPortraitAndLandscapeScale(scale: PPScale): void;
}

declare const enum PPDocumentType {

	BlinkOCRDocumentType = 0,

	MicrDocumentType = 1,

	ArabicDocumentType = 2,

	HandwrittenDocumentType = 3
}

declare class PPDotsOverlaySubview extends PPOverlaySubview {

	static alloc(): PPDotsOverlaySubview; // inherited from NSObject

	static appearance(): PPDotsOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPDotsOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPDotsOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PPDotsOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPDotsOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PPDotsOverlaySubview; // inherited from UIAppearance

	static new(): PPDotsOverlaySubview; // inherited from NSObject

	animationDuration: number;

	dotsColor: UIColor;

	dotsLayer: CAShapeLayer;

	dotsRadius: number;

	dotsStrokeWidth: number;
}

declare const enum PPElementType {

	Null = 0,

	Boolean = 1,

	Int = 2,

	String = 3,

	BarcodeData = 4,

	Quadrangle = 5,

	DetectorResult = 6,

	Ocr = 7,

	DateTime = 8,

	ByteArray = 9
}

declare class PPEmailOcrParserFactory extends PPOcrParserFactory {

	static alloc(): PPEmailOcrParserFactory; // inherited from NSObject

	static new(): PPEmailOcrParserFactory; // inherited from NSObject
}

declare const enum PPEudlCountry {

	UnitedKingdom = 0,

	Germany = 1,

	Austria = 2,

	Any = 3
}

declare class PPEudlRecognizerResult extends PPRecognizerResult {

	static alloc(): PPEudlRecognizerResult; // inherited from NSObject

	static new(): PPEudlRecognizerResult; // inherited from NSObject

	readonly country: PPEudlCountry;

	readonly documentExpiryDate: string;

	readonly documentIssueDate: string;

	readonly documentIssuingAuthority: string;

	readonly driverNumber: string;

	readonly ownerAddress: string;

	readonly ownerBirthData: string;

	readonly ownerFirstName: string;

	readonly ownerLastName: string;

	readonly personalNumber: string;
}

declare class PPEudlRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static alloc(): PPEudlRecognizerSettings; // inherited from NSObject

	static new(): PPEudlRecognizerSettings; // inherited from NSObject

	country: PPEudlCountry;

	extractAddress: boolean;

	extractExpiryDate: boolean;

	extractIssueDate: boolean;

	showFullDocument: boolean;

	constructor(o: { eudlCountry: PPEudlCountry; });

	initWithEudlCountry(country: PPEudlCountry): this;
}

declare class PPFaceDetectorResult extends PPDetectorResult {

	static alloc(): PPFaceDetectorResult; // inherited from NSObject

	static new(): PPFaceDetectorResult; // inherited from NSObject

	faceLocations: NSArray<PPQuadrangle>;
}

declare class PPFaceDetectorSettings extends PPDetectorSettings {

	static alloc(): PPFaceDetectorSettings; // inherited from NSObject

	static new(): PPFaceDetectorSettings; // inherited from NSObject

	decodingInfo: PPDecodingInfo;

	constructor(o: { decodingInfo: PPDecodingInfo; });

	initWithDecodingInfo(decodingInfo: PPDecodingInfo): this;
}

declare class PPFieldOfViewOverlaySubview extends PPOverlaySubview {

	static alloc(): PPFieldOfViewOverlaySubview; // inherited from NSObject

	static appearance(): PPFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PPFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PPFieldOfViewOverlaySubview; // inherited from UIAppearance

	static new(): PPFieldOfViewOverlaySubview; // inherited from NSObject

	animationDuration: number;

	aspectRatio: number;

	centerHeight: number;

	cornerCoordinates: NSArray<any>;

	height: number;

	maxHeight: number;

	minHeight: number;

	width: number;
}

declare class PPFieldOfViewOverlayViewController extends PPModernBaseOverlayViewController {

	static alloc(): PPFieldOfViewOverlayViewController; // inherited from NSObject

	static new(): PPFieldOfViewOverlayViewController; // inherited from NSObject
}

declare const enum PPFrameQualityEstimationMode {

	Default = 0,

	On = 1,

	Off = 2
}

declare class PPGermanIDBackRecognizerResult extends PPMrtdRecognizerResult {

	static alloc(): PPGermanIDBackRecognizerResult; // inherited from NSObject

	static new(): PPGermanIDBackRecognizerResult; // inherited from NSObject

	readonly ZIPCode: string;

	readonly authority: string;

	readonly city: string;

	readonly dateOfIssue: Date;

	readonly eyeColor: string;

	readonly fullAddress: string;

	readonly height: string;

	readonly houseNumber: string;

	readonly rawDateOfIssue: string;

	readonly street: string;
}

declare class PPGermanIDBackRecognizerSettings extends PPRecognizerSettings {

	static ID_FULL_DOCUMENT(): string;

	static alloc(): PPGermanIDBackRecognizerSettings; // inherited from NSObject

	static new(): PPGermanIDBackRecognizerSettings; // inherited from NSObject

	extractAuthority: boolean;

	extractDateOfIssue: boolean;

	extractEyeColour: boolean;

	extractHeight: boolean;

	returnFullDocumentPhoto: boolean;
}

declare class PPGermanIDCombinedRecognizerResult extends PPRecognizerResult {

	static alloc(): PPGermanIDCombinedRecognizerResult; // inherited from NSObject

	static new(): PPGermanIDCombinedRecognizerResult; // inherited from NSObject

	readonly address: string;

	readonly dateOfBirth: Date;

	readonly documentDateOfExpiry: Date;

	readonly documentDateOfIssue: Date;

	readonly eyeColor: string;

	readonly faceImage: NSData;

	readonly firstName: string;

	readonly height: string;

	readonly identityCardNumber: string;

	readonly issuingAuthority: string;

	readonly lastName: string;

	readonly matchingData: boolean;

	readonly mrtdVerified: boolean;

	readonly nationality: string;

	readonly placeOfBirth: string;

	readonly sex: string;

	readonly signature: NSData;

	readonly signatureVersion: string;
}

declare class PPGermanIDCombinedRecognizerSettings extends PPCombinedRecognizerSettings {

	static FULL_DOCUMENT_IMAGE_BACK(): string;

	static FULL_DOCUMENT_IMAGE_FRONT(): string;

	static ID_FACE(): string;

	static ID_SIGNATURE(): string;

	static alloc(): PPGermanIDCombinedRecognizerSettings; // inherited from NSObject

	static new(): PPGermanIDCombinedRecognizerSettings; // inherited from NSObject

	encodeFacePhoto: boolean;

	encodeFullDocumentPhoto: boolean;

	encodeSignaturePhoto: boolean;

	returnFacePhoto: boolean;

	returnFullDocumentPhoto: boolean;

	returnSignaturePhoto: boolean;
}

declare class PPGermanIDFrontRecognizerResult extends PPBlinkOcrRecognizerResult {

	static alloc(): PPGermanIDFrontRecognizerResult; // inherited from NSObject

	static new(): PPGermanIDFrontRecognizerResult; // inherited from NSObject

	readonly dateOfBirth: Date;

	readonly dateOfExpiry: Date;

	readonly documentNumber: string;

	readonly firstName: string;

	readonly lastName: string;

	readonly nationality: string;

	readonly placeOfBirth: string;

	readonly rawDateOfBirth: string;

	readonly rawDateOfExpiry: string;
}

declare class PPGermanIDFrontRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static ID_FACE(): string;

	static ID_SIGNATURE(): string;

	static alloc(): PPGermanIDFrontRecognizerSettings; // inherited from NSObject

	static new(): PPGermanIDFrontRecognizerSettings; // inherited from NSObject

	displayFaceImage: boolean;

	displayFullDocumentImage: boolean;

	displaySignatureImage: boolean;

	extractDateOfExpiry: boolean;

	extractFirstName: boolean;

	extractLastName: boolean;

	extractNationality: boolean;

	extractPlaceOfBirth: boolean;
}

declare class PPGermanOldIDRecognizerResult extends PPMrtdRecognizerResult {

	static alloc(): PPGermanOldIDRecognizerResult; // inherited from NSObject

	static new(): PPGermanOldIDRecognizerResult; // inherited from NSObject

	readonly placeOfBirth: string;
}

declare class PPGermanOldIDRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static ID_FACE(): string;

	static ID_SIGNATURE(): string;

	static alloc(): PPGermanOldIDRecognizerSettings; // inherited from NSObject

	static new(): PPGermanOldIDRecognizerSettings; // inherited from NSObject

	extractFacePhoto: boolean;

	extractSignature: boolean;

	returnFullDocumentPhoto: boolean;
}

declare class PPGermanPassportRecognizerResult extends PPBlinkOcrRecognizerResult {

	static alloc(): PPGermanPassportRecognizerResult; // inherited from NSObject

	static new(): PPGermanPassportRecognizerResult; // inherited from NSObject

	readonly authority: string;

	readonly dateOfIssue: Date;

	readonly name: string;

	readonly nationality: string;

	readonly placeOfBirth: string;

	readonly rawDateOfIssue: string;

	readonly surname: string;
}

declare class PPGermanPassportRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static ID_FACE(): string;

	static ID_SIGNATURE(): string;

	static alloc(): PPGermanPassportRecognizerSettings; // inherited from NSObject

	static new(): PPGermanPassportRecognizerSettings; // inherited from NSObject

	extractAuthority: boolean;

	extractDateOfIssue: boolean;

	extractName: boolean;

	extractNationality: boolean;

	extractPlaceOfBirth: boolean;

	extractSurname: boolean;

	returnFacePhoto: boolean;

	returnFullDocumentPhoto: boolean;

	returnSignaturePhoto: boolean;
}

declare const enum PPHelpDisplayMode {

	Never = 0,

	FirstRun = 1,

	Always = 2
}

declare class PPIDCardOverlayViewController extends PPModernBaseOverlayViewController {

	static alloc(): PPIDCardOverlayViewController; // inherited from NSObject

	static new(): PPIDCardOverlayViewController; // inherited from NSObject

	idCardSubview: PPIdCardOverlaySubview;
}

declare class PPIbanOcrParserFactory extends PPOcrParserFactory {

	static alloc(): PPIbanOcrParserFactory; // inherited from NSObject

	static new(): PPIbanOcrParserFactory; // inherited from NSObject

	alwaysReturnWithPrefix: boolean;

	constructor(o: { countryCodeWhitelist: NSArray<string>; });

	initWithCountryCodeWhitelist(countryCodeWhitelist: NSArray<string>): this;
}

declare class PPIdCardOverlaySubview extends PPOverlaySubview {

	static alloc(): PPIdCardOverlaySubview; // inherited from NSObject

	static appearance(): PPIdCardOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPIdCardOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPIdCardOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PPIdCardOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPIdCardOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PPIdCardOverlaySubview; // inherited from UIAppearance

	static new(): PPIdCardOverlaySubview; // inherited from NSObject

	tooltipLabel: UILabel;

	viewfinderView: UIView;

	viewfinderWidthToHeightRatio: number;
}

declare class PPImage extends NSObject {

	static alloc(): PPImage; // inherited from NSObject

	static imageWithCmSampleBuffer(buffer: any): PPImage;

	static imageWithUIImage(image: UIImage): PPImage;

	static new(): PPImage; // inherited from NSObject

	cameraFrame: boolean;

	estimateFrameQuality: boolean;

	readonly image: UIImage;

	mirroredHorizontally: boolean;

	mirroredVertically: boolean;

	orientation: PPProcessingOrientation;

	roi: CGRect;
}

declare class PPImageMetadata extends PPMetadata {

	static alloc(): PPImageMetadata; // inherited from NSObject

	static new(): PPImageMetadata; // inherited from NSObject

	readonly imageType: PPImageMetadataType;

	readonly orientation: UIImageOrientation;

	constructor(o: { name: string; orientation: UIImageOrientation; imageType: PPImageMetadataType; });

	frameQuality(): number;

	image(): UIImage;

	initWithNameOrientationImageType(name: string, orientation: UIImageOrientation, imageType: PPImageMetadataType): this;
}

declare const enum PPImageMetadataType {

	SuccessfulFrame = 0,

	DewarpedImage = 1,

	CurrentFrame = 2,

	DebugOcrInputFrame = 3,

	DebugDetectionFrame = 4,

	DebugDewrapedElements = 5
}

declare class PPLicensePlatesParserFactory extends PPOcrParserFactory {

	static alloc(): PPLicensePlatesParserFactory; // inherited from NSObject

	static new(): PPLicensePlatesParserFactory; // inherited from NSObject
}

declare class PPLicenseSettings extends NSObject implements NSCopying {

	static alloc(): PPLicenseSettings; // inherited from NSObject

	static new(): PPLicenseSettings; // inherited from NSObject

	licenseKey: string;

	licensee: string;

	constructor(o: { licenseKey: string; });

	constructor(o: { licenseKey: string; licensee: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithLicenseKey(licenseKey: string): this;

	initWithLicenseKeyLicensee(licenseKey: string, licensee: string): this;
}

declare const enum PPLivenessAction {

	Blink = 0,

	Smile = 1
}

declare const enum PPLivenessError {

	FaceNotInRoi = 0,

	FaceAngleYawLarge = 1,

	FaceAngleYawSmall = 2,

	FaceAnglePitchLarge = 3,

	FaceAnglePitchSmall = 4,

	FaceAngleRollLarge = 5,

	FaceAngleRollSmall = 6,

	FaceTooClose = 7,

	FaceTooFar = 8,

	NoFace = 9,

	Success = 10
}

declare class PPMetadata extends NSObject {

	static alloc(): PPMetadata; // inherited from NSObject

	static new(): PPMetadata; // inherited from NSObject

	readonly name: string;

	constructor(o: { name: string; });

	initWithName(name: string): this;
}

declare class PPMetadataSettings extends NSObject implements NSCopying {

	static alloc(): PPMetadataSettings; // inherited from NSObject

	static new(): PPMetadataSettings; // inherited from NSObject

	currentFrame: boolean;

	debugMetadata: PPDebugMetadata;

	dewarpedImage: boolean;

	successfulFrame: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class PPModernBaseOverlayViewController extends PPBaseOverlayViewController {

	static alloc(): PPModernBaseOverlayViewController; // inherited from NSObject

	static new(): PPModernBaseOverlayViewController; // inherited from NSObject

	cancelButton: UIButton;

	torchButton: UIButton;
}

declare class PPModernOcrResultOverlaySubview extends PPOverlaySubview {

	static alloc(): PPModernOcrResultOverlaySubview; // inherited from NSObject

	static appearance(): PPModernOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPModernOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPModernOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PPModernOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPModernOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PPModernOcrResultOverlaySubview; // inherited from UIAppearance

	static new(): PPModernOcrResultOverlaySubview; // inherited from NSObject

	charFadeInDuration: number;

	foregroundColor: UIColor;

	shouldIgnoreFastResults: boolean;
}

declare class PPModernOverlayViewController extends PPModernBaseOverlayViewController {

	static alloc(): PPModernOverlayViewController; // inherited from NSObject

	static new(): PPModernOverlayViewController; // inherited from NSObject

	hudMask: UIInterfaceOrientationMask;
}

declare class PPModernToastOverlaySubview extends PPOverlaySubview {

	static alloc(): PPModernToastOverlaySubview; // inherited from NSObject

	static appearance(): PPModernToastOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPModernToastOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPModernToastOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PPModernToastOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPModernToastOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PPModernToastOverlaySubview; // inherited from UIAppearance

	static new(): PPModernToastOverlaySubview; // inherited from NSObject
}

declare class PPModernViewfinderOverlaySubview extends PPOverlaySubview {

	static alloc(): PPModernViewfinderOverlaySubview; // inherited from NSObject

	static appearance(): PPModernViewfinderOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPModernViewfinderOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPModernViewfinderOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PPModernViewfinderOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPModernViewfinderOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PPModernViewfinderOverlaySubview; // inherited from UIAppearance

	static new(): PPModernViewfinderOverlaySubview; // inherited from NSObject

	landscapeMargins: UIEdgeInsets;

	moveable: boolean;

	portraitMargins: UIEdgeInsets;
}

declare class PPMrtdCombinedRecognizerResult extends PPRecognizerResult {

	static alloc(): PPMrtdCombinedRecognizerResult; // inherited from NSObject

	static new(): PPMrtdCombinedRecognizerResult; // inherited from NSObject

	readonly alienNumber: string;

	readonly applicationReceiptNumber: string;

	readonly dateOfBirth: Date;

	readonly dateOfExpiry: Date;

	readonly documentCode: string;

	readonly documentNumber: string;

	readonly documentType: PPMrtdDocumentType;

	readonly faceImage: NSData;

	readonly immigrantCaseNumber: string;

	readonly isParsed: boolean;

	readonly issuer: string;

	readonly matchingData: boolean;

	readonly mrtdVerified: boolean;

	readonly mrzText: string;

	readonly nationality: string;

	readonly opt1: string;

	readonly opt2: string;

	readonly primaryId: string;

	readonly rawDateOfBirth: string;

	readonly rawDateOfExpiry: string;

	readonly secondaryId: string;

	readonly sex: string;

	readonly signature: NSData;

	readonly signatureVersion: string;
}

declare class PPMrtdCombinedRecognizerSettings extends PPCombinedRecognizerSettings {

	static FULL_DOCUMENT_IMAGE_BACK(): string;

	static FULL_DOCUMENT_IMAGE_FRONT(): string;

	static ID_FACE(): string;

	static MRZ_IMAGE(): string;

	static alloc(): PPMrtdCombinedRecognizerSettings; // inherited from NSObject

	static new(): PPMrtdCombinedRecognizerSettings; // inherited from NSObject

	encodeFacePhoto: boolean;

	encodeFullDocumentPhoto: boolean;

	encodeMRZPhoto: boolean;

	returnFacePhoto: boolean;

	returnFullDocumentPhoto: boolean;

	returnMRZPhoto: boolean;
}

declare const enum PPMrtdDetectionCode {

	Fail = 0,

	MRZTD1 = 1,

	MRZTD2 = 2,

	MRZTD3 = 3,

	MRTDTD1 = 4,

	MRTDTD2 = 5,

	MRTDTD3 = 6
}

declare class PPMrtdDetectorResult extends PPQuadDetectorResult {

	static alloc(): PPMrtdDetectorResult; // inherited from NSObject

	static new(): PPMrtdDetectorResult; // inherited from NSObject

	confidence: number;

	elementsCountPerLine: NSArray<number>;

	mrtdDetectionCode: PPMrtdDetectionCode;
}

declare class PPMrtdDetectorSettings extends PPQuadDetectorSettings {

	static alloc(): PPMrtdDetectorSettings; // inherited from NSObject

	static new(): PPMrtdDetectorSettings; // inherited from NSObject

	detectFullDocument: boolean;

	constructor(o: { decodingInfoArray: NSArray<PPDecodingInfo>; });

	initWithDecodingInfoArray(decodingInfoArray: NSArray<PPDecodingInfo>): this;
}

declare const enum PPMrtdDocumentType {

	TypeUnknown = 0,

	TypeIdentityCard = 1,

	TypePassport = 2,

	TypeVisa = 3,

	TypeGreenCard = 4
}

declare class PPMrtdRecognizerResult extends PPTemplatingRecognizerResult {

	static alloc(): PPMrtdRecognizerResult; // inherited from NSObject

	static new(): PPMrtdRecognizerResult; // inherited from NSObject

	readonly alienNumber: string;

	readonly applicationReceiptNumber: string;

	readonly dateOfBirth: Date;

	readonly dateOfExpiry: Date;

	readonly documentCode: string;

	readonly documentNumber: string;

	readonly documentType: PPMrtdDocumentType;

	readonly immigrantCaseNumber: string;

	readonly isParsed: boolean;

	readonly issuer: string;

	readonly mrzText: string;

	readonly nationality: string;

	readonly opt1: string;

	readonly opt2: string;

	readonly primaryId: string;

	readonly rawDateOfBirth: string;

	readonly rawDateOfExpiry: string;

	readonly rawOcrLayout: PPOcrLayout;

	readonly secondaryId: string;

	readonly sex: string;
}

declare class PPMrtdRecognizerSettings extends PPTemplatingRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static MRZ_IMAGE(): string;

	static alloc(): PPMrtdRecognizerSettings; // inherited from NSObject

	static new(): PPMrtdRecognizerSettings; // inherited from NSObject

	allowUnverifiedResults: boolean;

	dewarpFullDocument: boolean;
}

declare class PPMultiDetectorResult extends PPDetectorResult {

	static alloc(): PPMultiDetectorResult; // inherited from NSObject

	static new(): PPMultiDetectorResult; // inherited from NSObject

	detectorResults: NSArray<PPDetectorResult>;

	count(): number;

	resultAtIndex(index: number): PPDetectorResult;
}

declare class PPMultiDetectorSettings extends PPDetectorSettings {

	static alloc(): PPMultiDetectorSettings; // inherited from NSObject

	static new(): PPMultiDetectorSettings; // inherited from NSObject

	allowMultipleResults: boolean;

	readonly settingsArray: NSArray<PPDetectorSettings>;

	constructor(o: { settingsArray: NSArray<PPDetectorSettings>; });

	initWithSettingsArray(settingsArray: NSArray<PPDetectorSettings>): this;
}

declare class PPMyKadRecognizerResult extends PPRecognizerResult {

	static alloc(): PPMyKadRecognizerResult; // inherited from NSObject

	static new(): PPMyKadRecognizerResult; // inherited from NSObject

	readonly nricNumber: string;

	readonly ownerAddress: string;

	readonly ownerAddressCity: string;

	readonly ownerAddressState: string;

	readonly ownerAddressStreet: string;

	readonly ownerAddressZipCode: string;

	readonly ownerBirthDate: Date;

	readonly ownerFullName: string;

	readonly ownerReligion: string;

	readonly ownerSex: string;

	readonly rawOwnerBirthDate: string;
}

declare class PPMyKadRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static ID_FACE(): string;

	static alloc(): PPMyKadRecognizerSettings; // inherited from NSObject

	static new(): PPMyKadRecognizerSettings; // inherited from NSObject

	showFaceImage: boolean;

	showFullDocument: boolean;
}

interface PPNativeResult {

	nativeResult(): NSObject;

	stringResult(): string;
}
declare var PPNativeResult: {

	prototype: PPNativeResult;
};

declare class PPOcrBlock extends NSObject {

	static alloc(): PPOcrBlock; // inherited from NSObject

	static new(): PPOcrBlock; // inherited from NSObject

	lines: NSArray<PPOcrLine>;

	position: PPPosition;

	constructor(o: { ocrLines: NSArray<PPOcrLine>; position: PPPosition; });

	initWithOcrLinesPosition(ocrLines: NSArray<PPOcrLine>, position: PPPosition): this;

	string(): string;
}

declare class PPOcrChar extends NSObject {

	static alloc(): PPOcrChar; // inherited from NSObject

	static new(): PPOcrChar; // inherited from NSObject

	font: PPOcrFont;

	height: number;

	position: PPPosition;

	quality: number;

	uncertain: boolean;

	value: string;

	constructor(o: { value: string; position: PPPosition; height: number; });

	initWithValuePositionHeight(value: string, position: PPPosition, height: number): this;
}

declare class PPOcrCharKey extends NSObject {

	static alloc(): PPOcrCharKey; // inherited from NSObject

	static keyWithCodeFont(code: number, font: PPOcrFont): PPOcrCharKey;

	static new(): PPOcrCharKey; // inherited from NSObject

	code: number;

	font: PPOcrFont;

	constructor(o: { code: number; font: PPOcrFont; });

	initWithCodeFont(code: number, font: PPOcrFont): this;
}

declare class PPOcrEngineOptions extends NSObject implements NSCopying {

	static alloc(): PPOcrEngineOptions; // inherited from NSObject

	static new(): PPOcrEngineOptions; // inherited from NSObject

	charWhitelist: NSSet<PPOcrCharKey>;

	colorDropoutEnabled: boolean;

	documentType: PPDocumentType;

	imageProcessingEnabled: boolean;

	maxCharsExpected: number;

	maximalLineHeight: number;

	minimalLineHeight: number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum PPOcrFont {

	P_OCR_FONT_AKZIDENZ_GROTESK = 0,

	P_OCR_FONT_ARIAL = 1,

	P_OCR_FONT_ARIAL_BLACK = 2,

	P_OCR_FONT_ARNHEM = 3,

	P_OCR_FONT_AVANT_GARDE = 4,

	P_OCR_FONT_BEMBO = 5,

	P_OCR_FONT_BODONI = 6,

	P_OCR_FONT_CALIBRI = 7,

	P_OCR_FONT_CALIBRI_BOLD = 8,

	P_OCR_FONT_CHAINPRINTER = 9,

	P_OCR_FONT_COMIC_SANS = 10,

	P_OCR_FONT_CONCERTO_ROUNDED_SG = 11,

	P_OCR_FONT_COURIER = 12,

	P_OCR_FONT_COURIER_BOLD = 13,

	P_OCR_FONT_COURIER_MEDIUM_BOLD = 14,

	P_OCR_FONT_COURIER_NEW_BOLD = 15,

	P_OCR_FONT_COURIER_NEW_CE = 16,

	P_OCR_FONT_COURIER_CONDENSED = 17,

	P_OCR_FONT_DEJAVU_SANS_MONO = 18,

	P_OCR_FONT_DIN = 19,

	P_OCR_FONT_EUROPA_GROTESK_NO_2_SB_BOLD = 20,

	P_OCR_FONT_EUROSTILE = 21,

	P_OCR_FONT_F25_BANK_PRINTER_BOLD = 22,

	P_OCR_FONT_FRANKLIN_GOTHIC = 23,

	P_OCR_FONT_FRUTIGER = 24,

	P_OCR_FONT_FUTURA = 25,

	P_OCR_FONT_FUTURA_BOLD = 26,

	P_OCR_FONT_GARAMOND = 27,

	P_OCR_FONT_GEORGIA = 28,

	P_OCR_FONT_GILL_SANS = 29,

	P_OCR_FONT_HANDWRITTEN = 30,

	P_OCR_FONT_HELVETICA = 31,

	P_OCR_FONT_HELVETICA_BOLD = 32,

	P_OCR_FONT_HELVETICA_CONDENSED_LIGHT = 33,

	P_OCR_FONT_HYPERMARKET = 34,

	P_OCR_FONT_INTERSTATE = 35,

	P_OCR_FONT_LATIN_MODERN = 36,

	P_OCR_FONT_LATIN_MODERN_ITALIC = 37,

	P_OCR_FONT_LETTER_GOTHIC = 38,

	P_OCR_FONT_LUCIDA = 39,

	P_OCR_FONT_LUCIDA_SANS = 40,

	P_OCR_FONT_MATRIX = 41,

	P_OCR_FONT_META = 42,

	P_OCR_FONT_MINION = 43,

	P_OCR_FONT_OCRA = 44,

	P_OCR_FONT_OCRB = 45,

	P_OCR_FONT_OFFICINA = 46,

	P_OCR_FONT_OPTIMA = 47,

	P_OCR_FONT_PRINTF = 48,

	P_OCR_FONT_ROCKWELL = 49,

	P_OCR_FONT_ROTIS_SANS_SERIF = 50,

	P_OCR_FONT_ROTIS_SERIF = 51,

	P_OCR_FONT_SABON = 52,

	P_OCR_FONT_STONE = 53,

	P_OCR_FONT_SV_BASIC_MANUAL = 54,

	P_OCR_FONT_TAHOMA = 55,

	P_OCR_FONT_TAHOMA_BOLD = 56,

	P_OCR_FONT_TEX_GYRE_TERMES = 57,

	P_OCR_FONT_TEX_GYRE_TERMES_ITALIC = 58,

	P_OCR_FONT_THE_SANS_MONO_CONDENSED_BLACK = 59,

	P_OCR_FONT_THESIS = 60,

	P_OCR_FONT_TICKET_DE_CAISSE = 61,

	P_OCR_FONT_TIMES_NEW_ROMAN = 62,

	P_OCR_FONT_TRAJAN = 63,

	P_OCR_FONT_TRINITE = 64,

	P_OCR_FONT_UNIVERS = 65,

	P_OCR_FONT_VERDANA = 66,

	P_OCR_FONT_VOLTAIRE = 67,

	P_OCR_FONT_WALBAUM = 68,

	P_OCR_FONT_EUROPA_GRO_SB = 69,

	P_OCR_FONT_EUROPA_GRO_SB_LIGHT = 70,

	P_OCR_FONT_MICR = 71,

	P_OCR_FONT_ARABIC_NILE = 72,

	P_OCR_FONT_UNKNOWN = 73,

	P_OCR_FONT_XITS_MATH = 74,

	P_OCR_FONT_ANY = 75,

	P_OCR_FONT_UNKNOWN_MATH = 76,

	P_OCR_FONT_UKDL_LIGHT = 77,

	P_OCR_FONT_COUNT = 78,

	P_OCR_FONT_FE_SCHRIFT = 79
}

declare class PPOcrLayout extends NSObject {

	static alloc(): PPOcrLayout; // inherited from NSObject

	static new(): PPOcrLayout; // inherited from NSObject

	blocks: NSArray<PPOcrBlock>;

	box: CGRect;

	flipped: boolean;

	position: PPPosition;

	transform: CGAffineTransform;

	transformInvalid: boolean;

	constructor(o: { ocrBlocks: NSArray<any>; });

	constructor(o: { ocrBlocks: NSArray<PPOcrBlock>; transform: CGAffineTransform; box: CGRect; flipped: boolean; });

	initWithOcrBlocks(ocrBlocks: NSArray<any>): this;

	initWithOcrBlocksTransformBoxFlipped(ocrBlocks: NSArray<PPOcrBlock>, transform: CGAffineTransform, box: CGRect, flipped: boolean): this;

	string(): string;
}

declare class PPOcrLine extends NSObject {

	static alloc(): PPOcrLine; // inherited from NSObject

	static new(): PPOcrLine; // inherited from NSObject

	chars: NSArray<PPCharWithVariants>;

	position: PPPosition;

	constructor(o: { ocrChars: NSArray<PPCharWithVariants>; position: PPPosition; });

	initWithOcrCharsPosition(ocrChars: NSArray<PPCharWithVariants>, position: PPPosition): this;

	string(): string;
}

declare class PPOcrLineOverlaySubview extends PPOverlaySubview {

	static alloc(): PPOcrLineOverlaySubview; // inherited from NSObject

	static appearance(): PPOcrLineOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPOcrLineOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPOcrLineOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PPOcrLineOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPOcrLineOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PPOcrLineOverlaySubview; // inherited from UIAppearance

	static new(): PPOcrLineOverlaySubview; // inherited from NSObject

	constructor(o: { frame: CGRect; startWindowPercentage: number; heightWindowPercentage: number; });

	initWithFrameStartWindowPercentageHeightWindowPercentage(frame: CGRect, startWindowPercentage: number, heightWindowPercentage: number): this;

	toggleHelp(): void;
}

declare class PPOcrLineOverlayViewController extends PPBasePhotoPayOverlayViewController {

	static alloc(): PPOcrLineOverlayViewController; // inherited from NSObject

	static new(): PPOcrLineOverlayViewController; // inherited from NSObject

	ocrWindowHeightPercentage: number;

	ocrWindowStartPercentage: number;
}

declare class PPOcrParserFactory extends NSObject {

	static alloc(): PPOcrParserFactory; // inherited from NSObject

	static new(): PPOcrParserFactory; // inherited from NSObject

	isRequired: boolean;
}

declare class PPOcrResultOverlaySubview extends PPOverlaySubview {

	static alloc(): PPOcrResultOverlaySubview; // inherited from NSObject

	static appearance(): PPOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PPOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PPOcrResultOverlaySubview; // inherited from UIAppearance

	static new(): PPOcrResultOverlaySubview; // inherited from NSObject
}

interface PPOverlayContainerViewController extends PPScanningViewController {

	isCameraAuthorized(): boolean;

	isStatusBarPresented(): boolean;

	isTorchOn(): boolean;

	overlayViewControllerShouldDisplayTorch(overlayViewController: PPOverlayViewController): boolean;

	overlayViewControllerWillCloseCamera(overlayViewController: PPOverlayViewController): void;

	overlayViewControllerWillSetTorch(overlayViewController: PPOverlayViewController, isTorchOn: boolean): boolean;

	shouldDisplayHelpButton(): boolean;
}
declare var PPOverlayContainerViewController: {

	prototype: PPOverlayContainerViewController;
};

declare class PPOverlaySubview extends UIView implements PPOverlaySubviewProtocol {

	static alloc(): PPOverlaySubview; // inherited from NSObject

	static appearance(): PPOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PPOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PPOverlaySubview; // inherited from UIAppearance

	static new(): PPOverlaySubview; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	delegate: PPOverlaySubviewDelegate; // inherited from PPOverlaySubviewProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	overlay: PPOverlayViewController; // inherited from PPOverlaySubviewProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didRotateFromInterfaceOrientation(fromInterfaceOrientation: UIInterfaceOrientation): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	overlayDidFindLivenessActionError(error: PPLivenessError): void;

	overlayDidFinishDetectionWithResult(result: PPDetectorResult): void;

	overlayDidFinishRecognition(): void;

	overlayDidFinishRecognitionFirstSide(result: PPRecognizerResult): void;

	overlayDidObtainOcrLayoutWithIdentifier(ocrLayout: PPOcrLayout, identifier: string): void;

	overlayDidOutputMetadata(metadata: PPMetadata): void;

	overlayDidOutputResults(results: NSArray<PPRecognizerResult>): void;

	overlayDidPublishProgress(progress: number): void;

	overlayDidRequestLivenessAction(action: PPLivenessAction): void;

	overlayDidResumeScanning(): void;

	overlayDidStartDetection(): void;

	overlayDidStartRecognition(): void;

	overlayDidStopScanning(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willAnimateRotationToInterfaceOrientationDuration(toInterfaceOrientation: UIInterfaceOrientation, duration: number): void;

	willFocusAtPoint(point: CGPoint): void;

	willRotateToInterfaceOrientationDuration(toInterfaceOrientation: UIInterfaceOrientation, duration: number): void;
}

interface PPOverlaySubviewDelegate extends NSObjectProtocol {

	overlaySubviewAnimationDidFinish(overlaySubview: PPOverlaySubview): void;

	overlaySubviewAnimationDidStart(overlaySubview: PPOverlaySubview): void;
}
declare var PPOverlaySubviewDelegate: {

	prototype: PPOverlaySubviewDelegate;
};

interface PPOverlaySubviewProtocol extends NSObjectProtocol {

	delegate: PPOverlaySubviewDelegate;

	overlay: PPOverlayViewController;

	didRotateFromInterfaceOrientation?(fromInterfaceOrientation: UIInterfaceOrientation): void;

	overlayDidFindLivenessActionError?(error: PPLivenessError): void;

	overlayDidFinishDetectionWithResult?(result: PPDetectorResult): void;

	overlayDidFinishRecognition?(): void;

	overlayDidFinishRecognitionFirstSide?(result: PPRecognizerResult): void;

	overlayDidObtainOcrLayoutWithIdentifier?(ocrLayout: PPOcrLayout, identifier: string): void;

	overlayDidOutputMetadata?(metadata: PPMetadata): void;

	overlayDidOutputResults?(results: NSArray<PPRecognizerResult>): void;

	overlayDidPublishProgress?(progress: number): void;

	overlayDidRequestLivenessAction?(action: PPLivenessAction): void;

	overlayDidResumeScanning?(): void;

	overlayDidStartDetection?(): void;

	overlayDidStartRecognition?(): void;

	overlayDidStopScanning?(): void;

	willAnimateRotationToInterfaceOrientationDuration?(toInterfaceOrientation: UIInterfaceOrientation, duration: number): void;

	willFocusAtPoint?(point: CGPoint): void;

	willRotateToInterfaceOrientationDuration?(toInterfaceOrientation: UIInterfaceOrientation, duration: number): void;
}
declare var PPOverlaySubviewProtocol: {

	prototype: PPOverlaySubviewProtocol;
};

declare class PPOverlayViewController extends UIViewController {

	static alloc(): PPOverlayViewController; // inherited from NSObject

	static new(): PPOverlayViewController; // inherited from NSObject

	containerViewController: UIViewController;

	scanningRegion: CGRect;

	showCloseButton: boolean;

	showStatusBar: boolean;

	showTorchButton: boolean;

	cameraViewControllerDidFindLivenessActionError(cameraViewController: UIViewController, error: PPLivenessError): void;

	cameraViewControllerDidFinishDetectionWithResult(cameraViewController: UIViewController, result: PPDetectorResult): void;

	cameraViewControllerDidFinishRecognition(cameraViewController: UIViewController): void;

	cameraViewControllerDidFinishRecognitionFirstSide(cameraViewController: UIViewController, result: PPRecognizerResult): void;

	cameraViewControllerDidObtainOcrResultWithResultName(cameraViewController: UIViewController, ocrResult: PPOcrLayout, resultName: string): void;

	cameraViewControllerDidOutputMetadata(cameraViewController: UIViewController, metadata: PPMetadata): void;

	cameraViewControllerDidOutputResults(cameraViewController: UIViewController, results: NSArray<PPRecognizerResult>): void;

	cameraViewControllerDidPublishProgress(cameraViewController: UIViewController, progress: number): void;

	cameraViewControllerDidRequestLivenessAction(cameraViewController: UIViewController, action: PPLivenessAction): void;

	cameraViewControllerDidResumeScanning(cameraViewController: UIViewController): void;

	cameraViewControllerDidStartDetection(cameraViewController: UIViewController): void;

	cameraViewControllerDidStartRecognition(cameraViewController: UIViewController): void;

	cameraViewControllerDidStopScanning(cameraViewController: UIViewController): void;

	cameraViewControllerUnauthorizedCamera(cameraViewController: UIViewController): void;

	cameraViewControllerUserAuthorizedCamera(cameraViewController: UIViewController): void;

	cameraViewControllerWillFocusAtPoint(cameraViewController: UIViewController, point: CGPoint): void;
}

declare class PPPdf417RecognizerResult extends PPRecognizerResult {

	static alloc(): PPPdf417RecognizerResult; // inherited from NSObject

	static new(): PPPdf417RecognizerResult; // inherited from NSObject

	data(): NSData;

	isUncertain(): boolean;

	locationOnImage(): PPQuadrangle;

	rawData(): PPBarcodeDetailedData;

	stringUsingEncoding(encoding: number): string;

	stringUsingGuessedEncoding(): string;
}

declare class PPPdf417RecognizerSettings extends PPRecognizerSettings {

	static alloc(): PPPdf417RecognizerSettings; // inherited from NSObject

	static new(): PPPdf417RecognizerSettings; // inherited from NSObject

	allowNullQuietZone: boolean;

	scanInverse: boolean;

	scanUncertain: boolean;
}

interface PPPermissionDeniedDelegate extends NSObjectProtocol {

	userDidTapCancel(viewController: PPPermissionDeniedViewController): void;
}
declare var PPPermissionDeniedDelegate: {

	prototype: PPPermissionDeniedDelegate;
};

declare class PPPermissionDeniedViewController extends UIViewController {

	static alloc(): PPPermissionDeniedViewController; // inherited from NSObject

	static new(): PPPermissionDeniedViewController; // inherited from NSObject

	delegate: PPPermissionDeniedDelegate;

	hideCancelButton: boolean;
}

declare class PPPointsDetectorResult extends PPDetectorResult {

	static alloc(): PPPointsDetectorResult; // inherited from NSObject

	static new(): PPPointsDetectorResult; // inherited from NSObject

	points: NSArray<any>;
}

declare class PPPosition extends NSObject {

	static alloc(): PPPosition; // inherited from NSObject

	static new(): PPPosition; // inherited from NSObject

	ll: CGPoint;

	lr: CGPoint;

	ul: CGPoint;

	ur: CGPoint;

	constructor(o: { upperLeft: CGPoint; upperRight: CGPoint; lowerLeft: CGPoint; lowerRight: CGPoint; });

	center(): CGPoint;

	height(): number;

	initWithUpperLeftUpperRightLowerLeftLowerRight(ul: CGPoint, ur: CGPoint, ll: CGPoint, lr: CGPoint): this;

	positionWithOffset(offset: CGPoint): PPPosition;

	rect(): CGRect;
}

declare class PPPriceOcrParserFactory extends PPOcrParserFactory {

	static alloc(): PPPriceOcrParserFactory; // inherited from NSObject

	static new(): PPPriceOcrParserFactory; // inherited from NSObject

	allowMissingDecimals: boolean;

	allowNegativeAmounts: boolean;

	allowSpaceSeparators: boolean;

	arabicIndicModeEnabled: boolean;
}

declare const enum PPProcessingOrientation {

	Up = 0,

	Right = 1,

	Down = 2,

	Left = 3
}

declare class PPQuadDetectorResult extends PPDetectorResult {

	static alloc(): PPQuadDetectorResult; // inherited from NSObject

	static new(): PPQuadDetectorResult; // inherited from NSObject

	detectionLocation: PPQuadrangle;
}

declare class PPQuadDetectorSettings extends PPDetectorSettings {

	static alloc(): PPQuadDetectorSettings; // inherited from NSObject

	static new(): PPQuadDetectorSettings; // inherited from NSObject

	decodingInfoArray: NSArray<PPDecodingInfo>;
}

declare class PPQuadrangle extends NSObject {

	static alloc(): PPQuadrangle; // inherited from NSObject

	static new(): PPQuadrangle; // inherited from NSObject

	lowerLeft: CGPoint;

	lowerRight: CGPoint;

	upperLeft: CGPoint;

	upperRight: CGPoint;

	constructor(o: { upperLeft: CGPoint; upperRight: CGPoint; lowerLeft: CGPoint; lowerRight: CGPoint; });

	center(): CGPoint;

	initWithUpperLeftUpperRightLowerLeftLowerRight(upperLeft: CGPoint, upperRight: CGPoint, lowerLeft: CGPoint, lowerRight: CGPoint): this;

	quadrangleWithTransformation(transform: CGAffineTransform): this;

	toPointsArray(): NSArray<any>;
}

interface PPRange {
	start: number;
	stop: number;
}
declare var PPRange: interop.StructType<PPRange>;

declare class PPRawOcrParserFactory extends PPOcrParserFactory {

	static alloc(): PPRawOcrParserFactory; // inherited from NSObject

	static new(): PPRawOcrParserFactory; // inherited from NSObject

	useSieve: boolean;

	setOptions(options: PPOcrEngineOptions): void;
}

declare const enum PPRecognitionMode {

	Default = 0,

	Test = 1,

	DetectionTest = 2
}

declare const enum PPRecognitionStatus {

	Success = 0,

	Glare = 1
}

declare class PPRecognitionStatusMetadata extends PPMetadata {

	static alloc(): PPRecognitionStatusMetadata; // inherited from NSObject

	static new(): PPRecognitionStatusMetadata; // inherited from NSObject

	status: PPRecognitionStatus;

	constructor(o: { status: PPRecognitionStatus; });

	initWithStatus(status: PPRecognitionStatus): this;
}

declare class PPRecognizerResult extends NSObject implements NSCopying {

	static addBoolForKeyValueDictTypeDict(value: boolean, key: string, valueDict: NSMutableDictionary<any, any>, typeDict: NSMutableDictionary<any, any>): void;

	static addDataForKeyValueDictTypeDict(data: NSData, key: string, valueDict: NSMutableDictionary<any, any>, typeDict: NSMutableDictionary<any, any>): void;

	static addDateForKeyValueDictTypeDict(date: Date, key: string, valueDict: NSMutableDictionary<any, any>, typeDict: NSMutableDictionary<any, any>): void;

	static addStringForKeyValueDictTypeDict(string: string, key: string, valueDict: NSMutableDictionary<any, any>, typeDict: NSMutableDictionary<any, any>): void;

	static alloc(): PPRecognizerResult; // inherited from NSObject

	static dataWithBool(value: boolean): number;

	static dataWithString(string: string): NSData;

	static dateWithDate(date: Date): PPDateResult;

	static new(): PPRecognizerResult; // inherited from NSObject

	static urlStringFromData(data: NSData): string;

	constructor(o: { elements: NSMutableDictionary<any, any>; resultElementTypes: NSMutableDictionary<string, number>; });

	attributedDescription(): NSAttributedString;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getAllElementTypes(): NSMutableDictionary<string, number>;

	getAllElements(): NSDictionary<any, any>;

	getAllStringElements(): NSDictionary<any, any>;

	getBarcodeDetailedDataElement(key: string): PPBarcodeDetailedData;

	getBoolElement(key: string): number;

	getDataElement(key: string): NSData;

	getDateResultElement(key: string): PPDateResult;

	getDetectorResultElement(key: string): PPDetectorResult;

	getIntElement(key: string): number;

	getOcrLayoutElement(key: string): PPOcrLayout;

	getQuadrangleElement(key: string): PPQuadrangle;

	getStringElementEncoding(key: string, encoding: number): string;

	getStringElementUsingGuessedEncoding(key: string): string;

	initWithElementsResultElementTypes(elements: NSMutableDictionary<any, any>, types: NSMutableDictionary<string, number>): this;

	xml(): string;
}

declare class PPRecognizerSettings extends NSObject implements NSCopying {

	static alloc(): PPRecognizerSettings; // inherited from NSObject

	static new(): PPRecognizerSettings; // inherited from NSObject

	enabled: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getIdealOverlayViewControllerClass(): typeof NSObject;

	getOptimalHudOrientation(): UIInterfaceOrientationMask;
}

declare class PPRegexOcrParserFactory extends PPOcrParserFactory {

	static alloc(): PPRegexOcrParserFactory; // inherited from NSObject

	static new(): PPRegexOcrParserFactory; // inherited from NSObject

	endsWithWhitespace: boolean;

	regex: string;

	startsWithWhitespace: boolean;

	useGreedyMatching: boolean;

	useSieve: boolean;

	constructor(o: { regex: string; });

	initWithRegex(regex: string): this;

	setOptions(options: PPOcrEngineOptions): void;
}

declare class PPRomanianIDFrontRecognizerResult extends PPMrtdRecognizerResult {

	static alloc(): PPRomanianIDFrontRecognizerResult; // inherited from NSObject

	static new(): PPRomanianIDFrontRecognizerResult; // inherited from NSObject

	readonly address: string;

	readonly cardNumber: string;

	readonly cnp: string;

	readonly firstName: string;

	readonly idSeries: string;

	readonly issuedBy: string;

	readonly lastName: string;

	readonly nonMRZNationality: string;

	readonly nonMRZSex: string;

	readonly parentNames: string;

	readonly placeOfBirth: string;

	readonly rawValidFrom: string;

	readonly rawValidUntil: string;

	readonly validFrom: Date;

	readonly validUntil: Date;
}

declare class PPRomanianIDFrontRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static ID_FACE(): string;

	static alloc(): PPRomanianIDFrontRecognizerSettings; // inherited from NSObject

	static new(): PPRomanianIDFrontRecognizerSettings; // inherited from NSObject

	displayFacePhoto: boolean;

	displayFullDocumentImage: boolean;

	encodeFacePhoto: boolean;

	encodeFullDocumentImage: boolean;

	extractAddress: boolean;

	extractFirstName: boolean;

	extractIssuedBy: boolean;

	extractLastName: boolean;

	extractPlaceOfBirth: boolean;

	extractSex: boolean;

	extractValidFrom: boolean;

	extractValidUntil: boolean;
}

interface PPScale {
	scale: number;
	tolerance: number;
}
declare var PPScale: interop.StructType<PPScale>;

declare class PPScanSettings extends NSObject implements NSCopying {

	static alloc(): PPScanSettings; // inherited from NSObject

	static new(): PPScanSettings; // inherited from NSObject

	allowMultipleResults: boolean;

	allowResultForEveryImage: boolean;

	frameQualityEstimationMode: PPFrameQualityEstimationMode;

	partialRecognitionTimeout: number;

	recognitionMode: PPRecognitionMode;

	readonly recognizerSettingsList: NSArray<PPRecognizerSettings>;

	addRecognizerSettings(setting: PPRecognizerSettings): void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	removeAllRecognizerSettings(): void;

	removeRecognizerSettings(setting: PPRecognizerSettings): void;
}

interface PPScanningDelegate extends NSObjectProtocol {

	scanningViewControllerDidClose(scanningViewController: UIViewController): void;

	scanningViewControllerDidFindError(scanningViewController: UIViewController, error: NSError): void;

	scanningViewControllerDidFinishDetectionWithResult?(scanningViewController: UIViewController, result: PPDetectorResult): void;

	scanningViewControllerDidObtainOcrResultWithResultName?(scanninvViewController: UIViewController, ocrResult: PPOcrLayout, resultName: string): void;

	scanningViewControllerDidOutputMetadata?(scanningViewController: UIViewController, metadata: PPMetadata): void;

	scanningViewControllerDidOutputResults(scanningViewController: UIViewController, results: NSArray<PPRecognizerResult>): void;

	scanningViewControllerDidRequestMoreInfo?(scanningViewController: UIViewController): void;

	scanningViewControllerDidStartDetection?(scanningViewController: UIViewController): void;

	scanningViewControllerDidStartRecognition?(scanningViewController: UIViewController): void;

	scanningViewControllerInvalidLicenseKeyWithError?(scanningViewController: UIViewController, error: NSError): void;

	scanningViewControllerUnauthorizedCamera(scanningViewController: UIViewController): void;

	scanningViewControllerWillPresentHelp?(scanningViewController: UIViewController): void;
}
declare var PPScanningDelegate: {

	prototype: PPScanningDelegate;
};

declare const enum PPScanningMode {

	Auto = 0,

	Landscape = 1,

	Portrait = 2
}

interface PPScanningViewController extends NSObjectProtocol {

	autorotate: boolean;

	scanningDelegate: PPScanningDelegate;

	scanningRegion: CGRect;

	supportedOrientations: UIInterfaceOrientationMask;

	isCameraPaused(): boolean;

	isScanningPaused(): boolean;

	pauseCamera(): boolean;

	pauseScanning(): boolean;

	playScanSuccesSound(): void;

	resumeCamera(): boolean;

	resumeScanningAndResetState(resetState: boolean): boolean;

	willSetTorchOn(torchOn: boolean): void;
}
declare var PPScanningViewController: {

	prototype: PPScanningViewController;
};

declare class PPSegmentScanOverlayViewController extends PPModernBaseOverlayViewController {

	static alloc(): PPSegmentScanOverlayViewController; // inherited from NSObject

	static new(): PPSegmentScanOverlayViewController; // inherited from NSObject
}

declare class PPSerbianIDBackRecognizerResult extends PPMrtdRecognizerResult {

	static alloc(): PPSerbianIDBackRecognizerResult; // inherited from NSObject

	static new(): PPSerbianIDBackRecognizerResult; // inherited from NSObject
}

declare class PPSerbianIDBackRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static alloc(): PPSerbianIDBackRecognizerSettings; // inherited from NSObject

	static new(): PPSerbianIDBackRecognizerSettings; // inherited from NSObject

	displayFullDocumentImage: boolean;
}

declare class PPSerbianIDCombinedRecognizerResult extends PPRecognizerResult {

	static alloc(): PPSerbianIDCombinedRecognizerResult; // inherited from NSObject

	static new(): PPSerbianIDCombinedRecognizerResult; // inherited from NSObject

	readonly JMBG: string;

	readonly dateOfBirth: Date;

	readonly documentDateOfExpiry: Date;

	readonly documentDateOfIssue: Date;

	readonly faceImage: NSData;

	readonly firstName: string;

	readonly identityCardNumber: string;

	readonly issuingAuthority: string;

	readonly lastName: string;

	readonly matchingData: boolean;

	readonly mrtdVerified: boolean;

	readonly nationality: string;

	readonly sex: string;

	readonly signature: NSData;

	readonly signatureVersion: string;
}

declare class PPSerbianIDCombinedRecognizerSettings extends PPCombinedRecognizerSettings {

	static FULL_DOCUMENT_IMAGE_BACK(): string;

	static FULL_DOCUMENT_IMAGE_FRONT(): string;

	static ID_FACE(): string;

	static ID_SIGNATURE(): string;

	static alloc(): PPSerbianIDCombinedRecognizerSettings; // inherited from NSObject

	static new(): PPSerbianIDCombinedRecognizerSettings; // inherited from NSObject

	encodeFacePhoto: boolean;

	encodeFullDocumentPhoto: boolean;

	encodeSignaturePhoto: boolean;

	returnFacePhoto: boolean;

	returnFullDocumentPhoto: boolean;

	returnSignaturePhoto: boolean;
}

declare class PPSerbianIDFrontRecognizerResult extends PPBlinkOcrRecognizerResult {

	static alloc(): PPSerbianIDFrontRecognizerResult; // inherited from NSObject

	static new(): PPSerbianIDFrontRecognizerResult; // inherited from NSObject

	readonly issuingDate: Date;

	readonly validUntil: Date;
}

declare class PPSerbianIDFrontRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static ID_FACE(): string;

	static ID_SIGNATURE(): string;

	static alloc(): PPSerbianIDFrontRecognizerSettings; // inherited from NSObject

	static new(): PPSerbianIDFrontRecognizerSettings; // inherited from NSObject

	displayFaceImage: boolean;

	displayFullDocumentImage: boolean;

	displaySignatureImage: boolean;

	extractIssuingDate: boolean;

	extractValidUntilDate: boolean;
}

declare class PPSettings extends NSObject implements NSCopying {

	static alloc(): PPSettings; // inherited from NSObject

	static new(): PPSettings; // inherited from NSObject

	cameraSettings: PPCameraSettings;

	licenseSettings: PPLicenseSettings;

	metadataSettings: PPMetadataSettings;

	readonly resourcesBundle: NSBundle;

	scanSettings: PPScanSettings;

	uiSettings: PPUiSettings;

	constructor(o: { resourceBundle: NSBundle; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithResourceBundle(bundle: NSBundle): this;
}

declare class PPSimNumberRecognizerResult extends PPRecognizerResult {

	static alloc(): PPSimNumberRecognizerResult; // inherited from NSObject

	static new(): PPSimNumberRecognizerResult; // inherited from NSObject

	readonly simNumber: string;
}

declare class PPSimNumberRecognizerSettings extends PPRecognizerSettings {

	static alloc(): PPSimNumberRecognizerSettings; // inherited from NSObject

	static new(): PPSimNumberRecognizerSettings; // inherited from NSObject
}

declare class PPSingaporeIDBackRecognizerResult extends PPBlinkOcrRecognizerResult {

	static alloc(): PPSingaporeIDBackRecognizerResult; // inherited from NSObject

	static new(): PPSingaporeIDBackRecognizerResult; // inherited from NSObject

	readonly address: string;

	readonly bloodGroup: string;

	readonly dateOfIssue: Date;

	readonly identityCardNumber: string;

	readonly rawDateOfIssue: string;
}

declare class PPSingaporeIDBackRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static alloc(): PPSingaporeIDBackRecognizerSettings; // inherited from NSObject

	static new(): PPSingaporeIDBackRecognizerSettings; // inherited from NSObject

	displayFullDocumentImage: boolean;

	extractBloodGroup: boolean;

	extractDateOfIssue: boolean;
}

declare class PPSingaporeIDCombinedRecognizerResult extends PPRecognizerResult {

	static alloc(): PPSingaporeIDCombinedRecognizerResult; // inherited from NSObject

	static new(): PPSingaporeIDCombinedRecognizerResult; // inherited from NSObject

	readonly address: string;

	readonly bloodGroup: string;

	readonly countryOfBirth: string;

	readonly dateOfBirth: Date;

	readonly documentDateOfIssue: Date;

	readonly faceImage: NSData;

	readonly identityCardNumber: string;

	readonly matchingData: boolean;

	readonly name: string;

	readonly race: string;

	readonly sex: string;

	readonly signature: NSData;

	readonly signatureVersion: string;
}

declare class PPSingaporeIDCombinedRecognizerSettings extends PPCombinedRecognizerSettings {

	static FULL_DOCUMENT_IMAGE_BACK(): string;

	static FULL_DOCUMENT_IMAGE_FRONT(): string;

	static ID_FACE(): string;

	static alloc(): PPSingaporeIDCombinedRecognizerSettings; // inherited from NSObject

	static new(): PPSingaporeIDCombinedRecognizerSettings; // inherited from NSObject

	encodeFacePhoto: boolean;

	encodeFullDocumentPhoto: boolean;

	returnFacePhoto: boolean;

	returnFullDocumentPhoto: boolean;
}

declare class PPSingaporeIDFrontRecognizerResult extends PPBlinkOcrRecognizerResult {

	static alloc(): PPSingaporeIDFrontRecognizerResult; // inherited from NSObject

	static new(): PPSingaporeIDFrontRecognizerResult; // inherited from NSObject

	readonly countryOfBirth: string;

	readonly dateOfBirth: Date;

	readonly identityCardNumber: string;

	readonly name: string;

	readonly race: string;

	readonly sex: string;
}

declare class PPSingaporeIDFrontRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static ID_FACE(): string;

	static alloc(): PPSingaporeIDFrontRecognizerSettings; // inherited from NSObject

	static new(): PPSingaporeIDFrontRecognizerSettings; // inherited from NSObject

	displayFullDocumentImage: boolean;

	displayPortraitImage: boolean;

	extractCountryOfBirth: boolean;

	extractDateOfBirth: boolean;

	extractRace: boolean;

	extractSex: boolean;
}

declare class PPSlovakIDBackRecognizerResult extends PPMrtdRecognizerResult {

	static alloc(): PPSlovakIDBackRecognizerResult; // inherited from NSObject

	static new(): PPSlovakIDBackRecognizerResult; // inherited from NSObject

	readonly address: string;

	readonly placeOfBirth: string;

	readonly specialRemarks: string;

	readonly surnameAtBirth: string;
}

declare class PPSlovakIDBackRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static alloc(): PPSlovakIDBackRecognizerSettings; // inherited from NSObject

	static new(): PPSlovakIDBackRecognizerSettings; // inherited from NSObject

	displayFullDocumentImage: boolean;

	extractPlaceOfBirth: boolean;

	extractSpecialRemarks: boolean;

	extractSurnameAtBirth: boolean;
}

declare class PPSlovakIDCombinedRecognizerResult extends PPRecognizerResult {

	static alloc(): PPSlovakIDCombinedRecognizerResult; // inherited from NSObject

	static new(): PPSlovakIDCombinedRecognizerResult; // inherited from NSObject

	readonly address: string;

	readonly dateOfBirth: Date;

	readonly documentDateOfExpiry: Date;

	readonly documentDateOfIssue: Date;

	readonly faceImage: NSData;

	readonly firstName: string;

	readonly identityCardNumber: string;

	readonly issuingAuthority: string;

	readonly lastName: string;

	readonly matchingData: boolean;

	readonly mrtdVerified: boolean;

	readonly nationality: string;

	readonly personalIdentificationNumber: string;

	readonly placeOfBirth: string;

	readonly sex: string;

	readonly signature: NSData;

	readonly signatureVersion: string;

	readonly specialRemarks: string;

	readonly surnameAtBirth: string;
}

declare class PPSlovakIDCombinedRecognizerSettings extends PPCombinedRecognizerSettings {

	static FULL_DOCUMENT_IMAGE_BACK(): string;

	static FULL_DOCUMENT_IMAGE_FRONT(): string;

	static ID_FACE(): string;

	static ID_SIGNATURE(): string;

	static alloc(): PPSlovakIDCombinedRecognizerSettings; // inherited from NSObject

	static new(): PPSlovakIDCombinedRecognizerSettings; // inherited from NSObject

	encodeFacePhoto: boolean;

	encodeFullDocumentPhoto: boolean;

	encodeSignaturePhoto: boolean;

	extractDateOfBirth: boolean;

	extractDateOfExpiry: boolean;

	extractDateOfIssue: boolean;

	extractDocumentNumber: boolean;

	extractIssuedBy: boolean;

	extractNationality: boolean;

	extractPlaceOfBirth: boolean;

	extractSex: boolean;

	extractSpecialRemarks: boolean;

	extractSurnameAtBirth: boolean;

	returnFacePhoto: boolean;

	returnFullDocumentPhoto: boolean;

	returnSignaturePhoto: boolean;
}

declare class PPSlovakIDFrontRecognizerResult extends PPBlinkOcrRecognizerResult {

	static alloc(): PPSlovakIDFrontRecognizerResult; // inherited from NSObject

	static new(): PPSlovakIDFrontRecognizerResult; // inherited from NSObject

	readonly dateOfBirth: Date;

	readonly dateOfExpiry: Date;

	readonly dateOfIssue: Date;

	readonly documentNumber: string;

	readonly firstName: string;

	readonly issuedBy: string;

	readonly lastName: string;

	readonly nationality: string;

	readonly personalNumber: string;

	readonly rawDateOfBirth: string;

	readonly rawDateOfExpiry: string;

	readonly rawDateOfIssue: string;

	readonly sex: string;
}

declare class PPSlovakIDFrontRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static ID_FACE(): string;

	static ID_SIGNATURE(): string;

	static alloc(): PPSlovakIDFrontRecognizerSettings; // inherited from NSObject

	static new(): PPSlovakIDFrontRecognizerSettings; // inherited from NSObject

	displayFacePhoto: boolean;

	displayFullDocumentImage: boolean;

	displaySignaturePhoto: boolean;

	extractDateOfBirth: boolean;

	extractDateOfExpiry: boolean;

	extractDateOfIssue: boolean;

	extractDocumentNumber: boolean;

	extractIssuedBy: boolean;

	extractNationality: boolean;

	extractSex: boolean;
}

declare class PPSlovenianIDBackRecognizerResult extends PPMrtdRecognizerResult {

	static alloc(): PPSlovenianIDBackRecognizerResult; // inherited from NSObject

	static new(): PPSlovenianIDBackRecognizerResult; // inherited from NSObject

	readonly address: string;

	readonly authority: string;

	readonly dateOfIssue: Date;

	readonly rawDateOfIssue: string;
}

declare class PPSlovenianIDBackRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static alloc(): PPSlovenianIDBackRecognizerSettings; // inherited from NSObject

	static new(): PPSlovenianIDBackRecognizerSettings; // inherited from NSObject

	displayFullDocumentImage: boolean;

	extractAuthority: boolean;

	extractDateOfIssue: boolean;
}

declare class PPSlovenianIDCombinedRecognizerResult extends PPRecognizerResult {

	static alloc(): PPSlovenianIDCombinedRecognizerResult; // inherited from NSObject

	static new(): PPSlovenianIDCombinedRecognizerResult; // inherited from NSObject

	readonly address: string;

	readonly citizenship: string;

	readonly dateOfBirth: Date;

	readonly documentDateOfExpiry: Date;

	readonly documentDateOfIssue: Date;

	readonly faceImage: NSData;

	readonly firstName: string;

	readonly identityCardNumber: string;

	readonly issuingAuthority: string;

	readonly lastName: string;

	readonly matchingData: boolean;

	readonly mrtdVerified: boolean;

	readonly personalIdentificationNumber: string;

	readonly sex: string;

	readonly signature: NSData;

	readonly signatureVersion: string;
}

declare class PPSlovenianIDCombinedRecognizerSettings extends PPCombinedRecognizerSettings {

	static FULL_DOCUMENT_IMAGE_BACK(): string;

	static FULL_DOCUMENT_IMAGE_FRONT(): string;

	static ID_FACE(): string;

	static ID_SIGNATURE(): string;

	static alloc(): PPSlovenianIDCombinedRecognizerSettings; // inherited from NSObject

	static new(): PPSlovenianIDCombinedRecognizerSettings; // inherited from NSObject

	encodeFacePhoto: boolean;

	encodeFullDocumentPhoto: boolean;

	encodeSignaturePhoto: boolean;

	returnFacePhoto: boolean;

	returnFullDocumentPhoto: boolean;

	returnSignaturePhoto: boolean;
}

declare class PPSlovenianIDFrontRecognizerResult extends PPBlinkOcrRecognizerResult {

	static alloc(): PPSlovenianIDFrontRecognizerResult; // inherited from NSObject

	static new(): PPSlovenianIDFrontRecognizerResult; // inherited from NSObject

	readonly dateOfBirth: Date;

	readonly dateOfExpiry: Date;

	readonly firstName: string;

	readonly lastName: string;

	readonly nationality: string;

	readonly rawDateOfBirth: string;

	readonly rawDateOfExpiry: string;

	readonly sex: string;
}

declare class PPSlovenianIDFrontRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static ID_FACE(): string;

	static ID_SIGNATURE(): string;

	static alloc(): PPSlovenianIDFrontRecognizerSettings; // inherited from NSObject

	static new(): PPSlovenianIDFrontRecognizerSettings; // inherited from NSObject

	displayFaceImage: boolean;

	displayFullDocumentImage: boolean;

	displaySignatureImage: boolean;

	extractDateOfBirth: boolean;

	extractDateOfExpiry: boolean;

	extractNationality: boolean;

	extractSex: boolean;
}

declare class PPSwissPassportRecognizerResult extends PPBlinkOcrRecognizerResult {

	static alloc(): PPSwissPassportRecognizerResult; // inherited from NSObject

	static new(): PPSwissPassportRecognizerResult; // inherited from NSObject

	readonly authority: string;

	readonly dateOfBirth: Date;

	readonly dateOfExpiry: Date;

	readonly dateOfIssue: Date;

	readonly firstName: string;

	readonly height: string;

	readonly lastName: string;

	readonly passportNumber: string;

	readonly placeOfOrigin: string;

	readonly rawDateOfBirth: string;

	readonly rawDateOfExpiry: string;

	readonly rawDateOfIssue: string;

	readonly sex: string;
}

declare class PPSwissPassportRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static ID_FACE(): string;

	static alloc(): PPSwissPassportRecognizerSettings; // inherited from NSObject

	static new(): PPSwissPassportRecognizerSettings; // inherited from NSObject

	extractAuthority: boolean;

	extractDateOfBirth: boolean;

	extractDateOfExpiry: boolean;

	extractDateOfIssue: boolean;

	extractHeight: boolean;

	extractName: boolean;

	extractPassportNumber: boolean;

	extractPlaceOfOrigin: boolean;

	extractSex: boolean;

	extractSurname: boolean;

	returnFacePhoto: boolean;

	returnFullDocumentPhoto: boolean;
}

declare class PPTapToFocusOverlaySubview extends PPOverlaySubview {

	static alloc(): PPTapToFocusOverlaySubview; // inherited from NSObject

	static appearance(): PPTapToFocusOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPTapToFocusOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPTapToFocusOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PPTapToFocusOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPTapToFocusOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PPTapToFocusOverlaySubview; // inherited from UIAppearance

	static new(): PPTapToFocusOverlaySubview; // inherited from NSObject
}

declare class PPTemplatingOverlayViewController extends PPModernBaseOverlayViewController {

	static alloc(): PPTemplatingOverlayViewController; // inherited from NSObject

	static new(): PPTemplatingOverlayViewController; // inherited from NSObject
}

declare class PPTemplatingRecognizerResult extends PPRecognizerResult {

	static alloc(): PPTemplatingRecognizerResult; // inherited from NSObject

	static new(): PPTemplatingRecognizerResult; // inherited from NSObject

	boolParsedResultForNameParserGroup(name: string, parserGroup: string): number;

	documentClassification(): string;

	ocrLayout(): PPOcrLayout;

	ocrLayoutForParserGroup(parserGroup: string): PPOcrLayout;

	parsedResultForName(name: string): string;

	parsedResultForNameParserGroup(name: string, parserGroup: string): string;

	rawParsedResultForNameParserGroup(name: string, parserGroup: string): string;

	specificParsedResultForName(name: string): NSObject;

	specificParsedResultForNameParserGroup(name: string, parserGroup: string): NSObject;
}

declare class PPTemplatingRecognizerSettings extends PPRecognizerSettings {

	static alloc(): PPTemplatingRecognizerSettings; // inherited from NSObject

	static new(): PPTemplatingRecognizerSettings; // inherited from NSObject

	allowUnparsedResults: boolean;

	addOcrParserName(factory: PPOcrParserFactory, name: string): void;

	addOcrParserNameGroup(factory: PPOcrParserFactory, name: string, group: string): void;

	clearAllParsers(): void;

	clearParsersInGroup(group: string): void;

	removeAllDecodingInfoSets(): void;

	removeDecodingInfoSetForClassifierResult(classifierResult: string): void;

	removeOcrParserWithName(name: string): void;

	removeOcrParserWithNameFromGroup(parser: string, group: string): void;

	setDecodingInfoSetForClassifierResult(decodingInfos: NSArray<PPDecodingInfo>, classifierResult: string): void;
}

declare class PPTextMetadata extends PPMetadata {

	static alloc(): PPTextMetadata; // inherited from NSObject

	static new(): PPTextMetadata; // inherited from NSObject

	text: string;

	type: PPTextMetadataType;

	constructor(o: { name: string; text: string; });

	constructor(o: { name: string; text: string; type: PPTextMetadataType; });

	initWithNameText(name: string, text: string): this;

	initWithNameTextType(name: string, text: string, type: PPTextMetadataType): this;
}

declare const enum PPTextMetadataType {

	Txt = 0,

	Xml = 1,

	Json = 2
}

declare class PPToastOverlaySubview extends PPOverlaySubview {

	static alloc(): PPToastOverlaySubview; // inherited from NSObject

	static appearance(): PPToastOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPToastOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPToastOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PPToastOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPToastOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PPToastOverlaySubview; // inherited from UIAppearance

	static new(): PPToastOverlaySubview; // inherited from NSObject

	font: UIFont;

	label: UILabel;

	toastMargin: number;
}

declare class PPTopUpOcrParserFactory extends PPOcrParserFactory {

	static alloc(): PPTopUpOcrParserFactory; // inherited from NSObject

	static new(): PPTopUpOcrParserFactory; // inherited from NSObject

	allowNoPrefix: boolean;

	returnCodeWithoutPrefix: boolean;

	constructor(o: { topUpPrefix: PPTopUpPrefix; });

	initWithTopUpPrefix(topUpPrefix: PPTopUpPrefix): this;
}

declare const enum PPTopUpPrefix {

	Prefix123 = 0,

	Prefix103 = 1,

	Prefix131 = 2,

	PrefixGeneric = 3
}

declare class PPUiSettings extends NSObject implements NSCopying {

	static alloc(): PPUiSettings; // inherited from NSObject

	static new(): PPUiSettings; // inherited from NSObject

	autorotateOverlay: boolean;

	cameraPausedView: UIView;

	displayDebugInfo: boolean;

	helpDisplayMode: PPHelpDisplayMode;

	language: string;

	showCloseButton: boolean;

	showOcrResults: boolean;

	showStatusBar: boolean;

	showTorchButton: boolean;

	soundFilePath: string;

	constructor(o: { soundFilePath: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithSoundFilePath(soundFilePath: string): this;
}

declare class PPUsdlCombinedRecognizerResult extends PPRecognizerResult {

	static alloc(): PPUsdlCombinedRecognizerResult; // inherited from NSObject

	static descriptionKeys(): NSDictionary<any, any>;

	static new(): PPUsdlCombinedRecognizerResult; // inherited from NSObject

	static orderedKeys(): NSArray<string>;

	readonly faceImage: NSData;

	readonly matchingData: boolean;

	readonly signature: NSData;

	readonly signatureVersion: string;

	getField(key: string): string;
}

declare class PPUsdlCombinedRecognizerSettings extends PPCombinedRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static ID_FACE(): string;

	static alloc(): PPUsdlCombinedRecognizerSettings; // inherited from NSObject

	static new(): PPUsdlCombinedRecognizerSettings; // inherited from NSObject

	encodeFacePhoto: boolean;

	encodeFullDocumentPhoto: boolean;

	returnFacePhoto: boolean;

	returnFullDocumentPhoto: boolean;
}

declare class PPUsdlRecognizerResult extends PPRecognizerResult {

	static alloc(): PPUsdlRecognizerResult; // inherited from NSObject

	static descriptionKeys(): NSDictionary<any, any>;

	static new(): PPUsdlRecognizerResult; // inherited from NSObject

	static orderedKeys(): NSArray<string>;

	getField(key: string): string;
}

declare class PPUsdlRecognizerSettings extends PPRecognizerSettings {

	static alloc(): PPUsdlRecognizerSettings; // inherited from NSObject

	static new(): PPUsdlRecognizerSettings; // inherited from NSObject

	allowNullQuietZone: boolean;

	scan1DCodes: boolean;

	scanUncertain: boolean;
}

declare class PPViewControllerFactory extends NSObject {

	static alloc(): PPViewControllerFactory; // inherited from NSObject

	static cameraViewControllerWithDelegateCoordinatorError(delegate: PPScanningDelegate, coordinator: PPCameraCoordinator): UIViewController;

	static cameraViewControllerWithDelegateOverlayViewControllerCoordinatorError(delegate: PPScanningDelegate, overlayViewController: PPOverlayViewController, coordinator: PPCameraCoordinator): UIViewController;

	static new(): PPViewControllerFactory; // inherited from NSObject
}

declare class PPViewfinderOverlaySubview extends PPOverlaySubview {

	static alloc(): PPViewfinderOverlaySubview; // inherited from NSObject

	static appearance(): PPViewfinderOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPViewfinderOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPViewfinderOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PPViewfinderOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPViewfinderOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PPViewfinderOverlaySubview; // inherited from UIAppearance

	static new(): PPViewfinderOverlaySubview; // inherited from NSObject

	animationDuration: number;

	initialColor: UIColor;

	initialViewfinderMargin: number;

	moveable: boolean;

	strokeWidth: number;

	successColor: UIColor;

	trackingLayer: CAShapeLayer;
}

declare class PPVinOcrParserFactory extends PPOcrParserFactory {

	static alloc(): PPVinOcrParserFactory; // inherited from NSObject

	static new(): PPVinOcrParserFactory; // inherited from NSObject
}

declare class PPVinRecognizerResult extends PPRecognizerResult {

	static alloc(): PPVinRecognizerResult; // inherited from NSObject

	static new(): PPVinRecognizerResult; // inherited from NSObject

	readonly vinNumber: string;
}

declare class PPVinRecognizerSettings extends PPRecognizerSettings {

	static alloc(): PPVinRecognizerSettings; // inherited from NSObject

	static new(): PPVinRecognizerSettings; // inherited from NSObject
}

declare const enum PPZXingBarcodeType {

	Aztec = 0,

	Code128 = 1,

	Code39 = 2,

	DataMatrix = 3,

	EAN13 = 4,

	EAN8 = 5,

	ITF = 6,

	QR = 7,

	UPCA = 8,

	UPCE = 9
}

declare class PPZXingRecognizerResult extends PPRecognizerResult {

	static alloc(): PPZXingRecognizerResult; // inherited from NSObject

	static new(): PPZXingRecognizerResult; // inherited from NSObject

	static toTypeName(type: PPZXingBarcodeType): string;

	barcodeType(): PPZXingBarcodeType;

	data(): NSData;

	rawData(): PPBarcodeDetailedData;

	stringUsingEncoding(encoding: number): string;

	stringUsingGuessedEncoding(): string;
}

declare class PPZXingRecognizerSettings extends PPRecognizerSettings {

	static alloc(): PPZXingRecognizerSettings; // inherited from NSObject

	static new(): PPZXingRecognizerSettings; // inherited from NSObject

	scanAztec: boolean;

	scanCode128: boolean;

	scanCode39: boolean;

	scanDataMatrix: boolean;

	scanEAN13: boolean;

	scanEAN8: boolean;

	scanITF: boolean;

	scanInverse: boolean;

	scanQR: boolean;

	scanUPCA: boolean;

	scanUPCE: boolean;

	useSlowerThoroughScan: boolean;
}

declare class PPiKadRecognizerResult extends PPBlinkOcrRecognizerResult {

	static alloc(): PPiKadRecognizerResult; // inherited from NSObject

	static new(): PPiKadRecognizerResult; // inherited from NSObject

	readonly address: string;

	readonly dateOfBirth: Date;

	readonly employer: string;

	readonly expiryDate: Date;

	readonly name: string;

	readonly nationality: string;

	readonly passportNumber: string;

	readonly rawDateOfBirth: string;

	readonly rawExpiryDate: string;

	readonly sector: string;

	readonly sex: string;
}

declare class PPiKadRecognizerSettings extends PPRecognizerSettings {

	static FULL_DOCUMENT_IMAGE(): string;

	static ID_FACE(): string;

	static alloc(): PPiKadRecognizerSettings; // inherited from NSObject

	static new(): PPiKadRecognizerSettings; // inherited from NSObject

	displayFaceImage: boolean;

	displayFullDocumentImage: boolean;

	extractAddress: boolean;

	extractEmployer: boolean;

	extractExpiryDate: boolean;

	extractNationality: boolean;

	extractPassportNumber: boolean;

	extractSector: boolean;

	extractSex: boolean;
}

declare var kPPAKADateOfBirth: string;

declare var kPPAKAFamilyName: string;

declare var kPPAKAFullName: string;

declare var kPPAKAGivenName: string;

declare var kPPAKAMiddleName: string;

declare var kPPAKAPrefixName: string;

declare var kPPAKASocialSecurityNumber: string;

declare var kPPAKASuffixName: string;

declare var kPPAddressCity: string;

declare var kPPAddressJurisdictionCode: string;

declare var kPPAddressPostalCode: string;

declare var kPPAddressStreet: string;

declare var kPPAddressStreet2: string;

declare var kPPAuditInformation: string;

declare var kPPCardRevisionDate: string;

declare var kPPCode128: string;

declare var kPPCode39: string;

declare var kPPComplianceType: string;

declare var kPPCountryIdentification: string;

declare var kPPCustomerFamilyName: string;

declare var kPPCustomerFirstName: string;

declare var kPPCustomerFullName: string;

declare var kPPCustomerIdNumber: string;

declare var kPPCustomerMiddleName: string;

declare var kPPDataDiscriminator: string;

declare var kPPDateOfBirth: string;

declare var kPPDocumentDiscriminator: string;

declare var kPPDocumentExpirationDate: string;

declare var kPPDocumentExpirationMonth: string;

declare var kPPDocumentIssueDate: string;

declare var kPPDocumentNonexpiring: string;

declare var kPPDocumentType: string;

declare var kPPEyeColor: string;

declare var kPPFamilyNameTruncation: string;

declare var kPPFederalCommercialVehicleCodes: string;

declare var kPPFirstNameTruncation: string;

declare var kPPFullAddress: string;

declare var kPPHAZMATExpirationDate: string;

declare var kPPHairColor: string;

declare var kPPHeight: string;

declare var kPPHeightCm: string;

declare var kPPHeightIn: string;

declare var kPPInventoryControlNumber: string;

declare var kPPIssueTimestamp: string;

declare var kPPIssuerIdentificationNumber: string;

declare var kPPIssuingJurisdiction: string;

declare var kPPJurisdictionEndorsementCodes: string;

declare var kPPJurisdictionEndorsmentCodeDescription: string;

declare var kPPJurisdictionRestrictionCodeDescription: string;

declare var kPPJurisdictionRestrictionCodes: string;

declare var kPPJurisdictionVehicleClass: string;

declare var kPPJurisdictionVehicleClassificationDescription: string;

declare var kPPJurisdictionVersionNumber: string;

declare var kPPLimitedDurationDocument: string;

declare var kPPMedicalIndicator: string;

declare var kPPMiddleNameTruncation: string;

declare var kPPNamePrefix: string;

declare var kPPNameSuffix: string;

declare var kPPNonResident: string;

declare var kPPNumberOfDuplicates: string;

declare var kPPOrganDonor: string;

declare var kPPPdf417: string;

declare var kPPPermitExpirationDate: string;

declare var kPPPermitIdentifier: string;

declare var kPPPermitIssueDate: string;

declare var kPPPlaceOfBirth: string;

declare var kPPRaceEthnicity: string;

declare var kPPResidenceCity: string;

declare var kPPResidenceFullAddress: string;

declare var kPPResidenceJurisdictionCode: string;

declare var kPPResidencePostalCode: string;

declare var kPPResidenceStreetAddress: string;

declare var kPPResidenceStreetAddress2: string;

declare var kPPSecurityVersion: string;

declare var kPPSex: string;

declare var kPPSocialSecurityNumber: string;

declare var kPPStandardEndorsementCode: string;

declare var kPPStandardRestrictionCode: string;

declare var kPPStandardVehicleClassification: string;

declare var kPPStandardVersionNumber: string;

declare var kPPUnder18: string;

declare var kPPUnder19: string;

declare var kPPUnder21: string;

declare var kPPUniqueCustomerId: string;

declare var kPPVeteran: string;

declare var kPPWeightKilograms: string;

declare var kPPWeightPounds: string;

declare var kPPWeightRange: string;

declare function scanningRegionForFrameInBounds(frame: CGRect, bounds: CGRect): CGRect;

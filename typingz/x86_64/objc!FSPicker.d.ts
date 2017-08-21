
declare class FSConfig extends NSObject {

	static alloc(): FSConfig; // inherited from NSObject

	static new(): FSConfig; // inherited from NSObject

	apiKey: string;

	data: NSData;

	dataExtension: string;

	dataMimeType: string;

	defaultToFrontCamera: boolean;

	gmailService: GTLRGmailService;

	localDataURL: NSURL;

	maxFiles: number;

	maxSize: number;

	mimeTypes: NSArray<string>;

	proposedFileName: string;

	selectMultiple: boolean;

	service: GTLRDriveService;

	shouldDownload: boolean;

	shouldUpload: boolean;

	sources: NSArray<string>;

	storeOptions: FSStoreOptions;

	title: string;

	constructor(o: { apiKey: string; });

	constructor(o: { apiKey: string; storeOptions: FSStoreOptions; });

	initWithApiKey(apiKey: string): this;

	initWithApiKeyStoreOptions(apiKey: string, storeOptions: FSStoreOptions): this;
}

declare class FSGoogleServicesManager extends NSObject {

	static alloc(): FSGoogleServicesManager; // inherited from NSObject

	static new(): FSGoogleServicesManager; // inherited from NSObject

	static shared(): FSGoogleServicesManager;

	clientId: string;

	currentAuthorizationFlow: OIDAuthorizationFlowSession;

	delegate: FSGoogleServicesManagerDelegate;

	redirectURI: string;

	applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): void;

	applicationOpenURLOptions(app: UIApplication, url: NSURL, options: NSDictionary<any, any>): boolean;
}

interface FSGoogleServicesManagerDelegate extends NSObjectProtocol {

	authForScopes(scopes: NSArray<any>): void;
}
declare var FSGoogleServicesManagerDelegate: {

	prototype: FSGoogleServicesManagerDelegate;
};

declare class FSPickerController extends UINavigationController {

	static alloc(): FSPickerController; // inherited from NSObject

	static new(): FSPickerController; // inherited from NSObject

	config: FSConfig;

	fsDelegate: FSPickerDelegate;

	theme: FSTheme;

	constructor(o: { config: FSConfig; });

	constructor(o: { config: FSConfig; theme: FSTheme; });

	didCancel(): void;

	initWithConfig(config: FSConfig): this;

	initWithConfigTheme(config: FSConfig, theme: FSTheme): this;
}

interface FSPickerDelegate extends NSObjectProtocol {

	fsPickerDidCancel?(picker: FSPickerController): void;

	fsPickerDidFinishPickingMediaWithBlobs?(picker: FSPickerController, blobs: NSArray<FSBlob>): void;

	fsPickerPickedMediaWithBlob?(picker: FSPickerController, blob: FSBlob): void;

	fsPickerPickingDidError?(picker: FSPickerController, error: NSError): void;
}
declare var FSPickerDelegate: {

	prototype: FSPickerDelegate;
};

declare var FSPickerVersionNumber: number;

declare var FSPickerVersionNumberVar: number;

declare var FSPickerVersionString: interop.Reference<number>;

declare var FSPickerVersionStringVar: interop.Reference<number>;

declare class FSSaveController extends UINavigationController {

	static alloc(): FSSaveController; // inherited from NSObject

	static new(): FSSaveController; // inherited from NSObject

	config: FSConfig;

	fsDelegate: FSSaveDelegate;

	theme: FSTheme;

	constructor(o: { config: FSConfig; });

	constructor(o: { config: FSConfig; theme: FSTheme; });

	didCancel(): void;

	initWithConfig(config: FSConfig): this;

	initWithConfigTheme(config: FSConfig, theme: FSTheme): this;
}

interface FSSaveDelegate extends NSObjectProtocol {

	fsSaveControllerDidCancel?(saveController: FSSaveController): void;

	fsSaveControllerDidFinishSavingMediaWithBlob?(saveController: FSSaveController, blob: FSBlob): void;

	fsSaveControllerSavingDidError?(saveController: FSSaveController, error: NSError): void;
}
declare var FSSaveDelegate: {

	prototype: FSSaveDelegate;
};

declare var FSSourceBox: string;

declare var FSSourceCamera: string;

declare var FSSourceCameraRoll: string;

declare var FSSourceCloudDrive: string;

declare var FSSourceDropbox: string;

declare var FSSourceEvernote: string;

declare var FSSourceFacebook: string;

declare var FSSourceFlickr: string;

declare var FSSourceGithub: string;

declare var FSSourceGmail: string;

declare var FSSourceGoogleDrive: string;

declare var FSSourceImageSearch: string;

declare var FSSourceInstagram: string;

declare var FSSourcePicasa: string;

declare var FSSourceSkydrive: string;

declare class FSTheme extends NSObject {

	static alloc(): FSTheme; // inherited from NSObject

	static applyDefaultToController(controller: UIResponder): void;

	static filestackTheme(): FSTheme;

	static new(): FSTheme; // inherited from NSObject

	activityIndicatorColor: UIColor;

	cellIconTintColor: UIColor;

	collectionViewBackgroundColor: UIColor;

	collectionViewCellBackgroundColor: UIColor;

	collectionViewCellBorderColor: UIColor;

	collectionViewCellTitleTextColor: UIColor;

	headerFooterViewTextColor: UIColor;

	headerFooterViewTintColor: UIColor;

	navigationBarBackgroundColor: UIColor;

	navigationBarStyle: UIBarStyle;

	navigationBarTintColor: UIColor;

	navigationBarTitleColor: UIColor;

	progressCircleProgressColor: UIColor;

	progressCircleTrackColor: UIColor;

	refreshControlAttributedTitle: NSAttributedString;

	refreshControlBackgroundColor: UIColor;

	refreshControlTintColor: UIColor;

	searchBarBackgroundColor: UIColor;

	searchBarTintColor: UIColor;

	tableViewBackgroundColor: UIColor;

	tableViewCellBackgroundColor: UIColor;

	tableViewCellIconTintColor: UIColor;

	tableViewCellImageViewBorderColor: UIColor;

	tableViewCellSelectedBackgroundColor: UIColor;

	tableViewCellSelectedTextColor: UIColor;

	tableViewCellTextColor: UIColor;

	tableViewSeparatorColor: UIColor;

	uploadButtonBackgroundColor: UIColor;

	uploadButtonTextColor: UIColor;

	applyToController(controller: UIResponder): void;
}

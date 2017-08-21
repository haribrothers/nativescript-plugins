
declare class FSASCII extends FSTransform {

	static alloc(): FSASCII; // inherited from NSObject

	static new(): FSASCII; // inherited from NSObject

	background: string;

	colored: boolean;

	foreground: string;

	reverse: boolean;

	size: number;

	constructor(o: { foreground: string; background: string; size: number; reverse: boolean; colored: boolean; });

	initWithForegroundBackgroundSizeReverseColored(foreground: string, background: string, size: number, reverse: boolean, colored: boolean): this;
}

declare class FSBlob extends NSObject {

	static alloc(): FSBlob; // inherited from NSObject

	static new(): FSBlob; // inherited from NSObject

	container: string;

	fileName: string;

	internalURL: string;

	key: string;

	mimeType: string;

	path: string;

	readonly s3url: string;

	size: number;

	url: string;

	writeable: number;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	constructor(o: { URL: string; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;

	initWithURL(url: string): this;
}

declare class FSBlur extends FSTransform {

	static alloc(): FSBlur; // inherited from NSObject

	static new(): FSBlur; // inherited from NSObject

	amount: number;

	constructor(o: { amount: number; });

	initWithAmount(amount: number): this;
}

declare class FSBlurFaces extends FSTransform {

	static alloc(): FSBlurFaces; // inherited from NSObject

	static new(): FSBlurFaces; // inherited from NSObject

	allFaces: boolean;

	amount: number;

	blur: number;

	buffer: number;

	face: number;

	faces: NSArray<number>;

	maxSize: number;

	minSize: number;

	type: string;

	constructor(o: { allFacesAndMinSize: number; maxSize: number; type: string; buffer: number; blurAmount: number; obscureAmount: number; });

	constructor(o: { minSize: number; maxSize: number; type: string; buffer: number; blurAmount: number; obscureAmount: number; });

	constructor(o: { minSize: number; maxSize: number; type: string; buffer: number; blurAmount: number; obscureAmount: number; face: number; });

	constructor(o: { minSize: number; maxSize: number; type: string; buffer: number; blurAmount: number; obscureAmount: number; faces: NSArray<number>; });

	initWithAllFacesAndMinSizeMaxSizeTypeBufferBlurAmountObscureAmount(minSize: number, maxSize: number, type: string, buffer: number, blurAmount: number, obscureAmount: number): this;

	initWithMinSizeMaxSizeTypeBufferBlurAmountObscureAmount(minSize: number, maxSize: number, type: string, buffer: number, blurAmount: number, obscureAmount: number): this;

	initWithMinSizeMaxSizeTypeBufferBlurAmountObscureAmountFace(minSize: number, maxSize: number, type: string, buffer: number, blurAmount: number, obscureAmount: number, face: number): this;

	initWithMinSizeMaxSizeTypeBufferBlurAmountObscureAmountFaces(minSize: number, maxSize: number, type: string, buffer: number, blurAmount: number, obscureAmount: number, faces: NSArray<number>): this;
}

declare class FSBorder extends FSTransform {

	static alloc(): FSBorder; // inherited from NSObject

	static new(): FSBorder; // inherited from NSObject

	background: string;

	color: string;

	width: number;

	constructor(o: { width: number; color: string; background: string; });

	initWithWidthColorBackground(width: number, color: string, background: string): this;
}

declare class FSCircle extends FSTransform {

	static alloc(): FSCircle; // inherited from NSObject

	static new(): FSCircle; // inherited from NSObject

	background: string;

	constructor(o: { background: string; });

	initWithBackground(background: string): this;
}

declare class FSCollage extends FSTransform {

	static alloc(): FSCollage; // inherited from NSObject

	static new(): FSCollage; // inherited from NSObject

	color: string;

	files: NSArray<FSBlob>;

	height: number;

	margin: number;

	width: number;

	constructor(o: { files: NSArray<FSBlob>; width: number; height: number; });

	constructor(o: { files: NSArray<FSBlob>; width: number; height: number; margin: number; color: string; });

	initWithFilesWidthHeight(files: NSArray<FSBlob>, width: number, height: number): this;

	initWithFilesWidthHeightMarginColor(files: NSArray<FSBlob>, width: number, height: number, margin: number, color: string): this;
}

declare class FSCrop extends FSTransform {

	static alloc(): FSCrop; // inherited from NSObject

	static new(): FSCrop; // inherited from NSObject

	height: number;

	width: number;

	x: number;

	y: number;

	constructor(o: { x: number; y: number; width: number; height: number; });

	initWithXYWidthHeight(x: number, y: number, width: number, height: number): this;
}

declare class FSCropFaces extends FSTransform {

	static alloc(): FSCropFaces; // inherited from NSObject

	static new(): FSCropFaces; // inherited from NSObject

	allFaces: boolean;

	buffer: number;

	face: number;

	faces: NSArray<number>;

	height: number;

	mode: string;

	width: number;

	constructor(o: { allFacesWithMode: string; width: number; height: number; buffer: number; });

	constructor(o: { mode: string; width: number; height: number; buffer: number; });

	constructor(o: { mode: string; width: number; height: number; buffer: number; face: number; });

	constructor(o: { mode: string; width: number; height: number; buffer: number; faces: NSArray<number>; });

	initAllFacesWithModeWidthHeightBuffer(mode: string, width: number, height: number, buffer: number): this;

	initWithModeWidthHeightBuffer(mode: string, width: number, height: number, buffer: number): this;

	initWithModeWidthHeightBufferFace(mode: string, width: number, height: number, buffer: number, face: number): this;

	initWithModeWidthHeightBufferFaces(mode: string, width: number, height: number, buffer: number, faces: NSArray<number>): this;
}

declare class FSDetectFaces extends FSTransform {

	static alloc(): FSDetectFaces; // inherited from NSObject

	static new(): FSDetectFaces; // inherited from NSObject

	color: string;

	exportToJSON: boolean;

	maxSize: number;

	minSize: number;

	constructor(o: { exportToJSON: void; });

	constructor(o: { minSize: number; maxSize: number; color: string; exportToJSON: boolean; });

	initWithExportToJSON(): this;

	initWithMinSizeMaxSizeColorExportToJSON(minSize: number, maxSize: number, color: string, exportToJSON: boolean): this;
}

interface FSFilestackDelegate extends NSObjectProtocol {

	filestackDownloadSuccess?(data: NSData): void;

	filestackPickURLSuccess?(blob: FSBlob): void;

	filestackRemoveSuccess?(): void;

	filestackRequestError?(error: NSError): void;

	filestackStatSuccess?(metadata: FSMetadata): void;

	filestackStoreSuccess?(blob: FSBlob): void;

	filestackTransformSuccess?(data: NSData): void;

	filestackTransformSuccessJSON?(JSON: NSDictionary<any, any>): void;
}
declare var FSFilestackDelegate: {

	prototype: FSFilestackDelegate;
};

declare var FSFilestackIOSVersionNumber: number;

declare var FSFilestackIOSVersionString: interop.Reference<number>;

declare class FSFlip extends FSTransform {

	static alloc(): FSFlip; // inherited from NSObject

	static new(): FSFlip; // inherited from NSObject
}

declare class FSFlop extends FSTransform {

	static alloc(): FSFlop; // inherited from NSObject

	static new(): FSFlop; // inherited from NSObject
}

declare class FSMetadata extends NSObject {

	static alloc(): FSMetadata; // inherited from NSObject

	static new(): FSMetadata; // inherited from NSObject

	readonly container: string;

	readonly fileName: string;

	readonly height: number;

	readonly location: string;

	readonly md5: string;

	readonly mimeType: string;

	readonly path: string;

	readonly s3url: string;

	readonly size: number;

	readonly uploaded: number;

	readonly width: number;

	readonly writeable: number;
}

declare class FSModulate extends FSTransform {

	static alloc(): FSModulate; // inherited from NSObject

	static new(): FSModulate; // inherited from NSObject

	brightness: number;

	hue: number;

	saturation: number;

	constructor(o: { brightness: number; hue: number; saturation: number; });

	initWithBrightnessHueSaturation(brightness: number, hue: number, saturation: number): this;
}

declare class FSMonochrome extends FSTransform {

	static alloc(): FSMonochrome; // inherited from NSObject

	static new(): FSMonochrome; // inherited from NSObject
}

declare class FSMultipartUpload extends NSObject {

	static alloc(): FSMultipartUpload; // inherited from NSObject

	static new(): FSMultipartUpload; // inherited from NSObject

	constructor(o: { options: FSUploadOptions; withStoreOptions: FSStoreOptions; withApiKey: string; onStart: () => void; onRetry: (p1: number, p2: number) => void; progress: (p1: NSProgress) => void; completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void; });

	cancel(): void;

	initWithOptionsWithStoreOptionsWithApiKeyOnStartOnRetryProgressCompletionHandler(uploadOptions: FSUploadOptions, storeOptions: FSStoreOptions, apiKey: string, onStart: () => void, onRetry: (p1: number, p2: number) => void, progress: (p1: NSProgress) => void, completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): this;

	pause(): void;

	resume(): void;

	upload(file: NSData): void;
}

declare class FSOilPaint extends FSTransform {

	static alloc(): FSOilPaint; // inherited from NSObject

	static new(): FSOilPaint; // inherited from NSObject

	amount: number;

	constructor(o: { amount: number; });

	initWithAmount(amount: number): this;
}

declare class FSOutput extends FSTransform {

	static alloc(): FSOutput; // inherited from NSObject

	static new(): FSOutput; // inherited from NSObject

	colorspace: string;

	compress: boolean;

	density: number;

	docInfo: boolean;

	format: string;

	page: number;

	quality: number;

	secure: boolean;

	constructor(o: { docInfo: void; });

	constructor(o: { format: string; });

	constructor(o: { format: string; colorspace: string; page: number; density: number; compress: boolean; quality: number; secure: boolean; });

	initWithDocInfo(): this;

	initWithFormat(format: string): this;

	initWithFormatColorspacePageDensityCompressQualitySecure(format: string, colorspace: string, page: number, density: number, compress: boolean, quality: number, secure: boolean): this;
}

declare class FSPartialBlur extends FSTransform {

	static alloc(): FSPartialBlur; // inherited from NSObject

	static new(): FSPartialBlur; // inherited from NSObject

	amount: number;

	blur: number;

	buffer: number;

	objects: NSArray<NSArray<number>>;

	type: string;

	constructor(o: { objects: NSArray<NSArray<number>>; });

	constructor(o: { objects: NSArray<NSArray<number>>; buffer: number; amount: number; blur: number; type: string; });

	initWithObjects(objects: NSArray<NSArray<number>>): this;

	initWithObjectsBufferAmountBlurType(objects: NSArray<NSArray<number>>, buffer: number, amount: number, blur: number, type: string): this;
}

declare class FSPartialPixelate extends FSTransform {

	static alloc(): FSPartialPixelate; // inherited from NSObject

	static new(): FSPartialPixelate; // inherited from NSObject

	amount: number;

	blur: number;

	buffer: number;

	objects: NSArray<NSArray<number>>;

	type: string;

	constructor(o: { objects: NSArray<NSArray<number>>; });

	constructor(o: { objects: NSArray<NSArray<number>>; buffer: number; amount: number; blur: number; type: string; });

	initWithObjects(objects: NSArray<NSArray<number>>): this;

	initWithObjectsBufferAmountBlurType(objects: NSArray<NSArray<number>>, buffer: number, amount: number, blur: number, type: string): this;
}

declare class FSPixelate extends FSTransform {

	static alloc(): FSPixelate; // inherited from NSObject

	static new(): FSPixelate; // inherited from NSObject

	amount: number;

	constructor(o: { amount: number; });

	initWithAmount(amount: number): this;
}

declare class FSPixelateFaces extends FSTransform {

	static alloc(): FSPixelateFaces; // inherited from NSObject

	static new(): FSPixelateFaces; // inherited from NSObject

	allFaces: boolean;

	amount: number;

	blur: number;

	buffer: number;

	face: number;

	faces: NSArray<number>;

	maxSize: number;

	minSize: number;

	type: string;

	constructor(o: { allFacesAndMinSize: number; maxSize: number; type: string; buffer: number; blurAmount: number; pixelateAmount: number; });

	constructor(o: { minSize: number; maxSize: number; type: string; buffer: number; blurAmount: number; pixelateAmount: number; });

	constructor(o: { minSize: number; maxSize: number; type: string; buffer: number; blurAmount: number; pixelateAmount: number; face: number; });

	constructor(o: { minSize: number; maxSize: number; type: string; buffer: number; blurAmount: number; pixelateAmount: number; faces: NSArray<number>; });

	initWithAllFacesAndMinSizeMaxSizeTypeBufferBlurAmountPixelateAmount(minSize: number, maxSize: number, type: string, buffer: number, blurAmount: number, pixelateAmount: number): this;

	initWithMinSizeMaxSizeTypeBufferBlurAmountPixelateAmount(minSize: number, maxSize: number, type: string, buffer: number, blurAmount: number, pixelateAmount: number): this;

	initWithMinSizeMaxSizeTypeBufferBlurAmountPixelateAmountFace(minSize: number, maxSize: number, type: string, buffer: number, blurAmount: number, pixelateAmount: number, face: number): this;

	initWithMinSizeMaxSizeTypeBufferBlurAmountPixelateAmountFaces(minSize: number, maxSize: number, type: string, buffer: number, blurAmount: number, pixelateAmount: number, faces: NSArray<number>): this;
}

declare class FSPolaroid extends FSTransform {

	static alloc(): FSPolaroid; // inherited from NSObject

	static new(): FSPolaroid; // inherited from NSObject

	background: string;

	color: string;

	rotate: number;

	constructor(o: { color: string; background: string; rotation: number; });

	initWithColorBackgroundRotation(color: string, background: string, rotate: number): this;
}

declare class FSResize extends FSTransform {

	static alloc(): FSResize; // inherited from NSObject

	static new(): FSResize; // inherited from NSObject

	align: string;

	fit: string;

	height: number;

	width: number;

	constructor(o: { height: number; });

	constructor(o: { width: number; });

	constructor(o: { width: number; height: number; });

	constructor(o: { width: number; height: number; fit: string; });

	constructor(o: { width: number; height: number; fit: string; align: string; });

	initWithHeight(height: number): this;

	initWithWidth(width: number): this;

	initWithWidthHeight(width: number, height: number): this;

	initWithWidthHeightFit(width: number, height: number, fit: string): this;

	initWithWidthHeightFitAlign(width: number, height: number, fit: string, align: string): this;
}

declare class FSRetryOptions extends NSObject {

	static alloc(): FSRetryOptions; // inherited from NSObject

	static new(): FSRetryOptions; // inherited from NSObject

	factor: number;

	maxTimeout: number;

	minTimeout: number;

	retries: number;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class FSRotate extends FSTransform {

	static alloc(): FSRotate; // inherited from NSObject

	static new(): FSRotate; // inherited from NSObject

	background: string;

	degrees: number;

	resetEXIF: boolean;

	toEXIF: boolean;

	constructor(o: { degrees: number; background: string; rotateToEXIF: boolean; resetEXIF: boolean; });

	initWithDegreesBackgroundRotateToEXIFResetEXIF(degrees: number, background: string, toEXIF: boolean, resetEXIF: boolean): this;
}

declare class FSRoundedCorners extends FSTransform {

	static alloc(): FSRoundedCorners; // inherited from NSObject

	static new(): FSRoundedCorners; // inherited from NSObject

	background: string;

	blur: number;

	maxRadius: boolean;

	radius: number;

	constructor(o: { maxRadiusAndBlur: number; background: string; });

	constructor(o: { radius: number; blur: number; background: string; });

	initWithMaxRadiusAndBlurBackground(blur: number, background: string): this;

	initWithRadiusBlurBackground(radius: number, blur: number, background: string): this;
}

declare class FSSecurity extends NSObject {

	static alloc(): FSSecurity; // inherited from NSObject

	static new(): FSSecurity; // inherited from NSObject

	readonly policy: string;

	readonly signature: string;

	constructor(o: { policy: string; signature: string; });

	initWithPolicySignature(policy: string, signature: string): this;
}

declare class FSSepia extends FSTransform {

	static alloc(): FSSepia; // inherited from NSObject

	static new(): FSSepia; // inherited from NSObject

	tone: number;

	constructor(o: { tone: number; });

	initWithTone(tone: number): this;
}

declare class FSShadow extends FSTransform {

	static alloc(): FSShadow; // inherited from NSObject

	static new(): FSShadow; // inherited from NSObject

	background: string;

	blur: number;

	color: string;

	opacity: number;

	vector: NSArray<number>;

	constructor(o: { blur: number; opacity: number; vector: NSArray<number>; color: string; background: string; });

	initWithBlurOpacityVectorColorBackground(blur: number, opacity: number, vector: NSArray<number>, color: string, background: string): this;
}

declare class FSSharpen extends FSTransform {

	static alloc(): FSSharpen; // inherited from NSObject

	static new(): FSSharpen; // inherited from NSObject

	amount: number;

	constructor(o: { amount: number; });

	initWithAmount(amount: number): this;
}

declare class FSStatOptions extends NSObject {

	static alloc(): FSStatOptions; // inherited from NSObject

	static new(): FSStatOptions; // inherited from NSObject

	container: boolean;

	fileName: boolean;

	height: boolean;

	location: boolean;

	md5: boolean;

	mimeType: boolean;

	path: boolean;

	size: boolean;

	readonly toQueryParameters: NSDictionary<any, any>;

	uploaded: boolean;

	width: boolean;

	writeable: boolean;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class FSStoreOptions extends NSObject {

	static alloc(): FSStoreOptions; // inherited from NSObject

	static new(): FSStoreOptions; // inherited from NSObject

	access: string;

	base64decode: boolean;

	container: string;

	fileName: string;

	location: string;

	mimeType: string;

	path: string;

	region: string;

	security: FSSecurity;

	readonly storeLocation: string;

	readonly toQueryParameters: NSDictionary<any, any>;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class FSTornEdges extends FSTransform {

	static alloc(): FSTornEdges; // inherited from NSObject

	static new(): FSTornEdges; // inherited from NSObject

	background: string;

	spread: NSArray<number>;

	constructor(o: { spread: NSArray<number>; background: string; });

	initWithSpreadBackground(spread: NSArray<number>, background: string): this;
}

declare class FSTransform extends NSObject {

	static alloc(): FSTransform; // inherited from NSObject

	static new(): FSTransform; // inherited from NSObject
}

declare class FSTransformation extends NSObject {

	static alloc(): FSTransformation; // inherited from NSObject

	static new(): FSTransformation; // inherited from NSObject

	debug: boolean;

	readonly willReturnJSON: boolean;

	constructor(o: { queryString: string; });

	add(transform: FSTransform): void;

	initWithQueryString(queryString: string): this;

	transformationURLWithApiKeySecurityURLToTransform(apiKey: string, security: FSSecurity, urlToTransform: string): string;
}

declare class FSURLScreenshot extends FSTransform {

	static alloc(): FSURLScreenshot; // inherited from NSObject

	static new(): FSURLScreenshot; // inherited from NSObject

	agent: string;

	height: number;

	mode: string;

	width: number;

	constructor(o: { width: number; height: number; agent: string; mode: string; });

	initWithWidthHeightAgentMode(width: number, height: number, agent: string, mode: string): this;
}

declare class FSUploadOptions extends NSObject {

	static alloc(): FSUploadOptions; // inherited from NSObject

	static new(): FSUploadOptions; // inherited from NSObject

	maxConcurrentUploads: number;

	partSize: number;

	retryOptions: FSRetryOptions;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class FSWatermark extends FSTransform {

	static alloc(): FSWatermark; // inherited from NSObject

	static new(): FSWatermark; // inherited from NSObject

	blob: FSBlob;

	position: string;

	size: number;

	constructor(o: { blob: FSBlob; size: number; position: string; });

	initWithBlobSizePosition(blob: FSBlob, size: number, position: string): this;
}

declare class Filestack extends NSObject {

	static alloc(): Filestack; // inherited from NSObject

	static exportURLParametersCompletionHandler(fsURL: string, parameters: NSDictionary<any, any>, completionHandler: (p1: FSBlob, p2: NSError) => void): void;

	static getContentForPathParametersCompletionHandler(contentPath: string, parameters: NSDictionary<any, any>, completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): void;

	static logoutFromSourceExternalDomainsParametersCompletionHandler(sourceIdentifier: string, externalDomains: NSArray<any>, parameters: NSDictionary<any, any>, completionHandler: (p1: NSError) => void): void;

	static new(): Filestack; // inherited from NSObject

	static pickFSURLParametersCompletionHandler(fsURL: string, parameters: NSDictionary<any, any>, completionHandler: (p1: FSBlob, p2: NSError) => void): void;

	delegate: FSFilestackDelegate;

	constructor(o: { apiKey: string; });

	constructor(o: { apiKey: string; delegate: FSFilestackDelegate; });

	downloadSecurityCompletionHandler(blob: FSBlob, security: FSSecurity, completionHandler: (p1: NSData, p2: NSError) => void): void;

	initWithApiKey(apiKey: string): this;

	initWithApiKeyDelegate(apiKey: string, delegate: FSFilestackDelegate): this;

	pickURLSecurityCompletionHandler(url: string, security: FSSecurity, completionHandler: (p1: FSBlob, p2: NSError) => void): void;

	removeSecurityCompletionHandler(blob: FSBlob, security: FSSecurity, completionHandler: (p1: NSError) => void): void;

	statWithOptionsCompletionHandler(blob: FSBlob, statOptions: FSStatOptions, completionHandler: (p1: FSMetadata, p2: NSError) => void): void;

	storeURLWithOptionsCompletionHandler(url: string, storeOptions: FSStoreOptions, completionHandler: (p1: FSBlob, p2: NSError) => void): void;

	storeWithOptionsProgressCompletionHandler(data: NSData, storeOptions: FSStoreOptions, progress: (p1: NSProgress) => void, completionHandler: (p1: FSBlob, p2: NSError) => void): void;

	transformURLTransformationSecurityCompletionHandler(url: string, transformation: FSTransformation, security: FSSecurity, completionHandler: (p1: NSData, p2: NSDictionary<any, any>, p3: NSError) => void): void;

	uploadWithOptionsWithStoreOptionsOnStartOnRetryProgressCompletionHandler(data: NSData, uploadOptions: FSUploadOptions, storeOptions: FSStoreOptions, onStart: () => void, onRetry: (p1: number, p2: number) => void, progress: (p1: NSProgress) => void, completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): FSMultipartUpload;
}

declare var FilestackVersionNumber: number;

declare var FilestackVersionString: interop.Reference<number>;

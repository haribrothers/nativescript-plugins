declare var FSConfig, FSStoreOptions, FSTheme, FSPickerController, FSPickerDelegate;

class FileStackDelegate extends NSObject {
    public static ObjCProtocols = [FSPickerDelegate];
    private _owner: WeakRef<FileStack>;

    public static initWithOwner(owner: WeakRef<FileStack>){
        let delegate = <FileStackDelegate>FileStackDelegate.new();
        delegate._owner = owner;
        return delegate;
    }

    // Called when user dismisses the picker controller.
    public fsPickerDidCancel(picker) {
        console.log("fsPickerDidCancel")
    }

    // Called when picking of a single file resulted in error.
    // This does not mean that picking of the rest of the files (in case of multiple files available) is interrupted.
    // All files of multiple files pick, that resulted in error will call this method.
    public fsPickerPickingDidError(picker, error: NSError) {
        console.log("fsPickerPickingDidError")
    }

    // Called when picking of a single file completed with success.
    // If you are picking multiple files this will be called for each of successfully picked file.
    public fsPickerPickedMediaWithBlob(picker, blob) {
        console.log("fsPickerpickedMediaWithBlob", blob)
    }

    // Called when "files picking" is finished. Blobs array will contain blobs of all successfully picked files.
    public fsPickerDidFinishPickingMediaWithBlobs(picker, blobs: NSArray<any>) {
        console.log("fsPickerDidFinishPickingMediaWithBlobs", blobs)
    }
}

export class FileStack {
    private _config;
    private _storeOptions;
    constructor(apikey: string) {
        this._config = FSConfig.alloc().initWithApiKey(apikey);

        this._storeOptions = FSStoreOptions.alloc().init();
        this._storeOptions.location = "S3";

        this._config.storeOptions = this._storeOptions;

        let theme = FSTheme.filestackTheme();

        let fsPickerController = FSPickerController.alloc().initWithConfigTheme(this._config, theme);
        fsPickerController.fsDelegate = FileStackDelegate.initWithOwner(new WeakRef(this));


        rootVC().presentViewControllerAnimatedCompletion(fsPickerController, true, null);
        // present the controller


    }
}

const rootVC = function () {
    let appWindow = UIApplication.sharedApplication.keyWindow;
    return appWindow.rootViewController;
}
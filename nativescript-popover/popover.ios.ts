export class Popover {
    public tableData: Array<any> = ["Item1", "Item2", "Item3", "Item4", "Item5"];
    public selectedItem: number;
    private _tableDelegate: PopoverUITableViewDelegateImpl;
    private _tableviewcontroller: any;
    private _tableview: UITableView;
    private _resolve:(value:number)=>void;
    constructor() {

    }


    public popoverButtonPressed(sender: any, itemList: Array<any>, selectedItem: number): Promise<number> {
        // this.tableData = itemList;
        let self = this;
        return new Promise((resolve, reject) => {
            try {
                let style = UITableViewStyle.Plain
                self.tableData = itemList;
                self.selectedItem = selectedItem;
                self._tableviewcontroller = new UITableViewController({ style: UITableViewStyle.Plain });
                self._tableviewcontroller.modalPresentationStyle = UIModalPresentationStyle.Popover;
                self._tableview = self._tableviewcontroller.tableView
                self._tableview.dataSource = PopoverDataSource.initWithOwner(new WeakRef(this));
                self._tableDelegate = PopoverUITableViewDelegateImpl.initWithOwner(new WeakRef(this));;
                self._tableview.delegate = self._tableDelegate;
                self._resolve =resolve;
                self._tableDelegate.setCallback((value: number) => {
                    self._resolve(value);
                });
                self._tableviewcontroller.preferredContentSize = CGSizeMake(400, 400);
                rootVC().presentViewControllerAnimatedCompletion(self._tableviewcontroller, false, null);
                let popoverPresentationController = self._tableviewcontroller.popoverPresentationController;
                popoverPresentationController.sourceView = sender;
                popoverPresentationController.sourceRect = CGRectMake(0, 0, sender.frame.size.width, sender.frame.size.height);
                if(self.selectedItem >-1){
                    // let selectedCell = self._tableview.cellForRowAtIndexPath(new NSIndexPath({index:self.selectedItem}));
                    // self._tableview.scrollToRowAtIndexPathAtScrollPositionAnimated(new NSIndexPath({index:self.selectedItem}),UITableViewScrollPosition.Top,false)
                }
            } catch (err) {
                reject(err);
            }
        });
    }
}

class PopoverDataSource extends NSObject implements UITableViewDataSource {
    public static ObjCProtocols = [UITableViewDataSource];
    // public _tableData: Array<any> = [];
    private _owner: WeakRef<Popover>;
    private _resolve: (value?: any) => void

    public initWithCallback(callback: (value?: any) => void) {
        this._resolve = callback;
    }
    public static initWithOwner(owner: WeakRef<Popover>): PopoverDataSource {
        let dataSource = <PopoverDataSource>PopoverDataSource.new();
        dataSource._owner = owner;
        return dataSource;
    }
    public tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell {
        let simpleTableIdentifier = "SimpleTableItem";
        let cell = tableView.dequeueReusableCellWithIdentifier(simpleTableIdentifier)
        if (cell == null) {
            cell = UITableViewCell.alloc().initWithStyleReuseIdentifier(UITableViewCellStyle.Default, simpleTableIdentifier)
        }

        cell.textLabel.text = this._owner.get().tableData[indexPath.row];
        if(this._owner.get().selectedItem === indexPath.row){
            cell.accessoryType = UITableViewCellAccessoryType.Checkmark;
            // tableView.setContentOffsetAnimated(CGPointMake(0,cell.center.y-65),false);
        }
        return cell;
    }

    public tableViewNumberOfRowsInSection(tableView: UITableView, section: number) {
        let owner = this._owner.get();
        return (owner && owner.tableData) ? owner.tableData.length : 0;
    }

}

class PopoverUITableViewDelegateImpl extends NSObject /*implements UITableViewDelegate*/ {
    public static ObjCProtocols = [UITableViewDelegate];
    private _owner: WeakRef<Popover>;
    private _callback: (value: number) => void;

    public static initWithOwner(owner: WeakRef<Popover>): PopoverUITableViewDelegateImpl {
        const delegate = <PopoverUITableViewDelegateImpl>PopoverUITableViewDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    }

    public setCallback(callback: (value: number) => void): void {
        this._callback = callback;
    }

    public tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath) {
        tableView.deselectRowAtIndexPathAnimated(indexPath, true);
        console.log(indexPath.row);
        this._callback(indexPath.row);
        rootVC().dismissViewControllerAnimatedCompletion(true, null);

        // return indexPath;
    }
}

class PopoverUITableViewRowHeightDelegateImpl extends NSObject implements UITableViewDelegate {
    public static ObjCProtocols = [UITableViewDelegate];
}

const rootVC = function () {
    let appWindow = UIApplication.sharedApplication.keyWindow;
    return appWindow.rootViewController;
}
export declare class Popover {
    tableData: Array<any>;
    selectedItem: number;
    private _tableDelegate;
    private _tableviewcontroller;
    private _tableview;
    private _resolve;
    constructor();
    popoverButtonPressed(sender: any, itemList: Array<any>, selectedItem: number): Promise<number>;
}

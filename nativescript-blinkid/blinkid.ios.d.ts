export declare class BlinkID {
    private _license;
    private _resolve;
    constructor(licenseKey: string);
    coordinatorWithError(error: any, type: any, license: any): any;
    didTapScan(type: string): Promise<any>;
}

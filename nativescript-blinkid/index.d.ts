export declare class PassportData {
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
export declare class ScanData {
    Type: BlinkIDType;
    PassportData: PassportData;
    Pdf417Data: string;
    QRCodeData: string;
}
export declare const enum BlinkIDType {
    PASSPORT = "PASSPORT",
    PDF417 = "PDF417",
    QRCODE = "QRCODE",
}
export declare class BlinkID {
    private _license;
    private _resolve;
    constructor(licenseKey: string);
    coordinatorWithError(error: any, type: BlinkIDType, license: any): any;
    didTapScan(type: BlinkIDType): Promise<any>;
}

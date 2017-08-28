import { BlinkID, PassportData, ScanData, BlinkIDType } from 'nativescript-blinkid';
import { Component, OnInit } from '@angular/core';
import { FileStack } from "nativescript-filestack"
import * as dialogs from "ui/dialogs";


@Component({
	selector: 'blinkid',
	moduleId: module.id,
	templateUrl: './blinkid.component.html',
	styleUrls: ['./blinkid.component.css']
})

export class BlinkidComponent implements OnInit {
	private blinkID: BlinkID;
	public scanData:ScanData = new ScanData();
	public scanType: string;
	public scanText: string;
	constructor() {
		let license = "LRHFGWQG-HA5UHABH-QVHJXULL-BS5S2I4Z-FIH4CI4Z-FIH4CI4Z-FIH4DAYL-TAR65VS3";
		this.blinkID = new BlinkID(license);
		
	}

	public scanPassport() {
		this.blinkID.didTapScan(BlinkIDType.PASSPORT).then(result => {
			this.scanData = <ScanData>result;
			// let scanData = <ScanData>result;
			// this.scanType = scanData.Type.toString();
			// this.scanText = scanData.PassportData.primaryId + ' ' + scanData.PassportData.secondaryId;
		});
	}

	public scanPdf714() {
		this.blinkID.didTapScan(BlinkIDType.PDF417).then(result => {
			this.scanData = <ScanData>result;
		});
	}

	public scanQRCode() {
		this.blinkID.didTapScan(BlinkIDType.QRCODE).then(result => {
			this.scanData = <ScanData>result;
		});
	}

	ngOnInit() {
		// this.scanData.Type = BlinkIDType.QRCODE;
	 }
}
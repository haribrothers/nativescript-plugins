import { BlinkID } from 'nativescript-blinkid';
import { Component, OnInit } from '@angular/core';
import {FileStack} from "nativescript-filestack"


@Component({
	selector: 'blinkid',
	moduleId: module.id,
	templateUrl: './blinkid.component.html',
	styleUrls: ['./blinkid.component.css']
})

export class BlinkidComponent implements OnInit {

	constructor() {
		// let fs = new FileStack("AcvV3CUORT1y75sI4jj0gz");
		let license = "LRHFGWQG-HA5UHABH-QVHJXULL-BS5S2I4Z-FIH4CI4Z-FIH4CI4Z-FIH4DAYL-TAR65VS3";
		let bi = new BlinkID(license);
		bi.didTapScan("Passport");
	 }

	ngOnInit() { }
}
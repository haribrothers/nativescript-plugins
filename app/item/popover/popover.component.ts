import { Popover } from 'nativescript-popover';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FileStack } from "nativescript-filestack"
import * as dialogs from "ui/dialogs";
import { Button } from "ui/button"


@Component({
	selector: 'popover',
	moduleId: module.id, 
	templateUrl: './popover.component.html',
	styleUrls: ['./popover.component.css']
})

export class PopoverComponent implements OnInit {
	@ViewChild('popoverButton1') popoverButton1: ElementRef;
	@ViewChild('popoverButton2') popoverButton2: ElementRef;
	public result:string; 
	public country: string;
	public item: Array<any> = ["Egg Benedict", "Mushroom Risotto", "Full Breakfast", "Hamburger",
		"Ham and Egg Sandwich", "Creme Brelee", "White Chocolate Donut", "Starbucks Coffee",
		"Vegetable Curry", "Instant Noodle with Egg", "Noodle with BBQ Pork", "Japanese Noodle with Pork",
		"Green Tea", "Thai Shrimp Cake", "Angry Birds Cake", "Ham and Cheese Panini"];

	public country_list: Array<any> = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
		,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
		,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
		,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
		,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
		,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
		,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
		,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
		,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
		,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
		,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
		,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
		,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
		,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
		,"Yemen","Zambia","Zimbabwe"];
	public selectedItem:number = -1;
	public selectedCountry:number = -1;
	private popover: Popover;
	constructor() {
		
	}

	public showPopover() {
		let btn = <Button>this.popoverButton1.nativeElement;
		this.popover = new Popover();
		let self = this;
		this.popover.popoverButtonPressed(btn.ios, this.item, self.selectedItem).then(result => {
			this.result = self.item[result];
			self.selectedItem = result; 
		},err=>{
			console.log(err);
		});
			;
	} 
	public showCountry() {
		let btn = <Button>this.popoverButton2.nativeElement;
		this.popover = new Popover();
		let self = this;
		this.popover.popoverButtonPressed(btn.ios, this.country_list, self.selectedCountry).then(result => {
			this.country = self.country_list[result];
			self.selectedCountry = result; 
		},err=>{
			console.log(err);
		});
			;
	} 

	ngOnInit() {
		// this.scanData.Type = BlinkIDType.QRCODE;
	}
}
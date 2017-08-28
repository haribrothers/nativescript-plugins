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
	@ViewChild('popoverButton') popoverButton: ElementRef;
	public result:string; 
	public item: Array<any> = ["Egg Benedict", "Mushroom Risotto", "Full Breakfast", "Hamburger",
		"Ham and Egg Sandwich", "Creme Brelee", "White Chocolate Donut", "Starbucks Coffee",
		"Vegetable Curry", "Instant Noodle with Egg", "Noodle with BBQ Pork", "Japanese Noodle with Pork",
		"Green Tea", "Thai Shrimp Cake", "Angry Birds Cake", "Ham and Cheese Panini"];
	public selectedItem:number = -1;
	private popover: Popover;
	constructor() {
		
	}

	public showPopover() {
		let btn = <Button>this.popoverButton.nativeElement;
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

	ngOnInit() {
		// this.scanData.Type = BlinkIDType.QRCODE;
	}
}
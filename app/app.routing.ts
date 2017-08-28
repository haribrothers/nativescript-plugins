import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import {BlinkidComponent} from "./item/blinkid/blinkid.component"
import { ItemDetailComponent } from "./item/item-detail.component";
import { PopoverComponent } from "./item/popover/popover.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "blinkid", component: BlinkidComponent },
    { path: "popover", component: PopoverComponent },
    // { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
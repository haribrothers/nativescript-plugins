import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "BlinkID", description: "BlinkID Plugin Demo",route: "/blinkid" },
        { id: 2, name: "Popover", description: "CardIO Plugin Demo",route: "/popover" },
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}

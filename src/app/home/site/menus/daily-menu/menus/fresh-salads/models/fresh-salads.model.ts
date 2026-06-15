export interface FreshSaladModel {
    label: string;
    position: number;
    items: FreshSaladItemModel[];
}

export interface FreshSaladItemModel {
    dressing: string;
    info: FreshSaladItemInfo[];
    item: string;
    toppings: string;
}

export interface FreshSaladItemInfo {
    size: string;
    price: string;
}
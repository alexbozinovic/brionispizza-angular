export interface SubsModel {
    items: SubsItemsModel[];
    label: string;
    position: number;
}

export interface SubsItemsModel {
    info: SubsItemInfoModel[];
    item: string;
    toppings: string;
}

export interface SubsItemInfoModel {
    size: string;
    price: string;
}
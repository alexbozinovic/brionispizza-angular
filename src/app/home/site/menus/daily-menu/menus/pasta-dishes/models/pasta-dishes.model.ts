export interface PastaDishesModel {
    description: string;
    items: PastaDishesItemModel[];
    label: string;
    position: number;
}

export interface PastaDishesItemModel {
    info: PastaDishesItemInfoModel[];
    item: string;
    toppings: string;
}

export interface PastaDishesItemInfoModel {
    size: string;
    price: string;
}
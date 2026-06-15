export interface DinnerModel {
    label: string;
    description: string;
    items: DinnerItemModel[];
    position: number;   
}

export interface DinnerItemModel {
    item: string;
    info: DinnerItemInfoModel[];
}

export interface DinnerItemInfoModel {
    price: string;
    size: string;
}
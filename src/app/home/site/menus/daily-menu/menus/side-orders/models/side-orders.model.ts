export interface SideOrdersModel {
    id?: string;
    label: string;
    position: number;
    items: SideOrderItemModel[];
}

export interface SideOrderItemModel {
    item: string;
    info: SideOrderItemInfoModel[];
}

export interface SideOrderItemInfoModel {
    size: string;
    price: string;
}
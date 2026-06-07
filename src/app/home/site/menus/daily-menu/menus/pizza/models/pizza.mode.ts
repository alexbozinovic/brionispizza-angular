type PizzaCrusts = 'Garlic Butter' | 'Garlic Butter Cheese' | 'Cajun' | 'Seasame';

export interface PizzaModel {
    crusts: PizzaCrusts[];
    items: PizzaItemModel[];
    label: string;
    position: number;
    toppings: string;
}

export interface PizzaItemModel {
    item: string;
    info: PizzaInfoModel[];
}

export interface PizzaInfoModel {
    size: string;
    price: string;
}
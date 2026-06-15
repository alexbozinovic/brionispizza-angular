type PizzaCrusts = 'Garlic Butter' | 'Garlic Butter Cheese' | 'Cajun' | 'Seasame';

export interface SpecialtyPizzaModel {
    crusts: PizzaCrusts[];
    items: SpecialtyPizzaItemModel[];
    label: string;
    position: number;
}

export interface SpecialtyPizzaItemModel {
    item: string;
    toppings: string;
    info: SpecialtyPizzaInfoModel[];
}

export interface SpecialtyPizzaInfoModel {
    size: string;
    price: string;
}
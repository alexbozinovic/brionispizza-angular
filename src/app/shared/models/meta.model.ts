export interface MetaModel {
    phone: string;
    address: AddressModel;
    hours: HoursModel[];
    id?: string;
    description: DescriptionModel;
}

export interface AddressModel {
    street: string;
    city: string;
    state: string;
    zip: string;
    map: string;
}

export interface HoursModel {
    day: string;
    time: string;
}

export interface DescriptionModel {
    home: string;
    about: string[];
}
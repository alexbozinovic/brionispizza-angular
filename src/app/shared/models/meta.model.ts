export interface MetaModel {
    phone: string;
    address: AddressModel;
    hours: HoursModel[];
}

export interface AddressModel {
    street: string;
    city: string;
    state: string;
}

export interface HoursModel {
    day: string;
    time: string;
}

export interface DescriptionModel {
    home: string;
    about: string[];
}
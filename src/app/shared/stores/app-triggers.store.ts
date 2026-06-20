import { Injectable } from "@angular/core";
import { BaseStore } from "../classes/base-store.class";

interface AppTriggersModel {
    isSpinnerVisible: boolean;
}

@Injectable({providedIn: "root"})
export class AppTriggersStore extends BaseStore<AppTriggersModel> {
    constructor() {
        super();
        this.setSpinnerVisibility(false);
    }

    public setSpinnerVisibility(isVisible: boolean): void {
        this.setState({ isSpinnerVisible: isVisible });
    }
}
import { Injectable } from "@angular/core";
import { BaseStore } from "../../../../../../shared/classes/base-store.class";

interface MenuStoreModel{
    breadcrumb: string;
}

@Injectable()
export class MenuStore extends BaseStore<MenuStoreModel> {
  constructor() {
    super();
  } 
}
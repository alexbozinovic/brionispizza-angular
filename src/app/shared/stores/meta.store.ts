import { Injectable } from "@angular/core";
import { BaseStore } from "../classes/base-store.class";
import { MetaModel } from "../models/meta.model";

@Injectable({
    providedIn: 'root'
})
export class MetaStore extends BaseStore<MetaModel> {
  private meta: any;

  constructor() { super(); }
}
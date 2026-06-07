import { Component, computed, inject, signal } from '@angular/core';
import { FirestoreService } from '../../../../../../shared/services/firestore.service';
import { map, take } from 'rxjs';
import { PizzaModel } from './models/pizza.mode';
import { MenuStore } from '../store/menu.store';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-pizza',
  imports: [JsonPipe],
  templateUrl: './pizza.html',
  styleUrl: './pizza.scss',
})
export class Pizza {
  private fbase = inject(FirestoreService);
  private menuStore = inject(MenuStore);

  private pizza$ = this.fbase.streamDocument<{ id?: string; menus?: any[]; }>('site', 'food').pipe(
    take(1),
    map((menus) => {
      const dailyMenu = menus?.menus?.find((menu) => menu.label === 'Daily Menu');
      return dailyMenu?.menu.find((item: any) => item.label === 'Pizza') || {};
    })
  )

  private _pizzaMenu = signal<PizzaModel>({} as PizzaModel);
  public pizzaMenu = computed(() => this._pizzaMenu());
  
  constructor() {
    this.pizza$.subscribe((menus) => {
      this._pizzaMenu.set(menus);
      this.menuStore.setState({ breadcrumb: 'Pizza' });
    });
  }
}

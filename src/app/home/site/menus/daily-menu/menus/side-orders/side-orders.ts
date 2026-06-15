import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FirestoreService } from '../../../../../../shared/services/firestore.service';
import { take, map } from 'rxjs/operators';
import { MenuStore } from '../store/menu.store';
import { SideOrderItemModel, SideOrdersModel, SideOrderItemInfoModel } from './models/side-orders.model';

@Component({
  selector: 'app-side-orders',
  imports: [],
  templateUrl: './side-orders.html',
  styleUrl: './side-orders.scss',
})
export class SideOrders implements OnInit {
  private fbase = inject(FirestoreService);
  private menuStore = inject(MenuStore);
  private sideOrders$ = this.fbase.streamDocument<SideOrdersModel>('site', 'food').pipe(
    take(1),
    map((sideOrders: any) => sideOrders.menus.find((menu: any) => menu.label === 'Daily Menu').menu.find((item: any) => item.label === 'Side Orders'))
  );

  private _label = signal<string | null>(null);
  protected label = computed(() => this._label());

  private _items = signal<SideOrderItemModel[] | null>([]);
  protected items = computed(() => this._items());

  ngOnInit(): void {
    this.menuStore.setState({ breadcrumb: 'Side Orders' });

    this.sideOrders$.subscribe((sideOrders: any) => {
      this._label.set(sideOrders.label);
      this._items.set(sideOrders.items);

      console.log( sideOrders );
    });
  }

  protected getPrice(size: string, obj: SideOrderItemInfoModel[] ): string{
    return obj.find((item: SideOrderItemInfoModel) => item.size === size )?.price as string || '';
  }
}

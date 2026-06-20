import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FirestoreService } from '../../../../../../shared/services/firestore.service';
import { MenuStore } from '../store/menu.store';
import { map, take } from 'rxjs/operators';
import { SubsModel, SubsItemsModel, SubsItemInfoModel } from './models/subs.models';

@Component({
  selector: 'app-subs',
  imports: [],
  templateUrl: './subs.html',
  styleUrl: './subs.scss',
})
export class Subs implements OnInit {
  private fbase = inject(FirestoreService);
  private menuStore = inject(MenuStore);

  private subs$ = this.fbase.streamDocument<any>('site', 'food').pipe(
    take(1),
    map((data) => data.menus.find((menu: any) => menu.label === 'Daily Menu')?.menu.find((item: any) => item.label === "Brioni's Homemade Subs") as SubsModel)
  );

  private _subs = signal<SubsItemsModel[] | null>(null);
  protected subs = computed(() => this._subs());

  ngOnInit(): void {
    this.subs$.subscribe(data => {
      this._subs.set(data.items);
      this.menuStore.setState({ breadcrumb: data.label})
    })
  }
}

import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { DinnerItemInfoModel, DinnerModel } from './model/dinners.model';
import { MenuStore } from '../store/menu.store';
import { FirestoreService } from '../../../../../../shared/services/firestore.service';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-dinners',
  imports: [],
  templateUrl: './dinners.html',
  styleUrl: './dinners.scss',
})
export class Dinners implements OnInit {
  private menuStore = inject(MenuStore);

  private fbase = inject(FirestoreService);
  private dinners$ = this.fbase.streamDocument<any>('site', 'food').pipe(
    take(1),
    map((data) => data.menus.find((f: any) => f.label === 'Daily Menu').menu.find((m: any) => m.label === 'Dinners'))
  );

  private _dinners = signal<DinnerModel | null>(null);
  protected dinners = computed(() => this._dinners());

  ngOnInit(): void {
    this.menuStore.setState({ breadcrumb: 'Dinners' });

    this.dinners$.subscribe((dinners) => {
      this._dinners.set(dinners);
    });
  }

  getDinnerPrice(info: DinnerItemInfoModel[], size: string): string {
    return info.find((f: any) => f.size === size)?.price || '';
  }
}

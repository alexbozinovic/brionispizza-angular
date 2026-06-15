import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FirestoreService } from '../../../../../../shared/services/firestore.service';
import { take, map } from 'rxjs/operators';
import { FreshSaladModel, FreshSaladItemModel, FreshSaladItemInfo } from './models/fresh-salads.model';
import { MenuStore } from '../store/menu.store';

@Component({
  selector: 'app-fresh-salads',
  imports: [],
  templateUrl: './fresh-salads.html',
  styleUrl: './fresh-salads.scss',
})
export class FreshSalads implements OnInit {
  private menuStore = inject(MenuStore);

  private fbase = inject(FirestoreService);
  private salads$ = this.fbase.streamDocument<any>('site', 'food').pipe(
    take(1),
    map(doc => doc.menus.find((f: any) => f.label === 'Daily Menu').menu.find((m: any) => m.label === 'Fresh Salads'))
  );

  private _salads = signal<FreshSaladItemModel[] | null>(null);
  protected salads = computed(() => this._salads());

  ngOnInit(): void {
    this.menuStore.setState({
      breadcrumb: 'Fresh Salads'
    });

    this.salads$.subscribe({
      next: (salads) => {
        this._salads.set(salads?.items ?? []);
      }
    });
  }

  getPrice(info: FreshSaladItemInfo[], size: string): string {
    return info.find((f) => f.size === size)?.price ?? '';
  } 
}

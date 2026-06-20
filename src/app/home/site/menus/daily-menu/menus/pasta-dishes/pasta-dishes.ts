import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FirestoreService } from '../../../../../../shared/services/firestore.service';
import { map, take } from 'rxjs';
import { PastaDishesModel, PastaDishesItemModel } from './models/pasta-dishes.model';
import { MenuStore } from '../store/menu.store';

@Component({
  selector: 'app-pasta-dishes',
  imports: [],
  templateUrl: './pasta-dishes.html',
  styleUrl: './pasta-dishes.scss',
})
export class PastaDishes implements OnInit {
  private fbase = inject(FirestoreService);
  private menuStore = inject(MenuStore);

  pastaDishes$ = this.fbase.streamDocument<any>('site', 'food').pipe(
    take(1),
    map((data) => {
      const pastaDishesData = data.menus.find((menu: any) => menu.label === 'Daily Menu');
      return pastaDishesData.menu.find((item: any) => item.label === 'Pasta Dishes') as PastaDishesModel;
    })
  );

  private _pastaDishes = signal<PastaDishesItemModel[]>([]);
  protected pastaDishes = computed(() => this._pastaDishes());

  private _pastaDescription = signal<string>('');
  protected pastaDescription = computed(() => this._pastaDescription());

  ngOnInit(): void {
    this.pastaDishes$.subscribe((data) => {
      this._pastaDishes.set(data.items);
      this._pastaDescription.set(data.description);
      this.menuStore.setState({ breadcrumb: 'Pasta Dishes' });
    });
  }
}

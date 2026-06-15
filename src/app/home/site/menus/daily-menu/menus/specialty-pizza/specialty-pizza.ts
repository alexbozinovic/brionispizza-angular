import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FirestoreService } from './../../../../../../shared/services/firestore.service';
import { take, map } from 'rxjs/operators';
import { SpecialtyPizzaModel } from './models/specialty-pizza.model';

@Component({
  selector: 'app-specialty-pizza',
  imports: [],
  templateUrl: './specialty-pizza.html',
  styleUrl: './specialty-pizza.scss',
})
export class SpecialtyPizza implements OnInit {
  private fbase = inject(FirestoreService);
  private specialtyPizza$ = this.fbase.streamDocument('site', 'food').pipe(
    take(1),
    map((data: any) => data.menus.find((f: any) => f.label === 'Daily Menu').menu.find((m: any) => m.label === 'Specialty Pizza'))
  );

  private _specialtyPizza = signal<SpecialtyPizzaModel>(null as any);
  protected specialtyPizza = computed(() => this._specialtyPizza());

  ngOnInit(): void {
    this.specialtyPizza$.subscribe((data) => {
      this._specialtyPizza.set(data);
    });
  }
}

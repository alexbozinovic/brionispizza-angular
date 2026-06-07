import { Component, computed, inject, signal } from '@angular/core';
import { FirestoreService } from '../../../../shared/services/firestore.service';
import { MatCardModule } from '@angular/material/card';

interface SpecialMenuModel {
  special: string;
  price: string;
  disclaimer: string;
}

@Component({
  selector: 'app-specials-menu',
  imports: [
    MatCardModule
  ],
  templateUrl: './specials-menu.html',
  styleUrl: './specials-menu.scss',
})
export class SpecialsMenu {
  private fbase = inject(FirestoreService);
  private specials$ = this.fbase.streamDocument<{ id: string; menus: any }>('site', 'food');

  private _specials = signal<object>({});
  protected specials = computed<SpecialMenuModel[]>(() => this._specials() as SpecialMenuModel[]);

  constructor() {
    this.specials$.subscribe((data) => {
      const specials = data.menus.find( (f: any) => f.label === 'Specials Menu');
      this._specials.set(specials.menu);
    });
  }
}

import { Component, computed, inject, signal } from '@angular/core';
import { FirestoreService } from '../../../../shared/services/firestore.service';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { MenuStore } from './menus/store/menu.store';
import { MatButtonModule } from '@angular/material/button';
import { DailyMenuRoutes } from './daily-menu.routes';

@Component({
  selector: 'app-daily-menu',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatButtonModule
  ],
  templateUrl: './daily-menu.html',
  styleUrl: './daily-menu.scss',
})
export class DailyMenu {
  private fbase = inject(FirestoreService);
  protected menuStore = inject(MenuStore);

  private menuRoutes = (DailyMenuRoutes as any).filter((r: any) => r.data?.label);

  private _menuItems = signal<{ label: string; route: string }[]>([]);
  protected menuItems = computed(() => this._menuItems());

  constructor() {
    this._menuItems.set( this.menuRoutes.map( (m: any) => m.data) );
    // console.log(this.menuItems());
  }
}
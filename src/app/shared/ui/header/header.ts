import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule, 
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private fbase = inject(FirestoreService);

  private _mainMenus = signal<{ label: string; route: string; }[]>([]);
  protected mainMenus = computed(() => this._mainMenus());

  constructor() {
    this.fbase.streamDocument<any>('site', 'food').subscribe((data) => {
      this._mainMenus.set( data.menus.map( (f: any) => ({ label: f.label, route: f.route })) );
    });
  }
}

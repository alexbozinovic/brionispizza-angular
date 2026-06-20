import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../shared/ui/header/header';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../shared/ui/footer/footer';
import { AppTriggersStore } from '../shared/stores/app-triggers.store';
import { LoadingSpinner } from '../shared/ui/loading-spinner/loading-spinner.ui';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule, 
    Header,
    Footer,
    RouterOutlet,
    LoadingSpinner
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements OnInit {
  protected appTriggers = inject(AppTriggersStore);

  constructor() {}

  ngOnInit(): void {
      this.appTriggers.set('isSpinnerVisible', true);
  } 
}

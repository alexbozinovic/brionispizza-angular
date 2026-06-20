import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../shared/ui/header/header';
import { FirestoreService } from '../shared/services/firestore.service';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../shared/ui/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule, 
    Header,
    Footer,
    RouterOutlet
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements OnInit {
  private firestoreService = inject(FirestoreService);

  constructor() {}

  ngOnInit(): void { } 
}

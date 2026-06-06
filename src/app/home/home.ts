import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../shared/ui/header/header';
import { HeroComponent } from '../shared/ui/hero/hero';
import { FirestoreService } from '../shared/services/firestore.service';
import { Observable } from 'rxjs';
import { UserModel } from '../shared/models/user.model';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule, 
    Header, 
    HeroComponent,
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements OnInit {
  private firestoreService = inject(FirestoreService);

  users$!: Observable<UserModel[]>;

  testSetUser() {
    const testUser: UserModel = {
      uid: '',
      displayName: 'Added Test User',
      email: 'added-test@tester.test',
      isAdmin: false,
      isDev: false,
      isEditor: false,
      createdOn: Timestamp.now()
    };

    this.firestoreService.addDocument('users', testUser, 'uid'); 
  }

  constructor() {}

  ngOnInit(): void {
    this.users$ = this.firestoreService.streamCollection<UserModel>('users');
  } 
}

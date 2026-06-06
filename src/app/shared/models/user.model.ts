import { Timestamp } from '@angular/fire/firestore';

export interface UserModel {
  uid: string;
  email: string;
  displayName: string;
  isAdmin: boolean;
  isEditor: boolean;
  isDev: boolean;
  createdOn: Timestamp;
  id?: string;
}
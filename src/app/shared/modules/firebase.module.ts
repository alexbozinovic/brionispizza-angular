import { NgModule } from '@angular/core';

import { provideFirebaseApp, initializeApp, getApp } from '@angular/fire/app';
import { provideAuth, connectAuthEmulator, getAuth } from '@angular/fire/auth';
import { provideFirestore, connectFirestoreEmulator, getFirestore } from '@angular/fire/firestore';
import { provideStorage, connectStorageEmulator, getStorage } from '@angular/fire/storage';
import { environment } from '../../../environments/environment';

const FIRE_CONFIG = [
    provideFirebaseApp(() => initializeApp(environment.fireConfig)),
    provideAuth(() => {
      const auth = getAuth();
      if (!environment.production) {
        connectAuthEmulator(auth, 'http://localhost:9099', {
          disableWarnings: true
        });
      }
      return auth;
    }),
    provideFirestore(() => {
      const firestore = getFirestore();
      if (!environment.production) {
        connectFirestoreEmulator(firestore, 'localhost', 8080);
      }
      return firestore;
    }),
    provideStorage(() => {
      const storage = getStorage();
      if (!environment.production) {
        connectStorageEmulator(storage, 'localhost', 9199);
      }
      return storage;
    }),
]

const FIRE_PROD_CONFIG = [
  provideFirebaseApp(() => initializeApp(environment.fireConfig, '[PROD]')),
  provideAuth(() => getAuth(getApp('[PROD]'))),
  provideFirestore(() => getFirestore(getApp('[PROD]'))),
  provideStorage(() => getStorage(getApp('[PROD]'))),
]

@NgModule({
  providers: [ ...FIRE_CONFIG, ...FIRE_PROD_CONFIG ],
})
export class FirebaseModule {}
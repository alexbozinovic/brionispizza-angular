import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "brionispizza-54eae", appId: "1:276474794528:web:f771665bacbd5c025fa245", storageBucket: "brionispizza-54eae.firebasestorage.app", apiKey: "AIzaSyA3vGmWkAZn7u0gfQ0woVye31Y1oaQr-CM", authDomain: "brionispizza-54eae.firebaseapp.com", messagingSenderId: "276474794528", measurementId: "G-0DYGG1YVRR", projectNumber: "276474794528", version: "2" })), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage())
  ]
};

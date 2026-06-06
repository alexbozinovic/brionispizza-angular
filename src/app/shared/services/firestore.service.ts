import { EnvironmentInjector, inject, Injectable, runInInjectionContext } from "@angular/core";
import {
  setDoc,
  deleteDoc,
  DocumentReference,
  UpdateData,
  updateDoc,
  addDoc,
  doc,
  collection,
  collectionData,
  docData,
  Firestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root",
})
export class FirestoreService {
    private firestore = inject(Firestore);
    private injector = inject(EnvironmentInjector);

    constructor() {}

    streamCollection<T extends { id?: string }>(collectionName: string): Observable<T[]> {
        return runInInjectionContext(this.injector, () => {
          const collectionRef = collection(this.firestore, collectionName);
          return collectionData(collectionRef, { idField: 'id' }) as Observable<T[]>;
        });
    }

    streamDocument<T extends { id?: string }>(collectionName: string, documentId: string): Observable<T> {
        return runInInjectionContext(this.injector, () => {
          const collRef = collection(this.firestore, collectionName);
          const docRef = doc(collRef, documentId);
          return docData(docRef, { idField: 'id' }) as Observable<T>;
        });
    }

    async addDocument<T extends object>(collectionName: string, data: T, idKey?: string){
      return runInInjectionContext(this.injector, async () => {
        const collectionRef = collection(this.firestore, collectionName);
        const documentRef = await addDoc(collectionRef, data);

        await updateDoc(documentRef, { [idKey ?? 'id']: documentRef.id } as UpdateData<T>);

        return documentRef;
      });
    }

    updateDocument<T extends object>(collectionName: string, documentId: string, data: Partial<T>){
      return runInInjectionContext(this.injector, () => {
        const documentRef = doc(
          this.firestore,
          `${collectionName}/${documentId}`
        ) as DocumentReference<T>;

        return updateDoc(documentRef, data as UpdateData<T>);
      })
    }

    deleteDocument(collectionName: string, documentId: string){
      return runInInjectionContext(this.injector, () => {
        const documentRef = doc(
          this.firestore,
          `${collectionName}/${documentId}`
        );

        return deleteDoc(documentRef);
      });
    }

    setDocument<T extends object>(collectionName: string, documentId: string, data: T, merge?: boolean){
      return runInInjectionContext(this.injector, () => {
        const documentRef = doc(
          this.firestore,
          `${collectionName}/${documentId}`
        ) as DocumentReference<T>;

        return setDoc(documentRef, data, { merge: merge ?? true });
      });
    }
}
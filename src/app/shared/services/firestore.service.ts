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
  FirestoreInstances,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

type InstanceType = 'dev' | 'prod' | null;
@Injectable({
  providedIn: "root",
})
export class FirestoreService {
    private firestore = inject(Firestore);
    private injector = inject(EnvironmentInjector);
    private instances = inject(FirestoreInstances);

    constructor() {}

    streamCollection<T extends { id?: string }>(collectionName: string, instance?: InstanceType): Observable<T[]> {
        return runInInjectionContext(this.injector, () => {
          const instanceChosen = instance === 'prod' ? this.instances.find(f => f.app.name === '[PROD]') : instance === 'dev' ? this.firestore : this.firestore;

          if( !instanceChosen ) {
            throw new Error(`Firestore instance for '${instance}' not found.`);
          }

          const collectionRef = collection(instanceChosen, collectionName);
          return collectionData(collectionRef, { idField: 'id' }) as Observable<T[]>;
        });
    }

    streamDocument<T extends { id?: string }>(collectionName: string, documentId: string, instance?: InstanceType): Observable<T> {
        return runInInjectionContext(this.injector, () => {
          const instanceChosen = instance === 'prod' ? this.instances.find(f => f.app.name === '[PROD]') : instance === 'dev' ? this.firestore : this.firestore;

          if( !instanceChosen ) {
            throw new Error(`Firestore instance for '${instance}' not found.`);
          }

          const collRef = collection(instanceChosen, collectionName);
          const docRef = doc(collRef, documentId);
          return docData(docRef, { idField: 'id' }) as Observable<T>;
        });
    }

    async addDocument<T extends object>(collectionName: string, data: T, idKey?: string, instance?: InstanceType): Promise<DocumentReference<T>> {
      return runInInjectionContext(this.injector, async () => {
        const instanceChosen = instance === 'prod' ? this.instances.find(f => f.app.name === '[PROD]') : instance === 'dev' ? this.firestore : this.firestore;

        if( !instanceChosen ) {
          throw new Error(`Firestore instance for '${instance}' not found.`);
        }

        const collectionRef = collection(instanceChosen, collectionName);
        const documentRef = await addDoc(collectionRef, data);

        await updateDoc(documentRef, { [idKey ?? 'id']: documentRef.id } as UpdateData<T>);

        return documentRef as DocumentReference<T>;
      });
    }

    updateDocument<T extends object>(collectionName: string, documentId: string, data: Partial<T>, instance?: InstanceType) {
      return runInInjectionContext(this.injector, () => {
        const instanceChosen = instance === 'prod' ? this.instances.find(f => f.app.name === '[PROD]') : instance === 'dev' ? this.firestore : this.firestore;

        if( !instanceChosen ) {
          throw new Error(`Firestore instance for '${instance}' not found.`);
        }

        const documentRef = doc(
          instanceChosen,
          `${collectionName}/${documentId}`
        ) as DocumentReference<T>;

        return updateDoc(documentRef, data as UpdateData<T>);
      })
    }

    deleteDocument(collectionName: string, documentId: string, instance?: InstanceType){
      return runInInjectionContext(this.injector, () => {
        const instanceChosen = instance === 'prod' ? this.instances.find(f => f.app.name === '[PROD]') : instance === 'dev' ? this.firestore : this.firestore;

        if( !instanceChosen ) {
          throw new Error(`Firestore instance for '${instance}' not found.`);
        }

        const documentRef = doc(
          instanceChosen,
          `${collectionName}/${documentId}`
        );

        return deleteDoc(documentRef);
      });
    }

    setDocument<T extends object>(collectionName: string, documentId: string, data: T, merge?: boolean, instance?: InstanceType){
      return runInInjectionContext(this.injector, () => {
        const instanceChosen = instance === 'prod' ? this.instances.find(f => f.app.name === '[PROD]') : instance === 'dev' ? this.firestore : this.firestore;

        if( !instanceChosen ) {
          throw new Error(`Firestore instance for '${instance}' not found.`);
        }

        const documentRef = doc(
          instanceChosen,
          `${collectionName}/${documentId}`
        ) as DocumentReference<T>;

        return setDoc(documentRef, data, { merge: merge ?? true });
      });
    }
}
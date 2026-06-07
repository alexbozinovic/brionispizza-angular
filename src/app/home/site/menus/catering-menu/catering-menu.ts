import { Component, inject, OnInit } from '@angular/core';
import { FirestoreService } from '../../../../shared/services/firestore.service';
import { MetaStore } from '../../../../shared/stores/meta.store';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-catering-menu',
  imports: [],
  templateUrl: './catering-menu.html',
  styleUrl: './catering-menu.scss',
})
export class CateringMenu implements OnInit {
  private fbase = inject(FirestoreService);

  protected metaStore = inject(MetaStore);

  protected data$ = this.fbase.streamCollection('site').pipe(
    take(1),
    map((docs) => docs)
  )

  ngOnInit(): void { 
    this.data$.subscribe((data) => {
      this.metaStore.setState({ ...data.find(f => f.id === 'meta' )});
    });
  }
}

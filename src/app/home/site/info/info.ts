import { Component, inject, OnInit } from '@angular/core';
import { MetaStore } from '../../../shared/stores/meta.store';
import { FirestoreService } from '../../../shared/services/firestore.service';
import { map, take } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-info',
  imports: [MatIconModule],
  templateUrl: './info.html',
  styleUrl: './info.scss',
})
export class Info implements OnInit {
  protected metaStore = inject(MetaStore);
  private fbase = inject(FirestoreService);

  private meta$ = this.fbase.streamDocument('site', 'meta').pipe(
    take(1),
    map((meta) => meta)
  );

  ngOnInit(): void {
    this.meta$.subscribe((meta) => {
      this.metaStore.setState({ ...meta });
    });
  }
}

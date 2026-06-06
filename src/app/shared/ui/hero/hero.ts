import { Component, inject, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { FirestoreService } from "../../services/firestore.service";
import { Meta } from "../../seed-data/meta";
import { MetaStore } from "../../stores/meta.store";
import { MetaModel } from "../../models/meta.model";
import { map, take, tap } from "rxjs";

@Component({
  selector: 'app-hero',
  imports: [
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit {
  private fbase = inject(FirestoreService);
  protected metaStore = inject(MetaStore);

  protected meta$ = this.fbase.streamDocument<MetaModel>('site', 'meta').pipe(
    take(1),
    map(meta => meta)
  )

  ngOnInit() {
    this.meta$.subscribe(meta => {
      this.metaStore.setState({ ...meta });
    });
  }
}
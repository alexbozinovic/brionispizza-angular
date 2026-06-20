import { Component, inject, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { FirestoreService } from "../../services/firestore.service";
import { MetaStore } from "../../stores/meta.store";
import { MetaModel } from "../../models/meta.model";
import { map, take } from "rxjs";
import { AppTriggersStore } from "../../stores/app-triggers.store";

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
  private appTriggers = inject(AppTriggersStore)

  protected meta$ = this.fbase.streamDocument<MetaModel>('site', 'meta').pipe(
    map(meta => meta)
  )

  ngOnInit() {    
    this.meta$.subscribe({
      next: (meta) => {
        this.metaStore.setState({ ...meta });
        this.appTriggers.set('isSpinnerVisible', false);
      },
      error: (err) => {
        console.error(err);
        this.appTriggers.set('isSpinnerVisible', false);
      }
    });
  }
}
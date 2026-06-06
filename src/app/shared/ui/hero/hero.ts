import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-hero',
  imports: [
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent {

}
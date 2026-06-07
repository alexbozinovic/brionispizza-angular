import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Icons } from '../app/shared/classes/icons.class';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('brionispizza-angular');

  private icons = new Icons();

  private registry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  constructor() {
    this.registry.addSvgIconLiteral('facebook', this.sanitizer.bypassSecurityTrustHtml(this.icons.facebook));
  }
}

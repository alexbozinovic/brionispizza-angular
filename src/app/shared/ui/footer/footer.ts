import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected todayDate: number = new Date().getFullYear();

  protected routeToFacebook(): void {
    window.open('https://www.facebook.com/BrionisPizza', '_blank');
  }
}

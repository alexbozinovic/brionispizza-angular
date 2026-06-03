import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../shared/ui/header/header';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Header],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {

}

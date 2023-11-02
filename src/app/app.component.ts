import { Component } from '@angular/core';
import { ArtsService } from './arts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'artworks';
  constructor(private arts:ArtsService){}
  
}

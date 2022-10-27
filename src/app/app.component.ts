import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAngular';
  tecnologias = ['Angular', 'React', 'Vue', 'Ember'];
  tema: string = '';

  constructor() {}
}

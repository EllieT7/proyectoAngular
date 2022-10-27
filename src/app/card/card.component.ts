import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() tema: string = '';
  temas: string[] = ['Bienvenido a Tecnologías Web', 'Introducción a la tecnología WEB', 'Solución Tecnológica','CMS y Framework'];
  constructor() { }

  ngOnInit(): void {
  }
  
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  // El Componente Header va a recibir el título, por defecto pone title sino recibe nada
  @Input() title: string = 'title';

  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-float-icon',
  templateUrl: './float-icon.component.html',
  styleUrls: ['./float-icon.component.scss']
})
export class FloatIconComponent implements OnInit {

  @Input() icon: string;
  @Input() pathUrl: string;

  // Se inyecta el router:
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Redireccionar al path que se le envió:
  goTo(): void{
    this.router.navigate([this.pathUrl]);
  }

}

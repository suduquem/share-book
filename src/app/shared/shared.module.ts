import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FloatIconComponent } from './components/float-icon/float-icon.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [HeaderComponent, FloatIconComponent, CardComponent],
  imports: [CommonModule],
  // Para que se puedan reconocer en otros lados, como en el módulo de APP:
  exports: [HeaderComponent, FloatIconComponent, CardComponent],
})
export class SharedModule {}

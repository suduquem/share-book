import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BookListComponent, BookCreateComponent],
  // Importo el módulo de ShareModule para hacer uso del componente Card
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [BookListComponent, BookCreateComponent],
})
export class BookModule {}

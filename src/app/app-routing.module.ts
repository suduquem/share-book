import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './book/components/book-create/book-create.component';
import { BookListComponent } from './book/components/book-list/book-list.component';

const routes: Routes = [
  // Path por defecto es ''
  { path: '', component: BookListComponent },
  { path: 'create', component: BookCreateComponent },

  // Ejemplo si tuviéramos un componente About:
  // {path: 'about', component:AboutComponent}

  // Cuando no encuentra la URL, puede renderizar un componente NotFound:
  // {path: '*', component: NotFoundComponent}

  // Redirección de componentes: si el usuario entra a una ruta que redireccione a otro componente
  // {path: 'login', redirectTo: AuthLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

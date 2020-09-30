import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// Models
import { IBooksList } from '../../models/books';

// Services
import { BookManagerServiceService } from '../../services/book-manager-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  bookList: Array<IBooksList> = [];

  constructor(private bookManagerServiceService: BookManagerServiceService) {
    // Cuando no se usa servicio:
    // this.bookList = [
    //   {
    //     name: 'Harry Potter and the sorcerer\'s stone',
    //     author: 'J.K. Rowling',
    //     imageUrl: 'https://i1.wp.com/nycchildrenstheater.org/wp-content/uploads/2018/06/Harry-Potter_Website.jpg',
    //     description: 'Harry Potter description',
    //   },
    // ];
  }

  // Solo se ejecuta 1 vez, cuando se carga el componente
  ngOnInit(): void {
    // Este de behavior subject, trae lo últimpo que haya, todos los libros
    this.bookList = this.bookManagerServiceService.getBookList();

    console.log('lista libros', this.bookList);

    // Todos los datos
    // ventaja de suscribirse es que cada que se actualice el booklist va a traer el último dato
    // se pueden manipular luego los datos
    this.bookManagerServiceService.bookList.subscribe((books) =>
      console.log('books agregados', books)
    );

    // this.observables();
    // this.operators();
  }

  // Para probar el agrgear un nuevo libro
  addNewBookTest(): void {
    this.bookManagerServiceService.addNewBook({
      name: 'Brújula2',
      author: 'Diana Uribe',
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/5bc003a17eb88c211953c7db/1544549468988-9Z9N3NBY7ALDWWGG1Y5F/ke17ZwdGBToddI8pDm48kIIECwOv_Rl5uoyoJfMbheh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFk_H6M1tkD9NpL7mXac0oUUR7O7e563XGapvOF5StlVUygo3wAqMtNkeUqhF1S1Z/IMG-20181129-WA0006.jpg',
      description: 'Brújula2 description',
    });
  }

  observables(): void {
    const observable = new Observable((subscriber) => {
      subscriber.next(100);
      subscriber.next(200);
    });
    observable.subscribe((obs) => console.log(obs));

    // Behavior subject, con 0 por defecto
    const beSubject = new BehaviorSubject(0);
    beSubject.next(1);
    beSubject.next(2);

    beSubject.subscribe((value) => console.log('A:', value));
    beSubject.next(3);
    beSubject.subscribe((value) => console.log('B:', value));

    // A se imprime dos veces porque estiy subscrito 2 veces y cambió después de la subscripción
  }

  operators(): void {
    // Emular un observable
    const numbers = from([12, 13, 14]);

    console.log(numbers);

    numbers.subscribe((num) => console.log(num));

    // Map
    // Siempre que se use un operador, se usa el pipe
    // Se tiene el observable: numbers, se transforma con pipe() y se subscribe para obtener la respuesta
    numbers
      .pipe(map((num) => num * num))
      .subscribe((n) => console.log('map', n));

    // Filter
    numbers
      .pipe(filter((num) => num === 14))
      .subscribe((n) => console.log('filter', n));
  }
}

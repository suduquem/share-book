import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

// Models
import { IBooksList } from '../models/books';

@Injectable({
  providedIn: 'root',
})
export class BookManagerServiceService {
  // Array de BookList <IBooksList[]> y se inicializa en vacio ([])
  bookList$ = new BehaviorSubject<IBooksList[]>([
    // {
    //   name: 'Brújula',
    //   author: 'Diana Uribe',
    //   imageUrl:
    //     'https://images.squarespace-cdn.com/content/v1/5bc003a17eb88c211953c7db/1544549468988-9Z9N3NBY7ALDWWGG1Y5F/ke17ZwdGBToddI8pDm48kIIECwOv_Rl5uoyoJfMbheh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFk_H6M1tkD9NpL7mXac0oUUR7O7e563XGapvOF5StlVUygo3wAqMtNkeUqhF1S1Z/IMG-20181129-WA0006.jpg',
    //   description: 'Brújula description',
    // },
    // {
    //   name: 'Harry Potter and the sorcerer\'s stone',
    //   author: 'J.K. Rowling',
    //   imageUrl:
    //     'https://i1.wp.com/nycchildrenstheater.org/wp-content/uploads/2018/06/Harry-Potter_Website.jpg',
    //   description: 'Harry Potter description',
    // },
  ]);

  constructor(private fireStore: AngularFirestore) {
    fireStore
      .collection('books')
      .valueChanges() // Está pendiente si algo cambia en la DB
      .subscribe((books: Array<IBooksList>) => {
        console.log(books);
        this.bookList$.next(books);
      });
  }

  getBookList(): IBooksList[] {
    // console.log(this.bookList);
    // return this.bookList; // Cuando no se usa un observable

    // Cuando se usa un observable, retorna el último valor
    return this.bookList$.getValue();
  }

  addNewBook(newBook): void {
    // this.bookList = [...this.bookList, newBook]; // Cuando no se usa un observable
    // console.log(this.bookList);
    this.bookList$.next([...this.bookList$.getValue(), newBook]);
    // Para usar la base de datos:
    this.fireStore.collection('books').add(newBook);
  }
}

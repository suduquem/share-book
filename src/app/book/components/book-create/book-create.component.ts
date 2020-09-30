import { Component, OnInit } from '@angular/core';
import { BookManagerServiceService } from '../../services/book-manager-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
})
export class BookCreateComponent implements OnInit {
  newBook: FormGroup;

  constructor(
    private bookManagerServiceService: BookManagerServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newBook = new FormGroup({
      name: new FormControl(''),
      author: new FormControl(''),
      imageUrl: new FormControl(''),
      description: new FormControl(''),
    });
  }

  addNewBook(): void {
    this.bookManagerServiceService.addNewBook(
      //   {
      //   name: 'Brújula3',
      //   author: 'Diana Uribe',
      //   imageUrl: 'https://i1.wp.com/nycchildrenstheater.org/wp-content/uploads/2018/06/Harry-Potter_Website.jpg',
      //   description: 'Brújula3 description',
      // }
      {
        name: this.newBook.value.name,
        author: this.newBook.value.author,
        imageUrl: this.newBook.value.imageUrl,
        description: this.newBook.value.description,
      }
    );

    console.log('nuevo libro', this.newBook.value);

    this.router.navigate(['/']);
  }
}

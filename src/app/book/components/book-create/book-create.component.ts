import { Component, OnInit } from '@angular/core';
import { BookManagerServiceService } from '../../services/book-manager-service.service';
import { Router } from '@angular/router';
// import { FormControl, FormGroup } from '@angular/forms';
import { IBooksList } from '../../models/books';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
})
export class BookCreateComponent implements OnInit {
  name: string;
  author: string;
  imageUrl: string;
  description: string;

  constructor(
    private bookManagerServiceService: BookManagerServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const newBook: IBooksList = {
      name: this.name,
      author: this.author,
      imageUrl: this.imageUrl,
      description: this.description,
    };
    this.bookManagerServiceService.addNewBook(newBook);
    this.router.navigate(['/']);
  }

  // addNewBook(): void {
  //   this.bookManagerServiceService.addNewBook({
  //     name: 'Brújula3',
  //     author: 'Diana Uribe',
  //     imageUrl:
  //       'https://i1.wp.com/nycchildrenstheater.org/wp-content/uploads/2018/06/Harry-Potter_Website.jpg',
  //     description: 'Brújula3 description',
  //   });
  //   this.router.navigate(['/']);
  // }
}

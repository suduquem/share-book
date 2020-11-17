import { TestBed } from '@angular/core/testing';

import { BookManagerServiceService } from './book-manager-service.service';

describe('BookManagerServiceService', () => {
  let service: BookManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the book list', () => {
    const book = {
      author: 'test',
      imageUrl: 'test',
      name: 'test',
      description: 'test'
    };

    const book1 = {
      author: 'test',
      imageUrl: 'test',
      name: 'test',
      description: 'test'
    };

    service.addNewBook(book);
    service.addNewBook(book1);

    expect(service.getBookList().length).toBe(4);
  });
});

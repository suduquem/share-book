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
});

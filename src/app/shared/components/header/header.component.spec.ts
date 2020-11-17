import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let title: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    title = fixture.nativeElement.querySelector('header');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the default title', () => {
    expect(component.title).toBe('title');
  });

  it('should render the title sended', () => {
    component.title = 'Share book';
    fixture.detectChanges();
    expect(component.title).toBe('Share book');
  });
});

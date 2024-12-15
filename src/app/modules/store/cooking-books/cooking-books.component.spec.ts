import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingBooksComponent } from './cooking-books.component';

describe('CookingBooksComponent', () => {
  let component: CookingBooksComponent;
  let fixture: ComponentFixture<CookingBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CookingBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookingBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

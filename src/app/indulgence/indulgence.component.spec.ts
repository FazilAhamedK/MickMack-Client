import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndulgenceComponent } from './indulgence.component';

describe('IndulgenceComponent', () => {
  let component: IndulgenceComponent;
  let fixture: ComponentFixture<IndulgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndulgenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndulgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

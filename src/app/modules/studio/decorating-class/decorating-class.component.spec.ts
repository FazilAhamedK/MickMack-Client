import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratingClassComponent } from './decorating-class.component';

describe('DecoratingClassComponent', () => {
  let component: DecoratingClassComponent;
  let fixture: ComponentFixture<DecoratingClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecoratingClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecoratingClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

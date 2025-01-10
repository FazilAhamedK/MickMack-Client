import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakingClassComponent } from './baking-class.component';

describe('BakingClassComponent', () => {
  let component: BakingClassComponent;
  let fixture: ComponentFixture<BakingClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BakingClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BakingClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenLibraryComponent } from './kitchen-library.component';

describe('KitchenLibraryComponent', () => {
  let component: KitchenLibraryComponent;
  let fixture: ComponentFixture<KitchenLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KitchenLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KitchenLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

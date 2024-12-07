import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenPreviewComponent } from './kitchen-preview.component';

describe('KitchenPreviewComponent', () => {
  let component: KitchenPreviewComponent;
  let fixture: ComponentFixture<KitchenPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KitchenPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KitchenPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePreviewComponent } from './store-preview.component';

describe('StorePreviewComponent', () => {
  let component: StorePreviewComponent;
  let fixture: ComponentFixture<StorePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StorePreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

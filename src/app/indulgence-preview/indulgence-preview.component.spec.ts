import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndulgencePreviewComponent } from './indulgence-preview.component';

describe('IndulgencePreviewComponent', () => {
  let component: IndulgencePreviewComponent;
  let fixture: ComponentFixture<IndulgencePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndulgencePreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndulgencePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

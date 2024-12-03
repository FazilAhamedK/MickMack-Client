import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioPreviewComponent } from './studio-preview.component';

describe('StudioPreviewComponent', () => {
  let component: StudioPreviewComponent;
  let fixture: ComponentFixture<StudioPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudioPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudioPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

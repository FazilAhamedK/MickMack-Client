import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesSliderComponent } from './names-slider.component';

describe('NamesSliderComponent', () => {
  let component: NamesSliderComponent;
  let fixture: ComponentFixture<NamesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NamesSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NamesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

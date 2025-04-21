import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietPrefComponent } from './diet-pref.component';

describe('DietPrefComponent', () => {
  let component: DietPrefComponent;
  let fixture: ComponentFixture<DietPrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietPrefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietPrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

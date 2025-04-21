import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietGeneratorComponent } from './diet-generator.component';

describe('DietGeneratorComponent', () => {
  let component: DietGeneratorComponent;
  let fixture: ComponentFixture<DietGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

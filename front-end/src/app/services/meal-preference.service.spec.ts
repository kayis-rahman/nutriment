import { TestBed } from '@angular/core/testing';

import { MealPreferenceService } from './meal-preference.service';

describe('MealPreferenceService', () => {
  let service: MealPreferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealPreferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

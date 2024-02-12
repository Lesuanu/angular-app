import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BankEmployeeEffects } from './bank-employee.effects';

describe('BankEmployeeEffects', () => {
  let actions$: Observable<any>;
  let effects: BankEmployeeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BankEmployeeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(BankEmployeeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

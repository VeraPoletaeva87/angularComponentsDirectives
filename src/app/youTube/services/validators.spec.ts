import { FormControl } from '@angular/forms';
import { dateValidator } from './validators';

describe('passwordStrengthValidator', () => {
  const testDate = new Date;
  const validator = dateValidator();
  const control = new FormControl();

  it('should return null if date is less or equal to current date', () => {
    control.setValue(testDate);
    expect(validator(control)).toBeNull();
  });

});
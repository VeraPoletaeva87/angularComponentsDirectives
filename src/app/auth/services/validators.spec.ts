import { FormControl } from '@angular/forms';
import { passwordStrengthValidator } from './validators';

describe('passwordStrengthValidator', () => {
  const testPassword = '12&dDggff';
  const validator = passwordStrengthValidator();
  const control = new FormControl('input');

  it('should return null if password is strong enough', () => {
    control.setValue(testPassword);
    expect(validator(control)).toBeNull();
  });

});
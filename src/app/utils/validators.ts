import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const ageUserValidation: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  console.log(control);

  if (
    typeof control.value === 'number' &&
    control.value < 18
  ) {
    return {
      ageUserValidation: true,
    };
  }

  return null; // Si el retorno es null, significaria que el campo NO TIENE errores, (es valido);
};
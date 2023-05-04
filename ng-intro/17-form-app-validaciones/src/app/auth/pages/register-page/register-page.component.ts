import { Component } from '@angular/core';
import { AbstractControlOptions, EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
// ? Importa todo el contenido del archivo -> innecesario si se hace con servicios
// import * as customValidators from 'src/app/shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    // ? Utilizamos 'validators.pattern', para poder comparar el patrón email de 'customValidators'
    name: [ '', [ Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern) ] ],
    email: [ '', [ Validators.required, Validators.pattern(this.validatorsService.emailPattern) ], [ this.emailValidator ] ],
    // ? Podemos añadir 'cantbeStrider' como un validator extra. para ello, obiamente deberemos importarlo 
    username: [ '', [ Validators.required, this.validatorsService.cantBeStrider ] ],
    password: [ '', [ Validators.required, Validators.minLength(8)] ],
    password2: [ '', [ Validators.required ] ],
  }, {
    validators: [
      this.validatorsService.isFieldOneEqualsFieldTwo('password', 'password2')
    ]
  } as AbstractControlOptions);

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidator,
  ) { }

  isValidField(field: string) {
    // Obtener validación desde un servicio
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched
  }
}

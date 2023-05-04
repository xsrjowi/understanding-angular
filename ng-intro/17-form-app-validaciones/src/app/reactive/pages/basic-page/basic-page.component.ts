import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 2500,
  inStorage: 15,
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {
  /*
    ? No muy práctico -> sería mas factible utilizar un FormBuilder
    public myForm: FormGroup = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(0),
      inStorage: new FormControl(0),
    });
  */

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    price: [0, [ Validators.required, Validators.min(3) ]],
    inStorage: [0, [ Validators.required, Validators.min(1) ]],
  })

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // ? Reestablece los valores de un formulario en base a los de un objeto personalizado
    this.myForm.reset(rtx5090)
  }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors 
      && this.myForm.controls['name'].touched
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;
    
    const errors = this.myForm.controls[field].errors || { }

    for (const key of Object.keys(errors)) {
      // console.log(key);
      switch (key) {
        case 'required': return 'Debes llenar este campo';
        case 'minlength': return `la longitud minima es de 
          ${ errors['minlength'].requiredLength } letras`;
        case 'price': return 'El precio debe ser mayor o igual a 0';
        case 'inStorage': return 'Las existencias deben ser mayores o iguales a 1';
      }
    }

    return null;
  }

  onSave(): void {
    if(this.myForm.invalid) {
      // ? En caso de haber pulsado el botón de 'Guardar', implica que ya se ha interactuado con el formulario
      // *   por tanto, permite generar los errores pertinentes
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    // ? Reestablece el valor a uno predeterminado
    this.myForm.reset(); 

    // ? Reestablece el valor de una propiedad a un valor 'x'
    this.myForm.reset({ inStorage: 1 });
  }
}

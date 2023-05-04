import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
})

export class DynamicPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ])
  })

  public newFavorite: FormControl = new FormControl('', Validators.required)

  constructor(
    private fb: FormBuilder
  ) { }

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onAddFavorite(): void {
    if(this.newFavorite.invalid) return;

    const newGame = this.newFavorite.value;
    // this.favoriteGames.push(new FormControl(newGame, Validators.required));

    this.favoriteGames.push(
      this.fb.control(newGame, Validators.required)
    );
    
    console.log(this.newFavorite.value);

    // ? Reinicia el valor del campo correspondiente a 'agregar juego'
    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number): void {
    this.favoriteGames.removeAt(index);
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    // ? Reinicia la propiedad 'favoriteGames' del array, por tal de que no queden los campos vacíos en la lista
    (this.myForm.controls["favoriteGames"] as FormArray) = this.fb.array([]);

    this.myForm.reset();
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;
    
    const errors = this.myForm.controls[field].errors || { }

    for (const key of Object.keys(errors)) {
      // console.log(key);
      switch (key) {
        case 'required': return 'Debes llenar este campo';
      }
    }

    return null;
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  // Définir le formulaire avec des validateurs
  registreForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern('^[a-zA-Z0-9_]+$') // Seuls les caractères alphanumériques et les underscores sont autorisés
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email // Validation d'email
    ]),
    pwd: new FormControl('', [
      Validators.required,
      Validators.minLength(6), // Minimum 6 caractères
      Validators.maxLength(20) // Maximum 20 caractères
    ])
  });
  

onSubmit(){
  return console.log(this.registreForm.value);
}
}
 
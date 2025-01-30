import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'contact-us-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact-us-form.component.html',
  styleUrl: './contact-us-form.component.scss'
})
export class ContactUsFormComponent {
  contactUsForm: FormGroup = new FormGroup({
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
    empresa: new FormControl(''),
    telefono: new FormControl('', Validators.required),
    ciudad: new FormControl(''),
    cp: new FormControl(''),
    mensaje: new FormControl('', Validators.required)
  });

  submit(): void {
    if(this.contactUsForm.invalid){
      console.log("Estupido");
    }
    console.log("formulario", this.contactUsForm.value);
  }
}

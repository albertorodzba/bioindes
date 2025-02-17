import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { Router } from "@angular/router";

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
  constructor(private router: Router) {
  }

  contactUsForm: FormGroup = new FormGroup({
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
    empresa: new FormControl(''),
    telefono: new FormControl('', Validators.required),
    ciudad: new FormControl(''),
    cp: new FormControl(''),
    mensaje: new FormControl('', Validators.required)
  });

  mailTo: string = "bioindes@gmail.com"
  wppLink: string ="";

  submit(): void {
    if(this.contactUsForm.invalid){
    } else {
      const formValues = this.contactUsForm.value;
      this.wppLink = `mailto:${this.mailTo}?subject=Más información sobre los servicios de Bioindes&body=${encodeURIComponent(formValues.mensaje)}
      %0A%0ATambien le dejo mis datos:
      %0A%0A*Nombre:* ${encodeURIComponent(formValues.nombre)},
      %0A*Email:* ${encodeURIComponent(formValues.correo)},
      %0A*Telefono*: ${encodeURIComponent(formValues.telefono)},
      %0A*Ciudad:* ${encodeURIComponent(formValues.ciudad)},
      %0A*CP:* ${encodeURIComponent(formValues.cp)},
      %0A*Y pertenezco a la empresa:* ${encodeURIComponent(formValues.empresa)}
      `;
      this.send(this.wppLink)
    }
    // console.log("formulario", this.contactUsForm.value);
  }

  send(wppLink: string): void {
    window.open(wppLink, "_blank");
  }
}

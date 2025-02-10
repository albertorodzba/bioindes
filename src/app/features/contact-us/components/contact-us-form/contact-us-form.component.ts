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

  whatsappPhone: string = "528335395978"
  mailTo: string = "mario_bautista1234@hotmail.com"

  submit(): void {
    if(this.contactUsForm.invalid){
      // console.log("Estupido");
    } else {
      const formValues = this.contactUsForm.value;
      const wppLink: string= `https://wa.me/${this.whatsappPhone}?text=${encodeURIComponent(formValues.mensaje)}
      %0A%0ATambien le dejo mis datos:
      %0A%0A*Nombre:* ${encodeURIComponent(formValues.nombre)},
      %0A*Email:* ${encodeURIComponent(formValues.correo)},
      %0A*Telefono*: ${encodeURIComponent(formValues.telefono)},
      %0A*Ciudad:* ${encodeURIComponent(formValues.ciudad)},
      %0A*CP:* ${encodeURIComponent(formValues.cp)},
      %0A*Y pertenezco a la empresa:* ${encodeURIComponent(formValues.empresa)}
      `;
      this.sendWhatsapp(wppLink)
    }
    // console.log("formulario", this.contactUsForm.value);
  }

  sendWhatsapp(wppLink: string): void {
    window.open(wppLink, "_blank");
  }
}

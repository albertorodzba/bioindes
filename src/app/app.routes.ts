import { Routes } from '@angular/router';
import {HomePageComponent} from "./features/main-page/pages/home-page/home-page.component";
import {AboutUsComponent} from "./features/about-us/pages/about-us/about-us.component";
import {ContactUsComponent} from "./features/contact-us/pages/contact-us/contact-us.component";
import {ServicesComponent} from "./features/services-offered/pages/services/services.component";


export const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
  {
    path: "inicio",
    redirectTo: ""
  },
  {
    path: "nosotros",
    component: AboutUsComponent,
    // children:[
    //   {
    //     path: "",
    //   }
    // ]
  },
  {
    path: "servicios",
    component: ServicesComponent,
  },
  {
    path: "contacto",
    component: ContactUsComponent,
  }
];

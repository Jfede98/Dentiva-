import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { DentalComponent } from './pages/dental/dental.component';
import { EsteticoComponent } from './pages/estetico/estetico.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'dental', component: DentalComponent},
  { path: 'estetico', component: EsteticoComponent}
];

import { Routes } from '@angular/router';

import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  { path: 'register', component: RegisterFormComponent },
];

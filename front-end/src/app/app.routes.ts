import {Routes} from '@angular/router';
import {DietPrefComponent} from './pages/diet-pref/diet-pref.component';
import {DietGeneratorComponent} from './pages/diet-generator/diet-generator.component';
import {RegisterComponent} from './pages/register/register.component';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginGuardService} from './services/login-guard.service';
import {LoginComponent} from './pages/login/login.component';

export const routes: Routes = [
  {path: '', component: DietGeneratorComponent, canActivate: [AuthGuardService]},
  {path: 'diet-pref', component: DietPrefComponent, canActivate: [AuthGuardService]},
  {path: 'diet-gen', component: DietGeneratorComponent, canActivate: [AuthGuardService]},
  {path: 'register', component: RegisterComponent, canActivate: [LoginGuardService]},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuardService]},
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { RegistroComponent } from './core/auth/registro/registro.component';
import { CanjeoComponent } from './modules/canjeo/canjeo.component';
import { HomeComponent } from './modules/home/home.component';
import { JuegosComponent } from './modules/juegos/juegos.component';
import { LogrosComponent } from './modules/logros/logros.component';
import { PerfilComponent } from './modules/perfil/perfil.component';
import { PremiosComponent } from './modules/premios/premios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: 'logros',
    component: LogrosComponent,
  },
  {
    path: 'premios',
    component: PremiosComponent,
  },{
    path: 'juegos',
    component: JuegosComponent,
  },{
    path: 'canjeo',
    component: CanjeoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Libraries
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

// Pages
import { HomeComponent } from './modules/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { PerfilComponent } from './modules/perfil/perfil.component';
import { LogrosComponent } from './modules/logros/logros.component';
import { PremiosComponent } from './modules/premios/premios.component';
import { JuegosComponent } from './modules/juegos/juegos.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegistroComponent } from './core/auth/registro/registro.component';
import { CanjeoComponent } from './modules/canjeo/canjeo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SidenavComponent,
    PerfilComponent,
    LogrosComponent,
    PremiosComponent,
    JuegosComponent,
    LoginComponent,
    RegistroComponent,
    CanjeoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Ngx-wheel
import { NgxWheelModule } from 'ngx-wheel';

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
import { RuletaComponent } from './modules/juegos/ruleta/ruleta.component';
import { ModalPreguntaComponent } from './modules/juegos/ruleta/components/modal-pregunta/modal-pregunta.component';
import { ModalResultadoComponent } from './modules/juegos/ruleta/components/modal-resultado/modal-resultado.component';
import { ModalDetalleCategoriaComponent } from './modules/juegos/ruleta/components/modal-detalle-categoria/modal-detalle-categoria.component';
import { FormsModule } from '@angular/forms';
import { ProductoCanjeoComponent } from './modules/producto-canjeo/producto-canjeo.component';


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
    CanjeoComponent,
    RuletaComponent,
    ModalPreguntaComponent,
    ModalResultadoComponent,
    ModalDetalleCategoriaComponent,
    ProductoCanjeoComponent
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
    HttpClientModule,
    NgxWheelModule,
    MatDialogModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

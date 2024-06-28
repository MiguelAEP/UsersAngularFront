import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './Components/aside/aside.component';
import { HomeComponent } from './Pages/home/home.component';
import { CreacionComponent } from './Pages/creacion/creacion.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserSearchedComponent } from './Pages/user-searched/user-searched.component';
import { UsuarioGeneroComponent } from './Pages/usuario-genero/usuario-genero.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HomeComponent,
    CreacionComponent,
    UserSearchedComponent,
    UsuarioGeneroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

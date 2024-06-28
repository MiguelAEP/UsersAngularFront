import { UserSearchedComponent } from './Pages/user-searched/user-searched.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CreacionComponent } from './Pages/creacion/creacion.component';
import { UsuarioGeneroComponent } from './Pages/usuario-genero/usuario-genero.component';


const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'creacion',component:CreacionComponent},
  {path:'buscado/:id',component:UserSearchedComponent},
  {path:'usuario/:genero',component:UsuarioGeneroComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

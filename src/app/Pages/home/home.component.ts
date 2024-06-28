import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../usuario.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  usuarios: Usuario[] = [];
  mensajeEliminado: boolean = false;

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    this.usuarioService.getAll().subscribe((users) => {
      console.log(users);
      this.usuarios = users;
      console.log(this.usuarios);
    });
  }

  deleteUser(user: Usuario) {
    Swal.fire({
      title: 'Deseas eliminar el usuario?',
      text: 'No se podra recuperar el usuario!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo eliminarlo!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Borrado!',
          text: 'El usuario fue eliminado.',
          icon: 'success',
        });
        this.usuarioService.deleteUser(user.id!).subscribe((idUser) => {
          this.loadUser();
        });
      }
    });
  }

  editarUser(user: Usuario) {
    this.router.navigate([`buscado/${user.id}`]);
  }
}

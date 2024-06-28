import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.interface';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-genero',
  templateUrl: './usuario-genero.component.html',
  styleUrl: './usuario-genero.component.css'
})
export class UsuarioGeneroComponent implements OnInit{

  usuarios: Usuario[] = [];
  nombreGeneroToTemplate :string = '';

  constructor(private usuarioService : UsuarioService,
            private router : Router,
          private route: ActivatedRoute,
          ){}


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.nombreGeneroToTemplate =params['genero'];

    this.usuarioService.showUserByGeners(params['genero']).subscribe((users) =>{
        this.usuarios = users;
      })
    })

  }



}

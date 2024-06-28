import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import {
  AreaEnum,
  GeneroEnum,
  TipoDocumentEnum,
  Usuario,
} from '../usuario.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-searched',
  templateUrl: './user-searched.component.html',
  styleUrl: './user-searched.component.css',
})
export class UserSearchedComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UsuarioService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  submited: boolean = false;
  usuario!: Usuario;

  miFormulario: FormGroup = this.formBuilder.group({
    id: [],
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    usuarioEnum: ['', [Validators.required]],
    numeroDocumento: ['', [Validators.required, Validators.maxLength(8)]],
    generoEnum: ['', [Validators.required]],
    areaEnum: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.userService.findyById(params['id']).subscribe((user: Usuario) => {
        this.usuario = user;

        this.miFormulario.patchValue({
          id: this.usuario.id,
          nombre: this.usuario.nombre,
          apellido: this.usuario.apellido,
          usuarioEnum: this.usuario.usuarioEnum,
          numeroDocumento: this.usuario.numeroDocumento,
          generoEnum: this.usuario.generoEnum,
          areaEnum: this.usuario.areaEnum,
        });
      });
    });
    this.miFormulario.get('numeroDocumento')?.disable();
  }

  user: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    usuarioEnum: TipoDocumentEnum.DNI,
    numeroDocumento: 0,
    generoEnum: GeneroEnum.MASCULINO,
    areaEnum: AreaEnum.SISTEMAS,
  };

  actualizar() {
    this.submited = true;

    if (this.miFormulario.valid) {
      this.user.id = this.miFormulario.get('id')?.value;
      this.user.nombre = this.miFormulario.get('nombre')?.value;
      this.user.apellido = this.miFormulario.get('apellido')?.value;
      this.user.usuarioEnum = this.miFormulario.get('usuarioEnum')?.value;
      this.user.numeroDocumento = parseInt(
        this.miFormulario.get('numeroDocumento')?.value
      );
      this.user.generoEnum = this.miFormulario.get('generoEnum')?.value;
      this.user.areaEnum = this.miFormulario.get('areaEnum')?.value;

      this.userService
        .existDocument(this.user.numeroDocumento)
        .subscribe((exists) => {
          if (exists) {

              this.userService
              .updateUser(this.user.id, this.user)
              .subscribe((user) => {
                Swal.fire({
                  title: 'Actualizado..!',
                  text: 'usuario actualizado correctamente!',
                  icon: 'success',
                });
                this.router.navigate(['']);
              });

            
          } else {
            Swal.fire({
              title: 'No existe..!',
              text: 'No modificar el numero de documento!',
              icon: 'success',
            });
          }
        });
    } else {
      console.log(' in valido');
    }
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.miFormulario.get(controlName)?.hasError(errorType) &&
      this.miFormulario.get(controlName)?.touched
    );
  }
}

import {
  AreaEnum,
  GeneroEnum,
  TipoDocumentEnum,
  Usuario,
} from './../usuario.interface';

import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrl: './creacion.component.css',
})
export class CreacionComponent {
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  submited: boolean = false;
  documentoExists: boolean = false;
  user: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    usuarioEnum: TipoDocumentEnum.DNI,
    numeroDocumento: 0,
    generoEnum: GeneroEnum.MASCULINO,
    areaEnum: AreaEnum.SISTEMAS,
  };

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    usuarioEnum: ['', [Validators.required]],
    numeroDocumento: ['', [Validators.required, Validators.maxLength(8)]],
    generoEnum: ['', [Validators.required]],
    areaEnum: ['', [Validators.required]],
  });

  guardar() {
    this.submited = true;
    if (this.miFormulario.valid) {
      this.user.nombre = this.miFormulario.get('nombre')?.value;
      this.user.apellido = this.miFormulario.get('apellido')?.value;
      this.user.usuarioEnum = this.miFormulario.get('usuarioEnum')?.value;
      this.user.numeroDocumento = parseInt(
        this.miFormulario.get('numeroDocumento')?.value
      );
      this.user.generoEnum = this.miFormulario.get('generoEnum')?.value;
      this.user.areaEnum = this.miFormulario.get('areaEnum')?.value;

      this.usuarioService .existDocument(this.user.numeroDocumento) .subscribe((exists) => {
          if (exists) {
            Swal.fire({
              title: 'Numero de documento ya existe..!',
              text: 'Ingrese otro numero de documento!',
              icon: 'success',
            });
          } else {
            this.usuarioService.createUser(this.user).subscribe((userr) => {
              Swal.fire({
                title: 'Registrado..!',
                text: 'usuario creado correctamente!',
                icon: 'success',
              });
              this.router.navigate(['']);
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

import { Usuario } from './../usuario.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL : string = "http://localhost:8080/usuario";
  constructor(private http: HttpClient) { }

  getAll():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.URL}`);
  }

  createUser(usuario:Usuario):Observable<Usuario>{
    return this.http.post<any>(`${this.URL}`,usuario);
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete(`${this.URL}/${id}`);
  }

  findyById(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.URL}/${id}`);
  }

  updateUser(id:number,usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.URL}/${id}`,usuario);
  }

  existDocument(id:number):Observable<boolean>{
    return this.http.get<boolean>(`${this.URL}/existeDocumento/${id}`);
  }

  showUserByGeners(genre: string) : Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.URL}/generos?generoEnum=${genre}`);
  }

}

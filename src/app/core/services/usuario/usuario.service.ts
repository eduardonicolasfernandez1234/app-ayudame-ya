import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  USUARIO = 'usuario';
  usuario!: Usuario;

  constructor(private http: HttpClient) { 
    this.usuario = this.obtenerUsuario();
  }

  obtenerUsuarioPorAuth(data: any){
    const url = `${environment.apiBase}auth/usuarios/login/`;
    return this.http.post<Usuario|any>(url, data);
  }

  obtenerUsuarioPorId(number: any){
    const url = `${environment.apiBase}auth/usuarios/${number}/`;
    return this.http.get<any>(url);
  }

  guardarUsuarioStorage(usuario: Usuario){
    localStorage.setItem(this.USUARIO, JSON.stringify(usuario));
  }

  obtenerUsuario(){
    if(this.usuario){
      return this.usuario;
    }
    return JSON.parse(localStorage.getItem(this.USUARIO)!);
  }
}

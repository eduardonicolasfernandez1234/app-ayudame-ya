import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logro } from 'src/app/shared/models/logro';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogroService {

  constructor(private http: HttpClient) { }

  listadoLogro(){
    const url = `${environment.apiBase}juego/logro/`;
    return this.http.get<Logro[]>(url);
  }

  listadoLogroPorCategoria(categoriaId: number){
    const url = `${environment.apiBase}juego/logro/${categoriaId}/categoria/`;
    return this.http.get<Logro[]>(url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Opcion } from 'src/app/shared/models/opcion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpcionService {

  constructor(private http: HttpClient) { }

  listadoOpcionPorPregunta(preguntaId: number){
    const url = `${environment.apiBase}juego/pregunta/${preguntaId}/opciones/`;
    return this.http.get<Opcion[]>(url);
  }
}

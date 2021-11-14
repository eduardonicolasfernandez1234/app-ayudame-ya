import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModoJuego } from 'src/app/shared/models/modo-juego';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModoJuegoService {

  constructor(private http: HttpClient) { }

  listadoCategoriasPorJuego(modoJuegoId: number){
    const url = `${environment.apiBase}juego/juego/${modoJuegoId}/categorias/`;
    return this.http.get<ModoJuego[]>(url);
  }
}

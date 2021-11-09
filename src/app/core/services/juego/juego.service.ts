import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Juego } from 'src/app/shared/models/juego';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor(private http: HttpClient) { }

  listadoJuego(){
    const url = `${environment.apiBase}juego/juego/`;
    return this.http.get<Juego[]>(url);
  }
}

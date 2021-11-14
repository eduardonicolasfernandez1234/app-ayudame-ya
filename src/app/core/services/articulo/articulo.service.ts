import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo, DatoCurioso } from 'src/app/shared/models/articulo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: HttpClient) { }

  listadoArticulo(){
    const url = `${environment.apiBase}juego/articulo/`;
    return this.http.get<Articulo[]>(url);
  }

  listaDatosCuriosos(){
    const url = `${environment.apiBase}juego/dato-curioso/`;
    return this.http.get<DatoCurioso[]>(url);
  }
}

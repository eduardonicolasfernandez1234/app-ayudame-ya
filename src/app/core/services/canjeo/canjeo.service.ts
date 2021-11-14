import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Canjeo, ProductoCanjeo } from 'src/app/shared/models/canjeo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CanjeoService {

  constructor(private http: HttpClient) { }

  listadoCanjeo(){
    const url = `${environment.apiBase}juego/canjeo/`;
    return this.http.get<Canjeo[]>(url);
  }

  listadoProductoCanjeo(){
    const url = `${environment.apiBase}juego/producto-canjeo/`;
    return this.http.get<ProductoCanjeo[]>(url);
  }

  listadoProductoCanjeoPorCategoria(categoriaId: string){
    const url = `${environment.apiBase}juego/producto-canjeo/${categoriaId}/categoria/`;
    return this.http.get<ProductoCanjeo[]>(url);
  }
}

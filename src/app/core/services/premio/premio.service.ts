import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Premio } from 'src/app/shared/models/premio';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PremioService {

  constructor(private http: HttpClient) { }

  listadoPremio(){
    const url = `${environment.apiBase}juego/premio/`;
    return this.http.get<Premio[]>(url);
  }

  listadoPremioPorCategoria(categoriaId: number){
    const url = `${environment.apiBase}juego/premio/${categoriaId}/categoria/`;
    return this.http.get<Premio[]>(url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaPuzzle } from 'src/app/shared/models/puzzle/categoria_puzzle';
import { ImagenPuzzle, SubImagenPuzzle } from 'src/app/shared/models/puzzle/imagenes_puzzle';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaPuzzleService {

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get("https://puzzle-ebd10.firebaseio.com/categories.json");
  }

  obtenerCategoriaPuzzle(){
    const url = `${environment.apiBase}juego/categoria-puzzle/`;
    return this.http.get<CategoriaPuzzle[]>(url);
  }

  obtenerImagenesPorCategoria(){
    const url = `${environment.apiBase}juego/imagen-puzzle/`;
    return this.http.get<ImagenPuzzle[]>(url);
  }

  obtenerSubImagenesPorImagenPuzzle(id: number){
    const url = `${environment.apiBase}juego/imagen-puzzle/${id}/subimagenes/`;
    return this.http.get<SubImagenPuzzle[]>(url);
  }
}

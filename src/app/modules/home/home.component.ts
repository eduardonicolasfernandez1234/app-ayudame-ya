import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/core/services/articulo/articulo.service';
import { Articulo, DatoCurioso } from 'src/app/shared/models/articulo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listaArticulo: Articulo[] = [];
  listaDatosCurioso: DatoCurioso[] = [];

  constructor(
    private articuloService: ArticuloService
  ) { }

  ngOnInit(): void {
    this.articuloService.listadoArticulo().subscribe((articulo) => {
      this.listaArticulo = articulo;
      console.log(this.listaArticulo);
    }, error => {
      console.log(error);
    })

    this.articuloService.listaDatosCuriosos().subscribe((datos) => {
      this.listaDatosCurioso = datos;
      console.log(this.listaDatosCurioso);
    }, error => {
      console.log(error);
    })
  }

}

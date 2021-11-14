import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanjeoService } from 'src/app/core/services/canjeo/canjeo.service';
import { ProductoCanjeo } from 'src/app/shared/models/canjeo';

@Component({
  selector: 'app-producto-canjeo',
  templateUrl: './producto-canjeo.component.html',
  styleUrls: ['./producto-canjeo.component.scss']
})
export class ProductoCanjeoComponent implements OnInit {

  listaProductoCanjeo: ProductoCanjeo[] = [];
  categoriaId!: string | null;

  constructor(
    private route: ActivatedRoute,
    private canjeoService: CanjeoService
  ) { }

  ngOnInit(): void {
    this.categoriaId = this.route.snapshot.paramMap.get('categoria');
    if(this.categoriaId){
      this.canjeoService.listadoProductoCanjeoPorCategoria(this.categoriaId).subscribe((producto) => {
        this.listaProductoCanjeo = producto;
        console.log(this.listaProductoCanjeo);
      }, error => {
        console.log(error);
      })
    }
  }

}

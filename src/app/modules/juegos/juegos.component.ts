import { Component, OnInit } from '@angular/core';
import { JuegoService } from 'src/app/core/services/juego/juego.service';
import { Juego } from 'src/app/shared/models/juego';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss']
})
export class JuegosComponent implements OnInit {

  listaJuego!: Juego[];

  constructor(
    private juegoService: JuegoService
  ) { }

  ngOnInit(): void {
    this.listaJuego = [];
    this.juegoService.listadoJuego().subscribe((juego) => {
      this.listaJuego = juego
    }, error => {
      console.log(error);
    });
  }

}

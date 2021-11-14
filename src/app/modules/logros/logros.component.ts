import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogroService } from 'src/app/core/services/logro/logro.service';
import { Juego } from 'src/app/shared/models/juego';
import { Logro } from 'src/app/shared/models/logro';
import { Pregunta } from 'src/app/shared/models/pregunta';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.scss']
})
export class LogrosComponent implements OnInit {

  listaLogro: Logro[] = [];
  listaPreguntasRespondidas: Pregunta[] = [];

  juego!: Juego;

  constructor(
    private logroService: LogroService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.logroService.listadoLogro().subscribe((logro) => {
      this.listaLogro = logro;
      console.log(this.listaLogro);
    }, error => {
      console.log(error);
    })
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModoJuego } from 'src/app/shared/models/modo-juego';

@Component({
  selector: 'app-modal-detalle-categoria',
  templateUrl: './modal-detalle-categoria.component.html',
  styleUrls: ['./modal-detalle-categoria.component.scss']
})
export class ModalDetalleCategoriaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalDetalleCategoriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModoJuego,
  ) { }

  ngOnInit(): void {
  }

}

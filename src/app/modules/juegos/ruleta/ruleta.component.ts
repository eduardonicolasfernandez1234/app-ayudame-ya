import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel';
import { JuegoService } from 'src/app/core/services/juego/juego.service';
import { ModoJuegoService } from 'src/app/core/services/modo-juego/modo-juego.service';
import { OpcionService } from 'src/app/core/services/opcion/opcion.service';
import { PreguntaService } from 'src/app/core/services/pregunta/pregunta.service';
import { Juego } from 'src/app/shared/models/juego';
import { ModoJuego } from 'src/app/shared/models/modo-juego';
import { Pregunta } from 'src/app/shared/models/pregunta';
import { ModalDetalleCategoriaComponent } from './components/modal-detalle-categoria/modal-detalle-categoria.component';
import { ModalPreguntaComponent } from './components/modal-pregunta/modal-pregunta.component';
import { ModalResultadoComponent } from './components/modal-resultado/modal-resultado.component';


@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.scss']
})
export class RuletaComponent implements OnInit {

  @ViewChild(NgxWheelComponent, { static: false }) wheel: any;
  listaCategorias: ModoJuego[] = [];
  seed!: any;
  idToLandOn: any;
  items: any = [...Array(this.listaCategorias.length).keys()];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  textAlignment: TextAlignment = TextAlignment.OUTER;

  listaPreguntasActuales: Pregunta[] = [];
  listaPreguntasRespondidas: Pregunta[] = [];

  juego!: Juego;

  constructor(
    private modoJuegoService: ModoJuegoService,
    public dialog: MatDialog,
    private preguntaService: PreguntaService,
    private opcionService: OpcionService,
    private juegoService: JuegoService,
  ) { }

  ngOnInit(): void {
    this.juegoService.listadoJuego().subscribe((juegos) => {
      this.juego = juegos[0]
    }, error => {
      console.log(error);
    })
    this.modoJuegoService.listadoCategoriasPorJuego(1).subscribe((categorias) => {
      this.listaCategorias = categorias;
      this.seed = [...Array(this.listaCategorias.length).keys()]
      this.idToLandOn = this.listaCategorias[Math.floor(Math.random() * this.listaCategorias.length)];
      const colors = ['#b29476', '#e3d6c9', '#1f5c70', '#fba01d', '#fcbc49', '#05a9a8', '#d4320e']
      const colors2 = ['#fba01d', '#1f5c70']
      const colors3 = ['#009c87', '#FFFFFF']
      this.items = this.listaCategorias.map((value: ModoJuego, index: number) => ({
        fillStyle: colors3[index % 2],
        text: `${this.obtenerNombreSeparado(value.nombre)}`,
        id: value,
        textFillStyle: 'black',
        textFontSize: '16',
        textFontFamily: 'Times new roman',
        image: "../../../assets/images/imagen.png",
        imgData: "../../../assets/images/imagen.png",
        imageDirection: "North",
        segments: { text: 'hola', image: '../../../assets/images/imagen.png'}
      }))
    }, error => {
      console.log(error);
    })
  }

  obtenerNombreSeparado(nombre: string){
    let listaNombre = nombre.replace(' ', '\n');
    return listaNombre;
  }

  before() { }

  after() {
    this.idToLandOn = this.listaCategorias[Math.floor(Math.random() * this.listaCategorias.length)];
    console.log(this.idToLandOn);
    this.preguntaService.listadoPreguntasPorCategoria((this.idToLandOn as ModoJuego).id).subscribe((preguntas) => {
      this.listaPreguntasActuales = preguntas;
      console.log(this.listaPreguntasActuales);
      this.validarPreguntasNoRepetida(this.listaPreguntasActuales);
    }, error => {
      console.log(error);
    })
  }

  validarPreguntasNoRepetida(listaPreguntaActual: Pregunta[]){
    if(listaPreguntaActual.length > 0){
      let posPregunta = Math.floor(Math.random() * listaPreguntaActual.length);
      let preguntaSeleccionada = listaPreguntaActual[posPregunta];
      console.log(preguntaSeleccionada);
      console.log(this.listaPreguntasRespondidas);
      
      let preguntaAux = this.listaPreguntasRespondidas.find((pregunta) => pregunta.id == preguntaSeleccionada.id );
      console.log(preguntaAux);
      if(preguntaAux){
        listaPreguntaActual.splice(posPregunta, 1);
        console.log(listaPreguntaActual);
        console.log('SI existe la pregunta recursividad');
        this.validarPreguntasNoRepetida(listaPreguntaActual);
      }else{
        console.log('NO EXISTE LA PREGUNTA');
        this.opcionService.listadoOpcionPorPregunta(preguntaSeleccionada.id).subscribe((opciones) => {
          this.wheel.reset();
          this.listaPreguntasRespondidas.push(preguntaSeleccionada);
          console.log('OPCIONES');
          const dialog_config = new MatDialogConfig();
          // dialog_config.disableClose = false;
          // dialog_config.autoFocus = true;
          // dialog_config.width = '60%';
          // dialog_config.height = '80%';
          // dialog_config.panelClass = 'my-dialog';
          dialog_config.data = { pregunta: preguntaSeleccionada, opciones: opciones };
          const dialogRef = this.dialog.open(ModalPreguntaComponent, dialog_config);
          
          dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            if(result){
              let data = {
                opcion: result.opcion,
                pregunta: preguntaSeleccionada,
                ayuda: result.ayuda,
                jugador: {id: 1}
              }
              console.log('ENTRANDO A VALIDAR PREGUNTA');
              this.preguntaService.validarPregunta(data).subscribe((res: any) => {
                console.log(res);
                dialog_config.data = res;
                const dialogRef = this.dialog.open(ModalResultadoComponent, dialog_config);
              }, error => {
                console.log(error);
              })
            }
          });
        }, error => {
          console.log(error);
        })
      }
    }else{
      this.wheel.reset();
      return
    }
  }

  botonreset(){
    const dialog_config = new MatDialogConfig();
    dialog_config.panelClass = 'custom-modalbox';
    dialog_config.data = {res: 'correcto'};
    const dialogRef = this.dialog.open(ModalResultadoComponent, dialog_config);
  }

  irCategoria(categoria: ModoJuego){
    const dialog_config = new MatDialogConfig();
    dialog_config.data = categoria;
    const dialogRef = this.dialog.open(ModalDetalleCategoriaComponent, dialog_config);
  }

}

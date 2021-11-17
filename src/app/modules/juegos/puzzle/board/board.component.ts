import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CategoriaPuzzleService } from 'src/app/core/services/puzzle/categoria-puzzle.service';
import { Piece } from 'src/app/shared/models/puzzle/game';
import { SubImagenPuzzle } from 'src/app/shared/models/puzzle/imagenes_puzzle';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  readonly rows: number = 4;
  readonly columns: number = 4;
  readonly numberOfPieces: number = this.rows * this.columns;
  private moves: number = 0;
  private fails: number = 0;
  over: boolean = false;
  pieces: Array<Piece> = [];

  @Input() folder!: string;
  @Input() image!: number;
  @Output() statsChange = new EventEmitter();

  // Implementacion
  listadoSubimagenPuzzle: SubImagenPuzzle[] = [];

  constructor(
    private categoriaPuzzleService: CategoriaPuzzleService
  ){

  }

  ngOnInit(): void {
    console.log(this.folder);
    console.log(this.image);
    this.reset();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (((changes.folder && changes.folder.currentValue) ||
      (changes.image && changes.image.currentValue)) && this.pieces.length) {
      this.reset();
    }
  }

  private reset(): void {
    this.moves = 0;
    this.fails = 0;
    this.shufflePieces();
    while (this.numberOfPiecesInPlace > 0) {
      this.shufflePieces();
    }
  }

  private get numberOfPiecesInPlace(): number {
    return this.pieces.reduce((inPlace, piece, i) => {
      return (piece.id === i) ? inPlace + 1 : inPlace
    }, 0)
  }

  private shufflePieces(): void {
    let pieces: Array<Piece> = new Array(this.numberOfPieces);
    let random: number;
    let visited: Array<number> = [];
    let path: string = '';
    console.log(this.numberOfPieces);
    this.categoriaPuzzleService.obtenerSubImagenesPorImagenPuzzle(this.image+1).subscribe((imagenes: any) => {
      this.listadoSubimagenPuzzle = imagenes;
      console.log(this.listadoSubimagenPuzzle);
      for (let i = 0; i < this.numberOfPieces; i++) {
        random = Math.floor(Math.random() * this.numberOfPieces);
        while (visited.indexOf(random) !== -1) {
          random = Math.floor(Math.random() * this.numberOfPieces);
        }
        visited.push(random);
        path = `url(http://localhost:8000${this.listadoSubimagenPuzzle[random].imagen})`;
        pieces[i] = { index: i, id: random, misplaced: true, path };
      }
      console.log(pieces);
      this.pieces = pieces;
    })


    // this.categoriaPuzzleService.obtenerSubImagenesPorImagenPuzzle(this.image).subscribe((imagenes: any) => {
    //   this.listadoSubimagenPuzzle = imagenes;

    //   for (let i = 0; i < this.numberOfPieces; i++) {
    //     random = Math.floor(Math.random() * this.numberOfPieces);
    //     while (visited.indexOf(random) !== -1) {
    //       random = Math.floor(Math.random() * this.numberOfPieces);
    //     }
    //     visited.push(random);
    //     path = `url(https://firebasestorage.googleapis.com/v0/b/puzzle-ebd10.appspot.com/o/images%2F${this.folder}%2F${this.image}%2F${random}.jpg?alt=media)`;
    //     pieces[i] = { index: i, id: random, misplaced: true, path };
    //   }
    //   console.log(pieces);
    //   this.pieces = pieces;
    // })
    
  }

  private isOver(): boolean {
    this.over = this.numberOfPiecesInPlace === this.numberOfPieces;
    return this.over;
  }

  private swap(dragged: Piece, dropped: Piece, field: string): void {
    console.log('swap');
    let temp: string = dragged[field] as string;
    dragged[field] = dropped[field];
    dropped[field] = temp;
  }

  private swapPieces(dragged: Piece, dropped: Piece): void {
    console.log('swap pieces');
    this.swap(dragged, dropped, 'id');
    this.swap(dragged, dropped, 'path');
  }

  private misplacedCheck(piece: Piece): void {
    piece.misplaced = !(piece.id === piece.index);
    if (piece.misplaced) {
      this.fails++;
    }
  }

  private misplacedPiecesCheck(dragged: Piece, dropped: Piece): void {
    this.misplacedCheck(dragged);
    this.misplacedCheck(dropped);
  }

  private dragAndDrop(dragged: Piece, dropped: Piece): void {
    console.log('drag and drop');
    if (!this.isOver() && dragged !== dropped) {
      this.swapPieces(dragged, dropped);
      this.misplacedPiecesCheck(dragged, dropped);
      this.statsChange.emit({ moves: ++this.moves, fails: this.fails, over: this.isOver() });
    }
  }

  onDrag(ev: any): void {
    console.log('on dragggg');
    console.log(ev.target);
    console.log(ev.target.id);
    console.log(ev.target.index);
    ev.dataTransfer.setData("index", ev.target.id);
  }

  onDrop(ev: any): void {
    console.log('on droppp');
    ev.preventDefault();
    this.dragAndDrop(this.pieces[ev.dataTransfer.getData("index")], this.pieces[ev.target.id]);
  }

  onDragOver(ev: any): void {
    console.log('on drag over');
    console.log(ev);
    ev.preventDefault();
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriaPuzzleService } from 'src/app/core/services/puzzle/categoria-puzzle.service';
import { DictionaryService } from 'src/app/core/services/puzzle/dictionary.service';
import { JuegoPuzzleService } from 'src/app/core/services/puzzle/juego-puzzle.service';
import { CategoriaPuzzle } from 'src/app/shared/models/puzzle/categoria_puzzle';
import { ImagenPuzzle } from 'src/app/shared/models/puzzle/imagenes_puzzle';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent implements OnInit, OnDestroy {

  // readonly imagesPerCategory = 20; ANTES
  readonly imagesPerCategory = 1;
  readonly secondsInAMinute = 60;  
  private subscription: any;  
  private intervalId: any;
  private categoryId: number = -1;
  private seconds: number = 0;
  folder: string = "";
  image: number = 0;
  imagen!: ImagenPuzzle | null;
  over: boolean = false;
  time: string = '';
  moves: number = 0;
  fails: number = 0;
  goal!: string;
  end!: string;

  // header
  languages: any;

  // navigation
  puzzle!: string;
  history!: string;
  repository!: string;
  about!: string;
  contact!: string;

  constructor(
    private dictionary: DictionaryService, 
    private gamedb: JuegoPuzzleService,
    private categoriaPuzzleService: CategoriaPuzzleService
  ) { }

  ngOnInit(): void {
    // this.subscription = this.dictionary.getTranslations().subscribe((data: any) => {
    //   this.puzzle = data['HOME'];
    //   this.history = data['HISTORY'];
    //   this.repository = data['REPOSITORY'];
    //   this.about = data['ABOUT'];
    //   this.contact = data['CONTACT'];
    // });

    // this.subscription = this.dictionary.getLanguages().subscribe((languages: any) => {
    //   this.languages = languages;
    // })  
    this.goal = 'Arrastra y suelta las imágenes!';
    this.end = 'Fin de la partida!';
    // this.subscription = this.dictionary.getTranslations().subscribe((data: any) => {
    //   this.goal = data['GAME_GOAL'];
    //   this.end = data['GAME_OVER'];
    // });      
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  setLanguage(lang: any): void {
    this.dictionary.setLanguage(lang);
  }
    
  refreshTimer(): void {
    this.intervalId = setInterval(() => {
      if (this.over){
        clearInterval(this.intervalId);
      }else{
        this.seconds++;
        let minutes = Math.floor(this.seconds / this.secondsInAMinute);
        let seconds = this.seconds % this.secondsInAMinute + 's';
        this.time =  minutes ? minutes + 'm '  + seconds : seconds;
      }
    }, 1000);
  }

  reset(): void {
    this.moves = 0
    this.fails = 0;
    this.over = false;
    this.seconds = 0;
    if (this.intervalId){
      clearInterval(this.intervalId);
    }
    this.refreshTimer();
  }

  onCategoryChange(category: any): void {
   this.categoryId = category.categoryId;
   this.folder = category.folder;
   this.reset();
   this.imagen = null;
   this.categoriaPuzzleService.obtenerImagenesPorCategoria(this.categoryId).subscribe((imagenes: any) => {
    let pos = Math.floor(Math.random() * imagenes.length);
    this.image = pos;
    this.imagen = imagenes[pos];
    console.log(imagenes);
    console.log(this.imagen);
    console.log('CATEGORY CHANGE ', this.image);
   }, error => {
     console.log(error);
   })
   // this.image = Math.floor(Math.random() * this.imagesPerCategory);
  }

  onImageChange(image: any): void {
    this.image = image;
    this.reset();
  }

  onStatsChange({moves, fails, over}: any): void {
    this.moves = moves;
    this.fails = fails;
    this.over = over;
    this.save();
  }

  save(): void {
    if (this.over) {
        this.gamedb.save({
          id: 0,
          categoryId: this.categoryId,
          folder: this.folder,
          image: this.image as unknown as string,
          time: this.time,
          moves: this.moves,
          fails: this.fails
        })
    }
  }

}

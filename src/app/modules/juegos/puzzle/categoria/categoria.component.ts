import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriaPuzzleService } from 'src/app/core/services/puzzle/categoria-puzzle.service';
import { DictionaryService } from 'src/app/core/services/puzzle/dictionary.service';
import { CategoriaPuzzle } from 'src/app/shared/models/puzzle/categoria_puzzle';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  private subscription: any;
  private subscriptionTranslations: any;
  categories: any;
  categoryId!: number;
  categoryText!: string;

  listadoCategorias: CategoriaPuzzle[] = [];

  @Output() categoryChange = new EventEmitter();

  constructor(private dictionary: DictionaryService, private categoryService: CategoriaPuzzleService) { }

  ngOnInit(): void {
    /*this.subscription = this.categoryService.getCategories().subscribe((dataCategories: any) => {
      this.subscriptionTranslations = this.dictionary.getTranslations().subscribe((dataTranslations: any) => {
        let categories = [];
        for (let i = 0; i < dataCategories.length; i++) {
          categories.push({ 
            id: dataCategories[i].id, 
            name: dataTranslations[dataCategories[i].name], 
            folder: dataCategories[i].folder});
        }
        this.categories = categories;
        this.categoryText = dataTranslations['CATEGORY'];
        this.categoryId = this.categories[Math.floor(Math.random() * this.categories.length)].id;
        console.log(this.categories);
        console.log(this.categoryText);
        console.log(this.categoryId);
        this.emitCategory();
      });
    });*/
    this.categoryService.obtenerCategoriaPuzzle().subscribe((categoria: any) => {
      this.listadoCategorias = categoria;
      console.log(this.listadoCategorias);
      let pos = Math.floor(Math.random() * this.listadoCategorias.length);
      this.categoryId = this.listadoCategorias[pos].id;
      this.categoryText = this.listadoCategorias[pos].nombre;
      
      let data = {
        categoryId: this.categoryId,
        folder: this.listadoCategorias[pos].nombre
      }
      this.emitCategory(data);
    }, error => {
      console.log(error);
    })
  }

  enviarCategoria(categoria: CategoriaPuzzle){
    let data = {
      categoryId: categoria.id,
      folder: categoria.nombre
    }
    this.emitCategory(data);
  }

  ngOnDestroy(): void {
    // this.subscriptionTranslations.unsubscribe()
    // this.subscription.unsubscribe();
  }

  emitCategory(data: any) {
    this.categoryChange.emit(data);
  }

  onChange(event: any): void {
    this.categoryId = event.target.value;
    let data = {
      categoryId: this.categoryId,
      folder: this.listadoCategorias[this.categoryId].nombre
    }
    this.emitCategory(data);
  }

}

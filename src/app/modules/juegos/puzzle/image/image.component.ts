import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DictionaryService } from 'src/app/core/services/puzzle/dictionary.service';
import { ImagenPuzzle } from 'src/app/shared/models/puzzle/imagenes_puzzle';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  
  readonly imagesPerCategory = 20;
  private subscription: any;
  @Input() folder!: string;
  @Input() image!: number;
  @Input() imagen!: ImagenPuzzle;
  @Output() imageChange = new EventEmitter();
  path: string = '';
  pathMobile: string = '';
  imageText!: string;

  constructor(
    private dictionary: DictionaryService
  ) {}

  ngOnInit(): void {
    // this.subscription = this.dictionary.getTranslations().subscribe((data: any) => {
    //   this.imageText = data['IMAGE'];
    // });     
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.folder && changes.folder.currentValue) {
      this.setPath(changes.folder.currentValue);
    }
  }
  
  private setPath(folder: string): void {
    this.path = `https://firebasestorage.googleapis.com/v0/b/puzzle-ebd10.appspot.com/o/images%2F${folder}%2F${this.image}.jpg?alt=media`;
    this.pathMobile = `https://firebasestorage.googleapis.com/v0/b/puzzle-ebd10.appspot.com/o/images%2F${folder}%2Fmobile%2F${this.image}.jpg?alt=media`;
  }

  refreshImage(): void {
    let image = this.randomImage();
    this.image = image;
    this.setPath(this.folder);
    this.imageChange.emit(image + '');
  }

  private randomImage() {
    let image = Math.floor(Math.random() * this.imagesPerCategory);
    while ( image === this.image ){
      image = Math.floor(Math.random() * this.imagesPerCategory);
    }
    return image;
  }

}

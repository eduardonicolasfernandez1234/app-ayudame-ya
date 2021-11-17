import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DictionaryService } from 'src/app/core/services/puzzle/dictionary.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit, OnDestroy {

  private subscription: any;  
  @Input() time!: string;
  @Input() moves!: number;
  @Input() fails!: number;
  timeText!: string;
  movesText!: string;
  failsText!: string;

  constructor(private dictionary: DictionaryService) {}

  ngOnInit(): void {
    this.subscription = this.dictionary.getTranslations().subscribe((data: any) => {
      this.timeText = data['TIME'];
      this.movesText = data['MOVES'];
      this.failsText = data['FAILS'];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

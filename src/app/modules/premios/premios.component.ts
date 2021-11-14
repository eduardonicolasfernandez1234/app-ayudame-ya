import { Component, OnInit } from '@angular/core';
import { PremioService } from 'src/app/core/services/premio/premio.service';
import { Premio } from 'src/app/shared/models/premio';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.component.html',
  styleUrls: ['./premios.component.scss']
})
export class PremiosComponent implements OnInit {

  listaPremio: Premio[] = [];

  constructor(
    private premioService: PremioService
  ) { }

  ngOnInit(): void {
    this.premioService.listadoPremio().subscribe((premio) => {
      this.listaPremio = premio;
      console.log(this.listaPremio);
    }, error => {
      console.log(error);
    })
  }

}

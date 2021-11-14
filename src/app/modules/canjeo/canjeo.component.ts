import { Component, OnInit } from '@angular/core';
import { CanjeoService } from 'src/app/core/services/canjeo/canjeo.service';
import { Canjeo } from 'src/app/shared/models/canjeo';

@Component({
  selector: 'app-canjeo',
  templateUrl: './canjeo.component.html',
  styleUrls: ['./canjeo.component.scss']
})
export class CanjeoComponent implements OnInit {

  listaCanjeo: Canjeo[] = [];

  constructor(
    private canjeoService: CanjeoService
  ) { }

  ngOnInit(): void {
    this.canjeoService.listadoCanjeo().subscribe((canjeo) => {
      this.listaCanjeo = canjeo;
      console.log(this.listaCanjeo);
    },error => {
      console.log(error);
    })
  }

}

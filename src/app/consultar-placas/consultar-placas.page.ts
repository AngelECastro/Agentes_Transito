import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiServicesService } from '../services/api-services.service';


@Component({
  selector: 'app-consultar-placas',
  templateUrl: './consultar-placas.page.html',
  styleUrls: ['./consultar-placas.page.scss'],
})
export class ConsultarPlacasPage implements OnInit {
  filterTerm!: string;
  digimons: any[] = [];

  constructor(  public http: HttpClient, private dataservices: ApiServicesService ) { }

  ngOnInit() {
    this.http.get('https://digimon-api.vercel.app/api/digimon').subscribe((digimons: []) => {
      this.digimons = digimons;
    });
  }
}

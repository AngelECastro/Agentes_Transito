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

  vehicles: any = [
    {
      img: 'https://cdn-images.motor.es/image/m/800w/fotos-noticias/2022/05/bmw-serie-3-2023-202287064-1652862039_1.jpg',
      model: 'Susuki vitara 2019',
      plate: 'C-344454'
    },
    {
      img: 'https://rodatiautos.ar/images/listings/2022-03/0fa6d0df-1646303973-404.jpg',
      model: 'Nissan Xtrail 2022',
      plate: 'J-968706'
    },
    {
      img: 'https://s3-eu-west-1.amazonaws.com/carnovo-images/review-models/646c905d-aab1-409e-80a1-361218a8ad99.jpg',
      model: 'Nissan QL35',
      plate: 'T-069784'
    },
    {
      img: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/01/3-versiones-legendarias-ford-ranger-2584021.jpg',
      model: 'Hundai Serpento 2023',
      plate: 'L-048576'
    },
    {
      img: 'https://http2.mlstatic.com/D_NQ_NP_622176-MRD50355719335_062022-O.webp',
      model: 'Susuki Scale 2019',
      plate: 'Q-857693'
    },
    {
      img: 'https://carrosrd-media.s3.amazonaws.com/listings/23391/m_15950433370201783.jpg',
      model: 'Grand Cherokee 2015',
      plate: 'X-948503'
    },
  ];

  constructor(  public http: HttpClient, private dataservices: ApiServicesService ) { }

  ngOnInit() {
    this.http.get('https://digimon-api.vercel.app/api/digimon').subscribe((digimons: []) => {
      this.digimons = digimons;
    });
  }
}

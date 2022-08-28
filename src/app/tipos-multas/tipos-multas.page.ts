import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos-multas',
  templateUrl: './tipos-multas.page.html',
  styleUrls: ['./tipos-multas.page.scss'],
})
export class TiposMultasPage implements OnInit {

  filterTerm!: string;
  multas: any = [
    {
      name: 'Mal estacionado',
      price: '1200'
    },
    {
      name: 'Manejo bajo efectos de Alcohol',
      price: '3500'
    },
    {
      name: 'Alta velocidad',
      price: '2000'
    },
    {
      name: 'Choque',
      price: '5000'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

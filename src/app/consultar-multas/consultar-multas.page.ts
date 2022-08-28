import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-multas',
  templateUrl: './consultar-multas.page.html',
  styleUrls: ['./consultar-multas.page.scss'],
})
export class ConsultarMultasPage implements OnInit {
  multas: any;
  filterTerm!: string;
  constructor() { }

  ngOnInit() {
    this.multas = JSON.parse(localStorage.getItem('multa'));
    console.log(this.multas);
  }

  deleteAll(){
    localStorage.removeItem('multa');
    this.multas = JSON.parse(localStorage.getItem('multa'));
  }
}

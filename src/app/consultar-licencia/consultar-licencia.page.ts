/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-licencia',
  templateUrl: './consultar-licencia.page.html',
  styleUrls: ['./consultar-licencia.page.scss'],
})
export class ConsultarLicenciaPage implements OnInit {

  filterTerm!: string;
  persons: any = [
    {
      name: 'Gerson Manuel Mena',
      dni: 'https://media.istockphoto.com/photos/passport-photo-of-latin-american-man-with-beard-picture-id1287598154?k=20&m=1287598154&s=612x612&w=0&h=P3sqRBXOIstqwE5z0ocmcBuERAC-v2FFwbGOA3u6G2A=',
      idNumber: '000-000-001'
    },
    {
      name: 'Geremias Solano',
      dni: 'https://media.istockphoto.com/photos/passport-photo-of-a-guy-in-a-grey-shirt-picture-id473690882?k=20&m=473690882&s=612x612&w=0&h=W_QHHmo3Rw7WZ5cvGt-Ff-0QzkVuSUCIB7ISNf028j0=',
      idNumber: '000-000-002'
    },
    {
      name: 'Eteven Caraballo',
      dni: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0gJVRTKiCu_FyaOho1pjquqItOeLt6YUrmjHu0uXkf2gL5p1csv4xrR38wckfP1CkQkI&usqp=CAU',
      idNumber: '000-000-003'
    },
    {
      name: 'Angel Castro',
      dni: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTqvH15xWZeKtts_oay_zNw_1H4D05rIHuN9yzdo3FgRdE56Nyq32w5Rx6ObQow4twxKA&usqp=CAU',
      idNumber: '000-000-004'
    },
    {
      name: 'Huascar Elias Mejia',
      dni: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyGCZDHyc1ljJ1lAqpvYVckCTP_SOurvdXQEw5P18vHf0pbXLuaWeRqC64LF4eHNLvH8&usqp=CAU',
      idNumber: '000-000-005'
    },
    {
      name: 'Jackson Martinez',
      dni: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQDEDOPj60roq7vJM-mYoL6SFZzRVMXBAPN6FEdd1LepLeokRwkVDIeticzDfDiShiGU&usqp=CAU',
      idNumber: '000-000-006'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

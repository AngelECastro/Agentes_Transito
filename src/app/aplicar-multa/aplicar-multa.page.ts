import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-aplicar-multa',
  templateUrl: './aplicar-multa.page.html',
  styleUrls: ['./aplicar-multa.page.scss'],
})
export class AplicarMultaPage implements OnInit {

  cedula: any;
  placa: any;
  motivo: any;
  comentario: any;
  longitud: any;
  latitud: any;
  fecha: any;
  multasDB: any;
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
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  addTask(){
    const multa: any = {
      cedula: this.cedula,
      placa: this.placa,
      motivo: this.motivo,
      comentario: this.comentario,
      longitud: this.longitud,
      latitud: this.latitud,
      fecha: this.fecha,
    };
    let tasks: any = [];
    if (localStorage.getItem('multa')==null) {
      tasks.push(multa);
      localStorage.setItem('multa',JSON.stringify(tasks));
      this.presentAlert();
    }

    else{
      tasks = JSON.parse(localStorage.getItem('multa'));
      tasks.push(multa);
      localStorage.setItem('multa',JSON.stringify(tasks));
      this.presentAlert();
    }

    }

    async presentAlert() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Aviso',
        subHeader: 'Finalizado',
        message: 'Se agrego la multa satisfactoriamente',
        buttons: ['OK'],
      });

      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
}

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Multas', url: '/tipos-multas', icon: 'warning' },
    { title: 'Vehiculos', url: '/consultar-placas', icon: 'car' },
    { title: 'Conductores', url: '/consultar-licencia', icon: 'people' },
    { title: 'Crear Multa', url: '/aplicar-multa', icon: 'create' },
    { title: 'Buscar Multas', url: '/consultar-multas', icon: 'search' },
    { title: 'Mapa', url: '/mapa', icon: 'map' },
    { title: 'Noticias', url: '/noticias', icon: 'newspaper' },
    { title: 'Clima', url: '/clima', icon: 'rainy' },
    { title: 'Horoscopo', url: '/horoscopo', icon: 'planet' },
  ];
}

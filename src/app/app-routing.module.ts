import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'consultar-multas',
    loadChildren: () => import('./consultar-multas/consultar-multas.module').then( m => m.ConsultarMultasPageModule)
  },
  {
    path: 'consultar-placas',
    loadChildren: () => import('./consultar-placas/consultar-placas.module').then( m => m.ConsultarPlacasPageModule)
  },
  {
    path: 'consultar-licencia',
    loadChildren: () => import('./consultar-licencia/consultar-licencia.module').then( m => m.ConsultarLicenciaPageModule)
  },
  {
    path: 'aplicar-multa',
    loadChildren: () => import('./aplicar-multa/aplicar-multa.module').then( m => m.AplicarMultaPageModule)
  },
  {
    path: 'tipos-multas',
    loadChildren: () => import('./tipos-multas/tipos-multas.module').then( m => m.TiposMultasPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('./clima/clima.module').then( m => m.ClimaPageModule)
  },
  {
    path: 'horoscopo',
    loadChildren: () => import('./horoscopo/horoscopo.module').then( m => m.HoroscopoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

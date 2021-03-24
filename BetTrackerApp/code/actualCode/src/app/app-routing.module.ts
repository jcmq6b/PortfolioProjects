import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'current-bets-page/:person',
    loadChildren: () => import('./pages/current-bets-page/current-bets-page.module').then( m => m.CurrentBetsPagePageModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },
  {
    path: 'previous-bets-page/:person',
    loadChildren: () => import('./pages/previous-bets-page/previous-bets-page.module').then( m => m.PreviousBetsPagePageModule)
  },
  {
    path: 'add-new-bet/:person',
    loadChildren: () => import('./pages/add-new-bet/add-new-bet.module').then( m => m.AddNewBetPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

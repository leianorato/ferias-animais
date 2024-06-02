

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['busca']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
  //   ...canActivate(redirectUnauthorizedToLogin)
  // },
  {
    path: 'cadastro-pet',
    loadChildren: () => import('./cadastro-pet/cadastro-pet.module').then(m => m.CadastroPetPageModule)
  },
  {
    path: 'cadastro-hospedagem',
    loadChildren: () => import('./cadastro-hospedagem/cadastro-hospedagem.module').then(m => m.CadastroHospedagemPageModule)
  },
  {
    path: 'busca',
    loadChildren: () => import('./busca/busca.module').then(m => m.BuscaPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'confirmacao-cadastro-pet',
    loadChildren: () => import('./confirmacao-cadastro-pet/confirmacao-cadastro-pet.module').then(m => m.ConfirmacaoCadastroPetPageModule)
  },
  {
    path: 'confirmacao-cadastro-hosp',
    loadChildren: () => import('./confirmacao-cadastro-hosp/confirmacao-cadastro-hosp.module').then(m => m.ConfirmacaoCadastroHospPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacaoCadastroPetPage } from './confirmacao-cadastro-pet.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacaoCadastroPetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacaoCadastroPetPageRoutingModule {}

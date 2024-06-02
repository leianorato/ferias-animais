import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacaoCadastroHospPage } from './confirmacao-cadastro-hosp.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacaoCadastroHospPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacaoCadastroHospPageRoutingModule {}

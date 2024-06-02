import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroHospedagemPage } from './cadastro-hospedagem.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroHospedagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroHospedagemPageRoutingModule {}

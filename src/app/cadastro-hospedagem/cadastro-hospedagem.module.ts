import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroHospedagemPageRoutingModule } from './cadastro-hospedagem-routing.module';

import { CadastroHospedagemPage } from './cadastro-hospedagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroHospedagemPageRoutingModule
  ],
  declarations: [CadastroHospedagemPage]
})
export class CadastroHospedagemPageModule {}

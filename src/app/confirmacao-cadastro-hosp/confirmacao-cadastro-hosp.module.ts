import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacaoCadastroHospPageRoutingModule } from './confirmacao-cadastro-hosp-routing.module';

import { ConfirmacaoCadastroHospPage } from './confirmacao-cadastro-hosp.page';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacaoCadastroHospPageRoutingModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  declarations: [ConfirmacaoCadastroHospPage]
})
export class ConfirmacaoCadastroHospPageModule {}

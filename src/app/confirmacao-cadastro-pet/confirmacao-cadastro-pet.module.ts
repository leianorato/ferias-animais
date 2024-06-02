import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConfirmacaoCadastroPetPageRoutingModule } from './confirmacao-cadastro-pet-routing.module';
import { ConfirmacaoCadastroPetPage } from './confirmacao-cadastro-pet.page';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacaoCadastroPetPageRoutingModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  declarations: [ConfirmacaoCadastroPetPage]
})
export class ConfirmacaoCadastroPetPageModule {}

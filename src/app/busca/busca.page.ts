import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {
  hospedagens: any[] = [];

  constructor(private firestore: Firestore) {}

  async ngOnInit() {
    // Buscar dados das hospedagens do Firestore
    const querySnapshot = await getDocs(collection(this.firestore, 'hospedagens'));
    querySnapshot.forEach(doc => {
      // Adicionar os dados de cada hospedagem ao array de hospedagens
      this.hospedagens.push(doc.data());
    });
  }

  abrirLinkHospedagem(url: string) {
    window.open(url, '_blank');
  }
}

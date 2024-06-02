import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-hospedagem',
  templateUrl: './cadastro-hospedagem.page.html',
  styleUrls: ['./cadastro-hospedagem.page.scss'],
})
export class CadastroHospedagemPage implements OnInit {
  formData: any = {};
  camposHosp: any[] = [
    { nome: 'Nome da Hospedagem', tamanho: 'grande', icone: 'person', tipo: '' },
    { nome: 'CNPJ', tamanho: 'pequeno', icone: 'person', tipo: ''},
    { nome: 'E-mail', tamanho: 'pequeno', icone: 'mail', tipo: 'email' },
    { nome: 'Contato', tamanho: 'pequeno', icone: 'call', tipo: 'tel' },
    { nome: 'Endereço', tamanho: 'pequeno', icone: 'pin', tipo: '' },
    { nome: 'CEP', tamanho: 'pequeno', icone: 'pin', tipo: 'number' },
    { nome: 'Preço', tamanho: 'pequeno', icone: '', tipo: 'number' },
    { nome: 'Senha', tamanho: 'pequeno', icone: 'lock-closed', tipo: 'password' },
    { nome: 'Confirmar Senha', tamanho: 'pequeno', icone: 'lock-closed', tipo: 'password' },
    { nome: 'Site da Hospedagem', tamanho: 'pequeno', icone: 'link', tipo: 'url' },
    { nome: 'Foto da Hospedagem', tamanho: 'pequeno', icone: 'cloud', tipo: ''},
  ];
  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    this.adicionarCamposCadastro()
  }

  adicionarCamposCadastro() {
    const cadastrarPet = [
      { nome: 'Nome do PET', tamanho: 'grande', icone: 'paw' },
      { nome: 'Data de nascimento', tamanho: 'pequeno', icone: 'calendar', tipo: 'date'  },
      { nome: 'Espécie', tamanho: 'grande', icone: '' },
      { nome: 'Raça', tamanho: 'pequeno', icone: '' },
      { nome: 'Peso', tamanho: 'grande', icone: 'barbell', tipo: 'number' },
      { nome: 'Sexo', tamanho: 'pequeno', icone: 'male-female' },
    ];
    this.camposHosp = this.camposHosp.concat(cadastrarPet)
  }

  removerCamposCadastro() {
      const camposAdicionaisInicio = this.camposHosp.length - 6;
      this.camposHosp.splice(camposAdicionaisInicio);

  }
  onSubmit() {

    console.log('Dados do formulário:', this.formData);

    this.navCtrl.navigateForward('/confirmacao-cadastro-hosp', {
      queryParams: {
        formData: JSON.stringify(this.formData)
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-pet',
  templateUrl: './cadastro-pet.page.html',
  styleUrls: ['./cadastro-pet.page.scss'],
})
export class CadastroPetPage implements OnInit {
  formData: any = {};
  camposPet: any[] = [
    { nome: 'Nome do Dono', tamanho: 'grande', icone: 'person', tipo: '' },
    { nome: 'CPF do Dono', tamanho: 'pequeno', icone: 'person', tipo: '' },
    { nome: 'E-mail', tamanho: 'pequeno', icone: 'mail', tipo: 'email' },
    { nome: 'Contato', tamanho: 'pequeno', icone: 'call', tipo: 'tel' },
    { nome: 'Endereço', tamanho: 'pequeno', icone: 'pin', tipo: '' },
    { nome: 'CEP', tamanho: 'pequeno', icone: 'pin', tipo: 'number' },
    { nome: 'Senha', tamanho: 'pequeno', icone: 'lock-closed', tipo: 'password' },
    { nome: 'Confirmar Senha', tamanho: 'pequeno', icone: 'lock-closed', tipo: 'password' },
  ];

  constructor(private fb: FormBuilder, private navCtrl: NavController, private router: Router) { }


  ngOnInit() {}
  //   this.formPet = this.fb.group({
  //     nomeDono: ['', Validators.compose([
  //       Validators.required, Validators.minLength(3), Validators.maxLength(100)
  //     ])],

  //     cpfDono: ['', Validators.compose([
  //       Validators.required, Validators.minLength(11), Validators.maxLength(11)
  //     ])],
  //     email: ['', Validators.compose([
  //       Validators.required, Validators.email
  //     ])],
  //     contato:['', Validators.compose([
  //       Validators.required
  //     ])],
  //     endereco: ['', Validators.compose([
  //       Validators.required, Validators.minLength(3), Validators.maxLength(150)
  //     ])],
  //     cep: ['', Validators.compose([
  //       Validators.required, Validators.minLength(8), Validators.maxLength(8)
  //     ])],
  //     senha: ['', Validators.compose([
  //       Validators.required, Validators.minLength(8)
  //     ])],
  //     confirmarSenha: ['', Validators.compose([
  //       Validators.required, Validators.minLength(8)
  //     ])],
  //     nomePet: ['', Validators.compose([
  //       Validators.required, Validators.minLength(3), Validators.maxLength(100)
  //     ])],
  //     dataNascimento: ['', Validators.compose([
  //       Validators.required, Validators.minLength(3), Validators.maxLength(100)
  //     ])],
  //     especie:['', Validators.compose([
  //       Validators.required, Validators.minLength(3), Validators.maxLength(100)
  //     ])],
  //     raca:['', Validators.compose([
  //       Validators.required, Validators.minLength(3), Validators.maxLength(100)
  //     ])],
  //     peso: ['', Validators.compose([
  //       Validators.required, Validators.minLength(3), Validators.maxLength(100)
  //     ])],
  //     sexo: ['', Validators.compose([
  //       Validators.required, Validators.minLength(1), Validators.maxLength(1)
  //     ])],
  //   }, {  validator: this.matchingPasswords('senha', 'confirmarSenha')  });
  // }

  // matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
  //   return (group: FormGroup) => {
  //     let password = group.controls[passwordKey];
  //     let confirmPassword = group.controls[confirmPasswordKey];
  //     if (password.value !== confirmPassword.value) {
  //       return confirmPassword.setErrors({ notEquivalent: true });
  //     } else {
  //       return confirmPassword.setErrors(null);
  //     }
  //   }
  // };

  adicionarCamposCadastro() {
    const cadastrarPet = [
      { nome: 'Nome do PET', tamanho: 'grande', icone: 'paw' },
      { nome: 'Data de nascimento', tamanho: 'pequeno', icone: 'calendar', tipo: 'date' },
      { nome: 'Espécie', tamanho: 'grande', icone: '' },
      { nome: 'Raça', tamanho: 'pequeno', icone: '' },
      { nome: 'Peso', tamanho: 'grande', icone: 'barbell', tipo: 'number' },
      { nome: 'Sexo', tamanho: 'pequeno', icone: 'male-female' },
    ];
    this.camposPet = this.camposPet.concat(cadastrarPet);
  }

  removerCamposCadastro() {
    const camposAdicionaisInicio = this.camposPet.length - 6;
    this.camposPet.splice(camposAdicionaisInicio);
  }

  onSubmit() {

    console.log('Dados do formulário:', this.formData);

    this.navCtrl.navigateForward('/confirmacao-cadastro-pet', {
      queryParams: {
        formData: JSON.stringify(this.formData)
      }
    })
  }
}

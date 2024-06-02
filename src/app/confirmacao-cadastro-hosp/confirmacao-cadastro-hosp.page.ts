import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-confirmacao-cadastro-hosp',
  templateUrl: './confirmacao-cadastro-hosp.page.html',
  styleUrls: ['./confirmacao-cadastro-hosp.page.scss'],
})
export class ConfirmacaoCadastroHospPage implements OnInit {
  formData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private alertController: AlertController,
    private auth: Auth,
    private firestore: Firestore
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['formData']) {
        this.formData = JSON.parse(params['formData']);
      }
    });
  }

  async concluirCadastro() {
    const email = this.formData['E-mail'];
    const password = this.formData['Senha'];

    try {
      // Cria o usuário no Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;

      // Salva os dados adicionais no Firestore
      await setDoc(doc(this.firestore, 'hospedagens', user.uid), {
        nomeHospedagem: this.formData['Nome da Hospedagem'],
        cnpj: this.formData['CNPJ'],
        email: email,
        contato: this.formData['Contato'],
        endereco: this.formData['Endereço'],
        cep: this.formData['CEP'],
        site: this.formData['Site da Hospedagem'],
        preco: this.formData['Preço'],
        foto: this.formData['Foto da Hospedagem'],
      });

      // Exibe mensagem de confirmação
      const alert = await this.alertController.create({
        header: 'Sucesso',
        message: 'Cadastro realizado com sucesso!',
        buttons: ['OK']
      });

      await alert.present();

      // Redireciona para a página inicial
      this.router.navigate(['/']);
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: error.message,
        buttons: ['OK']
      });

      await alert.present();
    }
  }
}

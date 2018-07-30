import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  labelNombres: string = 'Nombres';
  labelApellidos: string = 'Apellidos';
  labelUsuario: string = 'Usuario';
  labelClave: string = 'Clave';
  labelConfirmacionClave: string ='Confirmación Clave';
  labelEmail: string = 'Email';
  labelConfirmacionEmail: string = 'Confirmación Email';

  nombres: string;
  apellidos: string;
  usuario: string;
  clave: string;
  confirmacionClave: string;
  email: string;
  confirmacionEmail: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  
  }

  esValidoIniciarSesion() {
    return (this.nombres && this.apellidos && this.usuario && this.clave && this.confirmacionClave && this.email && this.confirmacionEmail) ? true : false;
  }

  registro() {
      if(this.clave !== this.confirmacionClave) {
        let mensajeErrorClave = this.alertCtrl.create({
          title: 'Error Confirmación Clave',
          message: 'La clave y la confirmación de la clave no coinciden. Por favor revise'
        });
        mensajeErrorClave.present();
      }

      else if(this.email !== this.confirmacionEmail) {
        let mensajeErrorEmail = this.alertCtrl.create({
          title: 'Error Confirmación Email',
          message: 'El Email y la confirmación del email no coinciden. Por favor revise'
        });
        mensajeErrorEmail.present();
      }

      else {
        let mensajeConfirmacionRegistro = this.alertCtrl.create({
          title: 'Registro Completo',
          message: 'Bienvenido: ' + this.nombres + " " + this.apellidos
        });
        mensajeConfirmacionRegistro.present();
      }
  }

  paginaInicio() {
    this.navCtrl.push(HomePage);
  }
}
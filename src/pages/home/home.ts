import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  labelUsuario: string = "Usuario";
  labelClave: string = "Clave";
  imgSrc: string = "../../assets/imgs/logo-fedesoft.jpg";
  imgAlt: string = "logo fedesoft"

  constructor(public navCtrl: NavController) {

  }

}

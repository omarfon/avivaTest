import { CodePage } from './../pages/code/code';
import { MyparentsPage } from './../pages/myparents/myparents';
import { CreateparentPage } from '../pages/createparent/createparent';
import { CardPage } from './../pages/card/card';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/user/login/login';
import { ProfilePage } from './../pages/user/profile/profile';
import { IrmPage } from '../pages/optionals-devs/irm/irm';
import { MyDatesPage } from '../pages/optionals-devs/my-dates/my-dates';
import { RegisterPage } from '../pages/user/register/register';
import { RecipesPage } from '../pages/optionals-devs/recipes/recipes';
import { PayPage } from '../pages/appointment/pay/pay';
import { FinancerPage } from '../pages/appointment/financer/financer';



@Component({
  selector: 'page-slide',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('contenido') menu : NavController;
  //aqui regresarlo al HomePage
  rootPage:any = HomePage;
  showedAlert: boolean;
  confirmAlert;
  public userToken;

  hom   = HomePage;
  car   = CardPage;
  log   = LoginPage;
  pro   = ProfilePage;
  irm   = IrmPage;
  rep   = RecipesPage;
  myd   = MyDatesPage;
  reg   = RegisterPage;
  pay   = PayPage;
  fin   = FinancerPage;
  crea  = CreateparentPage;
  mypa  = MyparentsPage;
  code  = CodePage;





  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public menuCtrl: MenuController,
              public events: Events
              ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


    this.userToken = localStorage.getItem('idTokenUser');

    // XXX: Listen for events. Specialy for user logged.
    events.subscribe('user:logged', userLogged => {
      if(userLogged !== undefined && userLogged !== ""){
          this.userToken = localStorage.getItem('idTokenUser');
        }
     })
  }


  goPage(pagina:any){
    if( pagina == this.hom)
      this.menu.setRoot(pagina)
    else
      this.menu.push(pagina);
    this.menuCtrl.close();
  }

  logout(){
    localStorage.removeItem('idTokenUser');
    localStorage.removeItem('emailUser');
    localStorage.removeItem('passUser');
    localStorage.removeItem('authorization');
    localStorage.removeItem('role');
    localStorage.removeItem('patientName');
    this.userToken = null;
    this.menu.setRoot(LoginPage);
    this.menuCtrl.close();
  }


}


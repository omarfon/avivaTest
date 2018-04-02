import { RecipesPage } from './../pages/optionals-devs/recipes/recipes';
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


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('contenido') menu : NavController;
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
  reg   = RegisterPage
  

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public menuCtrl: MenuController,
              public events: Events) {
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
    this.userToken = null;
    this.menu.setRoot(HomePage);
    this.menuCtrl.close();
  }
}


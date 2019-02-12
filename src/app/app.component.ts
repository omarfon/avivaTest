import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CardPage } from './../pages/card/card';
import { CodePage } from './../pages/code/code';
import { MyparentsPage } from './../pages/myparents/myparents';
import { CreateparentPage } from '../pages/createparent/createparent';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/user/login/login';
import { ProfilePage } from './../pages/user/profile/profile';
import { IrmPage } from '../pages/optionals-devs/irm/irm';
import { MyDatesPage } from '../pages/optionals-devs/my-dates/my-dates';
import { RegisterPage } from '../pages/user/register/register';
import { RecipesPage } from '../pages/optionals-devs/recipes/recipes';
import { PayPage } from '../pages/appointment/pay/pay';
import { FinancerPage } from '../pages/appointment/financer/financer';
import { RecoverycodePage } from '../pages/recoverycode/recoverycode';
import { RecoveryPage } from '../pages/recovery/recovery';
import { StartPage } from '../pages/start/start';



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
  recode = RecoverycodePage;
  recov  = RecoveryPage;
  start  = StartPage;

  public fotoId = localStorage.getItem('image');
  private url = "http://dappapache02.eastus.cloudapp.azure.com:4200" ;
  public foto;
  public patientName = "";
  timemark = new Date().getTime();
  public correo;
              // public userPvr: UserProvider


  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public menuCtrl: MenuController,
              public events: Events
              ) {

        this.changeFoto();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // descomentar para poder redirigir cuando quieras ir a las paginas start
      if(localStorage.getItem('role') !== 'user'){
        this.menu.setRoot(StartPage);
      }else{
        this.menu.setRoot(HomePage);
      }

    });

    this.userToken = localStorage.getItem('idTokenUser');
    // XXX: Listen for events. Specialy for user logged.
    events.subscribe('user:logged', userLogged => {
      if(userLogged !== undefined && userLogged !== ""){
          this.userToken = localStorage.getItem('idTokenUser');
        }
     });

     events.subscribe('change:foto', ()=>{
      this.changeFoto()
     });
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
    localStorage.removeItem('image');
    this.userToken = null;
    this.menu.setRoot(LoginPage);
    this.menuCtrl.close();
  }

  changeFoto(){
    this.fotoId = localStorage.getItem('image');
    this.foto = "http://dappapache02.eastus.cloudapp.azure.com:4200" + `${this.fotoId}`;
    this.patientName = localStorage.getItem('patientName');
    this.correo = localStorage.getItem('emailUser');
  }


}


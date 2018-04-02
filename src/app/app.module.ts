import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);


// aqui las importaciones de las imagenes
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CardPage } from '../pages/card/card';

// importación de la página de carga de la aplicación
import { ChargePage } from '../pages/charge/charge';

// aqui las importaciones de las paginas de usuario
import { LoginPage } from './../pages/user/login/login';
import { RegisterPage } from '../pages/user/register/register';
import { ProfilePage } from '../pages/user/profile/profile';

// aqui las importaciones de las paginas de cita
import { SearchPage } from '../pages/appointment/search/search';
import { FinancerPage } from '../pages/appointment/financer/financer';
import { PayPage } from '../pages/appointment/pay/pay';


// aqui las importaciones para los modulos adiciionales
import { MyDatesPage } from '../pages/optionals-devs/my-dates/my-dates';
import { IrmPage } from '../pages/optionals-devs/irm/irm';
import { RecipesPage } from './../pages/optionals-devs/recipes/recipes';
import { RecomendationsPage } from '../pages/optionals-devs/recomendations/recomendations';

import { MyDateModalPage } from '../pages/optionals-devs/my-dates/my-date-modal/my-date-modal';

// modulos para apollo
import { HttpClientModule } from "@angular/common/http";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloModule, Apollo } from "apollo-angular";
import { SchemaLink } from "apollo-link-schema";
import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";
import { typeDefs } from "./schema";
import { mocks } from "./mocks";


// componentes para la busqueda


// providers
import { FinancierProvider } from '../providers/financier/financier';
import { UserProvider } from '../providers/user/user';
import { AppointmentProvider } from './../providers/appoinment/appoinment';
import { AuthorizationPublicProvider } from '../providers/authorization-public/authorization-public';


//widgets
import * as moment from 'moment';
import { FormsModule } from '@angular/forms';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ExpandableComponent } from '../components/expandable/expandable.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatFormField} from '@angular/material';

import { MasterDetailPage } from './../pages/appointment/master-detail/master-detail';
import { HelloProvider } from '../providers/hello/hello';
import { DatosPage } from '../pages/datos/datos';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CardPage,
    ChargePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    SearchPage,
    FinancerPage,
    PayPage,
    MyDatesPage,
    IrmPage,
    RecipesPage,
    RecomendationsPage,
    ExpandableComponent,
    MasterDetailPage,
    MyDateModalPage,
    DatosPage,
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    HttpModule,
    ApolloModule,
    HttpLinkModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CardPage,
    ChargePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    SearchPage,
    FinancerPage,
    PayPage,
    MyDatesPage,
    IrmPage,
    RecipesPage,
    RecomendationsPage,
    MasterDetailPage,
    MyDateModalPage,
    DatosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: LOCALE_ID, useValue: "es"},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FinancierProvider,
    UserProvider,
    AppointmentProvider,
    HelloProvider,
    AuthorizationPublicProvider
  ]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    // const schema = makeExecutableSchema({ typeDefs });

    // addMockFunctionsToSchema({ schema, mocks });

    apollo.create({
      link: httpLink.create({ uri: "http://localhost:3000/graphql" }),
      // link: new SchemaLink({ schema }),
      cache: new InMemoryCache()
    });
  }
}

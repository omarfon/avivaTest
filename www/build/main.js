webpackJsonp([0],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_login_login__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_card__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatosPage = (function () {
    function DatosPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.hora = navParams.get('hora');
        this.available = navParams.get('available');
        this.doctor = navParams.get('doctor');
    }
    DatosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DatosPage');
    };
    DatosPage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_login_login__["a" /* LoginPage */], {
            hora: this.hora,
            available: this.available,
            doctor: this.doctor
        });
        console.log('datos de datos:', this.hora, this.available, this.doctor);
        //aqui tiene que ir el dismiss
    };
    DatosPage.prototype.goToCard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__card_card__["a" /* CardPage */]);
    };
    DatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-datos',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/datos/datos.html"*/'<ion-content padding>\n    <h1>Modal de Datos</h1>\n\n    <img class="centrar" src="https://www.trybooking.com/media/3446/login-user-icon.png" alt="">\n    <hr>\n    <p>Para continuar necesitas iniciar Sesión</p>\n    <button ion-button block color="secondary" (click)="goToLogin()" class="botonPrimero">Ir a Login</button>\n    <button ion-button clear block (click)="goToCard()">Continuar buscando doctor</button>\n</ion-content>'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/datos/datos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], DatosPage);
    return DatosPage;
}());

//# sourceMappingURL=datos.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, alertCtrl, fb, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.userProvider = userProvider;
        this.cambio = false;
        if (navParams.get('pageFrom')) {
            this.headquarterId = navParams.get('headquarter');
            this.specialty = navParams.get('specialty');
            this.pageFrom = navParams.get('pageFrom');
            this.doctor = navParams.get('doctor');
            this.date = navParams.get('date');
            this.hour = navParams.get('hour');
        }
        this.registerForm = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            surname1: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            surname2: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            gender: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            birthdate: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            documentType: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            documentNumber: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(9), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].maxLength(9)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(8)]],
            password_confirmation: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]]
        }, { validator: this.areEqual('password', 'password_confirmation') });
    }
    RegisterPage.prototype.registrarUsuario = function (formModel) {
        var _this = this;
        this.userProvider.doSignUp(formModel)
            .subscribe(function (data) {
            _this.msg = "";
            if (_this.pageFrom == 'payment')
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            else
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }, function (err) {
            _this.msg = err.errors.full_messages[0];
        });
    };
    RegisterPage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.seeConditions = function () {
        var terminos = this.alertCtrl.create({
            title: 'Terminos y Condiciones',
            message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ',
            buttons: ['OK']
        });
        terminos.present();
    };
    RegisterPage.prototype.areEqual = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey];
            var passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
        };
    };
    RegisterPage.prototype.changue = function () {
        this.cambio = true;
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/user/register/register.html"*/'<ion-header>\n    <ion-navbar color="primary" hideBackButton="true">\n        <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n        <ion-title> Registro </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="gris">\n    <ion-item *ngIf="msg">\n        <p color="danger" ion-text>{{ msg }}</p>\n    </ion-item>\n\n\n    <form [formGroup]="registerForm" (ngSubmit)="registrarUsuario(registerForm.value)" role="form" novalidate>\n\n        <ion-row>\n            <ion-item>\n                <ion-label floating>Nombres:</ion-label>\n                <ion-input type="text" formControlName="name" name="name"></ion-input>\n                <p color="danger" ion-text *ngIf="registerForm.get(\'name\').hasError(\'required\')">Nombre requerido</p>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Apellido Paterno</ion-label>\n                <ion-input type="text" formControlName="surname1" name="paternal_surname"></ion-input>\n                <p color="danger" ion-text *ngIf="registerForm.get(\'surname1\').hasError(\'required\')">Apellido Paterno requerido</p>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Apellido Materno</ion-label>\n                <ion-input type="text" formControlName="surname2" name="maternal_surname"></ion-input>\n                <p color="danger" ion-text *ngIf="registerForm.get(\'surname2\').hasError(\'required\')">Apellido Materno requerido</p>\n            </ion-item>\n\n            <ion-col col-6>\n                <ion-item>\n                    <ion-label floating>Sexo:</ion-label>\n                    <ion-select formControlName="gender" name="gender">\n                        <ion-option value=1>Indistinto</ion-option>\n                        <ion-option value=2>Hombre</ion-option>\n                        <ion-option value=3>Mujer</ion-option>\n                    </ion-select>\n                    <p color="danger" ion-text *ngIf="registerForm.get(\'gender\').hasError(\'required\')">Genero requerido</p>\n                </ion-item>\n            </ion-col>\n\n            <ion-col col-6>\n                <ion-item class="outpadding">\n                    <ion-label floating>Fecha de nacimiento:</ion-label>\n                    <ion-input type="date" formControlName="birthdate" name="date_of_birth" placeholder="Fecha de nacimiento"></ion-input>\n                    <p color="danger" ion-text *ngIf="registerForm.get(\'birthdate\').hasError(\'required\')">Fecha de Nacimiento requerido</p>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col col-6>\n                <ion-item>\n                    <ion-label stacked>Tipo de documento:</ion-label>\n                    <ion-select [(ngModel)]="change" formControlName="documentType" name="type_document">\n                        <ion-option value=1>D.N.I</ion-option>\n                        <ion-option value=2>Pasaporte</ion-option>\n                        <ion-option value=3>C.E.</ion-option>\n                        <ion-option value=4>No Tiene</ion-option>\n                    </ion-select>\n                </ion-item>\n            </ion-col>\n\n            <ion-col col-6>\n                <ion-item>\n                    <ion-label stacked>Tipo de documento:</ion-label>\n                    <ion-input *ngIf="change == 3" placeholder="Nº de Carne" type="tel" minlength=12 maxlength=12 formControlName="documentNumber" name="dni" stacked></ion-input>\n                    <ion-input *ngIf="change == 1" placeholder="Nº de Dni" type="number" formControlName="documentNumber" minlength=8 maxlength=8 name="dni" stacked></ion-input>\n                    <ion-input *ngIf="change == 2" placeholder="Nº de Pasaporte" type="number" formControlName="documentNumber" minlength=12 maxlength=12 name="dni" stacked></ion-input>\n                    <!-- <p color="danger" ion-text *ngIf="registerForm.get(\'dni\').hasError(\'required\')">DNI requerido</p> -->\n                </ion-item>\n            </ion-col>\n\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label stacked>Telefono:</ion-label>\n                    <ion-input type="tel" formControlName="phone" name="phone"></ion-input>\n                    <p color="danger" ion-text *ngIf="registerForm.get(\'phone\').hasError(\'required\')">Teléfono requerido</p>\n                </ion-item>\n            </ion-col>\n\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label stacked>Email:</ion-label>\n                    <ion-input type="email" formControlName="email" name="email"></ion-input>\n                    <p color="danger" ion-text *ngIf="registerForm.get(\'email\').hasError(\'required\')">Email requerido</p>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-item>\n            <ion-label stacked>Contraseña:</ion-label>\n            <ion-input type="password" required name="password" formControlName="password"></ion-input>\n            <p color="danger" ion-text *ngIf="registerForm.get(\'password\').hasError(\'required\')">Contraseña requerida</p>\n            <p color="danger" ion-text *ngIf="registerForm.get(\'password\').hasError(\'minLength\')">Minimo 8 caracteres</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked>Repetir contraseña:</ion-label>\n            <ion-input type="password" formControlName="password_confirmation" name="password_confirmation"></ion-input>\n            <p color="danger" ion-text *ngIf="registerForm.get(\'password_confirmation\').hasError(\'required\')">No coincide con la contraseña</p>\n        </ion-item>\n\n\n\n        <button ion-button type="submit" [disabled]="!registerForm.valid" full color="primary" class="alto50">Registro</button>\n\n        <ion-grid>\n            <ion-row>\n                <ion-col col-6>\n                    <button ion-button clear class=" bajas " item-start (click)="seeConditions() ">terminos y condiciones</button>\n                </ion-col>\n                <ion-col col-6 class="derecha ">\n                    <button ion-button clear class="bajas derecha " item-end (click)="goToLogin() ">Tengo una cuenta</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n\n</ion-content>'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/user/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sha_js__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sha_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sha_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var UserProvider = (function () {
    // private signUp = 'http://45.55.174.40/auth/';
    // private relatives = 'http://45.55.174.40/users/';
    function UserProvider(http) {
        this.http = http;
        // private apiUrl = 'http://dappapache02.eastus.cloudapp.azure.com:4000/api/ebooking/';
        this.apiUrl = 'http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/';
    }
    UserProvider.prototype.setDeviceToken = function (user_id, token) {
        var url = this.apiUrl + user_id + '/token/' + token;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserProvider.prototype.doSignIn = function (email, password) {
        var params = { email: email, password: __WEBPACK_IMPORTED_MODULE_5_sha_js__('sha256').update(password).digest('hex') };
        return this.http.post(this.apiUrl + 'login', params)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserProvider.prototype.diSignInPassword = function (email, password) {
        var params = { email: email, password: password };
        return this.http.post(this.apiUrl + 'login', params)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserProvider.prototype.doSignUp = function (params) {
        return this.http.post(this.apiUrl + 'register', params)
            .map(this.extractData)
            .catch(this.handleError);
    };
    // getRelative(user_id){
    //   let url = this.relatives + user_id + '/show_relative/';
    //   return this.http.get(url)
    //                   .map(this.extractData)
    //                   .catch(this.handleError);
    // }
    // getRelatives(user_id){
    //   let url = this.relatives + user_id + '/get_relatives/';
    //   return this.http.get(url)
    //                   .map(this.extractData)
    //                   .catch(this.handleError);
    // }
    // createRelatives(params){
    //   let url = this.relatives + 'create_relative/';
    //   return this.http.post(url, params)
    //                   .map(this.extractData)
    //                   .catch(this.handleError);
    // }
    // updateRelatives(user_id, params){
    //   let url = this.relatives + user_id + '/update_relative/';
    //   return this.http.patch(url, params)
    //                   .map(this.extractData)
    //                   .catch(this.handleError);
    // }
    // destroyRelatives(user_id){
    //   let url = this.relatives + user_id + '/destroy_relative/';
    //   return this.http.delete(url)
    //                   .map(this.extractData)
    //                   .catch(this.handleError);
    // }
    UserProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    UserProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_financier_financier__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_appointment_master_detail_master_detail__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datos_datos__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FinancerPage = (function () {
    function FinancerPage(navCtrl, navParams, platform, fb, alertCtrl, financierProvider, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.financierProvider = financierProvider;
        this.modalCtrl = modalCtrl;
        this.isAndroid = false;
        this.nots = [
            { "id": "1", "name": "En local" },
            { "id": "2", "name": "Con tarjeta" },
        ];
        this.questions = [
            { "id": 1, "name": "Si tengo seguro" },
            { "id": 2, "name": "No cuento con seguro" },
        ];
        this.firtClick = false;
        this.isInsurance = false;
        this.isInsuranceName = false;
        this.isCard = false;
        this.isPlace = false;
        this.payment = false;
        this.open = false;
        this.isAndroid = platform.is('android');
        this.financierProvider.getFinanciers().subscribe(function (data) { _this.items = data; _this.items.shift(); });
        this.doctor = this.navParams.get('doctor');
        this.available = this.navParams.get('available');
        this.hora = this.navParams.get('hora');
        var role = localStorage.getItem('role');
        if (role === 'guest') {
            console.log('no hay mail');
            var datos = this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__datos_datos__["a" /* DatosPage */], { hora: this.hora,
                doctor: this.doctor,
                available: this.available });
            console.log('datos de financer:', this.hora, this.doctor, this.available);
            // datos.present();
        }
        else {
            console.log("si hay constraseña. que pase");
        }
        this.myForm = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
            card: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(16), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(16)]],
            cvv: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(3)]],
            month: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
            year: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]]
        }, { validator: this.dateValid('month', 'year') });
    }
    FinancerPage.prototype.evaluateEnsurance = function () {
        this.firtClick = !this.firtClick;
        this.isInsurance = false;
        this.isInsuranceName = true;
        this.payment = false;
        this.isPlace = false;
        this.isCard = false;
    };
    FinancerPage.prototype.validateSelected = function (item) {
        var _this = this;
        if (item == 1) {
            this.firtClick = false;
            this.isInsurance = true;
            this.secure = true;
            this.open = true;
        }
        else if (item == 2) {
            // PARTICULAR
            this.financierProvider.getPrice(1, this.doctor.service.id, this.doctor.service.id, this.available).subscribe(function (data) {
                _this.price = Math.round(parseFloat(data[0].prest_precio_val) * 100 + Number.EPSILON) / 100;
                // console.log('available.date:', this.available.date);
                _this.isPlace = false;
                _this.isCard = false;
                _this.firtClick = false;
                _this.payment = true;
                _this.open = true;
                _this.secure = false;
                _this.isInsuranceName = false;
                _this.isInsurance = false;
            });
        }
    };
    FinancerPage.prototype.insuranceSelected = function (item, itemName) {
        var _this = this;
        // SEGUROS
        this.financierProvider.getPrice(1, this.doctor.service.id, this.doctor.service.id, this.available).subscribe(function (data) {
            _this.price = Math.round(parseFloat(data[0].prest_precio_val) * 100 + Number.EPSILON) / 100;
            _this.myEnsuranceName = itemName;
            _this.isInsuranceName = true;
            _this.isInsurance = false;
            _this.payment = true;
            _this.nameSecure = itemName;
            _this.financier_id = item;
        });
    };
    FinancerPage.prototype.selectEnsurance = function () {
        this.isInsurance = !this.isInsurance;
        this.isInsuranceName = !this.isInsuranceName;
        this.myEnsuranceName = null;
    };
    FinancerPage.prototype.personalSelected = function (item) {
        // console.log("Selected Item", item);
        if (item == 1) {
            this.isPlace = true;
            this.paymentName = "En local";
        }
        else {
            this.paymentName = "Con tarjeta";
            this.isPlace = false;
        }
    };
    FinancerPage.prototype.next = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_appointment_master_detail_master_detail__["a" /* MasterDetailPage */], {
            status: true,
            appointment: this.doctor,
            secure: this.secure,
            nameInsurance: this.financier_id,
            insurance: this.myEnsuranceName,
            payment: this.paymentName,
            paymentType: "en local",
            isCard: this.isCard,
            user_id: this.user_id,
            price: this.price,
            date: this.available,
            hora: this.hora
        });
        console.log('lo que entra en appointment:', this.doctor);
    };
    FinancerPage.prototype.saveData = function (myForm) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_appointment_master_detail_master_detail__["a" /* MasterDetailPage */], {
            status: true,
            appointment: this.doctor,
            secure: this.secure,
            nameInsurance: this.financier_id,
            insurance: this.myEnsuranceName,
            payment: this.paymentName,
            paymentType: "con tarjeta",
            isCard: this.isCard,
            user_id: this.user_id,
            name: myForm.name,
            numberCard: myForm.card,
            monthCard: myForm.month,
            yearCard: myForm.year,
            ccvCard: myForm.ccv,
            price: this.price,
            date: this.available,
            hora: this.hora
        });
    };
    FinancerPage.prototype.dateValid = function (month, year) {
        return function (group) {
            var date = new Date();
            var monthInput = group.controls[month];
            var yearInput = group.controls[year];
            if (yearInput.value == date.getFullYear())
                if (monthInput.value < ("0" + (date.getMonth() + 1)).slice(-2))
                    return monthInput.setErrors({ notEquivalent: true });
        };
    };
    FinancerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-financer',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/financer/financer.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>Financiador</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <h4 class="parrafoFinanciador">lo que nos queda es escoger el financiador y el pago, ya casí terminamos…</h4>\n    <ion-list>\n\n        <ion-card class="evaluate">\n            <ion-list>\n                <ion-item color="light" item-start (click)="evaluateEnsurance($event)">\n                    <p>¿Cuenta con seguro?</p>\n                    <ion-icon item-end name="arrow-dropdown"></ion-icon>\n                </ion-item>\n\n                <ion-list class="nombresLista" *ngIf="firtClick">\n                    <button ion-item *ngFor="let quest of questions" (click)="validateSelected(quest.id)">\n                {{ quest.name }}\n              </button>\n                </ion-list>\n            </ion-list>\n        </ion-card>\n\n        <ion-card class="seguroList">\n            <ion-list>\n                <ion-item color="light" *ngIf="isInsuranceName" (click)="selectEnsurance($event)">\n                    {{ myEnsuranceName }}\n                </ion-item>\n                <ion-list *ngIf="isInsurance">\n                    <button ion-item *ngFor="let item of items" (click)="insuranceSelected(item.cod_pagador_pk, item.nombre_garante)">\n                {{ item.nombre_garante }}\n              </button>\n                </ion-list>\n            </ion-list>\n        </ion-card>\n\n        <div text-right class="precio" *ngIf="price!=undefined">\n            <p>Precio de la Consulta: {{ \'S/. \' + price }}.00</p>\n        </div>\n    </ion-list>\n\n    <div class="container-gris" *ngIf="open == true">\n        <div padding>\n            <h4 text-center class="tituloMetodos">Metodos de Pago</h4>\n            <ion-segment [(ngModel)]="pago">\n                <ion-segment-button value="enLocal">\n                    En local\n                </ion-segment-button>\n                <ion-segment-button value="enClinica" [disabled]="true">\n                    Con tarjeta (proximamente)\n                </ion-segment-button>\n            </ion-segment>\n        </div>\n        <div [ngSwitch]="pago">\n            <ion-list *ngSwitchCase="\'enLocal\'">\n                <p class="pagoEfectivo">Recuerde que puede pagar su reserva en la clinica, solamente con el número de dni es sencillo!!</p>\n                <div padding>\n                    <button ion-button color="secondary" class="botonAccept" [class.button-disabled]="true" block (click)="next()">Confirmar cita</button>\n                </div>\n\n            </ion-list>\n\n            <ion-list *ngSwitchCase="\'enClinica\'">\n\n                <div padding>\n\n                    <form [formGroup]="myForm" (ngSubmit)="saveData(myForm.value)" novalidate>\n                        <ion-list>\n                            <ion-item>\n                                <ion-label floating>Nombre:</ion-label>\n                                <ion-input formControlName="name" type="text" maxlength="40" onSelect="this.value=\'\'"></ion-input>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label floating>Numero de tarjeta:</ion-label>\n                                <ion-input formControlName="card" id="card" type="tel" minLength="16" maxlength="16" onSelect="this.value=\'\'" required></ion-input>\n                                <ion-icon item-end>\n                                    <i class="fa fa-cc-visa" *ngIf="myForm.get(\'card\').hasError(\'visa\')" aria-hidden="true"></i>\n                                    <i class="fa fa-cc-mastercard" *ngIf="myForm.get(\'card\').hasError(\'mastercard\')" aria-hidden="true"></i>\n                                </ion-icon>\n                            </ion-item>\n\n                            <ion-item *ngIf="myForm.get(\'card\').errors && myForm.get(\'card\').dirty">\n                                <p color="danger" ion-text *ngIf="myForm.get(\'card\').hasError(\'required\')">Campo requerido</p>\n                                <p color="danger" ion-text *ngIf="myForm.get(\'card\').hasError(\'minlength\')">Tarjeta invalida</p>\n                                <p color="danger" ion-text *ngIf="myForm.get(\'card\').hasError(\'maxlength\')">SOLO 16 DIGITOS POR FAVOR</p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-row>\n                            <ion-col col-4>\n                                <ion-item>\n                                    <ion-label required floating>Mes</ion-label>\n                                    <ion-select required formControlName="month">\n                                        <ion-option value="01">ENERO </ion-option>\n                                        <ion-option value="02">FEBRERO</ion-option>\n                                        <ion-option value="03">MARZO</ion-option>\n                                        <ion-option value="04">ABRIL</ion-option>\n                                        <ion-option value="05">MAYO</ion-option>\n                                        <ion-option value="06">JUNIO</ion-option>\n                                        <ion-option value="07">JULIO</ion-option>\n                                        <ion-option value="08">AGOSTO</ion-option>\n                                        <ion-option value="09">SEPTIEMBRE</ion-option>\n                                        <ion-option value="10">OCTUBRE</ion-option>\n                                        <ion-option value="11">NOVIEMBRE</ion-option>\n                                        <ion-option value="12">DICIEMBRE</ion-option>\n                                    </ion-select>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col col-4>\n                                <ion-item>\n                                    <ion-label floating>Año</ion-label>\n                                    <ion-select required formControlName="year">\n                                        <ion-option value="2017">2017</ion-option>\n                                        <ion-option value="2018">2018</ion-option>\n                                        <ion-option value="2019">2019</ion-option>\n                                        <ion-option value="2020">2020</ion-option>\n                                        <ion-option value="2021">2021</ion-option>\n                                        <ion-option value="2022">2022</ion-option>\n                                        <ion-option value="2023">2023</ion-option>\n                                        <ion-option value="2024">2024</ion-option>\n                                    </ion-select>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col col-4>\n                                <ion-item>\n                                    <ion-label floating>Codigo</ion-label>\n                                    <ion-input type="tel" minLength="3" maxlength="3" clearInput formControlName="cvv" onSelect="this.value=\'\'"></ion-input>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col col-12>\n                                <ion-item>\n                                    <ion-label class="tiny">Guardar tarjeta</ion-label>\n                                    <ion-checkbox></ion-checkbox>\n                                </ion-item>\n                            </ion-col>\n                        </ion-row>\n                        <div padding>\n                            <button ion-button color="secondary" block type="submit" [disabled]="myForm.invalid">Confirmar y Pagar cita</button>\n                        </div>\n\n                    </form>\n                </div>\n            </ion-list>\n        </div>\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/financer/financer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_financier_financier__["a" /* FinancierProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]])
    ], FinancerPage);
    return FinancerPage;
}());

//# sourceMappingURL=financer.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appoinment_appoinment__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_date_modal_my_date_modal__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyDatesPage = (function () {
    function MyDatesPage(navCtrl, alertCtrl, modalCtrl, viewCtrl, navParams, appointmentProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.appointmentProvider = appointmentProvider;
        this.appointmentProvider.getAppointmentsPeruser().subscribe(function (data) {
            _this.tasks = data;
            _this.mostrar = _this.tasks.length;
            console.log('mis citas:', _this.tasks);
            // console.log('tasks:', this.tasks);
        }, function (err) {
            console.error('algo fallo');
        });
    }
    MyDatesPage.prototype.gotoDetails = function (task) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__my_date_modal_my_date_modal__["a" /* MyDateModalPage */], { task: task, tasks: this.tasks });
    };
    MyDatesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-dates',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/my-dates/my-dates.html"*/'<ion-header>\n    <ion-navbar color="primary" hideBackButton="true">\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title> Mi Citas </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list *ngFor=\'let task of tasks\'>\n        <ion-card (click)="gotoDetails(task)" class="bordeDerecho" *ngIf="task ">\n            <ion-item>\n                <ion-row>\n                    <ion-col col-4>\n                        <ion-avatar item-start>\n                            <img src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{task.professional.id}}.png">\n                        </ion-avatar>\n                    </ion-col>\n                    <ion-col col-8>\n                        <h3 class="tituloCitas">Dr. {{task.professional.fullName | slice:0:25 | uppercase}}</h3>\n                        <p class="especialidad">{{ task.service.basicService.description | lowercase }}</p>\n                        <p class="sede">{{ task.service.center.name | lowercase }}</p>\n                    </ion-col>\n                    <ion-col col-12 class="gris">\n                        <ion-row>\n                            <ion-col class="diaCita">\n                                <p class="day">{{ task.appointmentDateTime | date:\'EEEE d , MMMM \' : \'es\' }} </p>\n                            </ion-col>\n                            <ion-col class="hourCita">\n                                <p class="hour">{{ task.appointmentDateTime | date: \'HH:mm\' }}</p>\n                            </ion-col>\n                        </ion-row>\n\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n        </ion-card>\n    </ion-list>\n    <p *ngIf="mostrar == 0" class="textoCitasNulo">No tienes citas programadas</p>\n</ion-content>'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/my-dates/my-dates.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appoinment_appoinment__["a" /* AppointmentProvider */]])
    ], MyDatesPage);
    return MyDatesPage;
}());

//# sourceMappingURL=my-dates.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 218;

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipesPage = (function () {
    function RecipesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RecipesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecipesPage');
    };
    RecipesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recipes',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/recipes/recipes.html"*/'<!--\n  Generated template for the RecipesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>recipes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/recipes/recipes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RecipesPage);
    return RecipesPage;
}());

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationPublicProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorizationPublicProvider = (function () {
    function AuthorizationPublicProvider(http) {
        this.http = http;
        this.apiUrl = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/public-authorization";
        console.log('Hello AuthorizationPublicProvider Provider');
    }
    AuthorizationPublicProvider.prototype.getKey = function () {
        return this.http.get(this.apiUrl)
            .map(function (resp) {
            return resp;
        });
    };
    AuthorizationPublicProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthorizationPublicProvider);
    return AuthorizationPublicProvider;
}());

//# sourceMappingURL=authorization-public.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancierProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the FinancierProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var FinancierProvider = (function () {
    function FinancierProvider(http) {
        this.http = http;
        this.apiUrl = 'http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/ebooking/';
    }
    FinancierProvider.prototype.getFinanciers = function () {
        return this.http.get(this.apiUrl + 'payers', {})
            .map(this.extractData)
            .catch(this.handleError);
    };
    FinancierProvider.prototype.getFinancier = function (financier_id) {
        return this.http.get(this.apiUrl + financier_id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    FinancierProvider.prototype.getPrice = function (center_id, basic_service_id, doctor_id, proposed_date) {
        // let params = { proposed_date: proposed_date, center_id: center_id, basic_service_id: basic_service_id, doctor_id: doctor_id }
        return this.http.get(this.apiUrl + ("appointments/price/" + center_id + "/" + basic_service_id + "/" + doctor_id + "/" + proposed_date))
            .map(this.extractData)
            .catch(this.handleError);
    };
    FinancierProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    FinancierProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    FinancierProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], FinancierProvider);
    return FinancierProvider;
    var _a;
}());

//# sourceMappingURL=financier.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appoinment_appoinment__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MasterDetailPage = (function () {
    function MasterDetailPage(navCtrl, navParams, alertCtrl, appointmentProvider, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.appointmentProvider = appointmentProvider;
        this.viewCtrl = viewCtrl;
        this.appointment = this.navParams.get('appointment');
        this.date = this.navParams.get('date');
        console.log('lo que me trae date:', this.date);
        this.hora = this.navParams.get('hora');
        this.subida = this.hora.listjson;
        // console.log('lo que me trae appointment:', this.appointment);
        // console.log('subida:',this.subida);
        // console.log('lo que me trae date:',this.date);
        // console.log('lo que me trae hora:',this.hora);
        // this.status = this.navParams.get('status');
        // this.appointment = this.navParams.get('appointment');
        // this.secure = this.navParams.get('secure');
        this.nameInsurance = this.navParams.get('nameInsurance');
        // this.insurance = this.navParams.get('insurance');
        this.payment = this.navParams.get('paymentName');
        this.paymentType = this.navParams.get('paymentType');
        this.name = this.navParams.get('name');
        this.isCard = this.navParams.get('isCard');
        // this.user_id = this.navParams.get('user_id');
        this.numberCard = this.navParams.get('numberCard');
        // this.monthCard = this.navParams.get('monthCard');
        // this.yearCard = this.navParams.get('yearCard');
        // this.ccvCard = this.navParams.get('ccvCard');
        this.price = this.navParams.get('price');
        var num = "" + this.numberCard;
        this.numMasCard = num.substr(0, 4) + " **** **** " + num.substr(12, 15);
    }
    MasterDetailPage.prototype.ionViewDidLoad = function () { };
    MasterDetailPage.prototype.gotosave = function () {
        var _this = this;
        console.log('gotosave');
        this.appointmentProvider.createAppointment(this.subida).subscribe(function (data) {
            console.log('data de masterDetail:', data);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
            var alert = _this.alertCtrl.create({
                title: 'Cita creada',
                subTitle: 'Su cita se ha creado satisfactoriamente',
                buttons: [
                    {
                        text: 'Ok',
                        handler: function (data) {
                        }
                    }
                ]
            });
            alert.present();
        }, function (err) {
            console.log('error de masterDetail:', err);
            var code = err.error.data.errorCode;
            var alert;
            switch (code) {
                case 15006:
                    // case 15035:
                    alert = _this.alertCtrl.create({
                        title: 'Aviso al Cliente',
                        subTitle: 'Ya tienes una cita en una hora cercana a esta.',
                        buttons: [
                            {
                                text: 'Buscar otra hora',
                                handler: function (data) {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__card_card__["a" /* CardPage */]);
                                }
                            }
                        ]
                    });
                    alert.present();
                    break;
                case 15009:
                    alert = _this.alertCtrl.create({
                        title: 'Aviso al Cliente',
                        subTitle: 'El horario escogido ya fue tomado .',
                        buttons: [
                            {
                                text: 'Buscar otra hora',
                                handler: function (data) {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__card_card__["a" /* CardPage */]);
                                }
                            }
                        ]
                    });
                    alert.present();
                    break;
                default:
                    break;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_9" /* ViewChild */])('contenido'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */])
    ], MasterDetailPage.prototype, "menu", void 0);
    MasterDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-master-detail',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/master-detail/master-detail.html"*/'<ion-navbar>\n    <ion-title>Detalle de la cita</ion-title>\n</ion-navbar>\n\n\n\n<ion-content has-header="true">\n    <ion-list>\n\n        <img id="profile-image" src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{appointment.id}}.png">\n\n        <h3 class="nombreDoctor" text-center>\n            {{ appointment.fullName }}\n        </h3>\n\n        <ion-item>\n            <ion-label bold>Sede:</ion-label>\n            <ion-label class="blue" type="text" disabled="true">\n                Mendiola\n            </ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label>Especialidad:</ion-label>\n            <ion-label item-end class="blue" disabled="true">\n                {{ appointment.service.description }}\n            </ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label>Fecha:</ion-label>\n            <ion-label item-end class="blue" disabled="true">\n                {{ date | date:\'EEEE d , MMMM \' : \'es\' }}\n            </ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label>Hora:</ion-label>\n            <ion-label class="blue" type="text" disabled="true">\n                {{ hora.hour | slice:0:5}}\n            </ion-label>\n        </ion-item>\n        <ion-item *ngIf="secure">\n            <ion-label>Cita con Seguro:</ion-label>\n            <ion-label class="blue" disabled="true">\n                {{insurance | lowercase}}\n            </ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Tipo de pago:</ion-label>\n            <ion-label class="blue" disabled="true">\n                {{paymentType | lowercase }}\n            </ion-label>\n        </ion-item>\n\n        <ion-item *ngIf="isCard">\n            <ion-label>Titular de la tarjeta:</ion-label>\n            <ion-label class="blue" disabled="true">\n                {{name | lowercase }}\n            </ion-label>\n        </ion-item>\n\n        <div *ngIf="isCard">\n            <ion-item>\n                <ion-label class="blue" type="text" maxlength="16" clearInput disabled="true">\n                    {{numMasCard}}\n                </ion-label>\n                <ion-icon item-end name="card"></ion-icon>\n            </ion-item>\n        </div>\n\n        <ion-item>\n            <ion-label>Costo:</ion-label>\n            <ion-label class="blue" item-end type="text" disabled="true">\n                {{ \'S/. \' + price }}.00\n            </ion-label>\n        </ion-item>\n\n        <div padding>\n            <button ion-button (click)="gotosave()" block color="secondary" class="heighButton">OK</button>\n        </div>\n        <p class="recomenda" color="secondary">Recuerde que deberá llegar 20 minutos antes para poder cancelar en caja y estar a tiempo en el consultorio.</p>\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/master-detail/master-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_appoinment_appoinment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */]])
    ], MasterDetailPage);
    return MasterDetailPage;
}());

//# sourceMappingURL=master-detail.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Http, Headers } from '@angular/http';
var HelloProvider = (function () {
    function HelloProvider(http) {
        this.http = http;
        this.servicios = [];
        this.doctores = [];
        this.apiUrl = "http://dappapache02.eastus.cloudapp.azure.com:4200/graphql";
        console.log('Hello HelloProvider Provider');
    }
    HelloProvider.prototype.getServicios = function () {
        var _this = this;
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            "Authorization": authorization
        });
        // headers.set("Authorization", authorization);
        var params = { query: "query {centers{ services{id, description }}}" };
        return this.http.post(this.apiUrl, params, { headers: headers })
            .map(function (resp) {
            if (!resp.data.centers) {
                return [];
            }
            _this.servicios = resp.data.centers[0].services;
            return _this.servicios;
        });
    };
    HelloProvider.prototype.getDoctorsPerId = function (id) {
        var _this = this;
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            "Authorization": authorization
        });
        // headers.append("Authorization", authorization);
        var params = { query: "query {centers{service(id:" + id + "){id ,professionals{id, fullName, cmp, image, service{id, description }}}}}" };
        return this.http.post(this.apiUrl, params, { headers: headers })
            .map(function (resp) {
            _this.doctores = resp.data.centers[0].service.professionals;
            return _this.doctores;
        });
    };
    HelloProvider.prototype.getAvailablesPerDoctor = function (id, serviceId, fromDate, toDate) {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            "Authorization": authorization
        });
        // headers.append("Authorization", authorization);
        var params = { query: "query {centers{service(id:" + serviceId + "){id ,professional(id:" + id + "){id, fullName, cmp, image, service{id, description }, availables(fromDateString:\"" + fromDate + "\",toDateString:\"" + toDate + "\"){date,hours{ hour, listjson}}}}}}" };
        return this.http.post(this.apiUrl, params, { headers: headers })
            .map(function (resp) {
            return resp.data.centers[0].service.professional.availables;
        });
    };
    HelloProvider.prototype.getAvailablesPerDay = function (serviceId, fromDate, toDate) {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            "Authorization": authorization
        });
        // headers.append("Authorization", authorization);
        var params = { query: "query {centers{service(id:" + serviceId + "){id ,professionals{id, fullName, cmp, image, service{id, description }, availables(fromDateString:\"" + fromDate + "\",toDateString:\"" + toDate + "\"){date,hours{ hour, listjson}}}}}}" };
        return this.http.post(this.apiUrl, params, { headers: headers })
            .map(function (resp) {
            return resp.data.centers[0].service.professionals;
        });
    };
    HelloProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HelloProvider);
    return HelloProvider;
}());

//# sourceMappingURL=hello.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { UserProvider } from '../../../providers/user/user';


var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // public userPvr: UserProvider
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        // let email = localStorage.getItem('emailUser');
        // let password = localStorage.getItem('passUser');
        // console.log(email, password);
        //   this.userPvr.diSignInPassword(this.email, this.password).subscribe(data=>{
        //     this.datosUser = data;
        //     console.log(this.datosUser);
        //   });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/user/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>Mis Datos</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <div class="cargaImagen">\n        <img src="#" alt="">\n    </div>\n\n    <h4>Nombre Usuario</h4>\n    <ion-row>\n\n        <ion-col col-12>\n            <ion-item>\n                <ion-label stacked>Nombre de usuario</ion-label>\n                <ion-input type="text" value="">Nombre de usuario</ion-input>\n            </ion-item>\n        </ion-col>\n\n        <ion-col col-12>\n            <ion-item>\n                <ion-label stacked>apellidos de usuario</ion-label>\n                <ion-input type="text" value="">Apellidos de usuario</ion-input>\n            </ion-item>\n        </ion-col>\n\n        <ion-col col-6>\n            <ion-item>\n                <ion-label stacked>Sexo</ion-label>\n                <ion-input type="text" value="">Sexo</ion-input>\n            </ion-item>\n        </ion-col>\n\n        <ion-col col-6>\n            <ion-item>\n                <ion-label stacked>Fecha de nacimiento</ion-label>\n                <ion-input type="text" value="">Apellidos de usuario</ion-input>\n            </ion-item>\n        </ion-col>\n\n        <ion-col col-12>\n            <ion-item>\n                <ion-label stacked>Correo Electronico</ion-label>\n                <ion-input type="text" value="">Correo</ion-input>\n            </ion-item>\n        </ion-col>\n\n        <ion-col col-12>\n            <ion-item>\n                <ion-label stacked>Contraseña</ion-label>\n                <ion-input type="text" value="">Contraseña</ion-input>\n            </ion-item>\n        </ion-col>\n\n        <ion-col col-12>\n            <ion-item>\n                <ion-label stacked>Confirmar Contraseña</ion-label>\n                <ion-input type="text" value="">Confirmar contraseña</ion-input>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n\n    <button ion-button color="primary" block class="alto50">volver</button>\n\n</ion-content>'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/user/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IrmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IrmPage = (function () {
    function IrmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IrmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IrmPage');
    };
    IrmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-irm',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/irm/irm.html"*/'<!--\n  Generated template for the IrmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>irm</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/irm/irm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], IrmPage);
    return IrmPage;
}());

//# sourceMappingURL=irm.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDateModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_appoinment_appoinment__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_dates__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyDateModalPage = (function () {
    function MyDateModalPage(navCtrl, navParams, viewCtrl, toastCtrl, alertCtrl, actionSheetCtrl, appointmentProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.appointmentProvider = appointmentProvider;
        this.modalCtrl = modalCtrl;
        this.task = navParams.get('task');
        console.log('task de modalPage:', this.task);
    }
    MyDateModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MyDateModalPage.prototype.desactivateTask = function (task) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'ELMINAR',
            message: '¿Estas seguro de eliminar esta cita?',
            buttons: [
                {
                    text: 'SI',
                    handler: function (data) {
                        _this.appointmentProvider.destroyAppointment(task).subscribe(function (data) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__my_dates__["a" /* MyDatesPage */]);
                        });
                    }
                },
                {
                    text: 'NO',
                    handler: function () {
                        return true;
                    }
                }
            ],
            enableBackdropDismiss: true
        });
        confirm.present();
    };
    MyDateModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-my-date-modal',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/my-dates/my-date-modal/my-date-modal.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title class="titleHeader">Mis citas - {{ task.service.basicService.description | slice:0:6 }}</ion-title>\n        <!-- <ion-buttons end>\n            <button ion-button icon-only color="royal" (click)="dismiss()">\n      </button>\n        </ion-buttons> -->\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content has-header="true">\n    <ion-list>\n\n        <img id="profile-image" src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{task.professional.id}}.png">\n\n        <h3 class="nombreDoctor" text-center>{{ task.professional.fullName }} </h3>\n\n        <ion-item>\n            <ion-icon item-start><i class="fa fa-hospital-o" aria-hidden="true"></i></ion-icon>\n            <ion-label class="heightNoventa">Sede:</ion-label>\n            <ion-label class="blue"> {{ task.service.center.name | lowercase }}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-icon item-start><i class="fa fa-heartbeat" aria-hidden="true"></i></ion-icon>\n            <ion-label class="heightNoventa">Especialidad:</ion-label>\n            <ion-label class="blue"> {{ task.service.basicService.description | lowercase }}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-icon item-start><i class="fa fa-calendar-check-o" aria-hidden="true"></i></ion-icon>\n            <ion-label class="heightNoventa">Fecha:</ion-label>\n            <ion-label class="blue"> {{ task.appointmentDateTime | date:\'EEEE d , MMMM \' : \'es\' }}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-icon item-start><i class="fa fa-clock-o" aria-hidden="true"></i></ion-icon>\n            <ion-label class="heightNoventa">Hora:</ion-label>\n            <ion-label class="blue"> {{ task.appointmentDateTime | date: \'HH:mm\' }}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-icon item-start><i class="fa fa-universal-access" aria-hidden="true"></i></ion-icon>\n            <ion-label class="heightNoventa">Seguro:</ion-label>\n            <ion-label class="blue"> {{ task.plan.description | lowercase }}</ion-label>\n        </ion-item>\n\n        <!-- <ion-item>\n            <ion-icon item-start><i class="fa fa-money" aria-hidden="true"></i></ion-icon>\n            <ion-label>Pago </ion-label>\n            <ion-label class="blue" item-end>{{task.payment_method | lowercase }}</ion-label>\n            <button item-end ion-button color="primary" (click)="editPayment(task)" *ngIf="task.payment_method == \'en local\'">\n          Editar\n        </button>\n        </ion-item> -->\n\n        <!-- <ion-item *ngIf="task.isCard">\n            <ion-icon item-start><i class="fa fa-money" aria-hidden="true"></i></ion-icon>\n            <ion-label>Pago </ion-label>\n            <ion-label class="blue" item-end>S/.{{task.amount}}.00</ion-label>\n            <ion-input value="{{task.numMasCard}}" type="text" maxlength="16" clearInput disabled="true"></ion-input>\n        </ion-item> -->\n\n        <!-- <ion-item>\n            <ion-icon item-start><i class="fa fa-usd" aria-hidden="true"></i></ion-icon>\n            <ion-label>Costo</ion-label>\n            <ion-label class="blue" item-end> S/.{{task.amount}}.00</ion-label>\n        </ion-item> -->\n\n        <ion-item>\n            <ion-row>\n                <ion-col col-6>\n                    <button ion-button block color="secondary" (click)=\'desactivateTask(task)\'>ELIMINAR</button>\n                </ion-col>\n                <ion-col col-6>\n                    <button ion-button block (click)="dismiss()">VOLVER</button>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n    </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/my-dates/my-date-modal/my-date-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_appoinment_appoinment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]])
    ], MyDateModalPage);
    return MyDateModalPage;
}());

//# sourceMappingURL=my-date-modal.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_locales_es__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_card_card__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_charge_charge__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_user_login_login__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_user_register_register__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_user_profile_profile__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_appointment_search_search__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_appointment_financer_financer__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_appointment_pay_pay__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_optionals_devs_my_dates_my_dates__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_optionals_devs_irm_irm__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_optionals_devs_recipes_recipes__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_optionals_devs_recomendations_recomendations__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_optionals_devs_my_dates_my_date_modal_my_date_modal__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_apollo_angular_link_http__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_apollo_cache_inmemory__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_apollo_angular__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_financier_financier__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_user_user__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_appoinment_appoinment__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_authorization_public_authorization_public__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ng2_search_filter__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_expandable_expandable_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_platform_browser_animations__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__material_module__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_appointment_master_detail_master_detail__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_hello_hello__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_datos_datos__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








Object(__WEBPACK_IMPORTED_MODULE_7__angular_common__["i" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_6__angular_common_locales_es__["a" /* default */]);
// aqui las importaciones de las imagenes



// importación de la página de carga de la aplicación

// aqui las importaciones de las paginas de usuario



// aqui las importaciones de las paginas de cita



// aqui las importaciones para los modulos adiciionales





// modulos para apollo




// componentes para la busqueda
// providers












var AppModule = (function () {
    function AppModule(apollo, httpLink) {
        // const schema = makeExecutableSchema({ typeDefs });
        // addMockFunctionsToSchema({ schema, mocks });
        apollo.create({
            link: httpLink.create({ uri: "http://localhost:3000/graphql" }),
            // link: new SchemaLink({ schema }),
            cache: new __WEBPACK_IMPORTED_MODULE_25_apollo_cache_inmemory__["a" /* InMemoryCache */]()
        });
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_charge_charge__["a" /* ChargePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_user_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_user_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_user_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_appointment_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_appointment_financer_financer__["a" /* FinancerPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_appointment_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_optionals_devs_my_dates_my_dates__["a" /* MyDatesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_optionals_devs_irm_irm__["a" /* IrmPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_optionals_devs_recipes_recipes__["a" /* RecipesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_optionals_devs_recomendations_recomendations__["a" /* RecomendationsPage */],
                __WEBPACK_IMPORTED_MODULE_33__components_expandable_expandable_component__["a" /* ExpandableComponent */],
                __WEBPACK_IMPORTED_MODULE_36__pages_appointment_master_detail_master_detail__["a" /* MasterDetailPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_optionals_devs_my_dates_my_date_modal_my_date_modal__["a" /* MyDateModalPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_datos_datos__["a" /* DatosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_32_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_26_apollo_angular__["b" /* ApolloModule */],
                __WEBPACK_IMPORTED_MODULE_24_apollo_angular_link_http__["b" /* HttpLinkModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_31__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_35__material_module__["a" /* MaterialModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_charge_charge__["a" /* ChargePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_user_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_user_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_user_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_appointment_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_appointment_financer_financer__["a" /* FinancerPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_appointment_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_optionals_devs_my_dates_my_dates__["a" /* MyDatesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_optionals_devs_irm_irm__["a" /* IrmPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_optionals_devs_recipes_recipes__["a" /* RecipesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_optionals_devs_recomendations_recomendations__["a" /* RecomendationsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_appointment_master_detail_master_detail__["a" /* MasterDetailPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_optionals_devs_my_dates_my_date_modal_my_date_modal__["a" /* MyDateModalPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_datos_datos__["a" /* DatosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* LOCALE_ID */], useValue: "es" },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_27__providers_financier_financier__["a" /* FinancierProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_appoinment_appoinment__["a" /* AppointmentProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_hello_hello__["a" /* HelloProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_authorization_public_authorization_public__["a" /* AuthorizationPublicProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_26_apollo_angular__["a" /* Apollo */], __WEBPACK_IMPORTED_MODULE_24_apollo_angular_link_http__["a" /* HttpLink */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_optionals_devs_recipes_recipes__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_card_card__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_login_login__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_profile_profile__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_optionals_devs_irm_irm__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_optionals_devs_my_dates_my_dates__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_user_register_register__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, events) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.hom = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.car = __WEBPACK_IMPORTED_MODULE_1__pages_card_card__["a" /* CardPage */];
        this.log = __WEBPACK_IMPORTED_MODULE_7__pages_user_login_login__["a" /* LoginPage */];
        this.pro = __WEBPACK_IMPORTED_MODULE_8__pages_user_profile_profile__["a" /* ProfilePage */];
        this.irm = __WEBPACK_IMPORTED_MODULE_9__pages_optionals_devs_irm_irm__["a" /* IrmPage */];
        this.rep = __WEBPACK_IMPORTED_MODULE_0__pages_optionals_devs_recipes_recipes__["a" /* RecipesPage */];
        this.myd = __WEBPACK_IMPORTED_MODULE_10__pages_optionals_devs_my_dates_my_dates__["a" /* MyDatesPage */];
        this.reg = __WEBPACK_IMPORTED_MODULE_11__pages_user_register_register__["a" /* RegisterPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.userToken = localStorage.getItem('idTokenUser');
        // XXX: Listen for events. Specialy for user logged.
        events.subscribe('user:logged', function (userLogged) {
            if (userLogged !== undefined && userLogged !== "") {
                _this.userToken = localStorage.getItem('idTokenUser');
            }
        });
    }
    MyApp.prototype.goPage = function (pagina) {
        if (pagina == this.hom)
            this.menu.setRoot(pagina);
        else
            this.menu.push(pagina);
        this.menuCtrl.close();
    };
    MyApp.prototype.logout = function () {
        localStorage.removeItem('idTokenUser');
        localStorage.removeItem('emailUser');
        localStorage.removeItem('passUser');
        localStorage.removeItem('authorization');
        localStorage.removeItem('role');
        this.userToken = null;
        this.menu.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('contenido'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */])
    ], MyApp.prototype, "menu", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/app/app.html"*/'<ion-menu [content]="contenido" persistent="true">\n    <ion-header color="primary">\n        <!-- <ion-toolbar>\n            <ion-title>More Health</ion-title>\n        </ion-toolbar>     -->\n    </ion-header>\n    <ion-content class="fondoColor">\n        <button ion-button text-center class="imagen" (click)="goPage(pro)">\n            <ion-icon class="iconAdd flecha" name="add"></ion-icon>\n        </button>\n        <ion-list class="lista">\n            <button ion-item (click)="goPage(hom)" class="outLine">\n            <ion-icon item-start name="home"></ion-icon>\n            Home</button>\n\n            <button ion-item (click)="goPage(car)" class="outLine">\n            <ion-icon item-start name="medkit"></ion-icon>\n            Reservar</button>\n\n            <button ion-item (click)="goPage(myd)" *ngIf="userToken" class="outLine">\n             <ion-icon item-start name="clipboard"></ion-icon>\n             Mis Citas</button>\n\n            <!-- <button ion-item *ngIf="userToken">\n                <ion-icon item-start name="people" ></ion-icon>\n            Familiares</button> -->\n\n\n            <!-- <button ion-item (click)="goPage(irm)" *ngIf="userToken">\n                <ion-icon item-start name="image"></ion-icon> \n            Mis Imagenes</button> -->\n\n\n            <!-- <button ion-item (click)="goPage(rep)" *ngIf="userToken">\n                <ion-icon item-start name="bookmarks"></ion-icon> \n                Recetas</button> -->\n\n\n            <button ion-item (click)="goPage(log)" *ngIf="!userToken" class="outLine">\n            <ion-icon item-start name="key"></ion-icon>\n            Login</button>\n\n\n            <button ion-item (click)="logout()" *ngIf="userToken" class="outLine">\n            <ion-icon item-start name="close-circle"></ion-icon>\n            terminar sesion</button>\n\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="hom" #contenido></ion-nav>'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 272,
	"./af.js": 272,
	"./ar": 273,
	"./ar-dz": 274,
	"./ar-dz.js": 274,
	"./ar-kw": 275,
	"./ar-kw.js": 275,
	"./ar-ly": 276,
	"./ar-ly.js": 276,
	"./ar-ma": 277,
	"./ar-ma.js": 277,
	"./ar-sa": 278,
	"./ar-sa.js": 278,
	"./ar-tn": 279,
	"./ar-tn.js": 279,
	"./ar.js": 273,
	"./az": 280,
	"./az.js": 280,
	"./be": 281,
	"./be.js": 281,
	"./bg": 282,
	"./bg.js": 282,
	"./bm": 283,
	"./bm.js": 283,
	"./bn": 284,
	"./bn.js": 284,
	"./bo": 285,
	"./bo.js": 285,
	"./br": 286,
	"./br.js": 286,
	"./bs": 287,
	"./bs.js": 287,
	"./ca": 288,
	"./ca.js": 288,
	"./cs": 289,
	"./cs.js": 289,
	"./cv": 290,
	"./cv.js": 290,
	"./cy": 291,
	"./cy.js": 291,
	"./da": 292,
	"./da.js": 292,
	"./de": 293,
	"./de-at": 294,
	"./de-at.js": 294,
	"./de-ch": 295,
	"./de-ch.js": 295,
	"./de.js": 293,
	"./dv": 296,
	"./dv.js": 296,
	"./el": 297,
	"./el.js": 297,
	"./en-au": 298,
	"./en-au.js": 298,
	"./en-ca": 299,
	"./en-ca.js": 299,
	"./en-gb": 300,
	"./en-gb.js": 300,
	"./en-ie": 301,
	"./en-ie.js": 301,
	"./en-nz": 302,
	"./en-nz.js": 302,
	"./eo": 303,
	"./eo.js": 303,
	"./es": 304,
	"./es-do": 305,
	"./es-do.js": 305,
	"./es-us": 306,
	"./es-us.js": 306,
	"./es.js": 304,
	"./et": 307,
	"./et.js": 307,
	"./eu": 308,
	"./eu.js": 308,
	"./fa": 309,
	"./fa.js": 309,
	"./fi": 310,
	"./fi.js": 310,
	"./fo": 311,
	"./fo.js": 311,
	"./fr": 312,
	"./fr-ca": 313,
	"./fr-ca.js": 313,
	"./fr-ch": 314,
	"./fr-ch.js": 314,
	"./fr.js": 312,
	"./fy": 315,
	"./fy.js": 315,
	"./gd": 316,
	"./gd.js": 316,
	"./gl": 317,
	"./gl.js": 317,
	"./gom-latn": 318,
	"./gom-latn.js": 318,
	"./gu": 319,
	"./gu.js": 319,
	"./he": 320,
	"./he.js": 320,
	"./hi": 321,
	"./hi.js": 321,
	"./hr": 322,
	"./hr.js": 322,
	"./hu": 323,
	"./hu.js": 323,
	"./hy-am": 324,
	"./hy-am.js": 324,
	"./id": 325,
	"./id.js": 325,
	"./is": 326,
	"./is.js": 326,
	"./it": 327,
	"./it.js": 327,
	"./ja": 328,
	"./ja.js": 328,
	"./jv": 329,
	"./jv.js": 329,
	"./ka": 330,
	"./ka.js": 330,
	"./kk": 331,
	"./kk.js": 331,
	"./km": 332,
	"./km.js": 332,
	"./kn": 333,
	"./kn.js": 333,
	"./ko": 334,
	"./ko.js": 334,
	"./ky": 335,
	"./ky.js": 335,
	"./lb": 336,
	"./lb.js": 336,
	"./lo": 337,
	"./lo.js": 337,
	"./lt": 338,
	"./lt.js": 338,
	"./lv": 339,
	"./lv.js": 339,
	"./me": 340,
	"./me.js": 340,
	"./mi": 341,
	"./mi.js": 341,
	"./mk": 342,
	"./mk.js": 342,
	"./ml": 343,
	"./ml.js": 343,
	"./mr": 344,
	"./mr.js": 344,
	"./ms": 345,
	"./ms-my": 346,
	"./ms-my.js": 346,
	"./ms.js": 345,
	"./mt": 347,
	"./mt.js": 347,
	"./my": 348,
	"./my.js": 348,
	"./nb": 349,
	"./nb.js": 349,
	"./ne": 350,
	"./ne.js": 350,
	"./nl": 351,
	"./nl-be": 352,
	"./nl-be.js": 352,
	"./nl.js": 351,
	"./nn": 353,
	"./nn.js": 353,
	"./pa-in": 354,
	"./pa-in.js": 354,
	"./pl": 355,
	"./pl.js": 355,
	"./pt": 356,
	"./pt-br": 357,
	"./pt-br.js": 357,
	"./pt.js": 356,
	"./ro": 358,
	"./ro.js": 358,
	"./ru": 359,
	"./ru.js": 359,
	"./sd": 360,
	"./sd.js": 360,
	"./se": 361,
	"./se.js": 361,
	"./si": 362,
	"./si.js": 362,
	"./sk": 363,
	"./sk.js": 363,
	"./sl": 364,
	"./sl.js": 364,
	"./sq": 365,
	"./sq.js": 365,
	"./sr": 366,
	"./sr-cyrl": 367,
	"./sr-cyrl.js": 367,
	"./sr.js": 366,
	"./ss": 368,
	"./ss.js": 368,
	"./sv": 369,
	"./sv.js": 369,
	"./sw": 370,
	"./sw.js": 370,
	"./ta": 371,
	"./ta.js": 371,
	"./te": 372,
	"./te.js": 372,
	"./tet": 373,
	"./tet.js": 373,
	"./th": 374,
	"./th.js": 374,
	"./tl-ph": 375,
	"./tl-ph.js": 375,
	"./tlh": 376,
	"./tlh.js": 376,
	"./tr": 377,
	"./tr.js": 377,
	"./tzl": 378,
	"./tzl.js": 378,
	"./tzm": 379,
	"./tzm-latn": 380,
	"./tzm-latn.js": 380,
	"./tzm.js": 379,
	"./uk": 381,
	"./uk.js": 381,
	"./ur": 382,
	"./ur.js": 382,
	"./uz": 383,
	"./uz-latn": 384,
	"./uz-latn.js": 384,
	"./uz.js": 383,
	"./vi": 385,
	"./vi.js": 385,
	"./x-pseudo": 386,
	"./x-pseudo.js": 386,
	"./yo": 387,
	"./yo.js": 387,
	"./zh-cn": 388,
	"./zh-cn.js": 388,
	"./zh-hk": 389,
	"./zh-hk.js": 389,
	"./zh-tw": 390,
	"./zh-tw.js": 390
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 498;

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChargePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChargePage = (function () {
    function ChargePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChargePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChargePage');
    };
    ChargePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-charge',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/charge/charge.html"*/'<!--\n  Generated template for the ChargePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>charge</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/charge/charge.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChargePage);
    return ChargePage;
}());

//# sourceMappingURL=charge.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPage = (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PayPage = (function () {
    function PayPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PayPage');
    };
    PayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pay',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/pay/pay.html"*/'<!--\n  Generated template for the PayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pay</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/pay/pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PayPage);
    return PayPage;
}());

//# sourceMappingURL=pay.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecomendationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecomendationsPage = (function () {
    function RecomendationsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RecomendationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecomendationsPage');
    };
    RecomendationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recomendations',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/recomendations/recomendations.html"*/'<!--\n  Generated template for the RecomendationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>recomendations</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/recomendations/recomendations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RecomendationsPage);
    return RecomendationsPage;
}());

//# sourceMappingURL=recomendations.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExpandableComponent = (function () {
    function ExpandableComponent(navParams) {
        this.navParams = navParams;
        this.currentHeight = 0;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('expanded'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('expandedlow'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandedlow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('expandHeight'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('doctor'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "doctor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('available'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "available", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('horas'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "horas", void 0);
    ExpandableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'expandable',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/components/expandable/expandable.component.html"*/'<div class="expand-wrapper" [class.expanded]="expanded">\n    <ng-content>\n\n    </ng-content>\n\n</div>'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/components/expandable/expandable.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ExpandableComponent);
    return ExpandableComponent;
}());

//# sourceMappingURL=expandable.component.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(558);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatExpansionModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatExpansionModule */]],
        })
    ], MaterialModule);
    return MaterialModule;
}());

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datos_datos__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appointment_financer_financer__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_hello_hello__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CardPage = (function () {
    function CardPage(navCtrl, navParams, modalCtrl, helloPvr, elementRef, render, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.helloPvr = helloPvr;
        this.elementRef = elementRef;
        this.render = render;
        this.viewCtrl = viewCtrl;
        this._doctors = [];
        this.doctors = [];
        this.search = '';
        this.horas = [];
        this.numDays = 7;
        this.servicios = [];
        this.doctoresData = [];
        this.itemExpanded = true;
        this.itemExpandHeight = 200;
        this.changueColor = false;
        this.id = 1;
        this.fromDate = __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY-MM-DD");
        this.toDate = __WEBPACK_IMPORTED_MODULE_4_moment__().add(this.numDays, "day").format("YYYY-MM-DD");
        this.helloPvr.getServicios().subscribe(function (servicios) {
            _this.servicios = servicios;
        });
        this.getDoctorsList();
    }
    CardPage.prototype.getDoctorsList = function () {
        var _this = this;
        this.helloPvr.getDoctorsPerId(this.id).subscribe(function (doctores) {
            _this._doctors = doctores.map(function (doctor) {
                doctor.hasAvailable = true;
                _this.helloPvr.getAvailablesPerDoctor(doctor.id, doctor.service.id, _this.fromDate, _this.toDate).subscribe(function (availables) {
                    if (availables.length == 0) {
                        doctor.hasAvailable = false;
                    }
                    doctor.availables = availables;
                });
                return doctor;
            });
            _this.doctors = _this._doctors;
            // this._doctors.date;
        });
    };
    CardPage.prototype.onChangueSpecialty = function (specialty) {
        this.id = specialty;
        this.getDoctorsList();
    };
    CardPage.prototype.getDoctorsPerDay = function () {
        this.toDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.fromDate).add(this.numDays, "day").format("YYYY-MM-DD");
        this.getDoctorsList();
    };
    CardPage.prototype.buscarDoctor = function () {
        var _this = this;
        if (this.search.length == 1) {
            return;
        }
        this.doctors = this._doctors;
        this.doctors = this.doctors.filter(function (doctor) {
            var isOk = doctor.fullName.toLowerCase().indexOf((_this.search).toLowerCase()) != -1;
            return isOk;
        });
    };
    CardPage.prototype.expandedItem = function (doctor, available) {
        doctor.expanded = !doctor.expanded;
        if (doctor.expanded) {
            doctor.expanded;
        }
        this.horas = available.hours;
        this.dia = available.date;
    };
    CardPage.prototype.goToFinancer = function (doctor, available, hora) {
        var role = localStorage.getItem('role');
        if (role === 'guest') {
            console.log('no hay mail');
            var datos = this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__datos_datos__["a" /* DatosPage */], { hora: hora,
                doctor: doctor,
                available: this.fromDate });
            // datos.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__appointment_financer_financer__["a" /* FinancerPage */], { doctor: doctor, available: this.fromDate, hora: hora });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])('MyDays'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], CardPage.prototype, "MyDays", void 0);
    CardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-card',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/card/card.html"*/'<ion-header>\n    <ion-navbar color="primary" hideBackButton="true" persistent="true">\n        <button ion-button menuToggle>\n<ion-icon name="menu"></ion-icon>\n</button>\n        <ion-title> Home Page </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div id="busqueda">\n        <ion-list padding>\n            <!-- <ion-item>\n                <ion-label floating>Busqueda por Sede</ion-label>\n                <ion-select [(ngModel)]="sede" (click)="allMedicsForCenter()">\n                    <ion-option value="{{center.id}}" *ngFor="let center of centers">{{center.name}}</ion-option>\n                </ion-select>\n            </ion-item> -->\n            <ion-item>\n                <ion-label floating>Busca por Especialidad</ion-label>\n                <ion-select [(ngModel)]="id" #specialty (ionChange)="onChangueSpecialty(specialty.value)">\n                    <ion-option [value]="specialty.id" *ngFor="let specialty of servicios">{{specialty.description}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Busca por doctor</ion-label>\n                <ion-input type="text" (keyup)="buscarDoctor()" [(ngModel)]="search"></ion-input>\n            </ion-item>\n\n\n            <ion-item>\n                <ion-label floating>Busca por Fecha</ion-label>\n                <ion-input type="date" (ionChange)="getDoctorsPerDay()" [(ngModel)]="fromDate"></ion-input>\n            </ion-item>\n        </ion-list>\n\n    </div>\n\n    <div>\n        <ion-card *ngFor="let doctor of doctors ">\n            <div [ngStyle]="{\'display\': doctor.hasAvailable ? \'block\' : \'none\'}">\n                <ion-row>\n                    <ion-col col-4 class="imageDoctor">\n                        <img src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{doctor.id}}.png" alt="">\n                    </ion-col>\n                    <ion-col col-8 right>\n                        <p class="doctor">Dr. {{ doctor.fullName}}</p>\n                        <p class="especialidad">{{doctor.service.description | lowercase}}</p>\n                        <p>{{doctor.cmp}}</p>\n                        <p class="centro">Centro: Mendiola</p>\n                    </ion-col>\n\n                    <ion-col col-12>\n                    </ion-col>\n                    <div class="containerDays">\n                        <ion-slides>\n                            <ion-slide *ngFor="let available of doctor.availables">\n                                <div class="centerItemsDays">\n                                    <a (click)="expandedItem(doctor, available)">{{ available.date | date:\'fullDate\' :\'es\' | slice:0:3}}</a>\n                                    <p>{{ available.date | date:\'dd\':\'es\'}}</p>\n                                </div>\n                            </ion-slide>\n                        </ion-slides>\n                    </div>\n                    <ion-col col-12>\n                        <expandable [expandHeight]="itemExpandHeight" [expanded]="doctor.expanded" [doctor]="doctor" [available]="available" [horas]="horas">\n                            <div class="row">\n                                <!-- <div col-12 class="diasLibres">\n                                    <h6>{{dia | date:\'EEEE d , MMMM \' : \'es\'}}</h6>\n                                </div> -->\n                                <div col-1 class="icono">\n                                    <ion-icon item-start name="arrow-dropleft"></ion-icon>\n                                </div>\n                                <div col-10>\n                                    <ion-slides class="dentroExpandable">\n                                        <ion-slide *ngFor="let hora of horas">\n                                            <div (click)="goToFinancer(doctor, available, hora)" class="horas">\n                                                <p>\n                                                    {{ hora.hour | slice:0:5}}\n                                                </p>\n                                            </div>\n                                        </ion-slide>\n                                    </ion-slides>\n                                </div>\n                                <div col-1 class="icono">\n                                    <ion-icon item-end name="arrow-dropright"></ion-icon>\n                                </div>\n                            </div>\n                        </expandable>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-card>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/card/card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_hello_hello__["a" /* HelloProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["X" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */]])
    ], CardPage);
    return CardPage;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppointmentProvider = (function () {
    function AppointmentProvider(http) {
        this.http = http;
        this.apiUrl = 'http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/ebooking/';
    }
    AppointmentProvider.prototype.getAppointmentsPeruser = function () {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        return this.http.get(this.apiUrl + 'appointments/patient', { headers: headers })
            .map(function (resp) {
            return resp;
        });
    };
    AppointmentProvider.prototype.createAppointment = function (subida) {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        var params = JSON.parse(subida);
        //params.email = localStorage.getItem('emailUser'); params.password = localStorage.getItem('passUser');
        // WARM: REFACTOR! Always provision_id will be 44. All json is passed. This will put in backend.
        params.provisions = [{ "tipoPrestacion": "CONSULTA", "instructions": "", "name": "CONSULTA AMBULATORIA POR MEDICO ESPECIALISTA", "default": false, "id": 44 }];
        // console.log('appointment:',subida, params);
        return this.http.post(this.apiUrl + 'appointments/create', params, { headers: headers })
            .map(function (data) {
            return data;
        });
    };
    AppointmentProvider.prototype.destroyAppointment = function (appointment) {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        // appointment.email = localStorage.getItem('emailUser'); appointment.password = localStorage.getItem('passUser');
        return this.http.post(this.apiUrl + ("appointments/delete/" + appointment.appointmentId), {}, { headers: headers })
            .map(function (data) {
            return data;
        });
    };
    AppointmentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppointmentProvider);
    return AppointmentProvider;
}());

//# sourceMappingURL=appoinment.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appointment_financer_financer__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, userService, alertCtrl, events, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.viewCtrl = viewCtrl;
        this.hora = this.navParams.get('hora');
        this.doctor = this.navParams.get('doctor');
        this.available = this.navParams.get('available');
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.startSesion = function (formulario) {
        var _this = this;
        this.userService.doSignIn(formulario.value.email.toLowerCase(), formulario.value.password.toLowerCase())
            .subscribe(function (data) {
            _this.msg = "";
            console.log('data login', data);
            localStorage.setItem('idTokenUser', data.patientId);
            localStorage.setItem('emailUser', formulario.value.email);
            // localStorage.setItem('passUser', formulario.value.password);
            localStorage.setItem('authorization', data.authorization);
            localStorage.setItem('role', data.role);
            // XXX: Send event for login user. This is for trigger event in app.component for show menus when user is logged.
            _this.events.publish('user:logged', 'logged');
            if (!_this.hora)
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            else
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__appointment_financer_financer__["a" /* FinancerPage */], { hora: _this.hora, available: _this.available, doctor: _this.doctor });
        }, function (err) {
            _this.msg = "Usuario o contraseña incorrecta.";
        });
    };
    LoginPage.prototype.registrarUsuario = function () {
        if (this.pageFrom == 'payment')
            // { headquarter: this.headquarterId, specialty: this.specialty, doctor: this.doctor, date: this.date, hour: this.hour, pageFrom: this.pageFrom }
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/user/login/login.html"*/'<!-- <ion-header>\n    <ion-navbar color="primary" hideBackButton="true">\n         <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button> \n        <ion-title> Login </ion-title>\n    </ion-navbar>\n</ion-header> -->\n\n\n<ion-content class="gris">\n\n    <h5 class="bajar textoAzul" text-center>Vamos a comenzar, ahora necesitamos tus datos para iniciar una reserva. Si no tienes cuenta aún, registrate ¡es súper fácil!</h5>\n\n    <div padding>\n        <p style="text-align: center">{{msg}}</p>\n\n        <form #formulario="ngForm">\n\n            <ion-item>\n                <ion-label stacked>Email</ion-label>\n                <ion-input type="text" required name="email" ngModel></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Contraseña</ion-label>\n                <ion-input type="password" required name="password" ngModel></ion-input>\n            </ion-item>\n        </form>\n        <button ion-button (click)="startSesion(formulario)" block class="inicioSesion">iniciar Sesión</button>\n    </div>\n\n    <div class="white">\n        <h3 text-center class="noMargin">ó</h3>\n        <div padding>\n            <button ion-button (click)="registrarUsuario()" full color="primary" class="alto50" class="disabled">Registrarse</button>\n        </div>\n\n    </div>\n\n    <p class="noLogin" (click)="goToHome()">Continuar como invitado</p>\n\n</ion-content>'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/user/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authorization_public_authorization_public__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_card__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appoinment_appoinment__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, appointmentProvider, autho) {
        this.navCtrl = navCtrl;
        this.appointmentProvider = appointmentProvider;
        this.autho = autho;
        this.card = [];
        this.cardone = [];
        this.cardtwo = [];
        this.cardthree = [];
        this.itemExpanded = true;
        this.itemExpandHeight = 100;
        var authorization = localStorage.getItem('authorization');
        if (!authorization) {
            this.autho.getKey().subscribe(function (data) {
                localStorage.setItem('authorization', data.authorization);
                // localStorage.setItem('idTokenUser', data.patientId);
                localStorage.setItem('role', data.role);
            });
        }
    }
    HomePage.prototype.obtenerUltimaFecha = function () {
        var _this = this;
        this.appointmentProvider.getAppointmentsPeruser().subscribe(function (data) {
            _this.tasks = data;
            _this.ensenar = _this.tasks.length;
            console.log('tasks en home:', _this.ensenar);
        });
    };
    HomePage.prototype.irACard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__card_card__["a" /* CardPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color="primary" hideBackButton="true" persistent="true">\n        <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title> Home </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card button class="principal" (click)="irACard()">\n        <ion-item>\n            <ion-row>\n                <ion-col col-2>\n                    <ion-icon name="contact"></ion-icon>\n                </ion-col>\n                <ion-col col-9>\n                    <p class="reserve">Reservar cita</p>\n                </ion-col>\n                <ion-col col-1>\n                    <ion-icon name="arrow-dropright"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n    </ion-card>\n\n    <div class="down30">\n        <mat-accordion padding>\n\n            <mat-expansion-panel (click)="obtenerUltimaFecha()">\n                <mat-expansion-panel-header>\n                    <ion-col col-2>\n                        <ion-icon name="alarm"></ion-icon>\n                    </ion-col>\n                    <ion-col col-10>\n                        <p class="font11">Próxima Cita</p>\n                    </ion-col>\n\n                </mat-expansion-panel-header>\n                <p *ngIf="ensenar === 0" class="textoRecetas">Aun no tienes citas programadas</p>\n                <div class="containerExpand">\n                    <div *ngIf="tasks">\n                        <div *ngFor="let task of tasks; index as i; first as isFirst">\n                            <ion-row class="down10" *ngIf="isFirst">\n                                <ion-col col-3>\n                                    <ion-avatar item-start>\n                                        <img src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{task.professional.id}}.png">\n                                    </ion-avatar>\n                                </ion-col>\n                                <ion-col col-9>\n                                    <h3 class="tituloCitas" [ngClass]="{celeste:\'\'}">Dr.{{task.professional.fullName | slice:0:25 | uppercase}}</h3>\n                                    <p class="especialidad">{{ task.service.basicService.description | lowercase }}</p>\n                                    <p class="sede">{{ task.service.center.name | lowercase }}</p>\n                                    <p class="day">{{ task.appointmentDateTime | date:\'EEEE d , MMMM \' : \'es\' }} </p>\n                                    <p class="hour">{{ task.appointmentDateTime | date: \'HH:mm\' }}</p>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </div>\n\n                </div>\n            </mat-expansion-panel>\n\n            <!-- <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <ion-col col-2>\n                        <ion-icon name="filing"></ion-icon>\n                    </ion-col>\n                    <ion-col col-10>\n                        <p class="font11">Mi Historia Médica</p>\n                    </ion-col>\n\n                </mat-expansion-panel-header>\n                <div class="containerExpand">\n\n                    <h3>contenido Historia médica</h3>\n\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vitae, saepe dolore odio recusandae quibusdam corporis mollitia a quod, suscipit modi nobis quo culpa in eveniet, sed officiis. Dignissimos, tempora.\n                </div>\n            </mat-expansion-panel> -->\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <ion-col col-2>\n                        <ion-icon name="medkit"></ion-icon>\n                    </ion-col>\n                    <ion-col col-10>\n                        <p class="font11">Recetas y Medicamentos</p>\n                    </ion-col>\n                </mat-expansion-panel-header>\n                <div class="containerExpand">\n                    <p class="textoRecetas">Las recetas y médicamentos de sus últimas citas aparecerán aquí proximamente</p>\n                </div>\n            </mat-expansion-panel>\n\n            <!-- <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <ion-col col-2>\n                        <ion-icon name="list-box"></ion-icon>\n                    </ion-col>\n                    <ion-col col-10>\n                        <p class="font11">Recomendaciones</p>\n                    </ion-col>\n\n                </mat-expansion-panel-header>\n                <div class="containerExpand">\n\n                    <h3>contenido Recomendaciones</h3>\n\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vitae, saepe dolore odio recusandae quibusdam corporis mollitia a quod, suscipit modi nobis quo culpa in eveniet, sed officiis. Dignissimos, tempora.\n                </div>\n            </mat-expansion-panel> -->\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <ion-col col-2>\n                        <ion-icon name="flask"></ion-icon>\n                    </ion-col>\n                    <ion-col col-10>\n                        <p class="font11">Resultados</p>\n                    </ion-col>\n\n                </mat-expansion-panel-header>\n                <div class="containerExpand">\n                    <p class="textoRecetas">Aqui aparecerán los resultados de tus últimas citas proximamente</p>\n                </div>\n            </mat-expansion-panel>\n\n        </mat-accordion>\n\n    </div>\n    <!-- <h1>home</h1>\n    <p (click)="irACard()">Ir a Card</p> -->\n</ion-content>'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_appoinment_appoinment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_authorization_public_authorization_public__["a" /* AuthorizationPublicProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[426]);
//# sourceMappingURL=main.js.map
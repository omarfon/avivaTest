webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recoverycode_recoverycode__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_user__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecoveryPage = (function () {
    function RecoveryPage(navCtrl, navParams, form, usrPvr, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.form = form;
        this.usrPvr = usrPvr;
        this.alertCtrl = alertCtrl;
        this.formCode = this.form.group({
            email: []
        });
        console.log(this.formCode.value);
    }
    RecoveryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecoveryPage');
    };
    RecoveryPage.prototype.saveData = function () {
        var _this = this;
        var email = this.formCode.value.email;
        console.log('lo que se almacena en correo:', email);
        this.usrPvr.sendValidation(email).subscribe(function (data) {
            _this.datos = data;
            if (_this.datos.result == 'ok') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__recoverycode_recoverycode__["a" /* RecoverycodePage */], {
                    datos: _this.datos
                });
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: "Correo no valido",
                    message: "talvez el correo no es correcto o el correo no fue registrado",
                    buttons: ['volver a intentar']
                });
                alert_1.present();
            }
        });
    };
    RecoveryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-recovery',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/recovery/recovery.html"*/'<!--\n  Generated template for the RecoveryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Recuperación de cuenta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<p class="textoRecuperacion">Ingresa tu correo electronico, seguido enviaremos un código de 4 digitos, con el cual podrás recuperar tu contraseña.</p>\n  <form [formGroup]="formCode" (ngSubmit)="saveData(formCode.value)">\n\n    <ion-item >\n      <ion-label floating>Ingresa tu correo electronico</ion-label>\n      <ion-input\n                type="email"\n                [(ngModel)]="email"\n                formControlName="email">\n              </ion-input>\n    </ion-item>\n\n    <button ion-button\n            block\n            color="primary"\n            type="submit"\n            class="botonEnviar">\n      enviar\n    </button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/recovery/recovery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]])
    ], RecoveryPage);
    return RecoveryPage;
}());

//# sourceMappingURL=recovery.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverycodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecoverycodePage = (function () {
    function RecoverycodePage(navCtrl, navParams, form, usrPvr, events, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.form = form;
        this.usrPvr = usrPvr;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.datos = this.navParams.get('datos');
        console.log(this.datos);
        this.formCode = this.form.group({
            primero: [],
            segundo: [],
            tercero: [],
            cuarto: [],
            password: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["j" /* Validators */].required]],
            passwordRepeat: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["j" /* Validators */].required]]
        });
    }
    RecoverycodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecoverycodePage');
    };
    RecoverycodePage.prototype.validacion = function () {
        var valid = this.formCode.value;
        if (valid.password == valid.passwordRepeat) {
            return true;
        }
        else {
            return false;
        }
    };
    RecoverycodePage.prototype.saveData = function () {
        var _this = this;
        var codigo = this.formCode.value;
        // console.log('codigo:', codigo);
        var uno = codigo.primero;
        var dos = codigo.segundo;
        var tres = codigo.tercero;
        var cuatro = codigo.cuarto;
        var code = uno + dos + tres + cuatro;
        // console.log(code);
        this.datos.code = code;
        this.datos.password = this.formCode.value.password;
        console.log('datos.code:', this.datos);
        // this.datos.id = this.code.id;
        // console.log('data armada:', this.datos);
        this.usrPvr.recoveryLogin(this.datos).subscribe(function (data) {
            _this.logeo = data;
            if (_this.logeo.ok == false) {
                console.log('el logeo:', _this.logeo);
                var alert_1 = _this.alertCtrl.create({
                    title: "Error en la operaci\u00F3n",
                    message: "" + _this.logeo.error.help,
                    buttons: ['volver a intentar']
                });
                alert_1.present();
            }
            else {
                localStorage.setItem('usuario', _this.logeo.userEmail);
                localStorage.setItem('email', _this.logeo.userEmail);
                localStorage.setItem('authorization', _this.logeo.authorization);
                localStorage.setItem('id', _this.logeo.patientId);
                localStorage.setItem('role', _this.logeo.role);
                localStorage.setItem('photoUrl', _this.logeo.photoUrl);
                localStorage.setItem('patientName', _this.logeo.patientName);
                _this.events.publish('user:logged', 'logged');
                console.log('this.logeo:', _this.logeo);
                var alert_2 = _this.alertCtrl.create({
                    title: "Cuenta recuperada",
                    message: "su cuenta se ha recuperado exitosamente",
                    buttons: [
                        {
                            text: 'ok'
                        }
                    ]
                });
                alert_2.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
        });
    };
    RecoverycodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-recoverycode',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/recoverycode/recoverycode.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Código de Recuperación</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n\n\n  <ion-content padding>\n\n    <p class="codigoValida">hemos enviado al correo el código de validación con el que podrás recuperar tu cuenta....</p>\n   <ion-row>\n     <form [formGroup]="formCode" (ngSubmit)="saveData(formCode.value)" novalidate>\n     <div col-12 padding >\n       <ion-row padding>\n           <ion-col class="rectanguloInput">\n             <ion-input type="tel"\n                          minlength="1"\n                          maxlength="1"\n                         [(ngModel)]="primero"\n                         formControlName="primero"\n                          ></ion-input>\n            </ion-col>\n           <ion-col class="rectanguloInput">\n              <ion-input type="tel"\n                        minlength="1"\n                        maxlength="1"\n                          [(ngModel)]="segundo"\n                          formControlName="segundo"\n                          ></ion-input>\n            </ion-col>\n           <ion-col class="rectanguloInput">\n             <ion-input type="tel"\n                        minlength="1"\n                        maxlength="1"\n                        tercero="tercero"\n                        formControlName="tercero"\n                        ngModel></ion-input>\n            </ion-col>\n            <ion-col class="rectanguloInput">\n                <ion-input type="tel"\n                        minlength="1"\n                        maxlength="1"\n                           tercero="cuarto"\n                           formControlName="cuarto"\n                           ngModel></ion-input>\n               </ion-col>\n              </ion-row>\n              <div>\n                  <p class="tituloContraseña">Cambia la contraseña</p>\n                   <ion-item>\n                       <ion-label floating>contraseña nueva</ion-label>\n                       <ion-input type="password"\n                                   formControlName="password"\n                                   ngModel>\n                       </ion-input>\n                     </ion-item>\n\n                     <ion-item>\n                         <ion-label floating>Repetir contraseña nueva</ion-label>\n                         <ion-input type="password"\n                                     formControlName="passwordRepeat"\n                                     ngModel>\n                         </ion-input>\n                       </ion-item>\n                </div>\n              <div class="center">\n                <button ion-button\n                        block\n                         type="submit"\n                         class="botonRecuperar"\n                         [disabled]="!formCode.valid || !validacion()">\n                   Recuperar\n                </button>\n              </div>\n     </div>\n\n    </form>\n  </ion-row>\n\n\n   <div class="center">\n     <p class="newCode">Si no recibiste o caducó tu codigo puedes solicitar uno nuevo.</p>\n     <button ion-button\n            class="codigoreen"\n            clear\n            (click)="sendCode()">reenviar códido\n   </button>\n   </div>\n\n  </ion-content>\n\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/recoverycode/recoverycode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], RecoverycodePage);
    return RecoverycodePage;
}());

//# sourceMappingURL=recoverycode.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationPublicProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
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
        this.SERVER = "http://dappapache02.eastus.cloudapp.azure.com:4200";
        this.apiUrl = this.SERVER + "/api/v2/users/public-authorization";
        console.log('Hello AuthorizationPublicProvider Provider');
    }
    AuthorizationPublicProvider.prototype.getKey = function () {
        return this.http.get(this.apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AuthorizationPublicProvider.prototype.extractData = function (res) {
        var body = res.json();
        console.log('body:', body);
        return body || {};
    };
    AuthorizationPublicProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* Response */]) {
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
    AuthorizationPublicProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], AuthorizationPublicProvider);
    return AuthorizationPublicProvider;
}());

//# sourceMappingURL=authorization-public.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_crudparent_crudparent__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appointment_financer_financer__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CodePage = (function () {
    function CodePage(navCtrl, navParams, crudPvr, form, userService, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crudPvr = crudPvr;
        this.form = form;
        this.userService = userService;
        this.events = events;
        this.hora = this.navParams.get('hora');
        this.available = this.navParams.get('available');
        this.doctor = this.navParams.get('doctor');
        this.formCode = this.form.group({
            primero: [],
            segundo: [],
            tercero: [],
            cuarto: []
        });
        console.log(this.formCode.value);
        console.log(this.formCode.value.primero);
        this.datos = this.navParams.get('datos');
        console.log('los datos que vienen de registro', this.datos);
    }
    CodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CodePage');
    };
    CodePage.prototype.saveData = function () {
        var _this = this;
        var codigo = this.formCode.value;
        var uno = codigo.primero;
        var dos = codigo.segundo;
        var tres = codigo.tercero;
        var cuatro = codigo.cuarto;
        var code = uno + dos + tres + cuatro;
        // console.log(code);
        this.datos.code = code;
        this.datos.id = this.code.id;
        // console.log('data armada:', this.datos);
        this.crudPvr.createNewUser(this.datos).subscribe(function (data) {
            _this.createOk = data;
            // console.log('data que viene de la creación:', data);
            var email = _this.createOk.data.middleware.email;
            var password = _this.createOk.data.middleware.passwordHash;
            _this.userService.doSignInforNewRegister(email, password).subscribe(function (data) {
                _this.loginOk = data;
                // console.log('datos que vienen del logueo: por registro:', this.loginOk);
                localStorage.setItem('idTokenUser', _this.loginOk.patientId);
                localStorage.setItem('emailUser', _this.loginOk.emailPaciente);
                localStorage.setItem('authorization', _this.loginOk.authorization);
                localStorage.setItem('role', _this.loginOk.role);
                localStorage.setItem('patientName', _this.loginOk.patientName);
                _this.events.publish('user:logged', 'logged');
                if (_this.hora) {
                    // console.log(this.hora, this.doctor, this.available);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__appointment_financer_financer__["a" /* FinancerPage */], {
                        doctor: _this.doctor,
                        available: _this.available,
                        hora: _this.hora
                    });
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
                console.log("pasó!!!");
            });
        });
    };
    CodePage.prototype.sendCode = function () {
        var _this = this;
        var email = { email: this.datos.email };
        this.crudPvr.validateEmail(email).subscribe(function (data) {
            _this.code = data;
            console.log('lo que me llega del vaildate:', _this.code);
        });
    };
    CodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-code',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/code/code.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Código de Validación</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p class="codigoValida">hemos enviado al correo el código de validación , ingresalo y listo....</p>\n <ion-row>\n   <div col-2></div>\n   <div col-8>\n      <form [formGroup]="formCode" (ngSubmit)="saveData(formCode.value)" novalidate>\n     <ion-row>\n         <ion-col class="rectanguloInput">\n           <ion-input type="tel"\n                        minlength="1"\n                        maxlength="1"\n                       [(ngModel)]="primero"\n                       formControlName="primero"\n                        ></ion-input>\n          </ion-col>\n         <ion-col class="rectanguloInput">\n            <ion-input type="tel"\n                      minlength="1"\n                      maxlength="1"\n                        [(ngModel)]="segundo"\n                        formControlName="segundo"\n                        ></ion-input>\n          </ion-col>\n         <ion-col class="rectanguloInput">\n           <ion-input type="tel"\n                      minlength="1"\n                      maxlength="1"\n                      tercero="tercero"\n                      formControlName="tercero"\n                      ngModel></ion-input>\n          </ion-col>\n          <ion-col class="rectanguloInput">\n              <ion-input type="tel"\n                      minlength="1"\n                      maxlength="1"\n                         tercero="cuarto"\n                         formControlName="cuarto"\n                         ngModel></ion-input>\n             </ion-col>\n            </ion-row>\n            <div class="center">\n              <button ion-button\n                       type="submit">\n                 registrarme\n              </button>\n            </div>\n    </form>\n   </div>\n   <div col-2></div>\n </ion-row>\n\n\n <div class="center">\n   <p class="newCode">Si no recibiste o caduco tu codigo puedes solicitar uno nuevo.</p>\n   <button ion-button\n          class="codigoreen"\n          clear\n          (click)="sendCode()">reenviar códido\n </button>\n </div>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/code/code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_crudparent_crudparent__["a" /* CrudparentProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Events */]])
    ], CodePage);
    return CodePage;
}());

//# sourceMappingURL=code.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_crudparent_crudparent__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appoinment_appoinment__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__card_card__ = __webpack_require__(63);
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
    function PayPage(navCtrl, navParams, fb, alertCtrl, modalCtrl, appointmentProvider, actionSheet, viewCtrl, loadingCtrl, crudPvr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.appointmentProvider = appointmentProvider;
        this.actionSheet = actionSheet;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.crudPvr = crudPvr;
        this.currentAppointment = null;
        this.nots = [
            { "id": "1", "name": "En local" },
            { "id": "2", "name": "Con tarjeta" },
        ];
        console.log('culqi en pay:', Culqi);
        this.culqiData = JSON.parse(localStorage.getItem('culqiData'));
        console.log('culqi guardada en local', localStorage.getItem('culqiData'));
        this.pago = 'enLocal';
        this.doctor = this.navParams.get('doctor');
        this.available = this.navParams.get('available');
        this.hora = this.navParams.get('hora');
        this.depe = this.navParams.get('depe');
        this.price = this.navParams.get('price');
        this.subida = this.hora.listjson;
        console.log('la hora', this.hora);
        this.myForm = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            card: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(16), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].maxLength(16)]],
            cvv: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].maxLength(3)]],
            month: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            year: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]]
        }, { validator: this.dateValid('month', 'year') });
        Culqi.publicKey = 'pk_test_e85SD7RVrWlW0u7z';
    }
    PayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PayPage');
    };
    // personalSelected(item) {
    //   // console.log("Selected Item", item);
    //   if (item == 1) {
    //     this.isPlace = true;
    //     this.paymentName = "En local";
    //   } else {
    //     this.paymentName = "Con tarjeta";
    //     this.isPlace = false;
    //   }
    // }
    PayPage.prototype.dateValid = function (month, year) {
        return function (group) {
            var date = new Date();
            var monthInput = group.controls[month];
            var yearInput = group.controls[year];
            if (yearInput.value == date.getFullYear())
                if (monthInput.value < ("0" + (date.getMonth() + 1)).slice(-2))
                    return monthInput.setErrors({ notEquivalent: true });
        };
    };
    PayPage.prototype.openCulqi = function () {
        var loadingPago = this.loadingCtrl.create({
            content: "Haciendo el cobro...",
        });
        loadingPago.present();
        var appointment = this.currentAppointment;
        // console.log(Culqi);
        // console.log('elprecio:',this.price)
        // console.log("this.openCulqi");
        var settings = {
            title: 'Pago Online',
            description: "prueba",
            currency: "PEN",
            amount: this.price * 100
        };
        this.culqiData.amount = this.price * 100;
        localStorage.setItem('culqiData', JSON.stringify(this.culqiData));
        console.log('settings:', settings, this.culqiData);
        Culqi.settings(settings);
        var i = setInterval(function () {
            var _this = this;
            // si se puede realizar el pago con culqi
            this.culqiData = JSON.parse(localStorage.getItem('culqiData'));
            // console.log('this.culqiData:', this.culqiData);
            if (this.culqiData.status == "ok") {
                this.culqiData.status = "";
                localStorage.setItem('culqiData', JSON.stringify(this.culqiData));
                clearInterval(i);
                loadingPago.dismiss();
                var alert_1 = this.alertCtrl.create({
                    title: "Creación de cita",
                    subTitle: "la cita que reservaste ha sido creada satisfactoriamente.",
                    buttons: [
                        {
                            text: "OK",
                            role: 'cancel'
                        }
                    ]
                });
                alert_1.present();
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
            }
            else if (this.culqiData.status == "error") {
                this.culqiData.status = "";
                localStorage.setItem('culqiData', JSON.stringify(this.culqiData));
                var self_1 = this;
                clearInterval(i);
                loadingPago.dismiss();
                var action_1 = this.actionSheet.create({
                    title: "EL PAGO NO PUDO REALIZARSE",
                    buttons: [
                        {
                            text: "Intentar de nuevo",
                            role: 'destructive',
                            handler: function () {
                                action_1.dismiss().then(function () {
                                    _this.culqiData.status = "";
                                    localStorage.setItem('culqiData', JSON.stringify(_this.culqiData));
                                    self_1.openCulqi();
                                });
                                return false;
                            }
                        },
                        {
                            text: "Pagar en clínica",
                            handler: function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                                var alert = _this.alertCtrl.create({
                                    title: "La Cita que pediste ha sido creada",
                                    subTitle: "recuerda que tendras que pagar en la clínica",
                                    buttons: [{
                                            text: "OK",
                                            role: 'cancel'
                                        }]
                                });
                                alert.present();
                            }
                        },
                        {
                            text: "Cancelar cita",
                            handler: function () {
                                _this.appointmentProvider.destroyAppointment(appointment).subscribe(function (data) {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                                    var alert = _this.alertCtrl.create({
                                        title: "su cita fue cancelada",
                                        buttons: [
                                            {
                                                text: "OK",
                                                role: "cancel"
                                            }
                                        ]
                                    });
                                    alert.present();
                                });
                            }
                        }
                    ]
                });
                action_1.present();
            }
        }.bind(this), 1000);
        console.log("open CUlqi");
        Culqi.open();
        loadingPago.dismiss();
    };
    PayPage.prototype.payCulqi = function () {
        var _this = this;
        if (this.depe) {
            var id = this.depe._id;
            // console.log('lo que mando al proivider:', this.subida, id);
            this.crudPvr.createParentDate(this.subida, id)
                .subscribe(function (data) {
                _this.currentAppointment = data;
                _this.openCulqi();
            }, function (err) {
                if (_this.currentAppointment !== null) {
                    _this.openCulqi();
                    return;
                }
                console.log('err', err);
                if (!err) {
                    return;
                }
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
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__card_card__["a" /* CardPage */]);
                                    }
                                }
                            ]
                        });
                        alert.present();
                        break;
                    case 15009:
                    case 15035:
                        alert = _this.alertCtrl.create({
                            title: 'Aviso al Cliente',
                            subTitle: 'El horario escogido ya fue tomado .',
                            buttons: [
                                {
                                    text: 'Buscar otra hora',
                                    handler: function (data) {
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__card_card__["a" /* CardPage */]);
                                    }
                                }
                            ],
                            enableBackdropDismiss: true
                        });
                        alert.present();
                        break;
                    default:
                        break;
                }
            });
        }
        else {
            this.appointmentProvider.createAppointment(this.subida)
                .subscribe(function (data) {
                _this.currentAppointment = data;
                _this.openCulqi();
            }, function (err) {
                if (_this.currentAppointment !== null) {
                    _this.openCulqi();
                    return;
                }
                console.log('err', err);
                if (!err) {
                    return;
                }
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
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__card_card__["a" /* CardPage */]);
                                    }
                                }
                            ]
                        });
                        alert.present();
                        break;
                    case 15009:
                    case 15035:
                        alert = _this.alertCtrl.create({
                            title: 'Aviso al Cliente',
                            subTitle: 'El horario escogido ya fue tomado .',
                            buttons: [
                                {
                                    text: 'Buscar otra hora',
                                    handler: function (data) {
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__card_card__["a" /* CardPage */]);
                                    }
                                }
                            ],
                            enableBackdropDismiss: true
                        });
                        alert.present();
                        break;
                    default:
                        break;
                }
            });
        }
    };
    // payCulqi() {
    //   this.appointmentProvider.createAppointment(this.subida)
    //                           .subscribe((data:any)=> {
    //                           this.currentAppointment = data;
    //                           this.openCulqi();
    //                         }
    //   ,err =>{
    //     if(this.currentAppointment !== null){
    //       this.openCulqi();
    //       return;
    //     }
    //     console.log('err',err);
    //          if(!err){
    //            return
    //         }
    //     const code = err.error.data.errorCode;
    //       let alert;
    //       switch (code) {
    //         case 15006:
    //           // case 15035:
    //           alert = this.alertCtrl.create({
    //             title: 'Aviso al Cliente',
    //             subTitle: 'Ya tienes una cita en una hora cercana a esta.',
    //             buttons: [
    //               {
    //                 text: 'Buscar otra hora',
    //                 handler: data => {
    //                   this.navCtrl.setRoot(CardPage);
    //                 }
    //               }
    //             ]
    //           });
    //           alert.present();
    //           break;
    //         case 15009:
    //         case 15035:
    //           alert = this.alertCtrl.create({
    //             title: 'Aviso al Cliente',
    //             subTitle: 'El horario escogido ya fue tomado .',
    //             buttons: [
    //               {
    //                 text: 'Buscar otra hora',
    //                 handler: data => {
    //                   this.navCtrl.setRoot(CardPage);
    //                 }
    //               }
    //             ],
    //             enableBackdropDismiss: true
    //           });
    //           alert.present();
    //           break;
    //         default:
    //           break;
    //       }
    //   });
    // }
    PayPage.prototype.next = function () {
        var _this = this;
        if (this.currentAppointment === null) {
            var loading_1 = this.loadingCtrl.create({
                content: "creando cita"
            });
            loading_1.present();
            this.appointmentProvider.createAppointment(this.subida).subscribe(function (data) {
                // console.log("se ha creado la cita");
                var alert = _this.alertCtrl.create({
                    title: "Creación de cita",
                    subTitle: "la cita que reservaste ha sido creada satisfactoriamente.",
                    buttons: [
                        {
                            text: "Ok",
                            role: "Cancel"
                        }
                    ]
                });
                loading_1.dismiss();
                alert.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
            });
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: "Creación de cita",
                subTitle: "la cita que reservaste ha sido creada satisfactoriamente.",
                buttons: [
                    {
                        text: "Ok",
                        role: "Cancel"
                    }
                ]
            });
            alert_2.present();
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
    };
    PayPage.prototype.nextDepe = function () {
        var _this = this;
        var id = this.depe._id;
        console.log('el id que va para creacion de familiar:', id);
        this.crudPvr.createParentDate(this.subida, id).subscribe(function (data) {
            var loading = _this.loadingCtrl.create({
                content: "creando cita"
            });
            loading.present();
            var alert = _this.alertCtrl.create({
                title: "Creación de cita",
                subTitle: "la cita que reservaste ha sido creada satisfactoriamente.",
                buttons: [
                    {
                        text: "Ok",
                        role: "Cancel"
                    }
                ]
            });
            loading.dismiss();
            alert.present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
        });
        // queda pendiente el error, sino crea la cita
    };
    PayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-pay',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/pay/pay.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Pago</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n    <div class="container-gris">\n      <div class="containerResumen">\n        <ion-card>\n            <div class="containerTextoPago">\n                <h3 class="titleCardPago">Lo que has escogido hasta el momento</h3>\n            </div>\n            <div>\n                <ion-row class="centrar">\n                    <ion-col col-4>\n                        <img id="profile-image" src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{doctor.id}}.png">\n                    </ion-col>\n                    <ion-col col-8>\n                        <h3 class="nombreDoctor" text-center>\n                            {{ doctor.fullName }}\n                        </h3>\n                        <div class="sedeContainer">\n                            <!-- <p bold class="izquierda">Sede:</p> -->\n                            <p class="sede" type="text" disabled="true">Mendiola</p>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </div>\n                <div  class="centrar">\n                    <p class="izquierda">Especialidad:</p>\n                    <p item-end class="blue" disabled="true"> {{ doctor.service.description }}</p>\n                </div>\n                <div  class="centrar">\n                    <p class="izquierda">Fecha:</p>\n                    <p item-end class="blue" disabled="true">\n                        {{ available | date:\'EEEE d , MMMM \' : \'es\' }}\n                    </p>\n                </div>\n                <div  class="centrar">\n                    <p class="izquierda">Hora:</p>\n                    <p class="blue" type="text" disabled="true">\n                        {{ hora.hour | slice:0:5}}\n                    </p>\n                </div>\n                <div  class="centrar">\n                    <p class="izquierda">Costo:</p>\n                    <p class="blue" item-end type="text" disabled="true">\n                        S/.{{ price }}\n                    </p>\n                </div>\n                <div  *ngIf="depe"\n                    class="centrar">\n                    <p class="izquierda">Cita reservada para:</p>\n                    <p class="blue" item-end type="text" disabled="true">\n                        {{ depe.name}}\n                    </p>\n                </div>\n        </ion-card>\n      </div>\n      <div padding>\n        <!-- <h4 text-center class="tituloMetodos">Metodos de Pago</h4> -->\n        <h4 class="tituloPagos">Escoge la forma en la que vas a pagar y listo...</h4>\n        <ion-segment [(ngModel)]="pago">\n            <ion-segment-button value="enLocal">\n                En local\n            </ion-segment-button>\n            <ion-segment-button value="enClinica">\n                Con tarjeta\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n    <div [ngSwitch]="pago">\n        <ion-list *ngSwitchCase="\'enLocal\'">\n            <div class="resumen" >\n              <div padding>\n                <button *ngIf="!depe"\n                        ion-button color="secondary"\n                        class="botonAccept"\n                        [class.button-disabled]="true"\n                        block\n                        (click)="next()">Confirmar cita\n                </button>\n                <button *ngIf="depe"\n                      ion-button\n                      color="secondary"\n                      class="botonAccept"\n                      [class.button-disabled]="true"\n                      block (click)="nextDepe()">Confirmar cita\n                </button>\n            </div>\n          </div>\n      </ion-list>\n        <ion-list *ngSwitchCase="\'enClinica\'">\n            <div class="resumen" >\n\n\n\n        <div padding>\n            <button ion-button color="secondary" class="botonAccept" [class.button-disabled]="true" block (click)="payCulqi()">Pago con tarjeta</button>\n        </div>\n\n        <!-- <div padding>\n                <button ion-button color="secondary" class="botonAccept" [class.button-disabled]="true" block (click)="openModalPayu()">Pagar ahora con payu</button>\n            </div> -->\n\n\n    </div>\n        </ion-list>\n    </div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/pay/pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_appoinment_appoinment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_crudparent_crudparent__["a" /* CrudparentProvider */]])
    ], PayPage);
    return PayPage;
}());

//# sourceMappingURL=pay.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateparentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_crudparent_crudparent__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dependents_dependents__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appointment_financer_financer__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateparentPage = (function () {
    function CreateparentPage(navCtrl, navParams, fb, viewCtrl, dependentsPvr, crudPvr) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.dependentsPvr = dependentsPvr;
        this.crudPvr = crudPvr;
        this.actual = __WEBPACK_IMPORTED_MODULE_5_moment__().format('YYYY-MM-DD');
        this.dependentsPvr.getDependens().subscribe(function (data) {
            _this.parents = data;
        });
        this.formFamily = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]],
            paternal_surname: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]],
            maternal_surname: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]],
            gender: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]],
            date_of_birth: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]],
            type_document: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]],
            dni: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].maxLength(8)]],
            // user_id         : [ localStorage.getItem('idTokenUser') ],
            kindred: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]]
            // email           : [ String(Math.floor(Math.random() * 9e15)) + '@ipsum.com' ],
            // password        : [ String(Math.floor(Math.random() * 9e15)) ]
        });
        console.log('la data de formulario:', this.formFamily);
    }
    CreateparentPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CreateparentPage.prototype.saveData = function () {
        var _this = this;
        var datos = this.formFamily.value;
        var data = {
            relation: {
                id: 4,
                name: datos.kindred
            },
            name: datos.name,
            surname1: datos.paternal_surname,
            surname2: datos.maternal_surname,
            birthdate: datos.date_of_birth,
            gender: {
                id: 2,
                name: datos.gender
            },
            documentType: {
                id: 1,
                name: datos.type_document
            },
            documentNumber: datos.dni
        };
        this.crudPvr.createParent(data).subscribe(function (data) {
            _this.createParents = data;
            _this.dependentsPvr.getDependens().subscribe(function (dat) {
                _this._parents = dat;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__appointment_financer_financer__["a" /* FinancerPage */], { parents: _this._parents });
            });
        });
    };
    CreateparentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateparentPage');
    };
    CreateparentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-createparent',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/createparent/createparent.html"*/'\n<ion-content padding class="gris">\n<div class="cienPorCiento">\n  <ion-row>\n    <ion-col col-9>\n      <h3 class="tituloFamiliar">Creación de cuenta Adicional</h3>\n    </ion-col>\n    <ion-col col-3 class="contenedorButton">\n      <button ion-button class="buttonClose">\n        <ion-icon name="close" color="secondary" class="close" round (click)="closeModal()">\n        </ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</div>\n\n  <form [formGroup]="formFamily" (ngSubmit)="saveData(formFamily.value)" novalidate>\n    <ion-list>\n      <ion-grid>\n\n        <ion-item>\n          <ion-label stacked>Nombres:</ion-label>\n          <ion-input formControlName="name" type="text" maxlength="40">\n          </ion-input>\n        </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Apellido Paterno:</ion-label>\n    <ion-input formControlName="paternal_surname" type="text" maxlength="40">\n    </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Apellido Materno:</ion-label>\n    <ion-input formControlName="maternal_surname" type="text" maxlength="40">\n    </ion-input>\n  </ion-item>\n\n  <ion-col col-12>\n    <ion-item>\n      <ion-label stacked>Documento:</ion-label>\n      <ion-select [(ngModel)]="change" formControlName="type_document" name="type_document" floating>\n        <ion-option value="D.N.I">DNI</ion-option>\n        <ion-option value="carne_extranjeria">Carne de Extranjeria</ion-option>\n        <ion-option value="pasaporte">Pasaporte</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-col>\n\n  <ion-col col-12>\n    <ion-item>\n      <ion-label stacked> Nº Documento:</ion-label>\n      <ion-input *ngIf="change === \'D.N.I\'" type="number" formControlName="dni" name="dni" minlength="8" maxlength="8" stacked></ion-input>\n      <ion-input *ngIf="change === \'carne_extranjeria\'" type="tel" formControlName="dni" name="dni" minlength="12" maxlength="12"\n        stacked></ion-input>\n      <ion-input *ngIf="change === \'pasaporte\'" type="tel" formControlName="dni" name="dni" minlength="12" maxlength="12" stacked></ion-input>\n      <!-- <p color="danger" ion-text *ngIf="registerForm.get(\'dni\').hasError(\'required\')">DNI requerido</p> -->\n    </ion-item>\n  </ion-col>\n\n  </ion-grid>\n\n  <ion-col col-12>\n      <ion-item>\n        <ion-label stacked>Sexo:</ion-label>\n        <ion-select formControlName="gender" name="gender">\n          <ion-option value="HOMBRE">Hombre</ion-option>\n          <ion-option value="MUJER">Mujer</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n\n    <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>Nacimiento:</ion-label>\n          <ion-datetime displayFormat="MM/DD/YYYY"\n                        formControlName="date_of_birth"\n                        name="date_of_birth"\n                        max="{{actual}}"></ion-datetime>\n          <!-- <ion-input type="date" formControlName="date_of_birth" name="date_of_birth"></ion-input> -->\n        </ion-item>\n      </ion-col>\n\n  <ion-col col-12>\n    <ion-item>\n      <ion-label stacked>Parentesco:</ion-label>\n      <ion-select formControlName="kindred" name="kindred" floating>\n        <!-- <ion-option value="father">Padre</ion-option>\n        <ion-option value="mother">Madre</ion-option> -->\n        <ion-option value="hijo/a">hijo/a</ion-option>\n        <!-- <ion-option value="daughter">Hija</ion-option>\n        <ion-option value="uncle">Tio</ion-option>\n        <ion-option value="aunt">Tia</ion-option> -->\n      </ion-select>\n    </ion-item>\n  </ion-col>\n      </ion-list>\n      <button ion-button type="submit"\n              [disabled]="!formFamily.valid"\n              block\n              color="secondary"\n              class="guardaryContinuar">Guardar y continuar</button>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/createparent/createparent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_dependents_dependents__["a" /* DependentsProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_crudparent_crudparent__["a" /* CrudparentProvider */]])
    ], CreateparentPage);
    return CreateparentPage;
}());

//# sourceMappingURL=createparent.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recipe_recipe__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_recipes_recipes__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appoinment_appoinment__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_date_modal_my_date_modal__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dependents_dependents__ = __webpack_require__(72);
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
    function MyDatesPage(navCtrl, alertCtrl, modalCtrl, viewCtrl, navParams, appointmentProvider, dependentsProvider, recipePvr, dependentsPvr) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.appointmentProvider = appointmentProvider;
        this.dependentsProvider = dependentsProvider;
        this.recipePvr = recipePvr;
        this.dependentsPvr = dependentsPvr;
        var nombrePatient = localStorage.getItem('patientName');
        var separador = " ";
        if (nombrePatient) {
            this.nombre = nombrePatient.split(separador, 1);
            this.nombreCortado = nombrePatient.slice(0, 1);
        }
        else {
            console.log("seguir normal es invitado");
        }
        this.dependentsPvr.getDependens().subscribe(function (data) {
            _this.dependens = data;
            console.log('los dependientes:', _this.dependens);
        });
        this.appointmentProvider.getAppointmentsPeruser().subscribe(function (data) {
            _this.citas = 'miscitas';
            _this.tasks = data;
            console.log('los tasks:', _this.tasks);
            _this.mostrar = _this.tasks.length;
            // console.log('mis citas:',this.tasks);
            // console.log('tasks:', this.tasks);
        }, function (err) {
            console.error('algo fallo');
        });
        this.dependentsProvider.getOldDependetsDay().subscribe(function (data) {
            _this.citaspasadas = data;
            _this.sinpasadas = _this.citaspasadas.length;
            console.log('citas pasadas:', _this.citaspasadas);
        });
        this.dependentsProvider.getdependesDay().subscribe(function (data) {
            _this.tasksParents = data;
            _this.sinParents = _this.tasksParents.length;
            console.log('las citas de los familiares:', _this.tasksParents);
        });
    }
    MyDatesPage.prototype.gotoDetails = function (taskpa) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__my_date_modal_my_date_modal__["a" /* MyDateModalPage */], { taskpa: taskpa });
        console.log('taskpa:', taskpa);
    };
    MyDatesPage.prototype.goToDetailsTask = function (task) {
        console.log('task datos:', task);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__my_date_modal_my_date_modal__["a" /* MyDateModalPage */], { task: task });
    };
    MyDatesPage.prototype.goToRecipe = function (citaspa) {
        var _this = this;
        var id = citaspa.encuentro_pk;
        this.recipePvr.getRecipes(id).subscribe(function (data) {
            _this.recipe = data;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__recipe_recipe__["a" /* RecipePage */], { recipe: _this.recipe });
        });
    };
    MyDatesPage.prototype.getDatesUser = function () {
        var _this = this;
        // traer nuevamente las citas de el usuario pincipal y renderizarlas
        this.dependentsProvider.getOldDependetsDay().subscribe(function (data) {
            _this._citaspasadas = data;
            _this.citaspasadas = _this._citaspasadas;
            _this.sinpasadas = _this.citaspasadas.length;
            console.log('citas pasadas:', _this.citaspasadas);
        });
    };
    MyDatesPage.prototype.getDatesDepends = function (dep) {
        var _this = this;
        var id = dep.patientId;
        this.dependentsProvider.getDependentDay(id).subscribe(function (data) {
            _this.$citaspasadas = data;
            console.log('citas de dependientes jalada:', _this.$citaspasadas);
            _this.citaspasadas = _this.$citaspasadas[0].encuentros;
        });
        // console.log('conseguir los datos del los dependientes', this.citaspasadas);
    };
    MyDatesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-my-dates',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/my-dates/my-dates.html"*/'<ion-header>\n    <ion-navbar color="primary" hideBackButton="true">\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title> Mi citas </ion-title>\n    </ion-navbar>\n    <ion-toolbar color="primary">\n      <ion-segment [(ngModel)]="citas" color="secondary">\n        <ion-segment-button value="citaspasadas">\n          <p>Citas Pasadas</p>\n        </ion-segment-button>\n        <ion-segment-button value="miscitas">\n          <p>Proximas citas</p>\n        </ion-segment-button>\n        <!-- <ion-segment-button value="citasfamiliares">\n          <p>citas familiares</p>\n        </ion-segment-button> -->\n      </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]="citas">\n    <div *ngSwitchCase="\'citaspasadas\'">\n      <ion-slides class="containerDepends">\n              <ion-slide>\n                  <button ion-button\n                          class="botonConImagen"\n                          (click)="getDatesUser()">\n                        <img src="" alt="">\n                        {{nombreCortado}}\n                  </button>\n                  <p class="principalName">{{nombre}}</p>\n              </ion-slide>\n\n                <ion-slide *ngFor="let dep of dependens">\n                    <button ion-button\n                            color="secondary"\n                            class="botonConImagen"\n                           (click)="getDatesDepends(dep)">\n                          <p>{{dep.name | slice:0:1}}</p>\n                      <img src="" alt="">\n                    </button>\n                    <p class="nombreUsuarios">{{dep.name}}</p>\n                  </ion-slide>\n      </ion-slides>\n        <ion-list *ngFor=\'let citaspa of citaspasadas\'>\n            <ion-card class="bordeDerecho" *ngIf="citaspa ">\n                <ion-item>\n                    <ion-row>\n                        <ion-col col-4>\n                            <ion-avatar item-start>\n                                <img src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{citaspa.codigo_personal}}.png">\n                            </ion-avatar>\n                        </ion-col>\n                        <ion-col col-8>\n                            <h3 class="tituloCitas">{{citaspa.apellido1 | lowercase}} {{citaspa.apellido2 | lowercase}} {{citaspa.nombre | lowercase}}</h3>\n                            <p class="especialidad">{{ citaspa.servicio_basico | lowercase }}</p>\n                            <p class="sede">{{ citaspa.nombre_centro | lowercase }}</p>\n                        </ion-col>\n                        <ion-grid>\n                          <ion-row *ngIf="citaspa.tiene_receta == 1">\n                              <ion-col col-10 class="centrado">\n                                  <p>receta para esta cita:</p>\n                              </ion-col>\n                              <ion-col col-2>\n                                <button ion-button\n                                clear\n                                class="iconoDerecha">\n                                    <ion-icon name="attach"\n                                      (click)="goToRecipe(citaspa)">\n                                    </ion-icon>\n                                  </button>\n                              </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <ion-col col-12 class="gris">\n                            <ion-row>\n                                <ion-col class="diaCita">\n                                    <p class="day">{{ citaspa.fecha | date:\'EEEE d , MMMM \' : \'es\' }} </p>\n                                </ion-col>\n                                <ion-col class="hourCita">\n                                    <p class="hour">{{ citaspa.hora | date: \'HH:mm\' }}</p>\n                                </ion-col>\n                            </ion-row>\n                        </ion-col>\n                    </ion-row>\n                </ion-item>\n            </ion-card>\n        </ion-list>\n        <div *ngIf="!citaspa">\n          <div class="imagenSinCitas">\n            <img src="assets/imgs/sinCitas.png" alt="">\n          </div>\n          <p class="textoCitasNulo">No tienes citas pendientes</p>\n        </div >\n    </div>\n      <div *ngSwitchCase="\'miscitas\'">\n        <ion-list *ngFor=\'let task of tasks\'>\n        <ion-card (click)="goToDetailsTask(task)" class="bordeDerecho" *ngIf="task ">\n            <ion-item>\n                <ion-row>\n                    <ion-col col-4>\n                        <ion-avatar item-start>\n                            <img src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{task.professional.id}}.png">\n                        </ion-avatar>\n                    </ion-col>\n                    <ion-col col-8>\n                        <ion-col col-12 class="nombrePrincipalBox">\n                            <p >Cita para: {{task.patient.name}}</p>\n                      </ion-col>\n                        <h3 class="tituloCitas">{{task.professional.fullName | slice:0:25 | lowercase}}</h3>\n                        <p class="especialidad">{{ task.service.basicService.description | lowercase }}</p>\n                        <p class="sede">{{ task.service.center.name | lowercase }}</p>\n                    </ion-col>\n                    <ion-col col-12 class="gris">\n                        <ion-row>\n                            <ion-col class="diaCita">\n                                <p class="day">{{ task.appointmentDateTime | date:\'EEEE d , MMMM \' : \'es\' }} </p>\n                            </ion-col>\n                            <ion-col class="hourCita">\n                                <p class="hour">{{ task.appointmentDateTime | date: \'HH:mm\' }}</p>\n                            </ion-col>\n                        </ion-row>\n\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n        </ion-card>\n    </ion-list>\n    <div *ngIf="mostrar == 0 && sinParents == 0" class="contenedorSinCitas">\n      <div class="imagenSinCitas">\n        <img src="assets/imgs/sinCitas.png" alt="">\n      </div>\n    <p class="textoCitasNulo">No tienes citas pendientes</p>\n    </div  >\n\n    <ion-list *ngFor=\'let taskpa of tasksParents\'>\n        <ion-card (click)="gotoDetails(taskpa)" class="bordeDerecho" *ngIf="taskpa.appointments[0]">\n            <ion-item>\n                <ion-row>\n                    <ion-col col-4>\n                        <ion-avatar item-start>\n                            <img src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{taskpa.appointments[0].professional.id}}.png">\n                        </ion-avatar>\n                    </ion-col>\n                    <ion-col col-8>\n                        <ion-row>\n                          <ion-col col-12\n                            class="nombreFamiliarBox">\n                            <p class="nombreFamiliar">Cita para: {{taskpa.appointments[0].patient.name}}</p>\n                          </ion-col>\n                          <ion-col col-12>\n                            <h3 class="tituloCitas">Dr. {{taskpa.appointments[0].professional.fullName | slice:0:25 | lowercase}}</h3>\n                            <p class="especialidad">{{ taskpa.appointments[0].service.basicService.description | lowercase }}</p>\n                            <p class="sede">{{ taskpa.appointments[0].service.center.name | lowercase }}</p>\n                          </ion-col>\n                        </ion-row>\n                    </ion-col>\n                    <ion-col col-12 class="gris">\n                        <ion-row>\n                            <ion-col class="diaCita">\n                                <p class="day">{{ taskpa.appointments[0].appointmentDateTime | date:\'EEEE d , MMMM \' : \'es\' }} </p>\n                            </ion-col>\n                            <ion-col class="hourCita">\n                                <p class="hour">{{ taskpa.appointments[0].appointmentDateTime | date: \'HH:mm\' }}</p>\n                            </ion-col>\n                        </ion-row>\n\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n        </ion-card>\n    </ion-list>\n      </div>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/my-dates/my-dates.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_appoinment_appoinment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_dependents_dependents__["a" /* DependentsProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_recipes_recipes__["a" /* RecipesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_dependents_dependents__["a" /* DependentsProvider */]])
    ], MyDatesPage);
    return MyDatesPage;
}());

//# sourceMappingURL=my-dates.js.map

/***/ }),

/***/ 185:
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
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 228:
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
webpackEmptyAsyncContext.id = 228;

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancierProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(43);
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
        this.SERVER = "http://dappapache02.eastus.cloudapp.azure.com:4200";
        this.apiUrl = this.SERVER + "/api/v2/ebooking/";
    }
    FinancierProvider.prototype.getFinanciers = function () {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        return this.http.get(this.apiUrl + 'payers', { headers: headers })
            .map(function (data) {
            return data;
        }).catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(e);
        });
    };
    FinancierProvider.prototype.getFinancier = function (financier_id) {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        return this.http.get(this.apiUrl + ("" + financier_id), { headers: headers })
            .map(function (data) {
            return data;
        }).catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(e);
        });
    };
    FinancierProvider.prototype.getPrice = function (center_id, basic_service_id, doctor_id, proposed_date) {
        // let params = { proposed_date: proposed_date, center_id: center_id, basic_service_id: basic_service_id, doctor_id: doctor_id }
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        return this.http.get(this.apiUrl + ("appointments/price/" + center_id + "/" + basic_service_id + "/" + doctor_id + "/" + proposed_date), { headers: headers })
            .map(function (data) {
            return data;
        }).catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(e);
        });
    };
    FinancierProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FinancierProvider);
    return FinancierProvider;
}());

//# sourceMappingURL=financier.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_payu_test_payu_test__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appoinment_appoinment__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PayuPage = (function () {
    function PayuPage(navCtrl, navParams, fb, payu, appointmanetProvider, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.payu = payu;
        this.appointmanetProvider = appointmanetProvider;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.subida = navParams.get('subida');
        this.doctor = navParams.get('doctor');
        console.log('data que viene de financer a payu:', this.subida, this.doctor);
        this.myForm = this.fb.group({
            numero: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(16),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(16)]],
            month: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(6)]],
            mail: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]],
            cvv: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(3)]]
        });
    }
    PayuPage.prototype.saveData = function (myForm) {
        var _this = this;
        var datos = myForm.value;
        var numero = datos.numero;
        var cvv = datos.cvv;
        console.log('los datos:', datos);
        // this.payu.command(numero, cvv).subscribe(data=>{
        //   this.datosTarje = data;
        //   if(this.datosTarje.code == "SUCCESS"){
        //     this.appointmanetProvider.createAppointment(this.subida).subscribe((data: any)=>{
        //       this.viewCtrl.dismiss();
        //         this.navCtrl.setRoot(HomePage);
        //     })
        //   }
        // });
        this.appointmanetProvider.createAppointment(this.subida).subscribe(function (data) {
            _this.payu.command(numero, cvv).subscribe(function (data) {
                _this.datosTarje = data;
                if (_this.datosTarje.code === "SUCCESS") {
                    var satisfactoria = _this.alertCtrl.create({
                        title: "Creación de cita",
                        subTitle: "se creo su cita satisfactoriamente",
                        buttons: [
                            {
                                text: "OK",
                                handler: function () {
                                    _this.viewCtrl.dismiss();
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                                }
                            }
                        ]
                    });
                    satisfactoria.present();
                }
            });
        });
    };
    PayuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PayuPage');
    };
    PayuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-payu',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/payu/payu.html"*/'<ion-content padding>\n    <form [formGroup]="myForm" (ngSubmit)="saveData(myForm)" novalidate>\n      <ion-row>\n        <!-- cabecera del modal -->\n        <ion-col col-12\n                  class="backCabecera">\n          <ion-row>\n            <!-- espacio para las imagenes -->\n            <ion-col col-4>\n             <div class="imagenCheckout">\n\n             </div>\n            </ion-col>\n            <!-- div para el texto de titulo y subtitulo -->\n            <ion-col col-8>\n              <h5 class="tituloDeCita">Titulo de la cita</h5>\n              <p class="resumenCita">algún resumen</p>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <!-- cuerpo del modal -->\n        <ion-col col-12\n                 class="backCuerpoModal">\n          <ion-row>\n            <ion-col \n                    col-12\n                    class="sinpading top10">\n              <ion-item>\n                  <ion-icon name="card" item-left></ion-icon>\n                <ion-input type="tel" \n                            placeholder="4111-1111-1111-1111"\n                            formControlName="numero"\n                            required\n                            minlength="16"\n                            maxlength="16"\n                            name="numero"\n                            >\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col\n                    col-6\n                    class="sinpading">\n              <ion-item>\n                  <ion-icon name="calendar" item-left></ion-icon>\n                <ion-input type="text" \n                            date="yyyy-mm"\n                            placeholder="YYYY/MM"\n                            formControlName="month"\n                            required \n                            maxlength="6">        \n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col \n                    col-6\n                    class="sinpading">\n              <ion-item>\n                  <ion-icon name="unlock" item-left></ion-icon>\n                <ion-input type="tel" \n                            placeholder="CVV"\n                            formControlName="cvv"\n                            minLength="3" \n                            maxlength="3"\n                            name="cvv"\n                            required>\n                </ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col \n                    col-12\n                    class="sinpading top10">\n              <ion-item>\n                  <ion-icon name="at" item-left></ion-icon>\n                <ion-input type="email" \n                            formControlName = "mail"\n                            placeholder="Correo electrónico"\n                            name="mail">\n                </ion-input>\n                </ion-item>\n            </ion-col>\n            \n          </ion-row>\n          <div padding>\n              <button ion-button color="secondary" block type="submit" [disabled]="!myForm.valid" >Pagar S/ 45.50</button>\n            </div>\n        </ion-col>\n      </ion-row>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/payu/payu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_0__providers_payu_test_payu_test__["a" /* PayuTestProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_appoinment_appoinment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]])
    ], PayuPage);
    return PayuPage;
}());

//# sourceMappingURL=payu.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayuTestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PayuTestProvider = (function () {
    function PayuTestProvider(http) {
        this.http = http;
        this.apiUrl = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/ebooking/payu-test";
        console.log('Hello PayuTestProvider Provider');
    }
    PayuTestProvider.prototype.ping = function (datos) {
        console.log('ping:');
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        var params = { "command": "PING" };
        return this.http.post(this.apiUrl, params, { headers: headers })
            .map(function (data) {
            console.log(data);
            return data;
        });
    };
    PayuTestProvider.prototype.command = function (numero, cvv) {
        console.log('command:', numero, cvv);
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        var params = {
            "command": "SUBMIT_TRANSACTION",
            "transaction": {
                "order": {
                    "accountId": "512323",
                    "referenceCode": "payment_test_00000001",
                    "description": "payment test",
                    "language": "es",
                    "notifyUrl": "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/ebooking/hello",
                    "additionalValues": {
                        "TX_VALUE": {
                            "value": 100,
                            "currency": "PEN"
                        }
                    },
                    "buyer": {
                        "merchantBuyerId": "1",
                        "fullName": "First name and second buyer  name",
                        "emailAddress": "buyer_test@test.com",
                        "contactPhone": "7563126",
                        "dniNumber": "5415668464654",
                        "shippingAddress": {
                            "street1": "Avenida de la poesia",
                            "street2": "106",
                            "city": "Cuzco",
                            "state": "CU",
                            "country": "PE",
                            "postalCode": "000000",
                            "phone": "7563126"
                        }
                    }
                },
                "payer": {
                    "merchantPayerId": "1",
                    "fullName": "First name and second payer name",
                    "emailAddress": "payer_test@test.com",
                    "contactPhone": "7563126",
                    "dniNumber": "5415668464654",
                    "billingAddress": {
                        "street1": "av abancay",
                        "street2": "cra 4",
                        "city": "Iquitos",
                        "state": "LO",
                        "country": "PE",
                        "postalCode": "64000",
                        "phone": "7563126"
                    }
                },
                "creditCard": {
                    "number": numero,
                    "securityCode": cvv,
                    "expirationDate": "2020/09",
                    "name": "REJECTED"
                },
                "type": "AUTHORIZATION_AND_CAPTURE",
                "paymentMethod": "VISA",
                "paymentCountry": "PE"
            }
        };
        return this.http.post(this.apiUrl, params, { headers: headers })
            .map(function (data) {
            console.log(data);
            return data;
        });
    };
    PayuTestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PayuTestProvider);
    return PayuTestProvider;
}());

//# sourceMappingURL=payu-test.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(52);
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
        this.SERVER = "http://dappapache02.eastus.cloudapp.azure.com:4200";
        this.apiUrl = this.SERVER + "/graphql";
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
            // console.log('resp:', resp.data.centers);
            if (!resp.data.centers || resp.data.centers.length == 0) {
                return [];
            }
            // console.log('resp2:', resp)
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
        var params = { query: "query {centers{service(id:" + serviceId + "){id ,professional(id:" + id + "){id, fullName, cmp, image, service{id, description }, availables(fromDateString:\"" + fromDate + "\",toDateString:\"" + toDate + "\"){date,hours{ hour, listjson, isAvailable}}}}}}" };
        // console.log('params provider:', params);
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
        var params = { query: "query {centers{service(id:" + serviceId + "){id ,professionals{id, fullName, cmp, image, service{id, description }, availables(fromDateString:\"" + fromDate + "\",toDateString:\"" + toDate + "\"){date,hours{ hour, listjson, isAvailable}}}}}}" };
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

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailRecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailRecipePage = (function () {
    function DetailRecipePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipe = this.navParams.get('recipe');
        this.recetas = this.recipe.prescripciones;
        this.date = this.recipe.prescripciones[0];
        console.log('el resultado:', this.recipe);
        console.log('los datos:', this.date);
    }
    DetailRecipePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailRecipePage');
    };
    DetailRecipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-recipe',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/detail-recipe/detail-recipe.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>detalle receta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <div class="contenedorDatos">\n    <ion-grid>\n      <ion-row>\n          <ion-col col-4>\n            <div class="iconoReceta">\n              <p class="dia">{{date.inicio_prescripcion | date:\'dd\'}}</p>\n              <p class="mes">{{date.inicio_prescripcion | date:\'MMMM\'}}</p>\n            </div>\n          </ion-col>\n          <ion-col col-8>\n            <p class="especialidad"> Especialidad:</p>\n            <p class="resultado">{{date.servicio}}</p>\n            <p class="especialidad">Doctor:</p>\n            <p class="resultado">{{date.apellidop_personal}} {{date.apellidom_personal}}</p>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n  </div>\n\n    <div *ngIf="recetas">\n        <div *ngFor="let recipe of recetas">\n          <ion-card>\n            <ion-card-header text-wrap>\n                <ion-row>\n                    <ion-col col-3\n                          class="containerIconAndDays">\n                        <img src="assets/imgs/recipes/{{recipe.formasfar_pk}}.png" alt="">\n                        <p class="cantidadDeDias">{{recipe.dias_duracion_prescripcion}}</p>\n                        <p class="dias">días</p>\n                    </ion-col>\n                    <ion-col col-9\n                             class="containerDatosPastilla">\n                        <h3 class="nombrePastilla"\n                           *ngIf="recipe.nombre_generico">\n                           {{recipe.nombre_generico}}\n                    </h3>\n                        <p class="textoAlternativo"\n                        *ngIf="recipe.marca_comercial">\n                        o puedes encontrarlo como:\n                        </p>\n                        <p class="nombrePastilla"\n                          *ngIf="recipe.marca_comercial">\n                          {{recipe.marca_comercial}}\n                        </p>\n                          <p class="inicio">Inicio: {{recipe.inicio_prescripcion | date: "dd MMMM yyyy"}}</p>\n                    </ion-col>\n                  </ion-row>\n            </ion-card-header>\n            <ion-card-content>\n                <div *ngIf="recetas && recipe.cada_x_horas == 8"\n                class="down">\n            <h4 class="tituloDeLasTomas"> tomas de 3 veces por día</h4>\n            <ion-row padding>\n              <ion-col class="cuadrados">\n                <p> 6-9 am</p>\n                <p class="cantidad">{{recipe.cantidad_dosis}}</p>\n                </ion-col>\n              <ion-col class="cuadrados">\n                <p> 2-4 pm</p>\n                <p class="cantidad"> {{recipe.cantidad_dosis}} </p>\n              </ion-col>\n              <ion-col class="cuadrados">\n                <p>10-12 m</p>\n                <p class="cantidad"> {{recipe.cantidad_dosis}} </p>\n              </ion-col>\n            </ion-row>\n        </div>\n\n        <div *ngIf="recetas && recipe.cada_x_horas == 12"\n              class="down">\n          <p class="tituloDeLasTomas"> tomas de 2 veces por día</p>\n          <ion-row padding>\n            <ion-col class="cuadrados">\n              <p> 6-9 am</p>\n              <p class="cantidad">{{recipe.cantidad_dosis}}</p>\n            </ion-col>\n            <ion-col class="cuadrados">\n              <p>6-9 pm</p>\n              <p class="cantidad"> {{recipe.cantidad_dosis}} </p>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <div *ngIf="recetas && recipe.cada_x_horas == 6"\n        class="down">\n            <p class="tituloDeLasTomas"> tomas de 4 veces por día</p>\n            <ion-row padding>\n              <ion-col class="cuadrados">\n                <p> 6-8 am</p>\n                <p class="cantidad">{{recipe.cantidad_dosis}}</p>\n              </ion-col>\n              <ion-col class="cuadrados">\n                  <p> 12-2 pm</p>\n                  <p class="cantidad">{{recipe.cantidad_dosis}}</p>\n                </ion-col>\n                <ion-col class="cuadrados">\n                    <p> 6-8 pm</p>\n                    <p class="cantidad">{{recipe.cantidad_dosis}}</p>\n                  </ion-col>\n              <ion-col class="cuadrados">\n                <p>12-2 m</p>\n                <p class="cantidad"> {{recipe.cantidad_dosis}} </p>\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <div *ngIf="recetas && recipe.cada_x_horas == 24"\n          class="down">\n              <p class="tituloDeLasTomas"> toma de 1 vez por día</p>\n              <ion-row padding>\n                <ion-col class="cuadrados">\n                  <p> 6-8 am</p>\n                  <p class="cantidad">{{recipe.cantidad_dosis}}</p>\n                </ion-col>\n\n              </ion-row>\n            </div>\n            </ion-card-content>\n          </ion-card>\n\n\n\n\n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/detail-recipe/detail-recipe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DetailRecipePage);
    return DetailRecipePage;
}());

//# sourceMappingURL=detail-recipe.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyparentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dependents_dependents__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_crudparent_crudparent__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyparentsPage = (function () {
    function MyparentsPage(navCtrl, navParams, fb, dependentsPvr, crudPvr, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.dependentsPvr = dependentsPvr;
        this.crudPvr = crudPvr;
        this.alertCtrl = alertCtrl;
        this.openForm = false;
        this.actual = __WEBPACK_IMPORTED_MODULE_5_moment__().format('YYYY-MM-DD');
        this.dependentsPvr.getDependens().subscribe(function (data) {
            _this.dependens = data;
            console.log('los dependientes:', _this.dependens);
        });
        this.formFamily = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            paternal_surname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            maternal_surname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            gender: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            date_of_birth: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            type_document: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            dni: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].maxLength(8)]],
            user_id: [localStorage.getItem('idTokenUser')],
            kindred: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]]
            // email           : [ String(Math.floor(Math.random() * 9e15)) + '@ipsum.com' ],
            // password        : [ String(Math.floor(Math.random() * 9e15)) ]
        });
    }
    MyparentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyparentsPage');
    };
    MyparentsPage.prototype.showForm = function () {
        this.openForm = !this.openForm;
        // this.openForm = true;
    };
    MyparentsPage.prototype.saveData = function () {
        var _this = this;
        var datos = this.formFamily.value;
        var data = {
            relation: {
                id: 4,
                name: datos.kindred
            },
            name: datos.name,
            surname1: datos.paternal_surname,
            surname2: datos.maternal_surname,
            birthdate: datos.date_of_birth,
            gender: {
                id: 2,
                name: datos.gender
            },
            documentType: {
                id: 1,
                name: datos.type_document
            },
            documentNumber: datos.dni
        };
        this.crudPvr.createParent(data).subscribe(function (data) {
            _this.createParents = data;
            _this.dependentsPvr.getDependens().subscribe(function (dat) {
                _this.parents = dat;
                _this.dependens = _this.parents;
                console.log(_this.parents);
                _this.openForm = false;
            });
        });
    };
    MyparentsPage.prototype.deleteParent = function (depe) {
        var _this = this;
        console.log('lo que me trae depe', depe);
        var id = depe._id;
        var eliminado = depe.name;
        var alert = this.alertCtrl.create({
            title: "eliminar a " + eliminado,
            message: 'si desea continuar seleccione ok, sino es el caso cancele',
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.dependentsPvr.deleteDepend(id).subscribe(function (data) {
                            _this.dependentsPvr.getDependens().subscribe(function (dato) {
                                _this._dependens = dato;
                                _this.dependens = _this._dependens;
                                console.log('lo que es ahora parientes', _this.dependens);
                            });
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'Cancel',
                    handler: function () {
                        console.log('se le hace dismiss al alert');
                        // alert.dismiss();
                    }
                }
            ]
        });
        alert.present();
    };
    MyparentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myparents',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/myparents/myparents.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Mis Parientes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div >\n    <ion-card *ngFor="let depe of dependens">\n      <ion-row>\n        <ion-col col-4>\n          <ion-avatar>\n            <img src="../assets/imgs/avatars/nino.png" alt="">\n          </ion-avatar>\n        </ion-col>\n        <ion-col col-6>\n            <h3 class="nombrePariente">{{depe.name}}</h3>\n            <p  *ngIf="depe.relation"\n                class="parentesco">{{depe.relation.name}}</p>\n            <p class="edad">7 años</p>\n        </ion-col>\n        <ion-col col-2>\n          <button ion-button\n                  clear\n                  (click)="deleteParent(depe)">\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <div class="center">\n    <button ion-button\n            color="secondary"\n            (click)="showForm()">\n     Agregar familiar\n    </button>\n  </div>\n  <div *ngIf="openForm == true"\n        class="down20">\n      <div class="cienPorCiento">\n        <h3 class="tituloFamiliar">Creación de cuenta Adicional</h3>\n      </div>\n\n      <form [formGroup]="formFamily" (ngSubmit)="saveData(formFamily.value)" novalidate>\n          <ion-list>\n\n\n              <ion-item>\n                <ion-label stacked>Nombres:</ion-label>\n                <ion-input formControlName="name" type="text" maxlength="40">\n                </ion-input>\n              </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Apellido Paterno:</ion-label>\n          <ion-input formControlName="paternal_surname" type="text" maxlength="40">\n          </ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Apellido Materno:</ion-label>\n          <ion-input formControlName="maternal_surname" type="text" maxlength="40">\n          </ion-input>\n        </ion-item>\n\n        <ion-col col-6>\n          <ion-item>\n            <ion-label stacked>Documento:</ion-label>\n            <ion-select [(ngModel)]="change" formControlName="type_document" name="type_document" floating>\n              <ion-option value="D.N.I">DNI</ion-option>\n              <ion-option value="carne_extranjeria">Carne de Extranjeria</ion-option>\n              <ion-option value="pasaporte">Pasaporte</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-item>\n            <ion-label stacked> Nº Documento:</ion-label>\n            <ion-input *ngIf="change === \'D.N.I\'" type="number" formControlName="dni" name="dni" minlength="8" maxlength="8" stacked></ion-input>\n            <ion-input *ngIf="change === \'carne_extranjeria\'" type="tel" formControlName="dni" name="dni" minlength="12" maxlength="12"\n            stacked></ion-input>\n            <ion-input *ngIf="change === \'pasaporte\'" type="tel" formControlName="dni" name="dni" minlength="12" maxlength="12" stacked></ion-input>\n            <!-- <p color="danger" ion-text *ngIf="registerForm.get(\'dni\').hasError(\'required\')">DNI requerido</p> -->\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-6>\n            <ion-item>\n              <ion-label stacked>Sexo:</ion-label>\n              <ion-select formControlName="gender" name="gender">\n                <ion-option value="HOMBRE">Hombre</ion-option>\n                <ion-option value="MUJER">Mujer</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n\n          <ion-col col-12>\n              <ion-item>\n                <ion-label stacked>Nacimiento:</ion-label>\n                <ion-datetime displayFormat="DD/MM/YYYY"\n                                      formControlName="date_of_birth"\n                                      max="{{actual}}"></ion-datetime>\n              </ion-item>\n            </ion-col>\n\n\n        <ion-col col-12>\n          <ion-item>\n            <ion-label stacked>Parentesco:</ion-label>\n            <ion-select formControlName="kindred" name="kindred" floating>\n              <!-- <ion-option value="father">Padre</ion-option>\n              <ion-option value="mother">Madre</ion-option> -->\n              <ion-option value="hijo/a">hijo/a</ion-option>\n              <!-- <ion-option value="daughter">Hija</ion-option>\n              <ion-option value="uncle">Tio</ion-option>\n              <ion-option value="aunt">Tia</ion-option> -->\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n            </ion-list>\n\n            <button ion-button type="submit" [disabled]="!formFamily.valid" block color="secondary" class="guardaryContinuar">Guardar y continuar</button>\n          </form>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/myparents/myparents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_dependents_dependents__["a" /* DependentsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_crudparent_crudparent__["a" /* CrudparentProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MyparentsPage);
    return MyparentsPage;
}());

//# sourceMappingURL=myparents.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, form, alertCtrl, userPvr, camera, transfer, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.form = form;
        this.alertCtrl = alertCtrl;
        this.userPvr = userPvr;
        this.camera = camera;
        this.transfer = transfer;
        this.events = events;
        this.fotoId = localStorage.getItem('image');
        this.url = "http://dappapache02.eastus.cloudapp.azure.com:4200";
        this.password_type = 'text';
        this.passwordold_type = 'text';
        this.timemark = new Date().getTime();
        this.formCode = this.form.group({
            oldPassword: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]
            ],
            passwordnew: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern('(?=.*[A-Za-z])(?=.*[0-9@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}')]
            ],
            passwordRepeat: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern("(?=.*[A-Za-z])(?=.*[0-9@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}")]
            ]
        });
        console.log('el valor del formulario:', this.formCode);
        // carga de la foto de perfil
        this.foto = this.url + ("" + this.fotoId);
        // console.log(this.foto);
        // carga de los datos del usuario, aqui se le manda el id del usuario para obtener los datos con usrPvr-> getDatosPaciente
        var id = localStorage.getItem('idTokenUser');
        this.userPvr.getDatosPaciente(id).subscribe(function (data) {
            _this.datosPaciente = data;
            console.log('this.datosPaciente:', _this.datosPaciente);
        });
        this.correoElectronico = localStorage.getItem('emailUser');
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.validacion = function () {
        var valid = this.formCode.value;
        if (valid.passwordnew == valid.passwordRepeat) {
            return true;
        }
        else {
            return false;
        }
    };
    ProfilePage.prototype.takePicture = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Tu foto de Perfil',
            message: 'puedes cambiar la imagen para tu perfil',
            buttons: [
                {
                    text: 'tomar foto',
                    handler: function (data) {
                        _this.getPicture();
                    }
                },
                {
                    text: 'cargar Imagen',
                    handler: function (data) {
                        _this.getPictureOfDevice();
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.getPicture = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            mediaType: this.camera.MediaType.PICTURE,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 800,
            targetHeight: 600,
            quality: 100,
            allowEdit: true,
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            _this.image = imageData;
            _this.events.publish('change:foto');
            // this.image = this.image;
            console.log('this.image:', _this.image);
            var fileTransfer = _this.transfer.create();
            var authorization = localStorage.getItem('authorization');
            // let headers = new HttpHeaders({"Authorization": authorization});
            var photo = _this.image;
            var options = {
                fileKey: 'photo',
                fileName: 'photo',
                chunkedMode: false,
                mimeType: "image/jpeg",
                headers: { authorization: authorization }
            };
            fileTransfer.upload(photo, 'http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/upload-photo', options).then(function (data) {
                _this.foto = "http://dappapache02.eastus.cloudapp.azure.com:4200/" + _this.fotoId;
            });
            _this.foto = photo;
            console.log('this.foto:', _this.foto);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    ProfilePage.prototype.getPictureOfDevice = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: this.camera.MediaType.PICTURE,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 800,
            targetHeight: 600,
            quality: 100,
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            _this.image = imageData;
            // this.image = this.image;
            console.log('this.image:', _this.image);
            var fileTransfer = _this.transfer.create();
            var authorization = localStorage.getItem('authorization');
            // let headers = new HttpHeaders({"Authorization": authorization});
            var photo = _this.image;
            _this.events.publish('change:foto');
            var options = {
                fileKey: 'photo',
                fileName: 'photo',
                chunkedMode: false,
                mimeType: "image/jpeg",
                headers: { authorization: authorization }
            };
            fileTransfer.upload(photo, 'http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/upload-photo', options).then(function (data) {
                _this.foto = "http://dappapache02.eastus.cloudapp.azure.com:4200/" + _this.fotoId;
            });
            _this.foto = photo;
            console.log('this.foto:', _this.foto);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    ProfilePage.prototype.changePassword = function () {
        var _this = this;
        var password = this.formCode.value.oldPassword;
        var passwordNew = this.formCode.value.password;
        this.userPvr.changePassword(password, passwordNew).subscribe(function (data) {
            if (data.result == 'ok') {
                var alert_1 = _this.alertCtrl.create({
                    title: "Cambio de Contraseña",
                    subTitle: "" + data.message,
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                localStorage.removeItem('idTokenUser');
                                localStorage.removeItem('emailUser');
                                localStorage.removeItem('passUser');
                                localStorage.removeItem('authorization');
                                localStorage.removeItem('role');
                                localStorage.removeItem('patientName');
                                localStorage.removeItem('image');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
                            }
                        }]
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: "" + data.error.message,
                    subTitle: "" + data.error.help,
                    buttons: ['Volver a intentar']
                });
                alert_2.present();
            }
        });
    };
    ProfilePage.prototype.changeType = function () {
        this.password_type = this.password_type === 'password' ? 'text' : 'password';
    };
    ProfilePage.prototype.changeOldType = function () {
        this.passwordold_type = this.passwordold_type === 'password' ? 'text' : 'password';
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/user/profile/profile.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Mis Datos</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form  [formGroup]="formCode" (ngSubmit)="changePassword(formCode.value)" novalidate>\n    <ion-row>\n        <ion-col col-6>\n            <div class="cargaImagen"\n                  (click)="takePicture()">\n                  <img src="{{foto}}?{{timemark}}" alt="">\n            </div>\n        </ion-col>\n\n          <ion-col col-6 *ngIf="datosPaciente">\n            <ion-col col-12>\n              <ion-label stacked class="labelDatos">Nombres</ion-label>\n              <p class="dato">{{datosPaciente.nombre}}</p>\n            </ion-col>\n            <ion-col col-12>\n              <ion-label stacked class="labelDatos">Apellidos</ion-label>\n              <p class="dato">{{datosPaciente.apellido1}} {{datosPaciente.apellido2}}</p>\n            </ion-col>\n            <ion-col col-12>\n                <ion-label stacked class="labelDatos">Sexo</ion-label>\n                <p class="dato">{{datosPaciente.sexo}}</p>\n            </ion-col>\n            <ion-col col-12>\n                <ion-label stacked class="labelDatos">Telefono</ion-label>\n                <p class="dato">{{datosPaciente.telefono1}}</p>\n            </ion-col>\n          </ion-col>\n\n          <ion-col col-12 *ngIf="datosPaciente">\n            <ion-row>\n              <ion-col col-6>\n                  <ion-label stacked class="labelDatos">Fecha de nacimiento</ion-label>\n                  <p class="dato">{{datosPaciente.fecha_nac | date}}</p>\n              </ion-col>\n\n              <ion-col col-6 *ngIf="correoElectronico">\n                  <ion-label stacked class="labelDatos">Correo Electronico</ion-label>\n                  <p class="dato">{{correoElectronico}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n\n\n          <div class="tituloCambioContraseña">\n            <h4 >Cambio de Contraseña</h4>\n          </div>\n          <ion-col col-12>\n              <ion-item>\n                  <ion-label stacked>Contraseña Actual</ion-label>\n                  <ion-input type="text"\n                             value=""\n                             formControlName="oldPassword"\n                             ngModel>Contraseña actual</ion-input>\n              </ion-item>\n              <div *ngIf="formCode.get(\'oldPassword\').errors && (formCode.get(\'oldPassword\').touched || formCode.get(\'oldPassword\').dirty)">\n                  <p class="error" *ngIf="formCode.get(\'oldPassword\').hasError(\'required\')">campo requerido</p>\n              </div>\n          </ion-col>\n\n          <ion-col col-12>\n              <ion-item>\n                  <ion-label stacked>Contraseña</ion-label>\n                  <ion-input value=""\n                             formControlName="passwordnew"\n                             ngModel\n                             [type]="password_type">Nueva contraseña\n                  </ion-input>\n                  <ion-icon name="eye" item-end (click)="changeType()"></ion-icon>\n              </ion-item>\n              <div *ngIf="formCode.get(\'passwordnew\').errors && (formCode.get(\'passwordnew\').dirty || formCode.get(\'passwordnew\').touched)">\n                  <p class="error" *ngIf="formCode.get(\'passwordnew\').hasError(\'required\')">campo requerido</p>\n                  <p class="error" *ngIf="formCode.get(\'passwordnew\').hasError(\'pattern\')">al menos un numero o un caracter especial</p>\n                  <p class="error" *ngIf="formCode.get(\'passwordnew\').hasError(\'minlength\')">minimo 8 caracteres</p>\n              </div>\n          </ion-col>\n\n          <ion-col col-12>\n              <ion-item>\n                  <ion-label stacked>Confirmar Contraseña</ion-label>\n                  <ion-input  value=""\n                              formControlName="passwordRepeat"\n                              ngModel\n                              [type]="passwordold_type">\n                              Confirmar nueva contraseña\n                  </ion-input>\n                  <ion-icon name="eye" item-end (click)="changeOldType()"></ion-icon>\n              </ion-item>\n              <div *ngIf="formCode.get(\'passwordRepeat\').errors && (formCode.get(\'passwordRepeat\').dirty || formCode.get(\'passwordRepeat\').touched)">\n                  <p class="error" *ngIf="formCode.get(\'passwordRepeat\').hasError(\'required\')">campo requerido</p>\n                  <p class="error" *ngIf="formCode.get(\'passwordRepeat\').hasError(\'pattern\')">al menos un numero o un caracter especial</p>\n                  <p class="error" *ngIf="formCode.get(\'passwordRepeat\').hasError(\'minlength\')">minimo 8 caracteres</p>\n              </div>\n          </ion-col>\n\n    </ion-row>\n\n    <button ion-button color="primary"\n            block\n            class="alto50"\n            type="submit"\n            [disabled]="!formCode.valid || !validacion()">\n            cambiar contraseña\n    </button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/user/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IrmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], IrmPage);
    return IrmPage;
}());

//# sourceMappingURL=irm.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipePage = (function () {
    function RecipePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipes = navParams.get('recipe');
        this.recetas = this.recipes[0].prescripciones;
        console.log('recipe', this.recetas);
    }
    RecipePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecipePage');
    };
    RecipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recipe',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/recipe/recipe.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Detalle de receta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n    <div *ngIf="recetas">\n        <div *ngFor="let recipe of recetas">\n          <ion-card>\n            <ion-card-header>\n                <ion-row>\n                    <ion-col col-3\n                          class="containerIconAndDays">\n                        <img src="assets/imgs/recipes/{{recipe.formasfar_pk}}.png" alt="">\n                        <p class="cantidadDeDias">{{recipe.dias_duracion_prescripcion}}</p>\n                        <p class="dias">días</p>\n                    </ion-col>\n                    <ion-col col-9\n                             class="containerDatosPastilla">\n                        <h3 class="nombrePastilla"\n                           *ngIf="recipe.nombre_generico">\n                           {{recipe.nombre_generico}}\n                    </h3>\n                        <p class="textoAlternativo"\n                        *ngIf="recipe.marca_comercial">\n                        o puedes encontrarlo como:\n                        </p>\n                        <p class="nombrePastilla"\n                          *ngIf="recipe.marca_comercial">\n                          {{recipe.marca_comercial}}\n                        </p>\n                          <p class="inicio">Inicio: {{recipe.inicio_prescripcion | date: "dd MMMM yyyy"}}</p>\n                    </ion-col>\n                  </ion-row>\n            </ion-card-header>\n            <ion-card-content>\n                <div *ngIf="recetas && recipe.cada_x_horas == 8"\n                class="down">\n            <h4 class="tituloDeLasTomas"> tomas de 3 veces por día</h4>\n            <ion-row padding>\n              <ion-col class="cuadrados">\n                <p> 6-9 am</p>\n                <p class="cantidad">{{recipe.cantidad_dosis}}</p>\n                </ion-col>\n              <ion-col class="cuadrados">\n                <p> 2-4 pm</p>\n                <p class="cantidad"> {{recipe.cantidad_dosis}} </p>\n              </ion-col>\n              <ion-col class="cuadrados">\n                <p>10-12 m</p>\n                <p class="cantidad"> {{recipe.cantidad_dosis}} </p>\n              </ion-col>\n            </ion-row>\n        </div>\n\n        <div *ngIf="recetas && recipe.cada_x_horas == 12"\n              class="down">\n          <p class="tituloDeLasTomas"> tomas de 2 veces por día</p>\n          <ion-row padding>\n            <ion-col class="cuadrados">\n              <p> 6-9 am</p>\n              <p class="cantidad">{{recipe.cantidad_dosis}}</p>\n            </ion-col>\n            <ion-col class="cuadrados">\n              <p>6-9 pm</p>\n              <p class="cantidad"> {{recipe.cantidad_dosis}} </p>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <div *ngIf="recetas && recipe.cada_x_horas == 6"\n        class="down">\n            <p class="tituloDeLasTomas"> tomas de 4 veces por día</p>\n            <ion-row padding>\n              <ion-col class="cuadrados">\n                <p> 6-8 am</p>\n                <p class="cantidad">{{recipe.cantidad_dosis}}</p>\n              </ion-col>\n              <ion-col class="cuadrados">\n                  <p> 12-2 pm</p>\n                  <p class="cantidad">{{recipe.cantidad_dosis}}</p>\n                </ion-col>\n                <ion-col class="cuadrados">\n                    <p> 6-8 pm</p>\n                    <p class="cantidad">{{recipe.cantidad_dosis}}</p>\n                  </ion-col>\n              <ion-col class="cuadrados">\n                <p>12-2 m</p>\n                <p class="cantidad"> {{recipe.cantidad_dosis}} </p>\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <div *ngIf="recetas && recipe.cada_x_horas == 24"\n          class="down">\n              <p class="tituloDeLasTomas"> toma de 1 vez por día</p>\n              <ion-row padding>\n                <ion-col class="cuadrados">\n                  <p> 6-8 am</p>\n                  <p class="cantidad">{{recipe.cantidad_dosis}}</p>\n                </ion-col>\n\n              </ion-row>\n            </div>\n            </ion-card-content>\n          </ion-card>\n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/recipe/recipe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], RecipePage);
    return RecipePage;
}());

//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDateModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_appoinment_appoinment__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_dates__ = __webpack_require__(162);
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
        this.tasks = navParams.get('taskpa');
        this.task = navParams.get('task');
        if (this.tasks) {
            this.taskpa = this.tasks.appointments[0];
        }
        console.log('los datos del task:', this.task);
        console.log('taskpa de modalPage:', this.taskpa);
    }
    MyDateModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MyDateModalPage.prototype.desactivateTask = function (task, taskpa) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'ANULAR CITA',
            message: '¿Estas seguro que quieres eliminar esta cita?',
            buttons: [
                {
                    text: 'SI',
                    handler: function (data) {
                        if (task) {
                            _this.appointmentProvider.destroyAppointment(task).subscribe(function (data) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__my_dates__["a" /* MyDatesPage */]);
                            });
                        }
                        else {
                            _this.appointmentProvider.destroyAppointment(taskpa).subscribe(function (data) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__my_dates__["a" /* MyDatesPage */]);
                            });
                        }
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
            selector: 'page-my-date-modal',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/my-dates/my-date-modal/my-date-modal.html"*/'<ion-header>\n\n    <ion-navbar color="verde">\n        <ion-title *ngIf="taskpa" class="titleHeader">Cita familiar </ion-title>\n        <ion-title *ngIf="task" class="titleHeader">Mis citas</ion-title>\n        <!-- <ion-buttons end>\n            <button ion-button icon-only color="royal" (click)="dismiss()">\n      </button>\n        </ion-buttons> -->\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content has-header="true">\n\n\n    <ion-list>\n\n        <img *ngIf="taskpa" id="profile-image" src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{taskpa.professional.id}}.png">\n        <img *ngIf="task" id="profile-image" src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{task.professional.id}}.png">\n\n        <h3 *ngIf="taskpa" class="nombreDoctor" text-center>{{ taskpa.professional.fullName | lowercase }} </h3>\n        <h3 *ngIf="task" class="nombreDoctor" text-center>{{ task.professional.fullName | lowercase }} </h3>\n\n        <ion-item>\n            <ion-icon item-start><i class="fa fa-hospital-o" aria-hidden="true"></i></ion-icon>\n            <ion-label class="heightNoventa">Sede:</ion-label>\n            <ion-label *ngIf="taskpa" class="blue"> {{ taskpa.service.center.name | lowercase }}</ion-label>\n            <ion-label *ngIf="task" class="blue"> {{ task.service.center.name | lowercase }}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-icon item-start><i class="fa fa-heartbeat" aria-hidden="true"></i></ion-icon>\n            <ion-label class="heightNoventa">Especialidad:</ion-label>\n            <ion-label *ngIf="taskpa" class="blue"> {{ taskpa.service.basicService.description | lowercase }}</ion-label>\n            <ion-label *ngIf="task" class="blue"> {{ task.service.basicService.description | lowercase }}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-icon item-start><i class="fa fa-calendar-check-o" aria-hidden="true"></i></ion-icon>\n            <ion-label class="heightNoventa">Fecha:</ion-label>\n            <ion-label *ngIf="taskpa" class="blue"> {{ taskpa.appointmentDateTime | date:\'EEEE d , MMMM \' : \'es\' }}</ion-label>\n            <ion-label *ngIf="task" class="blue"> {{ task.appointmentDateTime | date:\'EEEE d , MMMM \' : \'es\' }}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-icon item-start><i class="fa fa-clock-o" aria-hidden="true"></i></ion-icon>\n            <ion-label class="heightNoventa">Hora:</ion-label>\n            <ion-label *ngIf="taskpa" class="blue"> {{ taskpa.appointmentDateTime | date: \'HH:mm\' }}</ion-label>\n            <ion-label *ngIf="task" class="blue"> {{ task.appointmentDateTime | date: \'HH:mm\' }}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-icon item-start><i class="fa fa-universal-access" aria-hidden="true"></i></ion-icon>\n            <ion-label class="heightNoventa">Seguro:</ion-label>\n            <ion-label *ngIf="taskpa" class="blue"> {{ taskpa.plan.description | lowercase }}</ion-label>\n            <ion-label *ngIf="task" class="blue"> {{ task.plan.description | lowercase }}</ion-label>\n        </ion-item>\n\n        <!-- <ion-item>\n            <ion-icon item-start><i class="fa fa-money" aria-hidden="true"></i></ion-icon>\n            <ion-label>Pago </ion-label>\n            <ion-label class="blue" item-end>{{task.payment_method | lowercase }}</ion-label>\n            <button item-end ion-button color="primary" (click)="editPayment(task)" *ngIf="task.payment_method == \'en local\'">\n          Editar\n        </button>\n        </ion-item> -->\n\n        <!-- <ion-item *ngIf="task.isCard">\n            <ion-icon item-start><i class="fa fa-money" aria-hidden="true"></i></ion-icon>\n            <ion-label>Pago </ion-label>\n            <ion-label class="blue" item-end>S/.{{task.amount}}.00</ion-label>\n            <ion-input value="{{task.numMasCard}}" type="text" maxlength="16" clearInput disabled="true"></ion-input>\n        </ion-item> -->\n\n        <!-- <ion-item>\n            <ion-icon item-start><i class="fa fa-usd" aria-hidden="true"></i></ion-icon>\n            <ion-label>Costo</ion-label>\n            <ion-label class="blue" item-end> S/.{{task.amount}}.00</ion-label>\n        </ion-item> -->\n\n        <ion-item>\n            <ion-row>\n                <ion-col col-6>\n                    <button *ngIf="taskpa" ion-button block color="secondary" (click)=\'desactivateTask(taskpa)\'>ANULAR CITA</button>\n                    <button *ngIf="task" ion-button block color="secondary" (click)=\'desactivateTask(task)\'>ANULAR CITA</button>\n                </ion-col>\n                <ion-col col-6>\n                    <button ion-button block (click)="dismiss()">VOLVER</button>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n    </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/my-dates/my-date-modal/my-date-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_appoinment_appoinment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */]])
    ], MyDateModalPage);
    return MyDateModalPage;
}());

//# sourceMappingURL=my-date-modal.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_recipes_recipes__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_recipe_detail_recipe__ = __webpack_require__(398);
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
    function RecipesPage(navCtrl, navParams, recipesPvr) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipesPvr = recipesPvr;
        this.recipesPvr.getAllRecipes().subscribe(function (data) {
            _this.recipes = data;
        });
    }
    RecipesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecipesPage');
    };
    RecipesPage.prototype.goToDetailRecipe = function (recipe) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_recipe_detail_recipe__["a" /* DetailRecipePage */], {
            recipe: recipe
        });
    };
    RecipesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-recipes',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/recipes/recipes.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Mis Recetas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n    <ion-card *ngFor="let recipe of recipes"\n              (click)="goToDetailRecipe(recipe)">\n        <ion-row>\n          <ion-col col-4>\n            <div class="iconoReceta">\n              <p class="dia">{{recipe.prescripciones[0].inicio_prescripcion | date:\'dd\'}}</p>\n              <p class="mes">{{recipe.prescripciones[0].inicio_prescripcion | date:\'MMMM\'}}</p>\n            </div>\n          </ion-col>\n          <ion-col col-8>\n            <p class="especialidad"> Especialidad:</p>\n            <p class="resultado">{{recipe.prescripciones[0].servicio}}</p>\n            <p class="especialidad">Doctor:</p>\n            <p class="resultado">{{recipe.prescripciones[0].apellidop_personal}} {{recipe.prescripciones[0].apellidom_personal}}</p>\n          </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/recipes/recipes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_recipes_recipes__["a" /* RecipesProvider */]])
    ], RecipesPage);
    return RecipesPage;
}());

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_register_register__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StartPage = (function () {
    function StartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartPage');
    };
    StartPage.prototype.goToLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__user_login_login__["a" /* LoginPage */]);
    };
    StartPage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__user_register_register__["a" /* RegisterPage */]);
    };
    StartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-start',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/start/start.html"*/'\n<ion-content padding>\n  <div class="contenedorLogo">\n    <img src="assets/imgs/logoAviva.png" alt="logo aviva">\n  </div>\n<ion-slides pager>\n  <ion-slide>\n      primera Imagen\n  </ion-slide>\n\n  <ion-slide>\n      Segunda Imagen\n  </ion-slide>\n\n  <ion-slide>\n      Tercera Imagen\n  </ion-slide>\n</ion-slides>\n\n<div class="contenedorBotones">\n  <button ion-button\n          block\n          color="secondary"\n          (click)="goToLogin()"\n          class="botonInicio">\n    Login\n  </button>\n  <button ion-button\n          clear\n          (click)="goToRegister()"\n          color="primary"\n          class="botonRegister">\n    Registrarme\n  </button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/start/start.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], StartPage);
    return StartPage;
}());

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_recovery_recovery__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_cabecera_cabecera__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_detail_recipe_detail_recipe__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_myparents_myparents__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_createparent_createparent__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_payu_payu__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_locales_es__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_card_card__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_charge_charge__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_user_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_user_register_register__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_user_profile_profile__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_appointment_search_search__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_appointment_financer_financer__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_appointment_pay_pay__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_optionals_devs_my_dates_my_dates__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_optionals_devs_irm_irm__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_optionals_devs_recipes_recipes__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_optionals_devs_recomendations_recomendations__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_optionals_devs_my_dates_my_date_modal_my_date_modal__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_apollo_angular_link_http__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_apollo_cache_inmemory__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_apollo_angular__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_financier_financier__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_user_user__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_appoinment_appoinment__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_authorization_public_authorization_public__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng2_search_filter__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_expandable_expandable_component__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_platform_browser_animations__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__material_module__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_appointment_master_detail_master_detail__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_hello_hello__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_datos_datos__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_payu_test_payu_test__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_recipes_recipes__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_dependents_dependents__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_crudparent_crudparent__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_code_code__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_dateparent_dateparent__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_recipe_recipe__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_recoverycode_recoverycode__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_camera__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_file__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_file_transfer__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_start_start__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














Object(__WEBPACK_IMPORTED_MODULE_13__angular_common__["i" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_12__angular_common_locales_es__["a" /* default */]);
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
            cache: new __WEBPACK_IMPORTED_MODULE_31_apollo_cache_inmemory__["a" /* InMemoryCache */]()
        });
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_charge_charge__["a" /* ChargePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_user_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_user_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_user_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_appointment_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_appointment_financer_financer__["a" /* FinancerPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_appointment_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_optionals_devs_my_dates_my_dates__["a" /* MyDatesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_optionals_devs_irm_irm__["a" /* IrmPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_optionals_devs_recipes_recipes__["a" /* RecipesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_optionals_devs_recomendations_recomendations__["a" /* RecomendationsPage */],
                __WEBPACK_IMPORTED_MODULE_39__components_expandable_expandable_component__["a" /* ExpandableComponent */],
                __WEBPACK_IMPORTED_MODULE_42__pages_appointment_master_detail_master_detail__["a" /* MasterDetailPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_optionals_devs_my_dates_my_date_modal_my_date_modal__["a" /* MyDateModalPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_datos_datos__["a" /* DatosPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_payu_payu__["a" /* PayuPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_createparent_createparent__["a" /* CreateparentPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_myparents_myparents__["a" /* MyparentsPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_code_code__["a" /* CodePage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_detail_recipe_detail_recipe__["a" /* DetailRecipePage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_recipe_recipe__["a" /* RecipePage */],
                __WEBPACK_IMPORTED_MODULE_1__components_cabecera_cabecera__["a" /* CabeceraComponent */],
                __WEBPACK_IMPORTED_MODULE_0__pages_recovery_recovery__["a" /* RecoveryPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_recoverycode_recoverycode__["a" /* RecoverycodePage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_start_start__["a" /* StartPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_40__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_38_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_32_apollo_angular__["b" /* ApolloModule */],
                __WEBPACK_IMPORTED_MODULE_30_apollo_angular_link_http__["b" /* HttpLinkModule */],
                __WEBPACK_IMPORTED_MODULE_37__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_41__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_37__angular_forms__["i" /* ReactiveFormsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_charge_charge__["a" /* ChargePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_user_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_user_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_user_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_appointment_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_appointment_financer_financer__["a" /* FinancerPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_appointment_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_optionals_devs_my_dates_my_dates__["a" /* MyDatesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_optionals_devs_irm_irm__["a" /* IrmPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_optionals_devs_recipes_recipes__["a" /* RecipesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_optionals_devs_recomendations_recomendations__["a" /* RecomendationsPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_appointment_master_detail_master_detail__["a" /* MasterDetailPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_optionals_devs_my_dates_my_date_modal_my_date_modal__["a" /* MyDateModalPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_datos_datos__["a" /* DatosPage */],
                __WEBPACK_IMPORTED_MODULE_39__components_expandable_expandable_component__["a" /* ExpandableComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_payu_payu__["a" /* PayuPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_createparent_createparent__["a" /* CreateparentPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_myparents_myparents__["a" /* MyparentsPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_code_code__["a" /* CodePage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_detail_recipe_detail_recipe__["a" /* DetailRecipePage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_recipe_recipe__["a" /* RecipePage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_recovery_recovery__["a" /* RecoveryPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_recoverycode_recoverycode__["a" /* RecoverycodePage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_start_start__["a" /* StartPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["H" /* LOCALE_ID */], useValue: "es" },
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_33__providers_financier_financier__["a" /* FinancierProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_appoinment_appoinment__["a" /* AppointmentProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_hello_hello__["a" /* HelloProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_authorization_public_authorization_public__["a" /* AuthorizationPublicProvider */],
                __WEBPACK_IMPORTED_MODULE_45__providers_payu_test_payu_test__["a" /* PayuTestProvider */],
                __WEBPACK_IMPORTED_MODULE_46__providers_recipes_recipes__["a" /* RecipesProvider */],
                __WEBPACK_IMPORTED_MODULE_47__providers_dependents_dependents__["a" /* DependentsProvider */],
                __WEBPACK_IMPORTED_MODULE_48__providers_crudparent_crudparent__["a" /* CrudparentProvider */],
                __WEBPACK_IMPORTED_MODULE_50__providers_dateparent_dateparent__["a" /* DateparentProvider */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_54__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_file_transfer__["a" /* FileTransfer */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_32_apollo_angular__["a" /* Apollo */], __WEBPACK_IMPORTED_MODULE_30_apollo_angular_link_http__["a" /* HttpLink */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 276,
	"./af.js": 276,
	"./ar": 277,
	"./ar-dz": 278,
	"./ar-dz.js": 278,
	"./ar-kw": 279,
	"./ar-kw.js": 279,
	"./ar-ly": 280,
	"./ar-ly.js": 280,
	"./ar-ma": 281,
	"./ar-ma.js": 281,
	"./ar-sa": 282,
	"./ar-sa.js": 282,
	"./ar-tn": 283,
	"./ar-tn.js": 283,
	"./ar.js": 277,
	"./az": 284,
	"./az.js": 284,
	"./be": 285,
	"./be.js": 285,
	"./bg": 286,
	"./bg.js": 286,
	"./bm": 287,
	"./bm.js": 287,
	"./bn": 288,
	"./bn.js": 288,
	"./bo": 289,
	"./bo.js": 289,
	"./br": 290,
	"./br.js": 290,
	"./bs": 291,
	"./bs.js": 291,
	"./ca": 292,
	"./ca.js": 292,
	"./cs": 293,
	"./cs.js": 293,
	"./cv": 294,
	"./cv.js": 294,
	"./cy": 295,
	"./cy.js": 295,
	"./da": 296,
	"./da.js": 296,
	"./de": 297,
	"./de-at": 298,
	"./de-at.js": 298,
	"./de-ch": 299,
	"./de-ch.js": 299,
	"./de.js": 297,
	"./dv": 300,
	"./dv.js": 300,
	"./el": 301,
	"./el.js": 301,
	"./en-au": 302,
	"./en-au.js": 302,
	"./en-ca": 303,
	"./en-ca.js": 303,
	"./en-gb": 304,
	"./en-gb.js": 304,
	"./en-ie": 305,
	"./en-ie.js": 305,
	"./en-nz": 306,
	"./en-nz.js": 306,
	"./eo": 307,
	"./eo.js": 307,
	"./es": 308,
	"./es-do": 309,
	"./es-do.js": 309,
	"./es-us": 310,
	"./es-us.js": 310,
	"./es.js": 308,
	"./et": 311,
	"./et.js": 311,
	"./eu": 312,
	"./eu.js": 312,
	"./fa": 313,
	"./fa.js": 313,
	"./fi": 314,
	"./fi.js": 314,
	"./fo": 315,
	"./fo.js": 315,
	"./fr": 316,
	"./fr-ca": 317,
	"./fr-ca.js": 317,
	"./fr-ch": 318,
	"./fr-ch.js": 318,
	"./fr.js": 316,
	"./fy": 319,
	"./fy.js": 319,
	"./gd": 320,
	"./gd.js": 320,
	"./gl": 321,
	"./gl.js": 321,
	"./gom-latn": 322,
	"./gom-latn.js": 322,
	"./gu": 323,
	"./gu.js": 323,
	"./he": 324,
	"./he.js": 324,
	"./hi": 325,
	"./hi.js": 325,
	"./hr": 326,
	"./hr.js": 326,
	"./hu": 327,
	"./hu.js": 327,
	"./hy-am": 328,
	"./hy-am.js": 328,
	"./id": 329,
	"./id.js": 329,
	"./is": 330,
	"./is.js": 330,
	"./it": 331,
	"./it.js": 331,
	"./ja": 332,
	"./ja.js": 332,
	"./jv": 333,
	"./jv.js": 333,
	"./ka": 334,
	"./ka.js": 334,
	"./kk": 335,
	"./kk.js": 335,
	"./km": 336,
	"./km.js": 336,
	"./kn": 337,
	"./kn.js": 337,
	"./ko": 338,
	"./ko.js": 338,
	"./ky": 339,
	"./ky.js": 339,
	"./lb": 340,
	"./lb.js": 340,
	"./lo": 341,
	"./lo.js": 341,
	"./lt": 342,
	"./lt.js": 342,
	"./lv": 343,
	"./lv.js": 343,
	"./me": 344,
	"./me.js": 344,
	"./mi": 345,
	"./mi.js": 345,
	"./mk": 346,
	"./mk.js": 346,
	"./ml": 347,
	"./ml.js": 347,
	"./mr": 348,
	"./mr.js": 348,
	"./ms": 349,
	"./ms-my": 350,
	"./ms-my.js": 350,
	"./ms.js": 349,
	"./mt": 351,
	"./mt.js": 351,
	"./my": 352,
	"./my.js": 352,
	"./nb": 353,
	"./nb.js": 353,
	"./ne": 354,
	"./ne.js": 354,
	"./nl": 355,
	"./nl-be": 356,
	"./nl-be.js": 356,
	"./nl.js": 355,
	"./nn": 357,
	"./nn.js": 357,
	"./pa-in": 358,
	"./pa-in.js": 358,
	"./pl": 359,
	"./pl.js": 359,
	"./pt": 360,
	"./pt-br": 361,
	"./pt-br.js": 361,
	"./pt.js": 360,
	"./ro": 362,
	"./ro.js": 362,
	"./ru": 363,
	"./ru.js": 363,
	"./sd": 364,
	"./sd.js": 364,
	"./se": 365,
	"./se.js": 365,
	"./si": 366,
	"./si.js": 366,
	"./sk": 367,
	"./sk.js": 367,
	"./sl": 368,
	"./sl.js": 368,
	"./sq": 369,
	"./sq.js": 369,
	"./sr": 370,
	"./sr-cyrl": 371,
	"./sr-cyrl.js": 371,
	"./sr.js": 370,
	"./ss": 372,
	"./ss.js": 372,
	"./sv": 373,
	"./sv.js": 373,
	"./sw": 374,
	"./sw.js": 374,
	"./ta": 375,
	"./ta.js": 375,
	"./te": 376,
	"./te.js": 376,
	"./tet": 377,
	"./tet.js": 377,
	"./th": 378,
	"./th.js": 378,
	"./tl-ph": 379,
	"./tl-ph.js": 379,
	"./tlh": 380,
	"./tlh.js": 380,
	"./tr": 381,
	"./tr.js": 381,
	"./tzl": 382,
	"./tzl.js": 382,
	"./tzm": 383,
	"./tzm-latn": 384,
	"./tzm-latn.js": 384,
	"./tzm.js": 383,
	"./uk": 385,
	"./uk.js": 385,
	"./ur": 386,
	"./ur.js": 386,
	"./uz": 387,
	"./uz-latn": 388,
	"./uz-latn.js": 388,
	"./uz.js": 387,
	"./vi": 389,
	"./vi.js": 389,
	"./x-pseudo": 390,
	"./x-pseudo.js": 390,
	"./yo": 391,
	"./yo.js": 391,
	"./zh-cn": 392,
	"./zh-cn.js": 392,
	"./zh-hk": 393,
	"./zh-hk.js": 393,
	"./zh-tw": 394,
	"./zh-tw.js": 394
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
webpackContext.id = 508;

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabeceraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CabeceraComponent = (function () {
    function CabeceraComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    CabeceraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollArea.ionScroll.subscribe(function (ev) {
            _this.resizeHeader(ev);
        });
    };
    CabeceraComponent.prototype.resizeHeader = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.newHeaderHeight = _this.headerHeight - ev.scrollTop;
            if (_this.newHeaderHeight < 0) {
                _this.newHeaderHeight = 0;
            }
            _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
            //   for(let headerElement of this.element.nativeElement.children){
            //     let totalHeight = headerElement.offsetTop + headerElement.clientHeight;
            //     if(totalHeight > this.newHeaderHeight && !headerElement.isHidden){
            //       headerElement.isHidden = true;
            //       this.renderer.setElementStyle(headerElement, 'opacity', '0');
            //     } else if (totalHeight <= this.newHeaderHeight && headerElement.isHidden) {
            //       headerElement.isHidden = false;
            //       this.renderer.setElementStyle(headerElement, 'opacity', '0.7');
            //     }
            //   }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('scrollArea'),
        __metadata("design:type", Object)
    ], CabeceraComponent.prototype, "scrollArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('headerHeight'),
        __metadata("design:type", Number)
    ], CabeceraComponent.prototype, "headerHeight", void 0);
    CabeceraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cabecera',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/components/cabecera/cabecera.html"*/'<ng-content ></ng-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/components/cabecera/cabecera.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */]])
    ], CabeceraComponent);
    return CabeceraComponent;
}());

//# sourceMappingURL=cabecera.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_card_card__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_code_code__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_myparents_myparents__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_createparent_createparent__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_user_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_user_profile_profile__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_optionals_devs_irm_irm__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_optionals_devs_my_dates_my_dates__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_user_register_register__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_optionals_devs_recipes_recipes__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_appointment_pay_pay__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_appointment_financer_financer__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_recoverycode_recoverycode__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_recovery_recovery__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_start_start__ = __webpack_require__(410);
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
    // public userPvr: UserProvider
    function MyApp(platform, statusBar, splashScreen, menuCtrl, events) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.events = events;
        //aqui regresarlo al HomePage
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
        this.hom = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
        this.car = __WEBPACK_IMPORTED_MODULE_4__pages_card_card__["a" /* CardPage */];
        this.log = __WEBPACK_IMPORTED_MODULE_9__pages_user_login_login__["a" /* LoginPage */];
        this.pro = __WEBPACK_IMPORTED_MODULE_10__pages_user_profile_profile__["a" /* ProfilePage */];
        this.irm = __WEBPACK_IMPORTED_MODULE_11__pages_optionals_devs_irm_irm__["a" /* IrmPage */];
        this.rep = __WEBPACK_IMPORTED_MODULE_14__pages_optionals_devs_recipes_recipes__["a" /* RecipesPage */];
        this.myd = __WEBPACK_IMPORTED_MODULE_12__pages_optionals_devs_my_dates_my_dates__["a" /* MyDatesPage */];
        this.reg = __WEBPACK_IMPORTED_MODULE_13__pages_user_register_register__["a" /* RegisterPage */];
        this.pay = __WEBPACK_IMPORTED_MODULE_15__pages_appointment_pay_pay__["a" /* PayPage */];
        this.fin = __WEBPACK_IMPORTED_MODULE_16__pages_appointment_financer_financer__["a" /* FinancerPage */];
        this.crea = __WEBPACK_IMPORTED_MODULE_7__pages_createparent_createparent__["a" /* CreateparentPage */];
        this.mypa = __WEBPACK_IMPORTED_MODULE_6__pages_myparents_myparents__["a" /* MyparentsPage */];
        this.code = __WEBPACK_IMPORTED_MODULE_5__pages_code_code__["a" /* CodePage */];
        this.recode = __WEBPACK_IMPORTED_MODULE_17__pages_recoverycode_recoverycode__["a" /* RecoverycodePage */];
        this.recov = __WEBPACK_IMPORTED_MODULE_18__pages_recovery_recovery__["a" /* RecoveryPage */];
        this.start = __WEBPACK_IMPORTED_MODULE_19__pages_start_start__["a" /* StartPage */];
        this.fotoId = localStorage.getItem('image');
        this.url = "http://dappapache02.eastus.cloudapp.azure.com:4200";
        this.patientName = "";
        this.timemark = new Date().getTime();
        this.changeFoto();
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // descomentar para poder redirigir cuando quieras ir a las paginas start
            if (localStorage.getItem('role') !== 'user') {
                _this.menu.setRoot(__WEBPACK_IMPORTED_MODULE_19__pages_start_start__["a" /* StartPage */]);
            }
            else {
                _this.menu.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]);
            }
        });
        this.userToken = localStorage.getItem('idTokenUser');
        // XXX: Listen for events. Specialy for user logged.
        events.subscribe('user:logged', function (userLogged) {
            if (userLogged !== undefined && userLogged !== "") {
                _this.userToken = localStorage.getItem('idTokenUser');
            }
        });
        events.subscribe('change:foto', function () {
            _this.changeFoto();
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
        localStorage.removeItem('patientName');
        localStorage.removeItem('image');
        this.userToken = null;
        this.menu.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_user_login_login__["a" /* LoginPage */]);
        this.menuCtrl.close();
    };
    MyApp.prototype.changeFoto = function () {
        this.fotoId = localStorage.getItem('image');
        this.foto = "http://dappapache02.eastus.cloudapp.azure.com:4200" + ("" + this.fotoId);
        this.patientName = localStorage.getItem('patientName');
        this.correo = localStorage.getItem('emailUser');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('contenido'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */])
    ], MyApp.prototype, "menu", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slide',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/app/app.html"*/'<ion-menu [content]="contenido" persistent="true">\n    <ion-header color="light">\n        <!-- <ion-toolbar>\n            <ion-title>More Health</ion-title>\n        </ion-toolbar> -->\n    </ion-header>\n    <ion-content class="fondoColor">\n      <div class="containerData">\n        <ion-row>\n          <!-- <ion-col col-12>\n              <button ion-button text-center\n              class="imagen"\n              (click)="goPage(pro)"\n              *ngIf="!foto">\n                <ion-icon class="iconAdd flecha" name="add"></ion-icon>\n              </button>\n          </ion-col> -->\n          <ion-col col-12 *ngIf="foto">\n              <div class="imagenPerfil"\n              (click)="goPage(pro)">\n                <img src="{{foto}}?{{timemark}}" alt="">\n              </div>\n          </ion-col>\n          <ion-col col-12 class="contenedorDatosUsuario">\n            <p class="nombreUsuario" *ngIf="foto">{{patientName}}</p>\n            <p class="correo" *ngIf="correo" >{{correo}}</p>\n          </ion-col>\n        </ion-row>\n\n      </div>\n        <ion-list class="lista">\n            <button ion-item (click)="goPage(hom)" class="outLine">\n            <ion-icon item-start name="home"></ion-icon>\n            Home</button>\n\n            <button ion-item (click)="goPage(car)" class="outLine">\n            <ion-icon item-start name="medkit"></ion-icon>\n            Reservar</button>\n\n            <button ion-item (click)="goPage(myd)" *ngIf="userToken" class="outLine">\n             <ion-icon item-start name="clipboard"></ion-icon>\n             Mis citas</button>\n\n             <button ion-item (click)="goPage(rep)" *ngIf="userToken" class="outLine">\n              <ion-icon item-start name="document"></ion-icon>\n              Mis recetas</button>\n\n              <button ion-item (click)="goPage(mypa)" *ngIf="userToken" class="outLine">\n              <ion-icon item-start name="people"></ion-icon>\n              Mis parientes</button>\n\n            <button ion-item (click)="goPage(log)" *ngIf="!userToken" class="outLine">\n            <ion-icon item-start name="key"></ion-icon>\n            Login</button>\n\n\n            <button ion-item (click)="logout()" *ngIf="userToken" class="outLine">\n            <ion-icon item-start name="close-circle"></ion-icon>\n            terminar sesion</button>\n\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<!-- regresarlo ap homePage -->\n<ion-nav [root]="hom" #contenido></ion-nav>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChargePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
            selector: 'page-charge',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/charge/charge.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>charge</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/charge/charge.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ChargePage);
    return ChargePage;
}());

//# sourceMappingURL=charge.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecomendationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], RecomendationsPage);
    return RecomendationsPage;
}());

//# sourceMappingURL=recomendations.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_recipes_recipes__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authorization_public_authorization_public__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_card__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appoinment_appoinment__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dependents_dependents__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
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
    function HomePage(navCtrl, autho, alertCtrl, recipesPvr, appointmentProvider, dependensProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.autho = autho;
        this.alertCtrl = alertCtrl;
        this.recipesPvr = recipesPvr;
        this.appointmentProvider = appointmentProvider;
        this.dependensProvider = dependensProvider;
        this.card = [];
        this.cardone = [];
        this.cardtwo = [];
        this.cardthree = [];
        this.itemExpanded = true;
        this.itemExpandHeight = 100;
        var nombrePatient = localStorage.getItem('patientName');
        var separador = " ";
        if (nombrePatient) {
            this.nombre = nombrePatient.split(separador, 1);
        }
        else {
            console.log("seguir normal es invitado");
        }
        var authorization = localStorage.getItem('authorization');
        if (!authorization) {
            this.autho.getKey().subscribe(function (data) {
                localStorage.setItem('authorization', data.authorization);
                // localStorage.setItem('idTokenUser', data.patientId);
                localStorage.setItem('role', data.role);
                if (data.role == 'user') {
                    _this.obtenerUltimaFecha();
                }
            }, function (err) {
                var alert = _this.alertCtrl.create({
                    title: 'Problema con el servidor',
                    subTitle: 'actualmente hay un problema con el servidor prueba en unos minutos.',
                    buttons: [
                        {
                            text: 'Ok',
                            role: 'Cancel'
                        }
                    ]
                });
                alert.present();
            });
        }
        else {
            var rol = localStorage.getItem("role");
            if (rol && rol == 'user') {
                this.obtenerUltimaFecha();
            }
        }
    }
    HomePage.prototype.obtenerUltimaFecha = function () {
        var _this = this;
        // citas del usuario principal
        this.appointmentProvider.getAppointmentsPeruser().subscribe(function (data) {
            _this.tasks = data;
            _this.citapendiente = _this.tasks.length;
            console.log('this.tasks:', _this.tasks);
        });
        // llamadas en la carga las recetas mas recientes
        this.recipesPvr.getAllRecipes().subscribe(function (data) {
            _this.recipes = data;
            _this.recipendiente = _this.recipes.length;
            console.log('this._recipes:', _this.recipes);
            var diaOne = __WEBPACK_IMPORTED_MODULE_8_moment__(_this.recipes.inicio_prescripcion);
            var diaTwo = __WEBPACK_IMPORTED_MODULE_8_moment__(_this.recipes.fin_prescripcion);
            _this.diasFaltantes = diaOne.diff(diaTwo);
        });
        // citas de los dependientes
        this.dependensProvider.getdependesDay().subscribe(function (data) {
            _this.depesCitas = data;
            // console.log('this.depesCitas:', this.depesCitas);
            _this.depesCitas.map(function (depe) {
                if (depe.appointments == 0) {
                    console.log('los depes que no tienen citas', depe);
                }
                else {
                    _this.citasDepes = depe.appointments[0];
                    // console.log('los depe con citas:', this.citasDepes);
                    if (_this.recipes && _this.citasDepes) {
                        _this.citapendiente = 2;
                    }
                    else {
                        _this.citapendiente = _this.citapendiente;
                    }
                }
            });
        });
        //     if(this.tasks > 1){
        //     const citasAll = {...this.tasks, ...this.depesCitas};
        //     console.log('todas las citas, incluidas las de principal:', citasAll);
        // }else{
        //     const citasAll = {...this.depesCitas};
        //     console.log('citas solo los dependientes', citasAll);
        // }
    };
    HomePage.prototype.irACard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__card_card__["a" /* CardPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color="primary" hideBackButton="true" persistent="true">\n        <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title> Home Page</ion-title>\n        <ion-buttons *ngIf="nombre"\n                          end>\n          <button ion-button\n                  item-end\n                  class="logueado"\n                  clear>\n                  Hola {{nombre}}\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding >\n\n    <ion-card button class="principal" (click)="irACard()">\n        <ion-item>\n            <ion-row>\n                <ion-col col-2>\n                    <ion-icon name="contact"></ion-icon>\n                </ion-col>\n                <ion-col col-9>\n                    <p class="reserve">Reservar cita</p>\n                </ion-col>\n                <ion-col col-1>\n                    <ion-icon name="arrow-dropright"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n    </ion-card>\n\n    <div class="down30">\n        <mat-accordion padding>\n\n            <mat-expansion-panel >\n                <mat-expansion-panel-header>\n                    <ion-col col-2>\n                        <ion-icon name="alarm"></ion-icon>\n                    </ion-col>\n                    <ion-col col-8>\n                        <p class="font11">Próxima Cita</p>\n                      </ion-col>\n                      <ion-col col-2>\n                          <ion-badge *ngIf="citapendiente"\n                                      class="badgeIcon"\n                                      color="notifi" item-end>C\n                          </ion-badge>\n                    </ion-col>\n                </mat-expansion-panel-header >\n                <div class="containerExpand" >\n                  <div *ngIf="tasks else notasks">\n                    <div *ngFor="let task of tasks; first as isFirst">\n                      <ion-row class="down10" *ngIf="isFirst">\n                        <ion-col col-3>\n                          <ion-avatar item-start>\n                            <img src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{task.professional.id}}.png">\n                          </ion-avatar>\n                        </ion-col>\n                        <ion-col col-9 >\n                          <h3 class="tituloCitas" [ngClass]="{celeste:\'\'}">Dr.{{task.professional.fullName | slice:0:25 | uppercase}}</h3>\n                          <p class="especialidad">{{ task.service.basicService.description | lowercase }} / {{ task.service.center.name }}</p>\n                          <p class="day">{{ task.appointmentDateTime | date:\'mediumDate\' : \'es\' }} - {{ task.appointmentDateTime | date: \'HH:mm\' }} </p>\n                        </ion-col>\n                      </ion-row>\n                    </div>\n                      <div *ngIf="citasDepes">\n                          <ion-row class="down10" >\n                            <ion-col col-3>\n                              <ion-avatar item-start>\n                                <img src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{citasDepes.professional.id}}.png">\n                              </ion-avatar>\n                            </ion-col>\n                            <ion-col col-9 >\n                              <p class="nombreDepe">cita para: {{citasDepes.patient.name}}</p>\n                              <h3 class="tituloCitas" [ngClass]="{celeste:\'\'}">Dr.{{citasDepes.professional.fullName | slice:0:25 | uppercase}}</h3>\n                              <p class="especialidad">{{ citasDepes.service.basicService.description | lowercase }} / {{ citasDepes.service.center.name }}</p>\n                              <p class="day">{{ citasDepes.appointmentDateTime | date:\'mediumDate\' : \'es\' }} - {{ citasDepes.appointmentDateTime | date: \'HH:mm\' }} </p>\n                            </ion-col>\n                          </ion-row>\n                        </div>\n                  </div>\n                    <div *ngIf="!tasks">\n                      <p  class="textoRecetas">En este momento no tienes citas proximas...</p>\n                    </div>\n                </div>\n            </mat-expansion-panel>\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <ion-col col-2>\n                        <ion-icon name="medkit"></ion-icon>\n                    </ion-col>\n                    <ion-col col-8>\n                        <p class="font11">Recetas y Medicamentos</p>\n                    </ion-col>\n                    <ion-col col-2>\n                        <ion-badge *ngIf="recipendiente"\n                                      class="badgeIcon"\n                                      color="verde" item-end>1\n                          </ion-badge>\n                    </ion-col>\n                </mat-expansion-panel-header>\n                <div class="containerExpand">\n                    <p *ngIf="!tasks" class="textoRecetas">Las recetas y médicamentos de sus últimas citas aparecerán aquí , despues de registrado</p>\n                    <div *ngIf="tasks">\n                      <div  *ngFor="let recipe of recipes; index as i; last as isLast">\n                           <div *ngIf="i == 1">\n                                  <ion-list class="contenedorReceta">\n                                    <ion-item *ngFor="let receta of recipe.prescripciones">\n                                      <ion-row>\n                                        <ion-col col-3 class="contenedorIcono">\n                                            <img src="assets/imgs/recipes/{{receta.formasfar_pk}}.png" alt="">\n                                        </ion-col>\n                                        <ion-col col-9 class="contendorNombrePastilla">\n                                            <p class="nombreMedicamento">{{receta.marca_comercial}}</p>\n                                            <p class="vecesXdia"> {{ 24 / receta.cada_x_horas}} veces por día</p>\n                                            <p class="inicioDePrescripcion"> inicio: {{receta.inicio_prescripcion | date}}</p>\n                                            <p class="diasFaltantes"> quedan {{diasFaltantes}} dias de tratamiento.</p>\n                                        </ion-col>\n                                      </ion-row>\n                                    </ion-item>\n                                  </ion-list>\n                           </div>\n                      </div>\n\n                    </div>\n                </div>\n            </mat-expansion-panel>\n\n\n        </mat-accordion>\n\n    </div>\n    <!-- <h1>home</h1>\n    <p (click)="irACard()">Ir a Card</p> -->\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_authorization_public_authorization_public__["a" /* AuthorizationPublicProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_recipes_recipes__["a" /* RecipesProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_appoinment_appoinment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_dependents_dependents__["a" /* DependentsProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recovery_recovery__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__card_card__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_authorization_public_authorization_public__ = __webpack_require__(156);
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
    function LoginPage(navCtrl, navParams, userService, alertCtrl, events, viewCtrl, authPvr) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.viewCtrl = viewCtrl;
        this.authPvr = authPvr;
        this.change = false;
        this.password_type = 'password';
        this.hora = this.navParams.get('hora');
        this.doctor = this.navParams.get('doctor');
        this.available = this.navParams.get('available');
        this.authPvr.getKey().subscribe(function (data) {
            _this.authPublic = data;
            localStorage.setItem('authorization', _this.authPublic.authorization);
            localStorage.setItem('role', _this.authPublic.role);
        });
        localStorage.removeItem('idTokenUser');
        localStorage.removeItem('emailUser');
        // localStorage.removeItem('authorization');
        // localStorage.removeItem('role');
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.startSesion = function (formulario) {
        var _this = this;
        this.userService.doSignIn(formulario.value.email.toLowerCase(), formulario.value.password.toLowerCase())
            .subscribe(function (data) {
            console.log('data:', data);
            _this.msg = "";
            localStorage.setItem('idTokenUser', data.patientId);
            localStorage.setItem('emailUser', formulario.value.email);
            localStorage.setItem('authorization', data.authorization);
            localStorage.setItem('role', data.role);
            localStorage.setItem('patientName', data.patientName);
            localStorage.setItem('image', data.photoUrl);
            // localStorage.setItem('')
            _this.events.publish('user:logged', 'logged');
            _this.events.publish('change:foto');
            if (!_this.hora)
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            else
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__card_card__["a" /* CardPage */], { hora: _this.hora, available: _this.available, doctor: _this.doctor });
        }, function (err) {
            _this.msg = "Usuario o contraseña incorrecta.";
        });
    };
    LoginPage.prototype.registrarUsuario = function () {
        if (this.hora !== undefined)
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */], { hora: this.hora, available: this.available, doctor: this.doctor, texto: "viene con data" });
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */], { texto: "vienen sin data" });
    };
    LoginPage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.goToRecovery = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__recovery_recovery__["a" /* RecoveryPage */]);
    };
    LoginPage.prototype.changeType = function () {
        // cambie el password type
        this.password_type = this.password_type === 'text' ? 'password' : 'text';
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/user/login/login.html"*/'\n<ion-content class="gris">\n\n    <!-- <h5 class="bajar textoAzul" text-center> Ahora necesitamos tus datos para iniciar una reserva. Si no tienes cuenta aún, registrate ¡es súper fácil!</h5> -->\n\n\n    <!-- <div class="white">\n        <div padding>\n            <button ion-button (click)="registrarUsuario()" full color="primary" class="alto50">Registrarse</button>\n        </div>\n\n    </div> -->\n\n    <div padding class="containerInputs">\n        <p style="text-align: center">{{msg}}</p>\n\n        <form #formulario="ngForm">\n\n            <ion-item>\n                <ion-label stacked>Email</ion-label>\n                <ion-input type="text"\n                           required\n                           name="email"\n                           ngModel></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Contraseña</ion-label>\n                <ion-input [type]="password_type"\n                           name="password"\n                           ngModel>\n                </ion-input>\n                <button ion-button\n                        clear\n                        item-end\n                        (click)="changeType()">\n                  <ion-icon name="eye"></ion-icon>\n                </button>\n            </ion-item>\n        </form>\n        <button ion-button (click)="startSesion(formulario)" block class="inicioSesion">iniciar Sesión</button>\n    </div>\n    <p (click)="goToRecovery()"\n        class="textoOlvido">Olvidé mi contraseña</p>\n\n          <ion-row class="containerBotones">\n            <ion-col col-5>\n              <button ion-button\n                      clear\n                      *ngIf="this.hora == undefined"\n                      class="noLogin"\n                      block\n                (click)="goToHome()">Continuar como invitado\n              </button>\n            </ion-col>\n            <ion-col col-7>\n              <button ion-button\n                     clear\n                      block\n                      class="register"\n                      (click)="registrarUsuario()">\n                registrarme\n              </button>\n            </ion-col>\n          </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/user/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_authorization_public_authorization_public__["a" /* AuthorizationPublicProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_of__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_of__);
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
        this.SERVER = "http://dappapache02.eastus.cloudapp.azure.com:4200";
        this.apiUrl = this.SERVER + "/api/v2/ebooking/";
    }
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
    AppointmentProvider.prototype.getAppointmentsPeruser = function () {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        return this.http.get(this.apiUrl + 'appointments/patient', { headers: headers })
            .map(function (resp) {
            return resp;
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

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function ExpandableComponent(renderer) {
        this.renderer = renderer;
        this.currentHeight = 0;
    }
    ExpandableComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('expandWrapper', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandWrapper", void 0);
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
            selector: 'expandable',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/components/expandable/expandable.component.html"*/'<div #expandWrapper class="expand-wrapper" [class.collapsed]="!expanded">\n    <ng-content></ng-content>\n\n</div>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/components/expandable/expandable.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */]])
    ], ExpandableComponent);
    return ExpandableComponent;
}());

//# sourceMappingURL=expandable.component.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(574);
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

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sha_js__ = __webpack_require__(270);
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






var UserProvider = (function () {
    function UserProvider(http) {
        this.http = http;
        this.SERVER = "http://dappapache02.eastus.cloudapp.azure.com:4200";
        this.apiUrl = this.SERVER + "/api/v2/users/";
        this.apiUrlDatos = 'http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/ebooking/';
    }
    UserProvider.prototype.setDeviceToken = function (user_id, token) {
        var url = this.apiUrl + user_id + '/token/' + token;
        return this.http.get(url)
            .map(function (data) {
            return data;
        });
    };
    UserProvider.prototype.doSignIn = function (email, password) {
        var params = { email: email, password: __WEBPACK_IMPORTED_MODULE_5_sha_js__('sha256').update(password).digest('hex'), captchaId: "4dbc9e7e-a921-4d1f-8e36-1021a670c47a" };
        // let params = {email:email, password: shajs('sha256').update(password).digest('hex') }
        return this.http.post(this.apiUrl + 'login', params)
            .map(function (data) {
            return data;
        });
    };
    UserProvider.prototype.doSignInforNewRegister = function (email, password) {
        var params = { email: email, password: password, captchaId: "4dbc9e7e-a921-4d1f-8e36-1021a670c47a" };
        // let params = {email:email, password: shajs('sha256').update(password).digest('hex') }
        return this.http.post(this.apiUrl + 'login', params)
            .map(function (data) {
            return data;
        });
    };
    UserProvider.prototype.diSignInPassword = function (email, password) {
        var params = { email: email, password: password };
        return this.http.post(this.apiUrl + 'login', params)
            .map(function (data) {
            return data;
        });
    };
    UserProvider.prototype.doSignUp = function (params) {
        return this.http.post(this.apiUrl + 'register', params)
            .map(function (data) {
            return data;
        });
    };
    UserProvider.prototype.sendValidation = function (email) {
        var params = { email: email };
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        console.log('params:', params);
        return this.http.post(this.apiUrl + 'validate-email/recovery', params, { headers: headers })
            .map(function (data) {
            return data;
        }).catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(e);
        });
    };
    UserProvider.prototype.recoveryLogin = function (datos) {
        var params = { code: datos.code, email: datos.email, id: datos.id, password: datos.password, app: 'ebooking' };
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        return this.http.post(this.apiUrl + 'login-recovery', params, { headers: headers })
            .map(function (data) {
            return data;
        }).catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(e);
        });
    };
    UserProvider.prototype.changePassword = function (password, passwordNew) {
        var params = { password: password, passwordNew: passwordNew };
        // console.log('los paramasque cambian la contraseña:', params);
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        return this.http.put(this.apiUrl + 'update-password', params, { headers: headers })
            .map(function (data) {
            return data;
        }).catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(e);
        });
    };
    UserProvider.prototype.getDatosPaciente = function (id) {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        return this.http.get(this.apiUrlDatos + ("datos-paciente?patientid=" + id), { headers: headers })
            .map(function (data) {
            return data;
        }).catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(e);
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appoinment_appoinment__ = __webpack_require__(55);
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */])
    ], MasterDetailPage.prototype, "menu", void 0);
    MasterDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-master-detail',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/master-detail/master-detail.html"*/'<ion-navbar>\n    <ion-title>Detalle de la cita</ion-title>\n</ion-navbar>\n\n\n\n<ion-content has-header="true">\n    <ion-list>\n\n        <img id="profile-image" src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{appointment.id}}.png">\n\n        <h3 class="nombreDoctor" text-center>\n            {{ appointment.fullName }}\n        </h3>\n\n        <ion-item>\n            <ion-label bold>Sede:</ion-label>\n            <ion-label class="blue" type="text" disabled="true">\n                Mendiola\n            </ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label>Especialidad:</ion-label>\n            <ion-label item-end class="blue" disabled="true">\n                {{ appointment.service.description }}\n            </ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label>Fecha:</ion-label>\n            <ion-label item-end class="blue" disabled="true">\n                {{ date | date:\'EEEE d , MMMM \' : \'es\' }}\n            </ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label>Hora:</ion-label>\n            <ion-label class="blue" type="text" disabled="true">\n                {{ hora.hour | slice:0:5}}\n            </ion-label>\n        </ion-item>\n        <ion-item *ngIf="secure">\n            <ion-label>Cita con Seguro:</ion-label>\n            <ion-label class="blue" disabled="true">\n                {{insurance | lowercase}}\n            </ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Tipo de pago:</ion-label>\n            <ion-label class="blue" disabled="true">\n                {{paymentType | lowercase }}\n            </ion-label>\n        </ion-item>\n\n        <ion-item *ngIf="isCard">\n            <ion-label>Titular de la tarjeta:</ion-label>\n            <ion-label class="blue" disabled="true">\n                {{name | lowercase }}\n            </ion-label>\n        </ion-item>\n\n        <div *ngIf="isCard">\n            <ion-item>\n                <ion-label class="blue" type="text" maxlength="16" clearInput disabled="true">\n                    {{numMasCard}}\n                </ion-label>\n                <ion-icon item-end name="card"></ion-icon>\n            </ion-item>\n        </div>\n\n        <ion-item>\n            <ion-label>Costo:</ion-label>\n            <ion-label class="blue" item-end type="text" disabled="true">\n                {{ \'S/. \' + price }}\n            </ion-label>\n        </ion-item>\n\n        <div padding>\n            <button ion-button (click)="gotosave()" block color="secondary" class="heighButton">OK</button>\n        </div>\n        <p class="recomenda" color="secondary">Recuerde que deberá llegar 20 minutos antes para poder cancelar en caja y estar a tiempo en el consultorio.</p>\n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/master-detail/master-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_appoinment_appoinment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */]])
    ], MasterDetailPage);
    return MasterDetailPage;
}());

//# sourceMappingURL=master-detail.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_card__ = __webpack_require__(63);
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
            selector: 'page-datos',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/datos/datos.html"*/'<ion-content padding>\n    <h1>Modal de Datos</h1>\n\n    <img class="centrar" src="https://www.trybooking.com/media/3446/login-user-icon.png" alt="">\n    <hr>\n    <p>Para continuar necesitas iniciar Sesión</p>\n    <button ion-button block color="secondary" (click)="goToLogin()" class="botonPrimero">Ir a Login</button>\n    <!-- <button ion-button clear block (click)="goToCard()">Continuar buscando doctor</button> -->\n</ion-content>'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/datos/datos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], DatosPage);
    return DatosPage;
}());

//# sourceMappingURL=datos.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateparentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
  Generated class for the DateparentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DateparentProvider = (function () {
    function DateparentProvider(http) {
        this.http = http;
        console.log('Hello DateparentProvider Provider');
    }
    DateparentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DateparentProvider);
    return DateparentProvider;
}());

//# sourceMappingURL=dateparent.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appointment_financer_financer__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_hello_hello__ = __webpack_require__(397);
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
    function CardPage(navCtrl, navParams, modalCtrl, helloPvr, elementRef, render, viewCtrl, alertContrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.helloPvr = helloPvr;
        this.elementRef = elementRef;
        this.render = render;
        this.viewCtrl = viewCtrl;
        this.alertContrl = alertContrl;
        this._doctors = [];
        this.doctors = [];
        this.search = '';
        this.horas = [];
        this.numDays = 7;
        this.servicios = [];
        this.doctoresData = [];
        this.itemExpanded = true;
        this.itemExpandHeight = 250;
        this.changueColor = false;
        this.hora = [];
        this.hora = this.navParams.get('hora');
        this.doctor = this.navParams.get('doctor');
        this.available = this.navParams.get('available');
        if (this.hora) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__appointment_financer_financer__["a" /* FinancerPage */], { hora: this.hora,
                doctor: this.doctor,
                available: this.available });
        }
        else {
            console.log("no trae data, seguir con el proceso normal");
        }
        this.id = 1;
        this.fromDate = __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY-MM-DD");
        this.toDate = __WEBPACK_IMPORTED_MODULE_4_moment__().add(this.numDays, "day").format("YYYY-MM-DD");
        this.helloPvr.getServicios().subscribe(function (servicios) {
            _this.servicios = servicios;
            // console.log(this.servicios);
            if (servicios.length > 0) {
                _this.getDoctorsList();
            }
            if (servicios.length == 0) {
                var alert_1 = _this.alertContrl.create({
                    title: 'Sesión expirada',
                    subTitle: 'necesitas reiniciar sesión',
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__user_login_login__["a" /* LoginPage */]);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        });
    }
    CardPage.prototype.getDoctorsList = function () {
        var _this = this;
        this.helloPvr.getDoctorsPerId(this.id).subscribe(function (doctores) {
            _this._doctors = doctores.map(function (doctor) {
                doctor.hasAvailable = true;
                doctor.expanded = false;
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
        var _this = this;
        this.selectedDay = available;
        this.helloPvr.getAvailablesPerDoctor(doctor.id, doctor.service.id, this.selectedDay.date, this.selectedDay.date).subscribe(function (hoy) {
            _this.dias = hoy[0].hours;
            _this.doctors.map(function (listDoctor) {
                if (doctor == listDoctor) {
                    listDoctor.expanded = true;
                }
                else {
                    listDoctor.expanded = false;
                }
                return listDoctor;
            });
            _this.horas = _this.dias;
            // console.log('las horas:', this.horas);
            _this.dia = available.date;
            // console.log('dias', this.dias);
        });
    };
    CardPage.prototype.goToFinancer = function (doctor, hora) {
        var role = localStorage.getItem('role');
        if (role === 'public') {
            var datos = this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__user_login_login__["a" /* LoginPage */], {
                hora: hora,
                doctor: doctor,
                available: this.selectedDay.date
            });
            // datos.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__appointment_financer_financer__["a" /* FinancerPage */], { doctor: doctor,
                available: this.selectedDay.date,
                hora: hora });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])('MyDays'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], CardPage.prototype, "MyDays", void 0);
    CardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-card',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/card/card.html"*/'<ion-header>\n    <ion-navbar color="primary" hideBackButton="true" persistent="true">\n        <button ion-button menuToggle>\n<ion-icon name="menu"></ion-icon>\n</button>\n        <ion-title>Reservar cita\n        </ion-title>\n    </ion-navbar>\n\n    <cabecera [scrollArea]="mycontent" headerHeight="240">\n      <div id="busqueda">\n        <ion-list padding>\n            <ion-item>\n                <ion-label floating>Busca por especialidad</ion-label>\n                <ion-select [(ngModel)]="id" #specialty (ionChange)="onChangueSpecialty(specialty.value)">\n                    <ion-option [value]="specialty.id" *ngFor="let specialty of servicios">{{specialty.description}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Busca por doctor</ion-label>\n                <ion-input type="text" (keyup)="buscarDoctor()" [(ngModel)]="search"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Busca por fecha</ion-label>\n                <ion-input type="date" (ionChange)="getDoctorsPerDay()" [(ngModel)]="fromDate"></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n    </cabecera>\n</ion-header>\n\n\n<ion-content #mycontent fullscreen>\n\n    <!-- <div id="busqueda">\n        <ion-list padding>\n            <ion-item>\n                <ion-label floating>Busca por especialidad</ion-label>\n                <ion-select [(ngModel)]="id" #specialty (ionChange)="onChangueSpecialty(specialty.value)">\n                    <ion-option [value]="specialty.id" *ngFor="let specialty of servicios">{{specialty.description}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Busca por doctor</ion-label>\n                <ion-input type="text" (keyup)="buscarDoctor()" [(ngModel)]="search"></ion-input>\n            </ion-item>\n\n\n            <ion-item>\n                <ion-label floating>Busca por fecha</ion-label>\n                <ion-input type="date" (ionChange)="getDoctorsPerDay()" [(ngModel)]="fromDate"></ion-input>\n            </ion-item>\n        </ion-list>\n\n    </div> -->\n\n    <div>\n        <ion-card *ngFor="let doctor of doctors ">\n            <div [ngStyle]="{\'display\': doctor.hasAvailable ? \'block\' : \'none\'}">\n                <ion-row>\n                    <ion-col col-4 class="imageDoctor">\n                        <img src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{doctor.id}}.png" alt="">\n                    </ion-col>\n                    <ion-col col-8 right>\n                        <p class="doctor">{{ doctor.fullName | lowercase}}</p>\n                        <p class="especialidad">{{doctor.service.description | lowercase}}</p>\n                        <p>{{doctor.cmp}}</p>\n                        <p class="centro">Centro: Mendiola</p>\n                    </ion-col>\n\n                    <ion-col col-12>\n                    </ion-col>\n                    <div class="containerDays">\n                        <ion-slides>\n                            <ion-slide *ngFor="let available of doctor.availables">\n                                <div class="centerItemsDays">\n                                    <a (click)="expandedItem(doctor, available)">{{ available.date | date:\'fullDate\' :\'es\' | slice:0:3}}</a>\n                                    <p>{{ available.date | date:\'dd\':\'es\'}}</p>\n                                </div>\n                            </ion-slide>\n                        </ion-slides>\n                    </div>\n                    <ion-col col-12>\n                        <expandable [expandHeight]="itemExpandHeight" [expanded]="doctor.expanded" [doctor]="doctor" [available]="available" [horas]="horas">\n                            <div class="row">\n                                  <ion-slides class="normal">\n                                    <ion-slide class="horariosDisponibles">\n                                        <h3>Primer Turno</h3>\n                                        <ion-grid>\n                                          <ion-row>\n                                              <div *ngFor="let hora of horas" >\n                                                  <ion-col col-3 *ngIf="hora.hour < \'15:20\'" (click)="goToFinancer(doctor,hora)">\n                                                    <div class="horas">\n                                                      <p>{{hora.hour | slice:0:5}}</p>\n                                                    </div>\n                                                    </ion-col>\n                                                </div>\n                                            <!-- <ion-col col-3 *ngFor="let hora of horas" >\n                                              <div  (click)="goToFinancer(doctor, available, hora)" class="horas" >\n                                                <p *ngIf="hora.hour < \'15:20\'" [ngClass]="{\'borrar\' : hora.isAvailable == false}">\n                                                  {{ hora.hour | slice:0:5}}\n                                                </p>\n                                              </div>\n                                            </ion-col> -->\n                                          </ion-row>\n                                        </ion-grid>\n                                      </ion-slide>\n                                    <ion-slide>\n                                    <h3>Segundo turno</h3>\n                                    <ion-row>\n                                      <!-- <ion-col col-3 *ngFor="let hora of horas" >\n                                        <div (click)="goToFinancer(doctor, available, hora)" class="horas" >\n                                          <p *ngIf="hora.hour >= \'15:20\'" [ngClass]="{\'borrar\' : hora.isAvailable == false}">\n                                            {{ hora.hour | slice:0:5}}\n                                          </p>\n                                        </div>\n                                      </ion-col> -->\n                                    <div *ngFor="let hora of horas" >\n                                      <ion-col col-3 *ngIf="hora.hour >= \'15:20\'" (click)="goToFinancer(doctor, hora)">\n                                        <div class="horas">\n                                          <p>{{hora.hour | slice:0:5}}</p>\n                                        </div>\n                                        </ion-col>\n                                    </div>\n                                    </ion-row>\n                                  </ion-slide>\n                              </ion-slides>\n                            </div>\n                        </expandable>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-card>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/card/card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_hello_hello__["a" /* HelloProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["X" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], CardPage);
    return CardPage;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudparentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrudparentProvider = (function () {
    // private apiValidate = "http://192.168.1.133:4000/api/v2/users/validateemail";
    function CrudparentProvider(http) {
        this.http = http;
        this.apiUrl = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/ebooking/appointments/createForUser/";
        this.api = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/register-dependent/";
        this.apiCreate = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/register/";
        this.apiValidate = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/validate-email/register";
        console.log('Hello CrudparentProvider Provider');
    }
    CrudparentProvider.prototype.createParentDate = function (subida, id) {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        var params = JSON.parse(subida);
        params.provisions = [{ "tipoPrestacion": "CONSULTA", "instructions": "", "name": "CONSULTA AMBULATORIA POR MEDICO ESPECIALISTA", "default": false, "id": 44 }];
        return this.http.post(this.apiUrl + ("" + id), params, { headers: headers })
            .map(function (resp) {
            return resp;
        });
    };
    CrudparentProvider.prototype.createParent = function (data) {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        var params = data;
        // params.provisions = [{"tipoPrestacion":"CONSULTA", "instructions":"", "name":"CONSULTA AMBULATORIA POR MEDICO ESPECIALISTA", "default":false, "id":44}]
        return this.http.post(this.api, params, { headers: headers })
            .map(function (resp) {
            return resp;
        });
    };
    CrudparentProvider.prototype.createNewUser = function (datos) {
        // console.log('los datos de register:', datos)
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        var params = datos;
        // console.log('los datos de register:', datos)
        // params.provisions = [{"tipoPrestacion":"CONSULTA", "instructions":"", "name":"CONSULTA AMBULATORIA POR MEDICO ESPECIALISTA", "default":false, "id":44}]
        return this.http.post(this.apiCreate, params, { headers: headers })
            .map(function (resp) {
            return resp;
        });
    };
    CrudparentProvider.prototype.validateEmail = function (email) {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        var params = email;
        return this.http.post(this.apiValidate, params, { headers: headers })
            .map(function (resp) {
            return resp;
        });
    };
    CrudparentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CrudparentProvider);
    return CrudparentProvider;
}());

//# sourceMappingURL=crudparent.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DependentsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DependentsProvider = (function () {
    function DependentsProvider(http) {
        this.http = http;
        this.apiUrl = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/dependents";
        this.apiDelete = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/removecontact?userId=";
        this.apiDatesParents = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/ebooking/appointments/patientContacts";
        this.apiOldDates = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/ebooking/encuentrosPaciente";
        this.apiDatesParentsv2 = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/ebooking/encuentros-paciente-contacto";
        console.log('Hello DependentsProvider Provider');
    }
    // con esta llamada se muestran los dependientes de cada usuario
    DependentsProvider.prototype.getDependens = function () {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        return this.http.get(this.apiUrl, { headers: headers })
            .map(function (data) {
            return data;
        });
    };
    // con esta llamada estamos trayendo las citas de todos los dependientes
    DependentsProvider.prototype.getdependesDay = function () {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        return this.http.get(this.apiDatesParents, { headers: headers })
            .map(function (data) {
            return data;
        });
    };
    DependentsProvider.prototype.getDependentDay = function (id) {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        return this.http.get(this.apiDatesParentsv2 + ("/" + id), { headers: headers })
            .map(function (data) {
            return data;
        });
    };
    // con esta llamada se esta trayendo las citas pasadas del usuario validado
    DependentsProvider.prototype.getOldDependetsDay = function () {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        return this.http.get(this.apiOldDates, { headers: headers })
            .map(function (data) {
            return data;
        });
    };
    // con esta llamada estamos eliminando de mi lista a los dependientes...
    DependentsProvider.prototype.deleteDepend = function (id) {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        return this.http.delete(this.apiDelete + ("" + id), { headers: headers })
            .map(function (data) {
            return data;
        });
    };
    DependentsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DependentsProvider);
    return DependentsProvider;
}());

//# sourceMappingURL=dependents.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_financier_financier__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appoinment_appoinment__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pay_pay__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__createparent_createparent__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__payu_payu__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_dependents_dependents__ = __webpack_require__(72);
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
    function FinancerPage(navCtrl, navParams, platform, fb, alertCtrl, financierProvider, modalCtrl, appointmentProvider, actionSheet, viewCtrl, loadingCtrl, dependentsPvr) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.financierProvider = financierProvider;
        this.modalCtrl = modalCtrl;
        this.appointmentProvider = appointmentProvider;
        this.actionSheet = actionSheet;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dependentsPvr = dependentsPvr;
        this.isAndroid = false;
        this.nots = [
            { "id": "1", "name": "En local" },
            { "id": "2", "name": "Con tarjeta" },
        ];
        this.questions = [
            { "id": 1, "name": "Si tengo" },
            { "id": 2, "name": "No tengo" },
        ];
        this.firtClick = false;
        this.isInsurance = false;
        this.isInsuranceName = false;
        this.isCard = false;
        this.isPlace = false;
        this.payment = false;
        this.open = false;
        this.currentAppointment = null;
        this.personOk = false;
        this.addFamily = false;
        this.secureOk = false;
        this.vcolor = false;
        this.ccolor = false;
        this.yes = false;
        this.no = false;
        this.isAndroid = platform.is('android');
        this.dependentsPvr.getDependens().subscribe(function (data) {
            _this.parents = data;
            console.log('this.parents:', _this.parents);
        });
        this.financierProvider.getFinanciers().subscribe(function (data) { _this.items = data; _this.items.shift(); });
        this.doctor = this.navParams.get('doctor');
        this.available = this.navParams.get('available');
        console.log(this.available);
        this.hora = this.navParams.get('hora');
        // this.subida = this.hora.listjson;
        var role = localStorage.getItem('role');
        if (role == 'guest') {
            //  console.log('no hay mail');
            var datos = this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_login_login__["a" /* LoginPage */], {
                hora: this.hora,
                doctor: this.doctor,
                available: this.available
            });
            // datos.present();
        }
        else {
            console.log("si hay constraseña. que pase");
        }
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
            this.yes = true;
            this.no = false;
        }
        else if (item == 2) {
            // PARTICULAR
            this.financierProvider.getPrice(1, this.doctor.service.id, this.doctor.service.id, this.available).subscribe(function (data) {
                _this.price = Math.round(parseFloat(data[0].prest_precio_val) * 100 + Number.EPSILON) / 100;
                _this.isPlace = false;
                _this.isCard = false;
                _this.firtClick = false;
                _this.payment = true;
                _this.open = true;
                _this.secure = false;
                _this.isInsuranceName = false;
                _this.isInsurance = false;
                _this.no = true;
                _this.yes = false;
            });
            this.secureOk = true;
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
        this.secureOk = true;
    };
    FinancerPage.prototype.selectEnsurance = function () {
        this.isInsurance = !this.isInsurance;
        this.isInsuranceName = !this.isInsuranceName;
        this.myEnsuranceName = null;
    };
    // si la cita es para el usuario pasará mostrando la ventana de financiador
    FinancerPage.prototype.passFinancer = function (depe) {
        this.personOk = !this.personOk;
        this.personOk = true;
        this.addFamily = false;
        this.depe = depe;
        this.vcolor = true;
        this.ccolor = false;
        this.price = null;
    };
    // mostrar los familiares adjuntos o la opción de crear uno nuevo
    FinancerPage.prototype.openParents = function () {
        this.addFamily = true;
        this.personOk = false;
        this.ccolor = true;
        this.vcolor = false;
    };
    FinancerPage.prototype.passFinancerParent = function (depe) {
        this.addFamily = false;
        this.personOk = true;
        this.depe = depe;
        this.vcolor = false;
        this.ccolor = true;
    };
    FinancerPage.prototype.cleanDepe = function () {
        this.secureOk = false;
        this.depe = {};
        this.openParents();
        // console.log(this.depe);
        // this.personOk = false;
        // this.vcolor = false;
        // this.ccolor = false;
    };
    // mostrar el modal de la creación de familiares
    FinancerPage.prototype.showDetailCreateParents = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__createparent_createparent__["a" /* CreateparentPage */]);
        // modal.present();
        // modal.onDidDismiss(data =>{
        //  this.parents = data;
        // });
    };
    // función para ir a pagos
    FinancerPage.prototype.goToPay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pay_pay__["a" /* PayPage */], {
            doctor: this.doctor,
            available: this.available,
            hora: this.hora,
            depe: this.depe,
            price: this.price
        });
        console.log('el precio', this.price);
    };
    FinancerPage.prototype.openModalPayu = function () {
        var payuModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__payu_payu__["a" /* PayuPage */], { subida: this.subida, });
        console.log('this subida de financer:', this.subida);
        payuModal.present();
    };
    FinancerPage.prototype.doSubmitData = function () {
        var data = this.parents;
        this.viewCtrl.dismiss(data);
        console.log('la data pasado por el modal:', data);
    };
    FinancerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-financer',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/financer/financer.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Financiador</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <h4 class="parrafoFinanciador">Lo que nos queda es escoger para quien es la cita y el financiador, ya casi terminamos…</h4>\n  <div>\n<ion-row padding>\n  <ion-col class="cuadrado">\n    <button ion-button\n            color="gris"\n            [ngClass]="{verde:vcolor == true}"\n            (click)="passFinancer()">\n              para mi\n    </button>\n  </ion-col>\n\n  <ion-col class="cuadrado">\n    <button ion-button\n            (click)="openParents()"\n            color="gris"\n            [ngClass]="{verde:ccolor == true}">\n              un familiar\n    </button>\n  </ion-col>\n</ion-row>\n<div *ngIf="addFamily">\n    <ion-card *ngFor="let depe of parents"\n              (click)="passFinancerParent(depe)">\n      <ion-row>\n        <ion-col col-3>\n          <ion-avatar>\n            <img src="../assets/imgs/avatars/nino.png" alt="">\n          </ion-avatar>\n        </ion-col>\n        <ion-col col-9>\n            <h3 class="nombrePariente">{{depe.name}}</h3>\n            <p *ngIf="depe.relation"\n                class="parentesco">{{depe.relation.name}}</p>\n            <p class="edad">{{depe.birthdate | date:"Y"}}</p>\n        </ion-col>\n\n      </ion-row>\n    </ion-card>\n  </div>\n\n    <ion-row *ngIf="addFamily" padding>\n      <ion-card ion-button\n                (click)="showDetailCreateParents()"\n                class="buttonAddFamily">\n        <button ion-button clear item-start>\n          <ion-icon ios="ios-add" md="md-add" color="secondary"></ion-icon>\n        </button>\n        <p item-end>Agregar Familiar</p>\n      </ion-card>\n    </ion-row>\n\n    <!-- template que muestra los familiares que estan ya adjuntos -->\n\n  </div>\n  <!-- fin del template de los familiares adjuntos -->\n\n  <div *ngIf="depe">\n    <div *ngIf="personOk === true">\n      <ion-row>\n        <ion-col col-3\n                 class="cardEscogidoImg">\n            <img src="../assets/imgs/avatars/nino.png" alt="">\n        </ion-col>\n        <ion-col col-7\n                  class="containerNombre"\n                  >\n            <h3 class="nombrePariente">escogiste a: {{depe.name}}</h3>\n        </ion-col>\n        <ion-col col-2>\n            <button ion-button\n                    (click)="cleanDepe()"\n                    clear\n                    color="primary">\n              <ion-icon name="close"></ion-icon>\n            </button>\n          </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <ion-list class="medio" *ngIf="personOk === true">\n    <ion-card class="evaluate">\n      <ion-list>\n        <ion-item color="light" item-start (click)="evaluateEnsurance($event)">\n          <p *ngIf="yes == false && no == false">¿Cuenta con seguro?</p>\n          <p *ngIf="yes == true">Si tengo</p>\n          <p *ngIf="no == true">No tengo</p>\n          <ion-icon item-end name="arrow-dropdown"></ion-icon>\n        </ion-item>\n\n        <ion-list class="nombresLista" *ngIf="firtClick">\n          <button ion-item *ngFor="let quest of questions" (click)="validateSelected(quest.id)">\n            {{ quest.name }}\n          </button>\n        </ion-list>\n      </ion-list>\n    </ion-card>\n\n    <ion-card class="seguroList">\n      <ion-list>\n        <ion-item color="light" *ngIf="isInsuranceName" (click)="selectEnsurance($event)">\n          {{ myEnsuranceName }}\n        </ion-item>\n        <ion-list *ngIf="isInsurance">\n          <button ion-item *ngFor="let item of items" (click)="insuranceSelected(item.cod_pagador_pk, item.nombre_garante)">\n            {{ item.nombre_garante }}\n          </button>\n        </ion-list>\n      </ion-list>\n    </ion-card>\n\n    <div text-right class="precio" *ngIf="price!=undefined">\n      <p>Precio de la Consulta: {{ \'S/. \' + price }}</p>\n    </div>\n  </ion-list>\n\n  <button *ngIf="secureOk === true"\n          color="secondary"\n          ion-button\n          block\n          center\n          class="botonPagar"\n          (click)="goToPay()">\n      hacer el pago\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/financer/financer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_financier_financier__["a" /* FinancierProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_appoinment_appoinment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_dependents_dependents__["a" /* DependentsProvider */]])
    ], FinancerPage);
    return FinancerPage;
}());

//# sourceMappingURL=financer.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecipesProvider = (function () {
    function RecipesProvider(http) {
        this.http = http;
        this.apiUrl = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/ebooking/getPrescripcionesEncuentro?encuentroId=";
        this.apiAll = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/ebooking/getPrescripcionesEncuentro";
        console.log('Hello RecipesProvider Provider');
    }
    RecipesProvider.prototype.getAllRecipes = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('authorization') });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.apiAll, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RecipesProvider.prototype.getFilterRecipes = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('authorization') });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.apiUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RecipesProvider.prototype.getRecipes = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('authorization') });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.apiUrl + ("" + id), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RecipesProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    RecipesProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(errMsg);
    };
    RecipesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RecipesProvider);
    return RecipesProvider;
}());

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_crudparent_crudparent__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sha_js__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sha_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sha_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__code_code__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
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
    function RegisterPage(navCtrl, navParams, alertCtrl, fb, userProvider, crudPvr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.userProvider = userProvider;
        this.crudPvr = crudPvr;
        this.cambio = false;
        this.hora = this.navParams.get('hora');
        this.doctor = this.navParams.get('doctor');
        this.available = this.navParams.get('available');
        this.texto = this.navParams.get('texto');
        console.log(this.hora, this.available, this.doctor, this.texto);
        this.actual = __WEBPACK_IMPORTED_MODULE_8_moment__().format('YYYY-MM-DD');
        // console.log('fecha actual:',this.actual);
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
        });
    }
    RegisterPage.prototype.validacion = function () {
        var valid = this.registerForm.value;
        if (valid.password == valid.password_confirmation) {
            return true;
        }
        else {
            return false;
        }
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
    RegisterPage.prototype.changue = function () {
        this.cambio = true;
    };
    RegisterPage.prototype.registerNewUser = function () {
        var _this = this;
        var data = this.registerForm.value;
        var datos = {
            email: data.email,
            password: __WEBPACK_IMPORTED_MODULE_6_sha_js__('sha256').update(data.password).digest('hex'),
            name: data.name,
            surname1: data.surname1,
            surname2: data.surname2,
            birthdate: data.birthdate,
            gender: {
                id: "2",
                name: data.gender
            },
            documentType: {
                id: "1",
                name: data.documentType
            },
            documentNumber: data.documentNumber,
            phone: data.phone
            // code           : "123"
        };
        var email = { email: datos.email };
        this.crudPvr.validateEmail(email).subscribe(function (data) {
            _this.resolve = data;
            console.log(_this.resolve);
            if (_this.resolve.result == "ok") {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__code_code__["a" /* CodePage */], {
                    datos: datos, hora: _this.hora, available: _this.available, doctor: _this.doctor
                });
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: "Correo Utilizado",
                    subTitle: "el correo que ha ingresado ya existe, talvez lo ingresó mal o pruebe con otro",
                    buttons: [
                        {
                            text: 'Intentar de nuevo',
                            role: 'cancel'
                        }
                    ]
                });
                alert_1.present();
            }
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/user/register/register.html"*/'<ion-header>\n    <ion-navbar class="transparent">\n        <!-- <ion-title> Registro </ion-title> -->\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="gris">\n    <ion-item *ngIf="msg">\n        <p color="danger" ion-text>{{ msg }}</p>\n    </ion-item>\n\n    <h4 class="registroDeUsuarioTitulo">Completa tu registro para obtener una cuenta...así de facil..</h4>\n\n    <form [formGroup]="registerForm" (ngSubmit)="registerNewUser(registerForm.value)"  novalidate>\n\n        <ion-row>\n            <ion-item>\n                <ion-label floating>Nombres:</ion-label>\n                <ion-input type="text" formControlName="name" name="name"></ion-input>\n                <p color="danger" ion-text *ngIf="registerForm.get(\'name\').hasError(\'required\')">Nombre requerido</p>\n            </ion-item>\n\n            <ion-col col-6>\n                <ion-item>\n                    <ion-label floating>Apellido Paterno</ion-label>\n                    <ion-input type="text" formControlName="surname1" name="paternal_surname"></ion-input>\n                    <p color="danger" ion-text *ngIf="registerForm.get(\'surname1\').hasError(\'required\')">Apellido Paterno requerido</p>\n                </ion-item>\n            </ion-col>\n            <ion-col col-6>\n                <ion-item>\n                    <ion-label floating>Apellido Materno</ion-label>\n                    <ion-input type="text" formControlName="surname2" name="maternal_surname"></ion-input>\n                    <p color="danger" ion-text *ngIf="registerForm.get(\'surname2\').hasError(\'required\')">Apellido Materno requerido</p>\n                </ion-item>\n            </ion-col>\n\n            <ion-col col-6>\n                <ion-item>\n                    <ion-label floating>Sexo:</ion-label>\n                    <ion-select formControlName="gender" name="gender">\n                        <!-- <ion-option value=1>Indistinto</ion-option> -->\n                        <ion-option value="HOMBRE">Hombre</ion-option>\n                        <ion-option value="MUJER">Mujer</ion-option>\n                    </ion-select>\n                    <p color="danger" ion-text *ngIf="registerForm.get(\'gender\').hasError(\'required\')">Genero requerido</p>\n                </ion-item>\n            </ion-col>\n\n            <ion-col col-6>\n                <ion-item class="outpadding">\n                    <ion-label floating>Fecha de nacimiento:</ion-label>\n                    <ion-datetime displayFormat="DD/MM/YYYY"\n                                  formControlName="birthdate"\n                                  name="date_of_birth"\n                                  max="{{actual}}"></ion-datetime>\n                    <!-- <ion-input type="date" formControlName="birthdate" name="date_of_birth" placeholder="Fecha de nacimiento"></ion-input> -->\n                    <p color="danger" ion-text *ngIf="registerForm.get(\'birthdate\').hasError(\'required\')">Fecha de Nacimiento requerido</p>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col col-6>\n                <ion-item>\n                    <ion-label stacked>Tipo de documento:</ion-label>\n                    <ion-select [(ngModel)]="change" formControlName="documentType" name="type_document">\n                        <ion-option value=D.N.I>D.N.I</ion-option>\n                        <ion-option value=2>Pasaporte</ion-option>\n                        <ion-option value=3>C.E.</ion-option>\n                    </ion-select>\n                </ion-item>\n            </ion-col>\n\n            <ion-col col-6>\n                <ion-item>\n                    <ion-label stacked>Tipo de documento:</ion-label>\n                    <ion-input *ngIf="change == 3" placeholder="Nº de Carne" type="tel" minlength=12 maxlength=12 formControlName="documentNumber" name="dni" stacked></ion-input>\n                    <ion-input *ngIf="change == \'D.N.I\'" placeholder="Nº de Dni" type="number" formControlName="documentNumber" minlength=8 maxlength=8 name="dni" stacked></ion-input>\n                    <ion-input *ngIf="change == 2" placeholder="Nº de Pasaporte" type="number" formControlName="documentNumber" minlength=12 maxlength=12 name="dni" stacked></ion-input>\n                    <!-- <p color="danger" ion-text *ngIf="registerForm.get(\'dni\').hasError(\'required\')">DNI requerido</p> -->\n                </ion-item>\n            </ion-col>\n\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label stacked>Telefono:</ion-label>\n                    <ion-input type="tel" formControlName="phone" name="phone"></ion-input>\n                    <p color="danger" ion-text *ngIf="registerForm.get(\'phone\').hasError(\'required\')">Teléfono requerido</p>\n                </ion-item>\n            </ion-col>\n\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label stacked>Email:</ion-label>\n                    <ion-input type="email" formControlName="email" name="email"></ion-input>\n                    <p color="danger" ion-text *ngIf="registerForm.get(\'email\').hasError(\'required\')">Email requerido</p>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-item>\n            <ion-label stacked>Contraseña:</ion-label>\n            <ion-input type="password" required name="password" formControlName="password"></ion-input>\n            <p color="danger" ion-text *ngIf="registerForm.get(\'password\').hasError(\'required\')">Contraseña requerida</p>\n            <p color="danger" ion-text *ngIf="registerForm.get(\'password\').hasError(\'minLength\')">Minimo 8 caracteres</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked>Repetir contraseña:</ion-label>\n            <ion-input type="password" formControlName="password_confirmation" name="password_confirmation"></ion-input>\n        </ion-item>\n\n\n\n        <button ion-button type="submit" [disabled]="!registerForm.valid || !validacion()" full color="primary" class="alto50">Registro</button>\n\n        <ion-grid>\n            <ion-row>\n                <ion-col col-6>\n                    <button ion-button clear class=" bajas " item-start (click)="seeConditions() ">terminos y condiciones</button>\n                </ion-col>\n                <ion-col col-6 class="derecha ">\n                    <button ion-button clear class="bajas derecha " item-end (click)="goToLogin() ">Tengo una cuenta</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/user/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_crudparent_crudparent__["a" /* CrudparentProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

},[442]);
//# sourceMappingURL=main.js.map
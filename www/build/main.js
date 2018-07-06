webpackJsonp([0],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateparentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_crudparent_crudparent__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dependents_dependents__ = __webpack_require__(79);
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
                console.log(_this.parents);
                _this.viewCtrl.dismiss(_this._parents);
            });
        });
    };
    CreateparentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateparentPage');
    };
    CreateparentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-createparent',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/createparent/createparent.html"*/'\n<ion-content padding class="gris">\n<div class="cienPorCiento">\n  <ion-row>\n    <ion-col col-9>\n      <h3 class="tituloFamiliar">Creación de cuenta Adicional</h3>\n    </ion-col>\n    <ion-col col-3 class="contenedorButton">\n      <button ion-button class="buttonClose">\n        <ion-icon name="close" color="secondary" class="close" round (click)="closeModal()">\n        </ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</div>\n\n<form [formGroup]="formFamily" (ngSubmit)="saveData(formFamily.value)" novalidate>\n  <ion-list>\n    <ion-grid>\n\n      <ion-item>\n        <ion-label stacked>Nombres:</ion-label>\n        <ion-input formControlName="name" type="text" maxlength="40">\n        </ion-input>\n      </ion-item>\n\n<ion-item>\n  <ion-label stacked>Apellido Paterno:</ion-label>\n  <ion-input formControlName="paternal_surname" type="text" maxlength="40">\n  </ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label stacked>Apellido Materno:</ion-label>\n  <ion-input formControlName="maternal_surname" type="text" maxlength="40">\n  </ion-input>\n</ion-item>\n\n<ion-col col-12>\n  <ion-item>\n    <ion-label stacked>Nacimiento:</ion-label>\n    <ion-datetime displayFormat="MM/DD/YYYY"\n                  formControlName="date_of_birth"\n                  name="date_of_birth"\n                  max="{{actual}}"></ion-datetime>\n    <!-- <ion-input type="date" formControlName="date_of_birth" name="date_of_birth"></ion-input> -->\n  </ion-item>\n</ion-col>\n\n<ion-row>\n  <ion-col col-6>\n    <ion-item>\n      <ion-label stacked>Sexo:</ion-label>\n      <ion-select formControlName="gender" name="gender">\n        <ion-option value="HOMBRE">Hombre</ion-option>\n        <ion-option value="MUJER">MUJER</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-col>\n\n\n<ion-col col-6>\n  <ion-item>\n    <ion-label stacked>Documento:</ion-label>\n    <ion-select [(ngModel)]="change" formControlName="type_document" name="type_document" floating>\n      <ion-option value="D.N.I">DNI</ion-option>\n      <ion-option value="carne_extranjeria">Carne de Extranjeria</ion-option>\n      <ion-option value="pasaporte">Pasaporte</ion-option>\n    </ion-select>\n  </ion-item>\n</ion-col>\n\n<ion-col col-12>\n  <ion-item>\n    <ion-label stacked> Nº Documento:</ion-label>\n    <ion-input *ngIf="change === \'D.N.I\'" type="number" formControlName="dni" name="dni" minlength="8" maxlength="8" floating></ion-input>\n    <ion-input *ngIf="change === \'carne_extranjeria\'" type="tel" formControlName="dni" name="dni" minlength="12" maxlength="12"\n      floating></ion-input>\n    <ion-input *ngIf="change === \'pasaporte\'" type="tel" formControlName="dni" name="dni" minlength="12" maxlength="12" floating></ion-input>\n    <!-- <p color="danger" ion-text *ngIf="registerForm.get(\'dni\').hasError(\'required\')">DNI requerido</p> -->\n  </ion-item>\n</ion-col>\n</ion-row>\n</ion-grid>\n\n<ion-col col-12>\n  <ion-item>\n    <ion-label stacked>Parentesco:</ion-label>\n    <ion-select formControlName="kindred" name="kindred" floating>\n      <!-- <ion-option value="father">Padre</ion-option>\n      <ion-option value="mother">Madre</ion-option> -->\n      <ion-option value="hijo/a">hijo/a</ion-option>\n      <!-- <ion-option value="daughter">Hija</ion-option>\n      <ion-option value="uncle">Tio</ion-option>\n      <ion-option value="aunt">Tia</ion-option> -->\n    </ion-select>\n  </ion-item>\n</ion-col>\n\n    </ion-list>\n\n    <button ion-button type="submit"\n            [disabled]="!formFamily.valid"\n            block\n            color="secondary"\n            class="guardaryContinuar">Guardar y continuar</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/createparent/createparent.html"*/,
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

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationPublicProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(491);
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

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_crudparent_crudparent__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sha_js__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sha_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sha_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__code_code__ = __webpack_require__(155);
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
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(8)]]
            // password_confirmation: ['',  [ Validators.required ]]
        });
        // , {validator: this.areEqual('password', 'password_confirmation')}
    }
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
    // areEqual(passwordKey: string, passwordConfirmationKey: string) {
    //   return (group: FormGroup) => {
    //     let passwordInput = group.controls[passwordKey];
    //     let passwordConfirmationInput = group.controls[passwordConfirmationKey];
    //     if (passwordInput.value !== passwordConfirmationInput.value) {
    //       return passwordConfirmationInput.setErrors({notEquivalent: true})
    //     }
    //   }
    // }
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
            // console.log(this.resolve);
            if (_this.resolve.result == "ok") {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__code_code__["a" /* CodePage */], {
                    datos: datos, hora: _this.hora, available: _this.available, doctor: _this.doctor
                });
            }
            else {
                console.log("mantener por error hasta solucionar el error");
            }
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/user/register/register.html"*/'<ion-header>\n    <ion-navbar color="primary" hideBackButton="true">\n        <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n        <ion-title> Registro </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="gris">\n    <ion-item *ngIf="msg">\n        <p color="danger" ion-text>{{ msg }}</p>\n    </ion-item>\n\n    <h4 class="registroDeUsuarioTitulo">Completa tu registro para obtener una cuenta...así de facil..</h4>\n\n    <form [formGroup]="registerForm" (ngSubmit)="registerNewUser(registerForm.value)"  novalidate>\n\n        <ion-row>\n            <!-- <ion-item>\n                <ion-label floating>Nombres:</ion-label>\n                <ion-input type="text" formControlName="name" name="name"></ion-input>\n                <p color="danger" ion-text *ngIf="registerForm.get(\'name\').hasError(\'required\')">Nombre requerido</p>\n            </ion-item> -->\n            <mat-form-field class="example-full-width">\n              <input matInput\n                    type="text"\n                     placeholder="Nombres:"\n                     formControlName="name">\n\n            </mat-form-field>\n\n            <ion-item>\n                <ion-label floating>Apellido Paterno</ion-label>\n                <ion-input type="text" formControlName="surname1" name="paternal_surname"></ion-input>\n                <p color="danger" ion-text *ngIf="registerForm.get(\'surname1\').hasError(\'required\')">Apellido Paterno requerido</p>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Apellido Materno</ion-label>\n                <ion-input type="text" formControlName="surname2" name="maternal_surname"></ion-input>\n                <p color="danger" ion-text *ngIf="registerForm.get(\'surname2\').hasError(\'required\')">Apellido Materno requerido</p>\n            </ion-item>\n\n            <ion-col col-6>\n                <ion-item>\n                    <ion-label floating>Sexo:</ion-label>\n                    <ion-select formControlName="gender" name="gender">\n                        <!-- <ion-option value=1>Indistinto</ion-option> -->\n                        <ion-option value="HOMBRE">Hombre</ion-option>\n                        <!-- <ion-option value=3>Mujer</ion-option> -->\n                    </ion-select>\n                    <p color="danger" ion-text *ngIf="registerForm.get(\'gender\').hasError(\'required\')">Genero requerido</p>\n                </ion-item>\n            </ion-col>\n\n            <ion-col col-6>\n                <ion-item class="outpadding">\n                    <ion-label floating>Fecha de nacimiento:</ion-label>\n                    <ion-datetime displayFormat="DD/MM/YYYY"\n                                  formControlName="birthdate"\n                                  name="date_of_birth"\n                                  max="{{actual}}"></ion-datetime>\n                    <!-- <ion-input type="date" formControlName="birthdate" name="date_of_birth" placeholder="Fecha de nacimiento"></ion-input> -->\n                    <p color="danger" ion-text *ngIf="registerForm.get(\'birthdate\').hasError(\'required\')">Fecha de Nacimiento requerido</p>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col col-6>\n                <ion-item>\n                    <ion-label stacked>Tipo de documento:</ion-label>\n                    <ion-select [(ngModel)]="change" formControlName="documentType" name="type_document">\n                        <ion-option value=D.N.I>D.N.I</ion-option>\n                        <ion-option value=2>Pasaporte</ion-option>\n                        <ion-option value=3>C.E.</ion-option>\n                    </ion-select>\n                </ion-item>\n            </ion-col>\n\n            <ion-col col-6>\n                <ion-item>\n                    <ion-label stacked>Tipo de documento:</ion-label>\n                    <ion-input *ngIf="change == 3" placeholder="Nº de Carne" type="tel" minlength=12 maxlength=12 formControlName="documentNumber" name="dni" stacked></ion-input>\n                    <ion-input *ngIf="change == \'D.N.I\'" placeholder="Nº de Dni" type="number" formControlName="documentNumber" minlength=8 maxlength=8 name="dni" stacked></ion-input>\n                    <ion-input *ngIf="change == 2" placeholder="Nº de Pasaporte" type="number" formControlName="documentNumber" minlength=12 maxlength=12 name="dni" stacked></ion-input>\n                    <!-- <p color="danger" ion-text *ngIf="registerForm.get(\'dni\').hasError(\'required\')">DNI requerido</p> -->\n                </ion-item>\n            </ion-col>\n\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label stacked>Telefono:</ion-label>\n                    <ion-input type="tel" formControlName="phone" name="phone"></ion-input>\n                    <p color="danger" ion-text *ngIf="registerForm.get(\'phone\').hasError(\'required\')">Teléfono requerido</p>\n                </ion-item>\n            </ion-col>\n\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label stacked>Email:</ion-label>\n                    <ion-input type="email" formControlName="email" name="email"></ion-input>\n                    <p color="danger" ion-text *ngIf="registerForm.get(\'email\').hasError(\'required\')">Email requerido</p>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-item>\n            <ion-label stacked>Contraseña:</ion-label>\n            <ion-input type="password" required name="password" formControlName="password"></ion-input>\n            <p color="danger" ion-text *ngIf="registerForm.get(\'password\').hasError(\'required\')">Contraseña requerida</p>\n            <p color="danger" ion-text *ngIf="registerForm.get(\'password\').hasError(\'minLength\')">Minimo 8 caracteres</p>\n        </ion-item>\n<!--\n        <ion-item>\n            <ion-label stacked>Repetir contraseña:</ion-label>\n            <ion-input type="password" formControlName="password_confirmation" name="password_confirmation"></ion-input>\n            <p color="danger" ion-text *ngIf="registerForm.get(\'password_confirmation\').hasError(\'required\')">No coincide con la contraseña</p>\n        </ion-item> -->\n\n\n\n        <button ion-button type="submit" [disabled]="!registerForm.valid" full color="primary" class="alto50">Registro</button>\n\n        <ion-grid>\n            <ion-row>\n                <ion-col col-6>\n                    <button ion-button clear class=" bajas " item-start (click)="seeConditions() ">terminos y condiciones</button>\n                </ion-col>\n                <ion-col col-6 class="derecha ">\n                    <button ion-button clear class="bajas derecha " item-end (click)="goToLogin() ">Tengo una cuenta</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/user/register/register.html"*/,
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

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_crudparent_crudparent__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appointment_financer_financer__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(96);
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
                localStorage.setItem('idTokenUser', data.patientId);
                localStorage.setItem('emailUser', data.emailPaciente);
                localStorage.setItem('authorization', data.authorization);
                localStorage.setItem('role', data.role);
                localStorage.setItem('patientName', data.patientName);
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
            console.log('lño que me llega del vaildate:', _this.code);
        });
    };
    CodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-code',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/code/code.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Código de Validación</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p class="codigoValida">hemos enviado al correo el código de validación , ingresalo y listo....</p>\n <ion-row>\n   <div col-2></div>\n   <div col-8>\n      <form [formGroup]="formCode" (ngSubmit)="saveData(formCode.value)" novalidate>\n     <ion-row>\n         <ion-col class="rectanguloInput">\n            <ion-input type="number"\n                       [(ngModel)]="primero"\n                       formControlName="primero"\n                        ></ion-input>\n          </ion-col>\n         <ion-col class="rectanguloInput">\n            <ion-input type="number"\n                        [(ngModel)]="segundo"\n                        formControlName="segundo"\n                        ></ion-input>\n          </ion-col>\n         <ion-col class="rectanguloInput">\n           <ion-input type="number"\n                      tercero="tercero"\n                      formControlName="tercero"\n                      ngModel></ion-input>\n          </ion-col>\n          <ion-col class="rectanguloInput">\n              <ion-input type="number"\n                         tercero="cuarto"\n                         formControlName="cuarto"\n                         ngModel></ion-input>\n             </ion-col>\n            </ion-row>\n            <div class="center">\n              <button ion-button\n                       type="submit">\n                 registrarme\n              </button>\n            </div>\n    </form>\n   </div>\n   <div col-2></div>\n </ion-row>\n\n\n <div class="center">\n   <p class="newCode">Si no recibiste o caduco tu codigo puedes solicitar uno nuevo.</p>\n   <button ion-button\n          class="codigoreen"\n          clear\n          (click)="sendCode()">reenviar códido\n </button>\n </div>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/code/code.html"*/,
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

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_crudparent_crudparent__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appoinment_appoinment__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__card_card__ = __webpack_require__(60);
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
        var loadingPago = this.loadingCtrl.create({
            content: "Haciendo el cobro...",
        });
        loadingPago.present();
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
            this.appointmentProvider.createAppointment(this.subida).subscribe(function (data) {
                // console.log("se ha creado la cita");
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
            selector: 'page-pay',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/pay/pay.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Pago</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n    <div class="container-gris">\n      <div class="containerResumen">\n        <ion-card>\n            <div class="containerTextoPago">\n                <h3 class="titleCardPago">Lo que has escogido hasta el momento</h3>\n            </div>\n            <div>\n                <ion-row class="centrar">\n                    <ion-col col-4>\n                        <img id="profile-image" src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{doctor.id}}.png">\n                    </ion-col>\n                    <ion-col col-8>\n                        <h3 class="nombreDoctor" text-center>\n                            {{ doctor.fullName }}\n                        </h3>\n                        <div class="sedeContainer">\n                            <!-- <p bold class="izquierda">Sede:</p> -->\n                            <p class="sede" type="text" disabled="true">Mendiola</p>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </div>\n                <div  class="centrar">\n                    <p class="izquierda">Especialidad:</p>\n                    <p item-end class="blue" disabled="true"> {{ doctor.service.description }}</p>\n                </div>\n                <div  class="centrar">\n                    <p class="izquierda">Fecha:</p>\n                    <p item-end class="blue" disabled="true">\n                        {{ available | date:\'EEEE d , MMMM \' : \'es\' }}\n                    </p>\n                </div>\n                <div  class="centrar">\n                    <p class="izquierda">Hora:</p>\n                    <p class="blue" type="text" disabled="true">\n                        {{ hora.hour | slice:0:5}}\n                    </p>\n                </div>\n                <div  class="centrar">\n                    <p class="izquierda">Costo:</p>\n                    <p class="blue" item-end type="text" disabled="true">\n                        {{ \'S/. \' + price + \'.00\'}}\n                    </p>\n                </div>\n        </ion-card>\n      </div>\n      <div padding>\n        <!-- <h4 text-center class="tituloMetodos">Metodos de Pago</h4> -->\n        <h4 class="tituloPagos">Escoge la forma en la que vas a pagar y listo...</h4>\n        <ion-segment [(ngModel)]="pago">\n            <ion-segment-button value="enLocal">\n                En local\n            </ion-segment-button>\n            <ion-segment-button value="enClinica">\n                Con tarjeta\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n    <div [ngSwitch]="pago">\n        <ion-list *ngSwitchCase="\'enLocal\'">\n            <div class="resumen" >\n              <div padding>\n                <button *ngIf="!depe"\n                        ion-button color="secondary"\n                        class="botonAccept"\n                        [class.button-disabled]="true"\n                        block\n                        (click)="next()">Confirmar cita\n                </button>\n                <button *ngIf="depe"\n                      ion-button\n                      color="secondary"\n                      class="botonAccept"\n                      [class.button-disabled]="true"\n                      block (click)="nextDepe()">Confirmar cita\n                </button>\n            </div>\n          </div>\n      </ion-list>\n        <ion-list *ngSwitchCase="\'enClinica\'">\n            <div class="resumen" >\n\n\n\n        <div padding>\n            <button ion-button color="secondary" class="botonAccept" [class.button-disabled]="true" block (click)="payCulqi()">Pago con tarjeta</button>\n        </div>\n\n        <!-- <div padding>\n                <button ion-button color="secondary" class="botonAccept" [class.button-disabled]="true" block (click)="openModalPayu()">Pagar ahora con payu</button>\n            </div> -->\n\n\n    </div>\n        </ion-list>\n    </div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/pay/pay.html"*/,
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

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appoinment_appoinment__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_date_modal_my_date_modal__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dependents_dependents__ = __webpack_require__(79);
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
    function MyDatesPage(navCtrl, alertCtrl, modalCtrl, viewCtrl, navParams, appointmentProvider, dependentsProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.appointmentProvider = appointmentProvider;
        this.dependentsProvider = dependentsProvider;
        this.appointmentProvider.getAppointmentsPeruser().subscribe(function (data) {
            _this.citas = 'miscitas';
            _this.tasks = data;
            _this.mostrar = _this.tasks.length;
            console.log('mis citas:', _this.tasks);
            // console.log('tasks:', this.tasks);
        }, function (err) {
            console.error('algo fallo');
        });
        this.dependentsProvider.getdependesDay().subscribe(function (data) {
            _this.tasksParents = data;
            console.log('las citas de los familiares:', _this.tasksParents);
        });
    }
    MyDatesPage.prototype.gotoDetails = function (task) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__my_date_modal_my_date_modal__["a" /* MyDateModalPage */], { task: task, tasks: this.tasks });
    };
    MyDatesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-dates',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/my-dates/my-dates.html"*/'<ion-header>\n    <ion-navbar color="primary" hideBackButton="true">\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title> Mi citas </ion-title>\n    </ion-navbar>\n    <ion-toolbar color="primary">\n      <ion-segment [(ngModel)]="citas" color="secondary">\n        <ion-segment-button value="miscitas">\n          <p>Mis citas</p>\n        </ion-segment-button>\n        <ion-segment-button value="citasfamiliares">\n          <p>citas familiares</p>\n        </ion-segment-button>\n        <!-- <ion-segment-button value="nocamera">\n          <ion-icon name="camera"></ion-icon>\n        </ion-segment-button> -->\n      </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]="citas">\n      <div *ngSwitchCase="\'miscitas\'">\n        <ion-list *ngFor=\'let task of tasks\'>\n        <ion-card (click)="gotoDetails(task)" class="bordeDerecho" *ngIf="task ">\n            <ion-item>\n                <ion-row>\n                    <ion-col col-4>\n                        <ion-avatar item-start>\n                            <img src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{task.professional.id}}.png">\n                        </ion-avatar>\n                    </ion-col>\n                    <ion-col col-8>\n                        <h3 class="tituloCitas">{{task.professional.fullName | slice:0:25 | lowercase}}</h3>\n                        <p class="especialidad">{{ task.service.basicService.description | lowercase }}</p>\n                        <p class="sede">{{ task.service.center.name | lowercase }}</p>\n                    </ion-col>\n                    <ion-col col-12 class="gris">\n                        <ion-row>\n                            <ion-col class="diaCita">\n                                <p class="day">{{ task.appointmentDateTime | date:\'EEEE d , MMMM \' : \'es\' }} </p>\n                            </ion-col>\n                            <ion-col class="hourCita">\n                                <p class="hour">{{ task.appointmentDateTime | date: \'HH:mm\' }}</p>\n                            </ion-col>\n                        </ion-row>\n\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n        </ion-card>\n    </ion-list>\n      </div>\n      <div *ngSwitchCase="\'citasfamiliares\'">\n          <ion-list *ngFor=\'let taskpa of tasksParents\'>\n              <ion-card (click)="gotoDetails(task)" class="bordeDerecho" *ngIf="taskpa.appointments[0]">\n                  <ion-item>\n                      <ion-row>\n                          <ion-col col-4>\n                              <ion-avatar item-start>\n                                  <img src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{taskpa.appointments[0].professional.id}}.png">\n                              </ion-avatar>\n                          </ion-col>\n                          <ion-col col-8>\n                              <p class="nombreFamiliar">{{taskpa.user.patientName}}</p>\n                              <p class="parentesco">hijo</p>\n                              <h3 class="tituloCitas">Dr. {{taskpa.appointments[0].professional.fullName | slice:0:25 | lowercase}}</h3>\n                              <p class="especialidad">{{ taskpa.appointments[0].service.basicService.description | lowercase }}</p>\n                              <p class="sede">{{ taskpa.appointments[0].service.center.name | lowercase }}</p>\n                          </ion-col>\n                          <ion-col col-12 class="gris">\n                              <ion-row>\n                                  <ion-col class="diaCita">\n                                      <p class="day">{{ taskpa.appointments[0].appointmentDateTime | date:\'EEEE d , MMMM \' : \'es\' }} </p>\n                                  </ion-col>\n                                  <ion-col class="hourCita">\n                                      <p class="hour">{{ taskpa.appointments[0].appointmentDateTime | date: \'HH:mm\' }}</p>\n                                  </ion-col>\n                              </ion-row>\n\n                          </ion-col>\n                      </ion-row>\n                  </ion-item>\n              </ion-card>\n          </ion-list>\n        </div>\n      <!-- <div *ngSwitchCase="\'nocamera\'">\n          lo que hay dentro de nocamera\n        </div> -->\n  </div>\n\n    <p *ngIf="mostrar == 0" class="textoCitasNulo">No tienes citas programadas</p>\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/my-dates/my-dates.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appoinment_appoinment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_dependents_dependents__["a" /* DependentsProvider */]])
    ], MyDatesPage);
    return MyDatesPage;
}());

//# sourceMappingURL=my-dates.js.map

/***/ }),

/***/ 181:
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
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyparentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dependents_dependents__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_crudparent_crudparent__ = __webpack_require__(67);
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
            selector: 'page-myparents',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/myparents/myparents.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Mis Parientes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div >\n    <ion-card *ngFor="let depe of dependens">\n      <ion-row>\n        <ion-col col-4>\n          <ion-avatar>\n            <img src="../assets/imgs/avatars/nino.png" alt="">\n          </ion-avatar>\n        </ion-col>\n        <ion-col col-6>\n            <h3 class="nombrePariente">{{depe.name}}</h3>\n            <p  *ngIf="depe.relation"\n                class="parentesco">{{depe.relation.name}}</p>\n            <p class="edad">7 años</p>\n        </ion-col>\n        <ion-col col-2>\n          <button ion-button\n                  clear\n                  (click)="deleteParent(depe)">\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <div class="center">\n    <button ion-button\n            color="secondary"\n            (click)="showForm()">\n     Agregar familiar\n    </button>\n  </div>\n  <div *ngIf="openForm == true"\n        class="down20">\n      <div class="cienPorCiento">\n        <h3 class="tituloFamiliar">Creación de cuenta Adicional</h3>\n      </div>\n\n      <form [formGroup]="formFamily" (ngSubmit)="saveData(formFamily.value)" novalidate>\n          <ion-list>\n            <ion-grid>\n\n              <ion-item>\n                <ion-label fixed>Nombres:</ion-label>\n                <ion-input formControlName="name" type="text" maxlength="40">\n                </ion-input>\n              </ion-item>\n\n        <ion-item>\n          <ion-label fixed>Apellido Paterno:</ion-label>\n          <ion-input formControlName="paternal_surname" type="text" maxlength="40">\n          </ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label fixed>Apellido Materno:</ion-label>\n          <ion-input formControlName="maternal_surname" type="text" maxlength="40">\n          </ion-input>\n        </ion-item>\n\n        <ion-col col-12>\n          <ion-item>\n            <ion-label fixed>Nacimiento:</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY"\n                                  formControlName="date_of_birth"\n                                  max="{{actual}}"></ion-datetime>\n          </ion-item>\n        </ion-col>\n\n        <ion-row>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label fixed>Sexo:</ion-label>\n              <ion-select formControlName="gender" name="gender">\n                <ion-option value="HOMBRE">HOMBRE</ion-option>\n                <ion-option value="MUJER">MUJER</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n\n\n        <ion-col col-6>\n          <ion-item>\n            <ion-label fixed>Documento:</ion-label>\n            <ion-select [(ngModel)]="change" formControlName="type_document" name="type_document" floating>\n              <ion-option value="D.N.I">DNI</ion-option>\n              <ion-option value="carne_extranjeria">Carne de Extranjeria</ion-option>\n              <ion-option value="pasaporte">Pasaporte</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-item>\n            <ion-label fixed> Nº Documento:</ion-label>\n            <ion-input *ngIf="change === \'D.N.I\'" type="number" formControlName="dni" name="dni" minlength="8" maxlength="8" floating></ion-input>\n            <ion-input *ngIf="change === \'carne_extranjeria\'" type="tel" formControlName="dni" name="dni" minlength="12" maxlength="12"\n              floating></ion-input>\n            <ion-input *ngIf="change === \'pasaporte\'" type="tel" formControlName="dni" name="dni" minlength="12" maxlength="12" floating></ion-input>\n            <!-- <p color="danger" ion-text *ngIf="registerForm.get(\'dni\').hasError(\'required\')">DNI requerido</p> -->\n          </ion-item>\n        </ion-col>\n        </ion-row>\n        </ion-grid>\n\n        <ion-col col-12>\n          <ion-item>\n            <ion-label fixed>Parentesco:</ion-label>\n            <ion-select formControlName="kindred" name="kindred" floating>\n              <!-- <ion-option value="father">Padre</ion-option>\n              <ion-option value="mother">Madre</ion-option> -->\n              <ion-option value="hijo/a">hijo/a</ion-option>\n              <!-- <ion-option value="daughter">Hija</ion-option>\n              <ion-option value="uncle">Tio</ion-option>\n              <ion-option value="aunt">Tia</ion-option> -->\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n            </ion-list>\n\n            <button ion-button type="submit" [disabled]="!formFamily.valid" block color="secondary" class="guardaryContinuar">Guardar y continuar</button>\n          </form>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/myparents/myparents.html"*/,
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

/***/ 225:
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
webpackEmptyAsyncContext.id = 225;

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_payu_test_payu_test__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appoinment_appoinment__ = __webpack_require__(53);
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

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayuTestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
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

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancierProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(51);
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
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], FinancierProvider);
    return FinancierProvider;
}());

//# sourceMappingURL=financier.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(394);
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

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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
            selector: 'page-profile',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/user/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>Mis Datos</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <!-- <div class="cargaImagen">\n        <img src="#" alt="">\n    </div> -->\n\n    <h4>Nombre Usuario</h4>\n    <ion-row>\n\n        <ion-col col-12>\n            <ion-item>\n                <ion-label stacked>Nombre de usuario</ion-label>\n                <ion-input type="text" value="">Nombre de usuario</ion-input>\n            </ion-item>\n        </ion-col>\n\n        <ion-col col-12>\n            <ion-item>\n                <ion-label stacked>apellidos de usuario</ion-label>\n                <ion-input type="text" value="">Apellidos de usuario</ion-input>\n            </ion-item>\n        </ion-col>\n\n        <ion-col col-6>\n            <ion-item>\n                <ion-label stacked>Sexo</ion-label>\n                <ion-input type="text" value="">Sexo</ion-input>\n            </ion-item>\n        </ion-col>\n\n        <ion-col col-6>\n            <ion-item>\n                <ion-label stacked>Fecha de nacimiento</ion-label>\n                <ion-input type="text" value="">Apellidos de usuario</ion-input>\n            </ion-item>\n        </ion-col>\n\n        <ion-col col-12>\n            <ion-item>\n                <ion-label stacked>Correo Electronico</ion-label>\n                <ion-input type="text" value="">Correo</ion-input>\n            </ion-item>\n        </ion-col>\n\n        <ion-col col-12>\n            <ion-item>\n                <ion-label stacked>Contraseña</ion-label>\n                <ion-input type="text" value="">Contraseña</ion-input>\n            </ion-item>\n        </ion-col>\n\n        <ion-col col-12>\n            <ion-item>\n                <ion-label stacked>Confirmar Contraseña</ion-label>\n                <ion-input type="text" value="">Confirmar contraseña</ion-input>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n\n    <button ion-button color="primary" block class="alto50">volver</button>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/user/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 400:
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

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDateModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_appoinment_appoinment__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_dates__ = __webpack_require__(158);
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
            title: 'ANULAR CITA',
            message: '¿Estas seguro que quieres eliminar esta cita?',
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
            selector: 'page-my-date-modal',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/my-dates/my-date-modal/my-date-modal.html"*/'<ion-header>\n\n    <ion-navbar color="azul">\n        <ion-title class="titleHeader">Mis citas - {{ task.service.basicService.description | slice:0:6 }}</ion-title>\n        <!-- <ion-buttons end>\n            <button ion-button icon-only color="royal" (click)="dismiss()">\n      </button>\n        </ion-buttons> -->\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content has-header="true">\n    <ion-list>\n\n        <img id="profile-image" src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{task.professional.id}}.png">\n\n        <h3 class="nombreDoctor" text-center>{{ task.professional.fullName | lowercase }} </h3>\n\n        <ion-item>\n            <ion-icon item-start><i class="fa fa-hospital-o" aria-hidden="true"></i></ion-icon>\n            <ion-label class="heightNoventa">Sede:</ion-label>\n            <ion-label class="blue"> {{ task.service.center.name | lowercase }}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-icon item-start><i class="fa fa-heartbeat" aria-hidden="true"></i></ion-icon>\n            <ion-label class="heightNoventa">Especialidad:</ion-label>\n            <ion-label class="blue"> {{ task.service.basicService.description | lowercase }}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-icon item-start><i class="fa fa-calendar-check-o" aria-hidden="true"></i></ion-icon>\n            <ion-label class="heightNoventa">Fecha:</ion-label>\n            <ion-label class="blue"> {{ task.appointmentDateTime | date:\'EEEE d , MMMM \' : \'es\' }}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-icon item-start><i class="fa fa-clock-o" aria-hidden="true"></i></ion-icon>\n            <ion-label class="heightNoventa">Hora:</ion-label>\n            <ion-label class="blue"> {{ task.appointmentDateTime | date: \'HH:mm\' }}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-icon item-start><i class="fa fa-universal-access" aria-hidden="true"></i></ion-icon>\n            <ion-label class="heightNoventa">Seguro:</ion-label>\n            <ion-label class="blue"> {{ task.plan.description | lowercase }}</ion-label>\n        </ion-item>\n\n        <!-- <ion-item>\n            <ion-icon item-start><i class="fa fa-money" aria-hidden="true"></i></ion-icon>\n            <ion-label>Pago </ion-label>\n            <ion-label class="blue" item-end>{{task.payment_method | lowercase }}</ion-label>\n            <button item-end ion-button color="primary" (click)="editPayment(task)" *ngIf="task.payment_method == \'en local\'">\n          Editar\n        </button>\n        </ion-item> -->\n\n        <!-- <ion-item *ngIf="task.isCard">\n            <ion-icon item-start><i class="fa fa-money" aria-hidden="true"></i></ion-icon>\n            <ion-label>Pago </ion-label>\n            <ion-label class="blue" item-end>S/.{{task.amount}}.00</ion-label>\n            <ion-input value="{{task.numMasCard}}" type="text" maxlength="16" clearInput disabled="true"></ion-input>\n        </ion-item> -->\n\n        <!-- <ion-item>\n            <ion-icon item-start><i class="fa fa-usd" aria-hidden="true"></i></ion-icon>\n            <ion-label>Costo</ion-label>\n            <ion-label class="blue" item-end> S/.{{task.amount}}.00</ion-label>\n        </ion-item> -->\n\n        <ion-item>\n            <ion-row>\n                <ion-col col-6>\n                    <button ion-button block color="secondary" (click)=\'desactivateTask(task)\'>ANULAR CITA</button>\n                </ion-col>\n                <ion-col col-6>\n                    <button ion-button block (click)="dismiss()">VOLVER</button>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n    </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/my-dates/my-date-modal/my-date-modal.html"*/,
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

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_recipes_recipes__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
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
        // ahora esta implementado así.... pero no funcionará
        // porque lo que tiene que pasar es tener un endpoint que me traiga todos las recetas
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipesPvr = recipesPvr;
        this.id = 18439;
        // this.recipesPvr.getAllRecipes().subscribe(data=>{
        //   this.recipes = data;
        //   console.log(this.recipes);
        this.recipesPvr.getRecipes(this.id).subscribe(function (data) {
            _this.recipes = data;
            console.log(_this.recipes);
        });
    }
    RecipesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecipesPage');
    };
    RecipesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-recipes',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/recipes/recipes.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Mis Recetas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <div padding *ngIf="recipes">\n            <div *ngFor="let recipe of recipes">\n              <ion-row>\n                <ion-col col-3>\n                    <img src="assets/imgs/recipes/{{recipe.formasfar_pk}}.png" alt="">\n                </ion-col>\n                <ion-col col-9 >\n                    <p class="nombrePastilla"\n                      *ngIf="recipe.marca_comercial">\n                      {{recipe.marca_comercial}}\n                    </p>\n                    <p class="nombrePastilla"\n                       *ngIf="recipe.marca_comercial == null">\n                       {{recipe.nombre_generico}}\n                      </p>\n                </ion-col>\n              </ion-row>\n                 <!-- inicio de los datos de la pastilla -->\n\n              <p class="cantidadDeDias">Tratamiento de 5 dias</p>\n              <p class="inicio">Inicio de Tratamiento: {{recipe.inicio_prescripcion | date: "dd MMMM yyyy"}}</p>\n               <!-- fin de los datos de la pastilla -->\n\n             <!-- inicio de los cuadros para las toma de pastilla -->\n              <div *ngIf="recipes && recipe.cada_x_horas == 8"\n                    class="down">\n                <h4 class="tituloDeLasTomas"> tomas de 3 veces por día</h4>\n                <ion-row padding>\n                  <ion-col class="cuadrados">\n                    <p> 6am - 9am</p>\n                    <p class="cantidad">{{recipe.cantidad_dosis}}</p>\n                    </ion-col>\n                  <ion-col class="cuadrados">\n                    <p> 2pm - 4pm</p>\n                    <p class="cantidad"> {{recipe.cantidad_dosis}} </p>\n                  </ion-col>\n                  <ion-col class="cuadrados">\n                    <p>10pm - 12m</p>\n                    <p class="cantidad"> {{recipe.cantidad_dosis}} </p>\n                  </ion-col>\n                </ion-row>\n            </div>\n\n            <div *ngIf="recipes && recipe.cada_x_horas == 12"\n                  class="down">\n              <p class="tituloDeLasTomas"> tomas de 2 veces por día</p>\n              <ion-row padding>\n                <ion-col class="cuadrados">\n                  <p> 6am-9am</p>\n                  <p class="cantidad">{{recipe.cantidad_dosis}}</p>\n                </ion-col>\n                <ion-col class="cuadrados">\n                  <p>6pm-9m</p>\n                  <p class="cantidad"> {{recipe.cantidad_dosis}} </p>\n                </ion-col>\n              </ion-row>\n            </div>\n\n            <div *ngIf="recipes && recipe.cada_x_horas == 6"\n            class="down">\n                <p class="tituloDeLasTomas"> tomas de 4 veces por día</p>\n                <ion-row padding>\n                  <ion-col class="cuadrados">\n                    <p> 6am-8am</p>\n                    <p class="cantidad">{{recipe.cantidad_dosis}}</p>\n                  </ion-col>\n                  <ion-col class="cuadrados">\n                      <p> 12m-2pm</p>\n                      <p class="cantidad">{{recipe.cantidad_dosis}}</p>\n                    </ion-col>\n                    <ion-col class="cuadrados">\n                        <p> 6pm-8pm</p>\n                        <p class="cantidad">{{recipe.cantidad_dosis}}</p>\n                      </ion-col>\n                  <ion-col class="cuadrados">\n                    <p>12m-2am</p>\n                    <p class="cantidad"> {{recipe.cantidad_dosis}} </p>\n                  </ion-col>\n                </ion-row>\n              </div>\n\n          </div>\n        </div>\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/optionals-devs/recipes/recipes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_recipes_recipes__["a" /* RecipesProvider */]])
    ], RecipesPage);
    return RecipesPage;
}());

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__(394);
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
        console.log('Hello RecipesProvider Provider');
    }
    RecipesProvider.prototype.getAllRecipes = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('authorization') });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.apiUrl, options)
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

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_myparents_myparents__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_createparent_createparent__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_payu_payu__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_locales_es__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_card_card__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_charge_charge__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_user_login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_user_register_register__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_user_profile_profile__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_appointment_search_search__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_appointment_financer_financer__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_appointment_pay_pay__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_optionals_devs_my_dates_my_dates__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_optionals_devs_irm_irm__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_optionals_devs_recipes_recipes__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_optionals_devs_recomendations_recomendations__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_optionals_devs_my_dates_my_date_modal_my_date_modal__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_apollo_angular_link_http__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_apollo_cache_inmemory__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_apollo_angular__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_financier_financier__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_user_user__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_appoinment_appoinment__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_authorization_public_authorization_public__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng2_search_filter__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_expandable_expandable_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_platform_browser_animations__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__material_module__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_appointment_master_detail_master_detail__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_hello_hello__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_datos_datos__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_payu_test_payu_test__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_recipes_recipes__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_dependents_dependents__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_crudparent_crudparent__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_code_code__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_dateparent_dateparent__ = __webpack_require__(608);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











Object(__WEBPACK_IMPORTED_MODULE_10__angular_common__["i" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_9__angular_common_locales_es__["a" /* default */]);
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
            cache: new __WEBPACK_IMPORTED_MODULE_28_apollo_cache_inmemory__["a" /* InMemoryCache */]()
        });
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_charge_charge__["a" /* ChargePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_user_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_user_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_user_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_appointment_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_appointment_financer_financer__["a" /* FinancerPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_appointment_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_optionals_devs_my_dates_my_dates__["a" /* MyDatesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_optionals_devs_irm_irm__["a" /* IrmPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_optionals_devs_recipes_recipes__["a" /* RecipesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_optionals_devs_recomendations_recomendations__["a" /* RecomendationsPage */],
                __WEBPACK_IMPORTED_MODULE_36__components_expandable_expandable_component__["a" /* ExpandableComponent */],
                __WEBPACK_IMPORTED_MODULE_39__pages_appointment_master_detail_master_detail__["a" /* MasterDetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_optionals_devs_my_dates_my_date_modal_my_date_modal__["a" /* MyDateModalPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_datos_datos__["a" /* DatosPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_payu_payu__["a" /* PayuPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_createparent_createparent__["a" /* CreateparentPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_myparents_myparents__["a" /* MyparentsPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_code_code__["a" /* CodePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_37__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_35_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_29_apollo_angular__["b" /* ApolloModule */],
                __WEBPACK_IMPORTED_MODULE_27_apollo_angular_link_http__["b" /* HttpLinkModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_38__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_forms__["i" /* ReactiveFormsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_charge_charge__["a" /* ChargePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_user_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_user_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_user_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_appointment_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_appointment_financer_financer__["a" /* FinancerPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_appointment_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_optionals_devs_my_dates_my_dates__["a" /* MyDatesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_optionals_devs_irm_irm__["a" /* IrmPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_optionals_devs_recipes_recipes__["a" /* RecipesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_optionals_devs_recomendations_recomendations__["a" /* RecomendationsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_appointment_master_detail_master_detail__["a" /* MasterDetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_optionals_devs_my_dates_my_date_modal_my_date_modal__["a" /* MyDateModalPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_datos_datos__["a" /* DatosPage */],
                __WEBPACK_IMPORTED_MODULE_36__components_expandable_expandable_component__["a" /* ExpandableComponent */],
                __WEBPACK_IMPORTED_MODULE_2__pages_payu_payu__["a" /* PayuPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_createparent_createparent__["a" /* CreateparentPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_myparents_myparents__["a" /* MyparentsPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_code_code__["a" /* CodePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["H" /* LOCALE_ID */], useValue: "es" },
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_30__providers_financier_financier__["a" /* FinancierProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_appoinment_appoinment__["a" /* AppointmentProvider */],
                __WEBPACK_IMPORTED_MODULE_40__providers_hello_hello__["a" /* HelloProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_authorization_public_authorization_public__["a" /* AuthorizationPublicProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_payu_test_payu_test__["a" /* PayuTestProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_recipes_recipes__["a" /* RecipesProvider */],
                __WEBPACK_IMPORTED_MODULE_44__providers_dependents_dependents__["a" /* DependentsProvider */],
                __WEBPACK_IMPORTED_MODULE_45__providers_crudparent_crudparent__["a" /* CrudparentProvider */],
                __WEBPACK_IMPORTED_MODULE_47__providers_dateparent_dateparent__["a" /* DateparentProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_29_apollo_angular__["a" /* Apollo */], __WEBPACK_IMPORTED_MODULE_27_apollo_angular_link_http__["a" /* HttpLink */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 268,
	"./af.js": 268,
	"./ar": 269,
	"./ar-dz": 270,
	"./ar-dz.js": 270,
	"./ar-kw": 271,
	"./ar-kw.js": 271,
	"./ar-ly": 272,
	"./ar-ly.js": 272,
	"./ar-ma": 273,
	"./ar-ma.js": 273,
	"./ar-sa": 274,
	"./ar-sa.js": 274,
	"./ar-tn": 275,
	"./ar-tn.js": 275,
	"./ar.js": 269,
	"./az": 276,
	"./az.js": 276,
	"./be": 277,
	"./be.js": 277,
	"./bg": 278,
	"./bg.js": 278,
	"./bm": 279,
	"./bm.js": 279,
	"./bn": 280,
	"./bn.js": 280,
	"./bo": 281,
	"./bo.js": 281,
	"./br": 282,
	"./br.js": 282,
	"./bs": 283,
	"./bs.js": 283,
	"./ca": 284,
	"./ca.js": 284,
	"./cs": 285,
	"./cs.js": 285,
	"./cv": 286,
	"./cv.js": 286,
	"./cy": 287,
	"./cy.js": 287,
	"./da": 288,
	"./da.js": 288,
	"./de": 289,
	"./de-at": 290,
	"./de-at.js": 290,
	"./de-ch": 291,
	"./de-ch.js": 291,
	"./de.js": 289,
	"./dv": 292,
	"./dv.js": 292,
	"./el": 293,
	"./el.js": 293,
	"./en-au": 294,
	"./en-au.js": 294,
	"./en-ca": 295,
	"./en-ca.js": 295,
	"./en-gb": 296,
	"./en-gb.js": 296,
	"./en-ie": 297,
	"./en-ie.js": 297,
	"./en-nz": 298,
	"./en-nz.js": 298,
	"./eo": 299,
	"./eo.js": 299,
	"./es": 300,
	"./es-do": 301,
	"./es-do.js": 301,
	"./es-us": 302,
	"./es-us.js": 302,
	"./es.js": 300,
	"./et": 303,
	"./et.js": 303,
	"./eu": 304,
	"./eu.js": 304,
	"./fa": 305,
	"./fa.js": 305,
	"./fi": 306,
	"./fi.js": 306,
	"./fo": 307,
	"./fo.js": 307,
	"./fr": 308,
	"./fr-ca": 309,
	"./fr-ca.js": 309,
	"./fr-ch": 310,
	"./fr-ch.js": 310,
	"./fr.js": 308,
	"./fy": 311,
	"./fy.js": 311,
	"./gd": 312,
	"./gd.js": 312,
	"./gl": 313,
	"./gl.js": 313,
	"./gom-latn": 314,
	"./gom-latn.js": 314,
	"./gu": 315,
	"./gu.js": 315,
	"./he": 316,
	"./he.js": 316,
	"./hi": 317,
	"./hi.js": 317,
	"./hr": 318,
	"./hr.js": 318,
	"./hu": 319,
	"./hu.js": 319,
	"./hy-am": 320,
	"./hy-am.js": 320,
	"./id": 321,
	"./id.js": 321,
	"./is": 322,
	"./is.js": 322,
	"./it": 323,
	"./it.js": 323,
	"./ja": 324,
	"./ja.js": 324,
	"./jv": 325,
	"./jv.js": 325,
	"./ka": 326,
	"./ka.js": 326,
	"./kk": 327,
	"./kk.js": 327,
	"./km": 328,
	"./km.js": 328,
	"./kn": 329,
	"./kn.js": 329,
	"./ko": 330,
	"./ko.js": 330,
	"./ky": 331,
	"./ky.js": 331,
	"./lb": 332,
	"./lb.js": 332,
	"./lo": 333,
	"./lo.js": 333,
	"./lt": 334,
	"./lt.js": 334,
	"./lv": 335,
	"./lv.js": 335,
	"./me": 336,
	"./me.js": 336,
	"./mi": 337,
	"./mi.js": 337,
	"./mk": 338,
	"./mk.js": 338,
	"./ml": 339,
	"./ml.js": 339,
	"./mr": 340,
	"./mr.js": 340,
	"./ms": 341,
	"./ms-my": 342,
	"./ms-my.js": 342,
	"./ms.js": 341,
	"./mt": 343,
	"./mt.js": 343,
	"./my": 344,
	"./my.js": 344,
	"./nb": 345,
	"./nb.js": 345,
	"./ne": 346,
	"./ne.js": 346,
	"./nl": 347,
	"./nl-be": 348,
	"./nl-be.js": 348,
	"./nl.js": 347,
	"./nn": 349,
	"./nn.js": 349,
	"./pa-in": 350,
	"./pa-in.js": 350,
	"./pl": 351,
	"./pl.js": 351,
	"./pt": 352,
	"./pt-br": 353,
	"./pt-br.js": 353,
	"./pt.js": 352,
	"./ro": 354,
	"./ro.js": 354,
	"./ru": 355,
	"./ru.js": 355,
	"./sd": 356,
	"./sd.js": 356,
	"./se": 357,
	"./se.js": 357,
	"./si": 358,
	"./si.js": 358,
	"./sk": 359,
	"./sk.js": 359,
	"./sl": 360,
	"./sl.js": 360,
	"./sq": 361,
	"./sq.js": 361,
	"./sr": 362,
	"./sr-cyrl": 363,
	"./sr-cyrl.js": 363,
	"./sr.js": 362,
	"./ss": 364,
	"./ss.js": 364,
	"./sv": 365,
	"./sv.js": 365,
	"./sw": 366,
	"./sw.js": 366,
	"./ta": 367,
	"./ta.js": 367,
	"./te": 368,
	"./te.js": 368,
	"./tet": 369,
	"./tet.js": 369,
	"./th": 370,
	"./th.js": 370,
	"./tl-ph": 371,
	"./tl-ph.js": 371,
	"./tlh": 372,
	"./tlh.js": 372,
	"./tr": 373,
	"./tr.js": 373,
	"./tzl": 374,
	"./tzl.js": 374,
	"./tzm": 375,
	"./tzm-latn": 376,
	"./tzm-latn.js": 376,
	"./tzm.js": 375,
	"./uk": 377,
	"./uk.js": 377,
	"./ur": 378,
	"./ur.js": 378,
	"./uz": 379,
	"./uz-latn": 380,
	"./uz-latn.js": 380,
	"./uz.js": 379,
	"./vi": 381,
	"./vi.js": 381,
	"./x-pseudo": 382,
	"./x-pseudo.js": 382,
	"./yo": 383,
	"./yo.js": 383,
	"./zh-cn": 384,
	"./zh-cn.js": 384,
	"./zh-hk": 385,
	"./zh-hk.js": 385,
	"./zh-tw": 386,
	"./zh-tw.js": 386
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
webpackContext.id = 490;

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_code_code__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_myparents_myparents__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_createparent_createparent__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_card_card__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_user_login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_user_profile_profile__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_optionals_devs_irm_irm__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_optionals_devs_my_dates_my_dates__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_user_register_register__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_optionals_devs_recipes_recipes__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_appointment_pay_pay__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_appointment_financer_financer__ = __webpack_require__(97);
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
        //aqui regresarlo al HomePage
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
        this.hom = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
        this.car = __WEBPACK_IMPORTED_MODULE_3__pages_card_card__["a" /* CardPage */];
        this.log = __WEBPACK_IMPORTED_MODULE_9__pages_user_login_login__["a" /* LoginPage */];
        this.pro = __WEBPACK_IMPORTED_MODULE_10__pages_user_profile_profile__["a" /* ProfilePage */];
        this.irm = __WEBPACK_IMPORTED_MODULE_11__pages_optionals_devs_irm_irm__["a" /* IrmPage */];
        this.rep = __WEBPACK_IMPORTED_MODULE_14__pages_optionals_devs_recipes_recipes__["a" /* RecipesPage */];
        this.myd = __WEBPACK_IMPORTED_MODULE_12__pages_optionals_devs_my_dates_my_dates__["a" /* MyDatesPage */];
        this.reg = __WEBPACK_IMPORTED_MODULE_13__pages_user_register_register__["a" /* RegisterPage */];
        this.pay = __WEBPACK_IMPORTED_MODULE_15__pages_appointment_pay_pay__["a" /* PayPage */];
        this.fin = __WEBPACK_IMPORTED_MODULE_16__pages_appointment_financer_financer__["a" /* FinancerPage */];
        this.crea = __WEBPACK_IMPORTED_MODULE_2__pages_createparent_createparent__["a" /* CreateparentPage */];
        this.mypa = __WEBPACK_IMPORTED_MODULE_1__pages_myparents_myparents__["a" /* MyparentsPage */];
        this.code = __WEBPACK_IMPORTED_MODULE_0__pages_code_code__["a" /* CodePage */];
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
        localStorage.removeItem('patientName');
        this.userToken = null;
        this.menu.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_user_login_login__["a" /* LoginPage */]);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_9" /* ViewChild */])('contenido'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */])
    ], MyApp.prototype, "menu", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/app/app.html"*/'<ion-menu [content]="contenido" persistent="true">\n    <ion-header color="primary">\n        <!-- <ion-toolbar>\n            <ion-title>More Health</ion-title>\n        </ion-toolbar>     -->\n    </ion-header>\n    <ion-content class="fondoColor">\n        <button ion-button text-center class="imagen" (click)="goPage(pro)">\n            <ion-icon class="iconAdd flecha" name="add"></ion-icon>\n        </button>\n        <ion-list class="lista">\n            <button ion-item (click)="goPage(hom)" class="outLine">\n            <ion-icon item-start name="home"></ion-icon>\n            Home</button>\n\n            <button ion-item (click)="goPage(car)" class="outLine">\n            <ion-icon item-start name="medkit"></ion-icon>\n            Reservar</button>\n\n            <button ion-item (click)="goPage(myd)" *ngIf="userToken" class="outLine">\n             <ion-icon item-start name="clipboard"></ion-icon>\n             Mis citas</button>\n\n             <button ion-item (click)="goPage(rep)" *ngIf="userToken" class="outLine">\n              <ion-icon item-start name="document"></ion-icon>\n              Mis recetas</button>\n\n              <button ion-item (click)="goPage(mypa)" *ngIf="userToken" class="outLine">\n              <ion-icon item-start name="people"></ion-icon>\n              Mis parientes</button>\n\n            <button ion-item (click)="goPage(log)" *ngIf="!userToken" class="outLine">\n            <ion-icon item-start name="key"></ion-icon>\n            Login</button>\n\n\n            <button ion-item (click)="logout()" *ngIf="userToken" class="outLine">\n            <ion-icon item-start name="close-circle"></ion-icon>\n            terminar sesion</button>\n\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<!-- regresarlo ap homePage -->\n<ion-nav [root]="hom" #contenido></ion-nav>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 509:
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

/***/ 510:
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

/***/ 511:
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_of__ = __webpack_require__(501);
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

/***/ 562:
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

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(566);
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

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authorization_public_authorization_public__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_card__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appoinment_appoinment__ = __webpack_require__(53);
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
    function HomePage(navCtrl, appointmentProvider, autho, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.appointmentProvider = appointmentProvider;
        this.autho = autho;
        this.alertCtrl = alertCtrl;
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
                _this.obtenerUltimaFecha();
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
            this.obtenerUltimaFecha();
        }
    }
    HomePage.prototype.obtenerUltimaFecha = function () {
        var _this = this;
        this.appointmentProvider.getAppointmentsPeruser().subscribe(function (data) {
            _this.tasks = data;
        });
    };
    HomePage.prototype.irACard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__card_card__["a" /* CardPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color="primary" hideBackButton="true" persistent="true">\n        <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title> Home Page</ion-title>\n        <ion-buttons *ngIf="nombre"\n                          end>\n          <button ion-button\n                  item-end\n                  class="logueado"\n                  clear>\n                  Hola {{nombre}}\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card button class="principal" (click)="irACard()">\n        <ion-item>\n            <ion-row>\n                <ion-col col-2>\n                    <ion-icon name="contact"></ion-icon>\n                </ion-col>\n                <ion-col col-9>\n                    <p class="reserve">Reservar cita</p>\n                </ion-col>\n                <ion-col col-1>\n                    <ion-icon name="arrow-dropright"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n    </ion-card>\n\n    <div class="down30">\n        <mat-accordion padding>\n\n            <mat-expansion-panel >\n                <mat-expansion-panel-header>\n                    <ion-col col-2>\n                        <ion-icon name="alarm"></ion-icon>\n                    </ion-col>\n                    <ion-col col-10>\n                        <p class="font11">Próxima Cita</p>\n                    </ion-col>\n\n                </mat-expansion-panel-header >\n                <div class="containerExpand" >\n                  <div *ngIf="tasks else notasks">\n                    <div *ngFor="let task of tasks; index as i; first as isFirst">\n                      <ion-row class="down10" >\n                        <ion-col col-3>\n                          <ion-avatar item-start>\n                            <img src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{task.professional.id}}.png">\n                          </ion-avatar>\n                        </ion-col>\n                        <ion-col col-9>\n                          <h3 class="tituloCitas" [ngClass]="{celeste:\'\'}">Dr.{{task.professional.fullName | slice:0:25 | uppercase}}</h3>\n                          <p class="especialidad">{{ task.service.basicService.description | lowercase }}</p>\n                          <p class="sede">{{ task.service.center.name | lowercase }}</p>\n                          <p class="day">{{ task.appointmentDateTime | date:\'EEEE d , MMMM \' : \'es\' }} </p>\n                          <p class="hour">{{ task.appointmentDateTime | date: \'HH:mm\' }}</p>\n                        </ion-col>\n                      </ion-row>\n                    </div>\n                  </div>\n                    <div *ngIf="tasks < 1">\n                      <p  class="textoRecetas">Aun no tienes citas programadas</p>\n                    </div>\n                </div>\n            </mat-expansion-panel>\n\n            <!-- <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <ion-col col-2>\n                        <ion-icon name="filing"></ion-icon>\n                    </ion-col>\n                    <ion-col col-10>\n                        <p class="font11">Mi Historia Médica</p>\n                    </ion-col>\n\n                </mat-expansion-panel-header>\n                <div class="containerExpand">\n\n                    <h3>contenido Historia médica</h3>\n\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vitae, saepe dolore odio recusandae quibusdam corporis mollitia a quod, suscipit modi nobis quo culpa in eveniet, sed officiis. Dignissimos, tempora.\n                </div>\n            </mat-expansion-panel> -->\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <ion-col col-2>\n                        <ion-icon name="medkit"></ion-icon>\n                    </ion-col>\n                    <ion-col col-10>\n                        <p class="font11">Recetas y Medicamentos</p>\n                    </ion-col>\n                </mat-expansion-panel-header>\n                <div class="containerExpand">\n                    <p class="textoRecetas">Las recetas y médicamentos de sus últimas citas aparecerán aquí proximamente</p>\n                </div>\n            </mat-expansion-panel>\n\n            <!-- <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <ion-col col-2>\n                        <ion-icon name="list-box"></ion-icon>\n                    </ion-col>\n                    <ion-col col-10>\n                        <p class="font11">Recomendaciones</p>\n                    </ion-col>\n\n                </mat-expansion-panel-header>\n                <div class="containerExpand">\n\n                    <h3>contenido Recomendaciones</h3>\n\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vitae, saepe dolore odio recusandae quibusdam corporis mollitia a quod, suscipit modi nobis quo culpa in eveniet, sed officiis. Dignissimos, tempora.\n                </div>\n            </mat-expansion-panel> -->\n\n            <!-- <mat-expansion-panel [disabled]="dissabled == guest">\n                <mat-expansion-panel-header>\n                    <ion-col col-2>\n                        <ion-icon name="flask"></ion-icon>\n                    </ion-col>\n                    <ion-col col-10>\n                        <p class="font11">Resultados</p>\n                    </ion-col>\n\n                </mat-expansion-panel-header>\n                <div class="containerExpand">\n                    <p class="textoRecetas">Aqui aparecerán los resultados de tus últimas citas proximamente</p>\n                </div>\n            </mat-expansion-panel> -->\n\n        </mat-accordion>\n\n    </div>\n    <!-- <h1>home</h1>\n    <p (click)="irACard()">Ir a Card</p> -->\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_appoinment_appoinment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_authorization_public_authorization_public__["a" /* AuthorizationPublicProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appointment_financer_financer__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_hello_hello__ = __webpack_require__(393);
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__appointment_financer_financer__["a" /* FinancerPage */], { hora: this.hora, doctor: this.doctor, available: this.available });
        }
        else {
            console.log("no trae data, seguir con el proceso normal");
        }
        this.id = 1;
        this.fromDate = __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY-MM-DD");
        this.toDate = __WEBPACK_IMPORTED_MODULE_4_moment__().add(this.numDays, "day").format("YYYY-MM-DD");
        this.helloPvr.getServicios().subscribe(function (servicios) {
            _this.servicios = servicios;
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
        this.doctors.map(function (listDoctor) {
            if (doctor == listDoctor) {
                listDoctor.expanded = true;
            }
            else {
                listDoctor.expanded = false;
            }
            return listDoctor;
        });
        this.horas = available.hours;
        console.log('las horas:', this.horas);
        this.dia = available.date;
    };
    CardPage.prototype.goToFinancer = function (doctor, available, hora) {
        var role = localStorage.getItem('role');
        if (role === 'guest') {
            var datos = this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__user_login_login__["a" /* LoginPage */], { hora: hora,
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
            selector: 'page-card',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/card/card.html"*/'<ion-header>\n    <ion-navbar color="primary" hideBackButton="true" persistent="true">\n        <button ion-button menuToggle>\n<ion-icon name="menu"></ion-icon>\n</button>\n        <ion-title> Home Page </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div id="busqueda">\n        <ion-list padding>\n            <ion-item>\n                <ion-label floating>Busca por especialidad</ion-label>\n                <ion-select [(ngModel)]="id" #specialty (ionChange)="onChangueSpecialty(specialty.value)">\n                    <ion-option [value]="specialty.id" *ngFor="let specialty of servicios">{{specialty.description}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Busca por doctor</ion-label>\n                <ion-input type="text" (keyup)="buscarDoctor()" [(ngModel)]="search"></ion-input>\n            </ion-item>\n\n\n            <ion-item>\n                <ion-label floating>Busca por fecha</ion-label>\n                <ion-input type="date" (ionChange)="getDoctorsPerDay()" [(ngModel)]="fromDate"></ion-input>\n            </ion-item>\n        </ion-list>\n\n    </div>\n\n    <div >\n        <ion-card *ngFor="let doctor of doctors ">\n            <div [ngStyle]="{\'display\': doctor.hasAvailable ? \'block\' : \'none\'}">\n                <ion-row>\n                    <ion-col col-4 class="imageDoctor">\n                        <img src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{doctor.id}}.png" alt="">\n                    </ion-col>\n                    <ion-col col-8 right>\n                        <p class="doctor">{{ doctor.fullName | lowercase}}</p>\n                        <p class="especialidad">{{doctor.service.description | lowercase}}</p>\n                        <p>{{doctor.cmp}}</p>\n                        <p class="centro">Centro: Mendiola</p>\n                    </ion-col>\n\n                    <ion-col col-12>\n                    </ion-col>\n                    <div class="containerDays">\n                        <ion-slides>\n                            <ion-slide *ngFor="let available of doctor.availables">\n                                <div class="centerItemsDays">\n                                    <a (click)="expandedItem(doctor, available)">{{ available.date | date:\'fullDate\' :\'es\' | slice:0:3}}</a>\n                                    <p>{{ available.date | date:\'dd\':\'es\'}}</p>\n                                </div>\n                            </ion-slide>\n                        </ion-slides>\n                    </div>\n                    <ion-col col-12>\n                        <expandable [expandHeight]="itemExpandHeight" [expanded]="doctor.expanded" [doctor]="doctor" [available]="available" [horas]="horas">\n                            <div class="row">\n                                  <ion-slides class="normal">\n                                    <ion-slide>\n                                      <div>\n                                        <h3>turno mañana</h3>\n                                        <ion-row>\n                                          <ion-col col-3 *ngFor="let hora of horas; let i = index">\n                                            <div (click)="goToFinancer(doctor, available, hora)" class="horas">\n                                              <p>\n                                                {{ hora.hour | slice:0:5}}\n                                              </p>\n                                            </div>\n                                          </ion-col>\n                                        </ion-row>\n                                        </div>\n                                      </ion-slide>\n                                    <ion-slide>\n                                    <h3>turno tarde</h3>\n                                    <ion-row>\n                                      <ion-col col-3>\n\n                                      </ion-col>\n                                    </ion-row>\n                                  </ion-slide>\n\n                                  <ion-slide>\n                                      <h3>turno noche</h3>\n                                      <ion-row>\n                                        <ion-col col-3>\n\n                                        </ion-col>\n                                      </ion-row>\n                                    </ion-slide>\n                              </ion-slides>\n\n\n                            </div>\n                        </expandable>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-card>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/card/card.html"*/
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

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appoinment_appoinment__ = __webpack_require__(53);
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
            selector: 'page-master-detail',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/master-detail/master-detail.html"*/'<ion-navbar>\n    <ion-title>Detalle de la cita</ion-title>\n</ion-navbar>\n\n\n\n<ion-content has-header="true">\n    <ion-list>\n\n        <img id="profile-image" src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{appointment.id}}.png">\n\n        <h3 class="nombreDoctor" text-center>\n            {{ appointment.fullName }}\n        </h3>\n\n        <ion-item>\n            <ion-label bold>Sede:</ion-label>\n            <ion-label class="blue" type="text" disabled="true">\n                Mendiola\n            </ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label>Especialidad:</ion-label>\n            <ion-label item-end class="blue" disabled="true">\n                {{ appointment.service.description }}\n            </ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label>Fecha:</ion-label>\n            <ion-label item-end class="blue" disabled="true">\n                {{ date | date:\'EEEE d , MMMM \' : \'es\' }}\n            </ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label>Hora:</ion-label>\n            <ion-label class="blue" type="text" disabled="true">\n                {{ hora.hour | slice:0:5}}\n            </ion-label>\n        </ion-item>\n        <ion-item *ngIf="secure">\n            <ion-label>Cita con Seguro:</ion-label>\n            <ion-label class="blue" disabled="true">\n                {{insurance | lowercase}}\n            </ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Tipo de pago:</ion-label>\n            <ion-label class="blue" disabled="true">\n                {{paymentType | lowercase }}\n            </ion-label>\n        </ion-item>\n\n        <ion-item *ngIf="isCard">\n            <ion-label>Titular de la tarjeta:</ion-label>\n            <ion-label class="blue" disabled="true">\n                {{name | lowercase }}\n            </ion-label>\n        </ion-item>\n\n        <div *ngIf="isCard">\n            <ion-item>\n                <ion-label class="blue" type="text" maxlength="16" clearInput disabled="true">\n                    {{numMasCard}}\n                </ion-label>\n                <ion-icon item-end name="card"></ion-icon>\n            </ion-item>\n        </div>\n\n        <ion-item>\n            <ion-label>Costo:</ion-label>\n            <ion-label class="blue" item-end type="text" disabled="true">\n                {{ \'S/. \' + price }}.00\n            </ion-label>\n        </ion-item>\n\n        <div padding>\n            <button ion-button (click)="gotosave()" block color="secondary" class="heighButton">OK</button>\n        </div>\n        <p class="recomenda" color="secondary">Recuerde que deberá llegar 20 minutos antes para poder cancelar en caja y estar a tiempo en el consultorio.</p>\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/master-detail/master-detail.html"*/,
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

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_card__ = __webpack_require__(60);
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

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateparentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
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

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudparentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(51);
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
    function CrudparentProvider(http) {
        this.http = http;
        this.apiUrl = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/ebooking/appointments/createForUser/";
        this.api = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/register-dependent/";
        this.apiCreate = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/register/";
        // private apiValidate = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/validateemail";
        this.apiValidate = "http://192.168.1.133:4000/api/v2/users/validateemail";
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

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__card_card__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authorization_public_authorization_public__ = __webpack_require__(152);
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
            _this.msg = "";
            localStorage.setItem('idTokenUser', data.patientId);
            localStorage.setItem('emailUser', formulario.value.email);
            localStorage.setItem('authorization', data.authorization);
            localStorage.setItem('role', data.role);
            localStorage.setItem('patientName', data.patientName);
            _this.events.publish('user:logged', 'logged');
            if (!_this.hora)
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            else
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__card_card__["a" /* CardPage */], { hora: _this.hora, available: _this.available, doctor: _this.doctor });
        }, function (err) {
            _this.msg = "Usuario o contraseña incorrecta.";
        });
    };
    LoginPage.prototype.registrarUsuario = function () {
        if (this.hora !== undefined)
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */], { hora: this.hora, available: this.available, doctor: this.doctor, texto: "viene con data" });
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */], { texto: "vienen sin data" });
    };
    LoginPage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/user/login/login.html"*/'\n<ion-content class="gris">\n\n    <h5 class="bajar textoAzul" text-center> Ahora necesitamos tus datos para iniciar una reserva. Si no tienes cuenta aún, registrate ¡es súper fácil!</h5>\n\n\n    <div class="white">\n        <div padding>\n            <button ion-button (click)="registrarUsuario()" full color="primary" class="alto50">Registrarse</button>\n        </div>\n\n    </div>\n\n    <h3 text-center class="noMargin">ó</h3>\n    <div padding>\n        <p style="text-align: center">{{msg}}</p>\n\n        <form #formulario="ngForm">\n\n            <ion-item>\n                <ion-label stacked>Email</ion-label>\n                <ion-input type="text"\n                           required\n                           name="email"\n                           ngModel></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Contraseña</ion-label>\n                <ion-input type="password" required name="password" ngModel></ion-input>\n            </ion-item>\n        </form>\n        <button ion-button (click)="startSesion(formulario)" block class="inicioSesion">iniciar Sesión</button>\n    </div>\n    <p *ngIf="this.hora == undefined"\n      class="noLogin"\n      (click)="goToHome()">Continuar como invitado</p>\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/user/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_authorization_public_authorization_public__["a" /* AuthorizationPublicProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DependentsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(51);
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
        console.log('Hello DependentsProvider Provider');
    }
    DependentsProvider.prototype.getDependens = function () {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        return this.http.get(this.apiUrl, { headers: headers })
            .map(function (data) {
            return data;
        });
    };
    DependentsProvider.prototype.getdependesDay = function () {
        var authorization = localStorage.getItem('authorization');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": authorization });
        return this.http.get(this.apiDatesParents, { headers: headers })
            .map(function (data) {
            return data;
        });
    };
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

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sha_js__ = __webpack_require__(389);
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
    // private apiUrl = 'http://dappapache02.eastus.cloudapp.azure.com:4000/api/v2/users/';
    function UserProvider(http) {
        this.http = http;
        this.SERVER = "http://dappapache02.eastus.cloudapp.azure.com:4200";
        this.apiUrl = this.SERVER + "/api/v2/users/";
    }
    UserProvider.prototype.setDeviceToken = function (user_id, token) {
        var url = this.apiUrl + user_id + '/token/' + token;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserProvider.prototype.doSignIn = function (email, password) {
        var params = { email: email, password: __WEBPACK_IMPORTED_MODULE_5_sha_js__('sha256').update(password).digest('hex'), captchaId: "4dbc9e7e-a921-4d1f-8e36-1021a670c47a" };
        // let params = {email:email, password: shajs('sha256').update(password).digest('hex') }
        return this.http.post(this.apiUrl + 'login', params)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserProvider.prototype.doSignInforNewRegister = function (email, password) {
        var params = { email: email, password: password, captchaId: "4dbc9e7e-a921-4d1f-8e36-1021a670c47a" };
        // let params = {email:email, password: shajs('sha256').update(password).digest('hex') }
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
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_financier_financier__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appoinment_appoinment__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pay_pay__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__createparent_createparent__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__payu_payu__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_dependents_dependents__ = __webpack_require__(79);
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
            console.log(_this.parents);
        });
        this.financierProvider.getFinanciers().subscribe(function (data) { _this.items = data; _this.items.shift(); });
        this.doctor = this.navParams.get('doctor');
        this.available = this.navParams.get('available');
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
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__createparent_createparent__["a" /* CreateparentPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.parents = data;
        });
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
            selector: 'page-financer',template:/*ion-inline-start:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/financer/financer.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Financiador</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <h4 class="parrafoFinanciador">Lo que nos queda es escoger para quien es la cita y el financiador, ya casi terminamos…</h4>\n  <div>\n<ion-row padding>\n  <ion-col class="cuadrado">\n    <button ion-button round\n            color="gris"\n            [ngClass]="{verde:vcolor == true}"\n            (click)="passFinancer()">\n              para mi\n    </button>\n  </ion-col>\n\n  <ion-col class="cuadrado">\n    <button ion-button\n            (click)="openParents()"\n            round\n            color="gris"\n            [ngClass]="{verde:ccolor == true}">\n              un familiar\n    </button>\n  </ion-col>\n</ion-row>\n<div *ngIf="addFamily">\n    <ion-card *ngFor="let depe of parents"\n              (click)="passFinancerParent(depe)">\n      <ion-row>\n        <ion-col col-3>\n          <ion-avatar>\n            <img src="../assets/imgs/avatars/nino.png" alt="">\n          </ion-avatar>\n        </ion-col>\n        <ion-col col-9>\n            <h3 class="nombrePariente">{{depe.name}}</h3>\n            <p *ngIf="depe.relation"\n                class="parentesco">{{depe.relation.name}}</p>\n            <p class="edad">7 años</p>\n        </ion-col>\n\n      </ion-row>\n    </ion-card>\n  </div>\n\n    <ion-row *ngIf="addFamily" padding>\n      <ion-card ion-button\n                (click)="showDetailCreateParents()"\n                class="buttonAddFamily">\n        <button ion-button clear item-start>\n          <ion-icon ios="ios-add" md="md-add" color="secondary"></ion-icon>\n        </button>\n        <p item-end>Agregar Familiar</p>\n      </ion-card>\n    </ion-row>\n\n    <!-- template que muestra los familiares que estan ya adjuntos -->\n\n  </div>\n  <!-- fin del template de los familiares adjuntos -->\n\n  <div *ngIf="depe">\n    <div *ngIf="personOk === true">\n      <ion-row>\n        <ion-col col-3\n                 class="cardEscogidoImg">\n            <img src="../assets/imgs/avatars/nino.png" alt="">\n        </ion-col>\n        <ion-col col-7\n                  class="containerNombre"\n                  >\n            <h3 class="nombrePariente">escogiste a: {{depe.name}}</h3>\n        </ion-col>\n        <ion-col col-2>\n            <button ion-button\n                    (click)="cleanDepe()"\n                    clear\n                    color="primary">\n              <ion-icon name="close"></ion-icon>\n            </button>\n          </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <ion-list class="medio" *ngIf="personOk === true">\n    <ion-card class="evaluate">\n      <ion-list>\n        <ion-item color="light" item-start (click)="evaluateEnsurance($event)">\n          <p *ngIf="yes == false && no == false">¿Cuenta con seguro?</p>\n          <p *ngIf="yes == true">Si tengo</p>\n          <p *ngIf="no == true">No tengo</p>\n          <ion-icon item-end name="arrow-dropdown"></ion-icon>\n        </ion-item>\n\n        <ion-list class="nombresLista" *ngIf="firtClick">\n          <button ion-item *ngFor="let quest of questions" (click)="validateSelected(quest.id)">\n            {{ quest.name }}\n          </button>\n        </ion-list>\n      </ion-list>\n    </ion-card>\n\n    <ion-card class="seguroList">\n      <ion-list>\n        <ion-item color="light" *ngIf="isInsuranceName" (click)="selectEnsurance($event)">\n          {{ myEnsuranceName }}\n        </ion-item>\n        <ion-list *ngIf="isInsurance">\n          <button ion-item *ngFor="let item of items" (click)="insuranceSelected(item.cod_pagador_pk, item.nombre_garante)">\n            {{ item.nombre_garante }}\n          </button>\n        </ion-list>\n      </ion-list>\n    </ion-card>\n\n    <div text-right class="precio" *ngIf="price!=undefined">\n      <p>Precio de la Consulta: {{ \'S/. \' + price }}.00</p>\n    </div>\n  </ion-list>\n\n  <button *ngIf="secureOk === true"\n          color="secondary"\n          ion-button\n          block\n          center\n          class="botonPagar"\n          (click)="goToPay()">\n      hacer el pago\n  </button>\n\n  <!-- <div class="container-gris" *ngIf="open == true">\n        <div padding>\n            <h4 text-center class="tituloMetodos">Metodos de Pago</h4>\n            <ion-segment [(ngModel)]="pago">\n                <ion-segment-button value="enLocal">\n                    En local\n                </ion-segment-button>\n                <ion-segment-button value="enClinica">\n                    Con tarjeta\n                </ion-segment-button>\n            </ion-segment>\n        </div>\n        <div [ngSwitch]="pago">\n            <ion-list *ngSwitchCase="\'enLocal\'">\n                <div class="resumen" >\n                        <ion-card>\n                                <div class="containerTextoPago">\n                                    <h3 class="titleCardPago">Lo que has escogido hasta el momento</h3>\n                                </div>\n                                <div>\n                                    <ion-row class="centrar">\n                                        <ion-col col-4>\n                                            <img id="profile-image" src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{doctor.id}}.png">\n                                        </ion-col>\n                                        <ion-col col-8>\n                                            <h3 class="nombreDoctor" text-center>\n                                                {{ doctor.fullName }}\n                                            </h3>\n                                        </ion-col>\n                                    </ion-row>\n                                </div>\n                                    <div class="centrar">\n                                        <p bold class="izquierda">Sede:</p>\n                                        <p class="blue" type="text" disabled="true">Mendiola</p>\n                                    </div>\n                                    <div  class="centrar">\n                                        <p class="izquierda">Especialidad:</p>\n                                        <p item-end class="blue" disabled="true"> {{ doctor.service.description }}</p>\n                                    </div>\n                                    <div  class="centrar">\n                                        <p class="izquierda">Fecha:</p>\n                                        <p item-end class="blue" disabled="true">\n                                            {{ date | date:\'EEEE d , MMMM \' : \'es\' }}\n                                        </p>\n                                    </div>\n                                    <div  class="centrar">\n                                        <p class="izquierda">Hora:</p>\n                                        <p class="blue" type="text" disabled="true">\n                                            {{ hora.hour | slice:0:5}}\n                                        </p>\n                                    </div>\n                                    <div  class="centrar">\n                                        <p class="izquierda">Costo:</p>\n                                        <p class="blue" item-end type="text" disabled="true">\n                                            {{ \'S/. \' + price }}\n                                        </p>\n                                    </div>\n                            </ion-card>\n\n\n                <div padding>\n                    <button ion-button color="secondary" class="botonAccept" [class.button-disabled]="true" block (click)="next()">Confirmar cita</button>\n                </div>\n\n\n            </div>\n        </ion-list>\n\n\n\n            <ion-list *ngSwitchCase="\'enClinica\'">\n\n                <div class="resumen" >\n                    <ion-card>\n                        <div class="containerTextoPago">\n                            <h3 class="titleCardPago">Lo que has escogido hasta el momento</h3>\n                        </div>\n                        <div>\n                            <ion-row class="centrar">\n                                <ion-col col-4>\n                                    <img id="profile-image" src="http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{doctor.id}}.png">\n                                </ion-col>\n                                <ion-col col-8>\n                                    <h3 class="nombreDoctor" text-center>\n                                        {{ doctor.fullName }}\n                                    </h3>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                            <div class="centrar">\n                                <p bold class="izquierda">Sede:</p>\n                                <p class="blue" type="text" disabled="true">Mendiola</p>\n                            </div>\n                            <div  class="centrar">\n                                <p class="izquierda">Especialidad:</p>\n                                <p item-end class="blue" disabled="true"> {{ doctor.service.description }}</p>\n                            </div>\n                            <div  class="centrar">\n                                <p class="izquierda">Fecha:</p>\n                                <p item-end class="blue" disabled="true">\n                                    {{ date | date:\'EEEE d , MMMM \' : \'es\' }}\n                                </p>\n                            </div>\n                            <div  class="centrar">\n                                <p class="izquierda">Hora:</p>\n                                <p class="blue" type="text" disabled="true">\n                                    {{ hora.hour | slice:0:5}}\n                                </p>\n                            </div>\n                            <div  class="centrar">\n                                <p class="izquierda">Costo:</p>\n                                <p class="blue" item-end type="text" disabled="true">\n                                    {{ \'S/. \' + price }}\n                                </p>\n                            </div>\n                    </ion-card>\n\n\n            <div padding>\n                <button ion-button color="secondary" class="botonAccept" [class.button-disabled]="true" block (click)="payCulqi()">Pagar ahora con culqi</button>\n            </div> -->\n\n  <!-- <div padding>\n                    <button ion-button color="secondary" class="botonAccept" [class.button-disabled]="true" block (click)="openModalPayu()">Pagar ahora con payu</button>\n                </div> -->\n\n  <!--\n        </div>\n            </ion-list>\n        </div>\n    </div> -->\n\n\n\n</ion-content>\n'/*ion-inline-end:"/proyectos/IonicPruebas/ApolloIonicVersionOne/src/pages/appointment/financer/financer.html"*/,
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

/***/ })

},[435]);
//# sourceMappingURL=main.js.map
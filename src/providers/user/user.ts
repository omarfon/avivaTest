import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import * as shajs from 'sha.js';


@Injectable()
export class UserProvider {

  private SERVER = "http://dappapache02.eastus.cloudapp.azure.com:4200";
  private apiUrl = `${this.SERVER}/api/v2/users/`;
  private apiUrlDatos = 'http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/ebooking/';


  constructor(public http: HttpClient) { }

  setDeviceToken(user_id, token) {
  	let url = this.apiUrl + user_id + '/token/' + token;
    return this.http.get(url)
                    .map(data =>{
                      return data
                    });

  }

  doSignIn(email, password){
    let params = {email:email, password: shajs('sha256').update(password).digest('hex') , captchaId: "4dbc9e7e-a921-4d1f-8e36-1021a670c47a"}
    // let params = {email:email, password: shajs('sha256').update(password).digest('hex') }
    return this.http.post(this.apiUrl + 'login', params)
                    .map(data => {
                      return data
                    });

  }
  doSignInforNewRegister(email, password){
    let params = {email:email, password: password , captchaId: "4dbc9e7e-a921-4d1f-8e36-1021a670c47a"}
    // let params = {email:email, password: shajs('sha256').update(password).digest('hex') }
    return this.http.post(this.apiUrl + 'login', params)
                    .map(data =>{
                      return data
                    });
  }

  diSignInPassword(email, password){
    let params = {email:email, password: password};
    return this.http.post(this.apiUrl + 'login', params)
                    .map(data =>{
                      return data
                    });

  }

  doSignUp(params){
    return this.http.post(this.apiUrl + 'register', params)
                    .map( data =>{
                      return data
                    });
  }

  sendValidation(email){
    let params = {email: email};
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    console.log('params:', params);
    return this.http.post(this.apiUrl + 'validateemail', params, {headers})
                    .map(data =>{
                      return data
                    }).catch(e => {
                      return Observable.of(e)
                    });
  }

  recoveryLogin(datos){
    let params = {code: datos.code, email: datos.email, id: datos.id, password: datos.password, app: 'ebooking'};
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    return this.http.post(this.apiUrl + 'login-recovery', params, {headers})
                    .map(data => {
                      return data
                    }).catch(e =>{
                      return Observable.of(e)
                    });
  }


  changePassword(password, passwordNew){
    let params = {password: password, passwordNew: passwordNew };
    // console.log('los paramasque cambian la contraseña:', params);
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    return this.http.put(this.apiUrl + 'update-password', params, {headers})
                    .map(data => {
                      return data
                    }).catch(e =>{
                      return Observable.of(e)
                    });
  }

  getDatosPaciente(id){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    return this.http.get(this.apiUrlDatos + `datos-paciente?patientid=${id}`, {headers})
                    .map(data => {
                      return data
                    }).catch(e =>{
                      return Observable.of(e)
                    });
  }




}

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import * as shajs from 'sha.js';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserProvider {

  // private apiUrl = 'http://dappapache02.eastus.cloudapp.azure.com:4000/api/ebooking/';
  private apiUrl = 'http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/';
  // private signUp = 'http://45.55.174.40/auth/';
  // private relatives = 'http://45.55.174.40/users/';

  constructor(public http: Http) { }

  setDeviceToken(user_id, token): Observable<string[]> {
  	let url = this.apiUrl + user_id + '/token/' + token;
    return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  doSignIn(email, password){
    let params = {email:email, password: shajs('sha256').update(password).digest('hex')}
    return this.http.post(this.apiUrl + 'login', params)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  diSignInPassword(email, password){
    let params = {email:email, password: password};
    return this.http.post(this.apiUrl + 'login', params)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  doSignUp(params){
    return this.http.post(this.apiUrl + 'register', params)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

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

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(error.json());
  }
//   private apiUrl = 'http://dappapache02.eastus.cloudapp.azure.com:4000/api/ebooking/';
//   private signUp = 'http://45.55.174.40/auth/';
//   private relatives = 'http://45.55.174.40/users/';

//   constructor(public http: Http) { }

//   setDeviceToken(user_id, token): Observable<string[]> {
//     let url = this.apiUrl + user_id + '/token/' + token;

//     return this.http.get(url)
//       .map(this.extractData)
//       .catch(this.handleError);
//   }

//   doSignIn(email, password){
//     let params = {email:email, password: shajs('sha256').update(password).digest('hex')}

//     return this.http.post(this.apiUrl + 'login', params)
//       .map(this.extractData)
//       .catch(this.handleError);
//   }

//   doSignUp(params){
//     return this.http.post(this.apiUrl + 'register', params)
//       .map(this.extractData)
//       .catch(this.handleError);
//   }

//   getRelative(user_id){
//     let url = this.relatives + user_id + '/show_relative/';

//     return this.http.get(url)
//       .map(this.extractData)
//       .catch(this.handleError);
//   }

//   getRelatives(user_id){
//     let url = this.relatives + user_id + '/get_relatives/';

//     return this.http.get(url)
//       .map(this.extractData)
//       .catch(this.handleError);
//   }

//   createRelatives(params){
//     let url = this.relatives + 'create_relative/';

//     return this.http.post(url, params)
//       .map(this.extractData)
//       .catch(this.handleError);
//   }

//   updateRelatives(user_id, params){
//     let url = this.relatives + user_id + '/update_relative/';

//     return this.http.patch(url, params)
//       .map(this.extractData)
//       .catch(this.handleError);
//   }

//   destroyRelatives(user_id){
//     let url = this.relatives + user_id + '/destroy_relative/';

//     return this.http.delete(url)
//       .map(this.extractData)
//       .catch(this.handleError);
//   }

//   private extractData(res: Response) {
//     let body = res.json();
//     return body || { };
//   }

//   private handleError (error: Response | any) {
//     let errMsg: string;
//     if (error instanceof Response) {
//       const body = error.json() || '';
//       const err = body.error || JSON.stringify(body);
//       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
//     } else {
//       errMsg = error.message ? error.message : error.toString();
//     }
//     console.error(errMsg);
//     return Observable.throw(error.json());
//   }

}

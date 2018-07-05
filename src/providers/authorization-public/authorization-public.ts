import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'


@Injectable()
export class AuthorizationPublicProvider {
  private SERVER = "http://dappapache02.eastus.cloudapp.azure.com:4200";
  apiUrl = `${this.SERVER}/api/v2/users/public-authorization`;

  constructor(public http: Http) {
    console.log('Hello AuthorizationPublicProvider Provider');
  }

  getKey(){
    return this.http.get( this.apiUrl)
                    .map(this.extractData)
                    .catch(this.handleError);


  }

  private extractData(res: Response) {
    let body = res.json();
    console.log('body:', body)
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
    return Observable.throw(errMsg);
  }

}

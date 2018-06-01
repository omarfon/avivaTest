import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipesProvider {

  private apiUrl = "http://dappapache02.eastus.cloudapp.azure.com:4000/api/v2/ebooking/getPrescripcionesEncuentro?encuentroId=";


  constructor(public http: Http) {
    console.log('Hello RecipesProvider Provider');
  }

  getRecipes(id){
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': localStorage.getItem('authorization')});
    let options = new RequestOptions({headers});

    return this.http.get(this.apiUrl + `${id}`, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


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
    return Observable.throw(errMsg);
  }
}

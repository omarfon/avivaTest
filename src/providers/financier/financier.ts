import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the FinancierProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FinancierProvider {

  private apiUrl = 'http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/ebooking/';

  constructor(public http:Http) {
  }

  getFinanciers(): Observable<string[]> {
    return this.http.get(this.apiUrl + 'payers', {})
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getFinancier(financier_id): Observable<string[]> {
    return this.http.get(this.apiUrl + financier_id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getPrice(center_id, basic_service_id, doctor_id, proposed_date) {
    // let params = { proposed_date: proposed_date, center_id: center_id, basic_service_id: basic_service_id, doctor_id: doctor_id }
    
    return this.http.get(this.apiUrl + `appointments/price/${center_id}/${basic_service_id}/${doctor_id}/${proposed_date}`)
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

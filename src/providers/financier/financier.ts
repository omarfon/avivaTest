import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http';

/*
  Generated class for the FinancierProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FinancierProvider {

  private SERVER = "http://dappapache02.eastus.cloudapp.azure.com:4200";
  private apiUrl = `${this.SERVER}/api/v2/ebooking/`;

  constructor(public http:HttpClient) {
  }

  getFinanciers(): Observable<string[]> {
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    return this.http.get(this.apiUrl + 'payers', {headers})
                    .map(data => {
                      return data
                    }).catch(e =>{
                      return Observable.of(e)
                    });
  }

  getFinancier(financier_id): Observable<string[]> {
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    return this.http.get(this.apiUrl + `${financier_id}`, {headers})
              .map(data => {
                return data
              }).catch(e =>{
                return Observable.of(e)
              });
  }

  getPrice(center_id, basic_service_id, doctor_id, proposed_date) {
    // let params = { proposed_date: proposed_date, center_id: center_id, basic_service_id: basic_service_id, doctor_id: doctor_id }
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    return this.http.get(this.apiUrl + `appointments/price/${center_id}/${basic_service_id}/${doctor_id}/${proposed_date}`, {headers})
                    .map(data => {
                      return data
                    }).catch(e =>{
                      return Observable.of(e)
                    });
  }


}

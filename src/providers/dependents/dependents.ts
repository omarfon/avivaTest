import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DependentsProvider {

  private apiUrl = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/dependents";
  private apiDelete = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/removecontact?userId=";
  private apiDatesParents = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/ebooking/appointments/patientContacts";


  constructor(public http: HttpClient) {
    console.log('Hello DependentsProvider Provider');
  }

  getDependens(){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});

    return this.http.get(this.apiUrl, {headers})
                    .map(data =>{
                      return data;
                    });
  }
  getdependesDay(){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});

    return this.http.get(this.apiDatesParents, {headers})
                    .map(data =>{
                      return data;
                    });

  }
  deleteDepend(id){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});

    return this.http.delete(this.apiDelete + `${id}`, {headers})
                    .map(data =>{
                      return data;
                    });
  }


}



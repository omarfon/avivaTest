import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthorizationPublicProvider {

  apiUrl = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/public-authorization"

  constructor(public http: HttpClient) {
    console.log('Hello AuthorizationPublicProvider Provider');
  }
  
  getKey(){
    return this.http.get( this.apiUrl)
                    .map(resp =>{
                      return resp;
                    })
                
  }

}

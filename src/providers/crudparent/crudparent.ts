import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CrudparentProvider {

private apiUrl = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/ebooking/appointments/createForUser/";

private api = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/register-dependent/";

private apiCreate = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/register/";

private apiValidate = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/validateemail";

// private apiCreate = "http://192.168.1.115:4000/api/v2/users/register/";

  constructor(public http: HttpClient) {
    console.log('Hello CrudparentProvider Provider');
  }

  createParentDate(subida, id){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    let params = JSON.parse(subida);
    params.provisions = [{"tipoPrestacion":"CONSULTA", "instructions":"", "name":"CONSULTA AMBULATORIA POR MEDICO ESPECIALISTA", "default":false, "id":44}]

    return this.http.post(this.apiUrl + `${id}`, params , {headers})
                    .map((resp:any)=>{
                      return resp;
                    });
  }

  createParent(data){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    let params = data;
    // params.provisions = [{"tipoPrestacion":"CONSULTA", "instructions":"", "name":"CONSULTA AMBULATORIA POR MEDICO ESPECIALISTA", "default":false, "id":44}]

    return this.http.post(this.api , params , {headers})
                    .map((resp:any)=>{
                      return resp;
                    });
  }

  createNewUser(datos){
    // console.log('los datos de register:', datos)
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    let params = datos;
    // console.log('los datos de register:', datos)
    // params.provisions = [{"tipoPrestacion":"CONSULTA", "instructions":"", "name":"CONSULTA AMBULATORIA POR MEDICO ESPECIALISTA", "default":false, "id":44}]
    return this.http.post(this.apiCreate , params , {headers})
                    .map((resp:any)=>{
                      return resp;
                    });
  }

  validateEmail(email){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    let params = email;

    return this.http.post(this.apiValidate , params , {headers})
                    .map((resp:any)=>{
                      return resp;
                    });
  }
}

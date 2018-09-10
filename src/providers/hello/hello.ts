import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'apollo-client/util/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
// import { Http, Headers } from '@angular/http';



@Injectable()
export class HelloProvider {

  servicios: any[] = [];
  doctores: any[] = [];

 private SERVER = "http://dappapache02.eastus.cloudapp.azure.com:4200";
 private apiUrl = `${this.SERVER}/graphql`;


  constructor(public http: HttpClient) {
    console.log('Hello HelloProvider Provider');
  }

  getServicios( ){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({
      "Authorization": authorization
    });
    // headers.set("Authorization", authorization);
    let params = {query: "query {centers{ services{id, description }}}"};
    return this.http.post(this.apiUrl, params, {headers})
                    .map((resp:any)=>{
                      // console.log('resp:', resp.data.centers);
                      if(!resp.data.centers || resp.data.centers.length == 0 ){
                        return [];
                      }
                      // console.log('resp2:', resp)
                      this.servicios = resp.data.centers[0].services;
                      return this.servicios;
                    });
  }


  getDoctorsPerId(id){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({
      "Authorization": authorization
    });
    // headers.append("Authorization", authorization);
    let params = {query: `query {centers{service(id:${id}){id ,professionals{id, fullName, cmp, image, service{id, description }}}}}`};
    return this.http.post(this.apiUrl , params, {headers})
                    .map((resp:any)=>{
                    this.doctores = resp.data.centers[0].service.professionals;
                    return this.doctores;
                    });
  }

  getAvailablesPerDoctor(id, serviceId, fromDate, toDate){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({
      "Authorization": authorization
    });
    // headers.append("Authorization", authorization);
    let params = {query: `query {centers{service(id:${serviceId}){id ,professional(id:${id}){id, fullName, cmp, image, service{id, description }, availables(fromDateString:"${fromDate}",toDateString:"${toDate}"){date,hours{ hour, listjson, isAvailable}}}}}}`};
    console.log('params provider:', params);
    return this.http.post(this.apiUrl, params, {headers})
                    .map((resp:any)=>{
                      return resp.data.centers[0].service.professional.availables;
                    });
  }

  getAvailablesPerDay(serviceId ,fromDate, toDate){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({
      "Authorization": authorization
    });
    // headers.append("Authorization", authorization);
    let params = {query: `query {centers{service(id:${serviceId}){id ,professionals{id, fullName, cmp, image, service{id, description }, availables(fromDateString:"${fromDate}",toDateString:"${toDate}"){date,hours{ hour, listjson, isAvailable}}}}}}`};
    return this.http.post(this.apiUrl, params, {headers})
                    .map((resp:any)=>{
                      return resp.data.centers[0].service.professionals;
                    });
  }

}

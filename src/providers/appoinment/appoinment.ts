import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class AppointmentProvider {
 
  private SERVER = "http://dappapache02.eastus.cloudapp.azure.com:4200";
  private apiUrl = `${this.SERVER}/api/v2/ebooking/`;


  constructor(public http: HttpClient) { }

  
  createAppointment(subida){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    let params = JSON.parse(subida);
    //params.email = localStorage.getItem('emailUser'); params.password = localStorage.getItem('passUser');
    // WARM: REFACTOR! Always provision_id will be 44. All json is passed. This will put in backend.
    params.provisions = [{"tipoPrestacion":"CONSULTA", "instructions":"", "name":"CONSULTA AMBULATORIA POR MEDICO ESPECIALISTA", "default":false, "id":44}]
    
    // console.log('appointment:',subida, params);
    return this.http.post(this.apiUrl + 'appointments/create', params, {headers})
    .map(data =>{
      return data;
    }); 
  }
  
  getAppointmentsPeruser(): Observable<string[]> {  
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
      
    return this.http.get(this.apiUrl + 'appointments/patient', {headers})
                    .map((resp:any) =>{
                        return resp;
                    }); 
  }
  destroyAppointment(appointment) {
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    // appointment.email = localStorage.getItem('emailUser'); appointment.password = localStorage.getItem('passUser');
    
    return this.http.post(this.apiUrl + `appointments/delete/${appointment.appointmentId}`,{}, {headers})
                    .map( data => {
                      return data;
                    });
  }

  

}

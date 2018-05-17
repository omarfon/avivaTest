import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'apollo-client/util/Observable';



@Injectable()
export class PayuTestProvider {

  private apiUrl = "http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/ebooking/payu-test"; 

  constructor(public http: HttpClient) {
    console.log('Hello PayuTestProvider Provider');
  }


  ping(datos){
    console.log('ping:');
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    let params = {"command":"PING"}; 
    return this.http.post(this.apiUrl, params, {headers})
    .map(data =>{
      console.log(data);
      return data;
    }); 
}

command(numero, cvv){
  console.log('command:', numero, cvv);
  const authorization = localStorage.getItem('authorization');
  let headers = new HttpHeaders({"Authorization": authorization});
  let params = {
    "command": "SUBMIT_TRANSACTION",
    "transaction": {
        "order": {
            "accountId": "512323",
            "referenceCode": "payment_test_00000001",
            "description": "payment test",
            "language": "es",
            "notifyUrl": "http://dappapache02.eastus.cloudapp.azure.com:4000/api/v2/ebooking/hello",
            "additionalValues": {
             "TX_VALUE": {
                "value": 100,
                "currency": "PEN"
             }
          },
          "buyer": {
             "merchantBuyerId": "1",
             "fullName": "First name and second buyer  name",
             "emailAddress": "buyer_test@test.com",
             "contactPhone": "7563126",
             "dniNumber": "5415668464654",
             "shippingAddress": {
                "street1": "Avenida de la poesia",
                "street2": "106",
                "city": "Cuzco",
                "state": "CU",
                "country": "PE",
                "postalCode": "000000",
                "phone": "7563126"
             }
          }
        },
        
        "payer": {
          "merchantPayerId": "1",
          "fullName": "First name and second payer name",
          "emailAddress": "payer_test@test.com",
          "contactPhone": "7563126",
          "dniNumber": "5415668464654",
          "billingAddress": {
             "street1": "av abancay",
             "street2": "cra 4",
             "city": "Iquitos",
             "state": "LO",
             "country": "PE",
             "postalCode": "64000",
             "phone": "7563126"
          }
       },
        "creditCard": {
          "number": numero,
          "securityCode": cvv,
          "expirationDate": "2020/09",
          "name": "REJECTED"
        },
      "type": "AUTHORIZATION_AND_CAPTURE",
      "paymentMethod": "VISA",
      "paymentCountry": "PE"
    }
  }; 

  return this.http.post(this.apiUrl, params, {headers})
  .map(data =>{
    console.log(data);
    return data;
  }); 
}

}

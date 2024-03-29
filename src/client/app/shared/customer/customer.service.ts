import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/do';  // for debugging

export class CustomerData {
    public AccountNumber:number;
    public AddressCity:string;
    public AddressCountry:string;
    public AddressStreet:string;
    public FirstName:string;
    public Gender:string;
    public LastName:string;
    public PictureUri:string;
}

@Injectable()
export class CustomerService {

  constructor(private http: Http) {}

  get(): Observable<CustomerData[]> {
    return this.http.get('/assets/GetAllCustomers.json')
                    .map((res: Response) => res.json())
    //              .do(data => console.log('server data:', data))  // debug
                    .catch(this.handleError);
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}


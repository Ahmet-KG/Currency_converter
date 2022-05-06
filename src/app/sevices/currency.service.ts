import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Converts, Rates } from '../shared/rates';

const headers = new HttpHeaders()
  .set('apikey', 'wZjCx6upwrdB9bP3kKCNze2qHSQ5tqYQ');

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getRates(): Observable<Rates> {
    return this.http.get<Rates>("https://api.apilayer.com/fixer/latest?&base=USD", {headers} )
  }

  getConvertEUR(): Observable<Converts> {
    return this.http.get<Converts>("https://api.apilayer.com/fixer/convert?to=UAH&from=EUR&amount=1", {headers} )
  }

  getConvertUSD(): Observable<Converts> {
    return this.http.get<Converts>("https://api.apilayer.com/fixer/convert?to=UAH&from=USD&amount=1", {headers} )
  }
}

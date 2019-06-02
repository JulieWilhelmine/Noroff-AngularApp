import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {
  private url = 'https://api.adviceslip.com/advice';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';


  constructor(private http: Http) {
   }

  getAdvice(): Observable<any> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => {
        return response.json();
      })
    );
  }
}
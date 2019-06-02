import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = 'https://pokeapi.co/api/v2/pokemon/';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';


  constructor(private http: Http) {
   }

  getPokemon(): Observable<any> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => {
        return response.json();
      })
    );
  }
}

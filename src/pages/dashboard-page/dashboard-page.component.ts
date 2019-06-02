import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from './../../services/weather-service.service';
import { AdviceService } from './../../services/advice.service';
import { NamedayService } from './../../services/nameday.service';
import { PokemonService } from './../../services/pokemon.service';
import 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  providers: [WeatherService, AdviceService, NamedayService, PokemonService]
})
export class DashboardPageComponent implements OnInit {

  public weatherDetail: Array<any>;
  public adviceDetail: Object;
  public namedayDetail: Array<any>;
  public pokemonDetail: Array<any>;

  constructor(protected router: Router, protected weatherService: WeatherService,
    protected adviceService: AdviceService, protected namedayService: NamedayService,
    protected pokemonService: PokemonService) {
   }

  ngOnInit() {
    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/']);
    }
    this.weatherService.getWeekForecast()
    .subscribe(
      weather => {
      this.weatherDetail = weather.consolidated_weather;
    })
    this.adviceService.getAdvice()
    .subscribe(
      advice => {
        this.adviceDetail = advice.slip;
      })
    this.namedayService.getNameday()
    .subscribe(
      nameday => {
        this.namedayDetail = nameday.data;
      })
      this.pokemonService.getPokemon()
    .subscribe(
      pokemon => {
        this.pokemonDetail = pokemon.results;
      })    
  };
}

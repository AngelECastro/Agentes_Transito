import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forecast } from './interfaces/interfaces';

const apiKey = '5154da0aa5fc6eb70df6edd3b41ccc3b';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getForecastNow<Forecast>(lat: string, lon: string) {
    const query = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}`;

    return this.http.get<Forecast>(query);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forecast } from './interfaces/interfaces';

const apiKey = '4b7f9f3a58071ebd0634a036f6da88c4';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getForecastNow<Forecast>(lat: string, lon: string) {
    const query = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    return this.http.get<Forecast>(query);
  }
}

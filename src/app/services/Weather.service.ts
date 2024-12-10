import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { WeatherResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = `a7d0625f0a46cc81d1a249c9a9fa98d1`;
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  constructor(private httpClient: HttpClient) {}

  getWeather(city: string): Observable<WeatherResponse> {
    if (!city) {
      console.error('City name is empty');
      return of(null as any);
    }
    return this.httpClient.get<WeatherResponse>(
      `${this.apiUrl}?q=${city}&appid=${this.apiKey}`
    );
  }
}

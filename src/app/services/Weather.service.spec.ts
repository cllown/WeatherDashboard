import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { WeatherService } from './Weather.service';
import { WeatherResponse } from '../models';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    });

    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch weather data for a city', () => {
    const dummyWeather: WeatherResponse = {
      coord: { lon: 0, lat: 0 },
      weather: [
        { id: 1, main: 'Clear', description: 'Clear sky', icon: '01d' },
      ],
      base: 'stations',
      main: {
        temp: 15,
        feels_like: 15,
        temp_min: 10,
        temp_max: 20,
        pressure: 1013,
        humidity: 80,
      },
      visibility: 10000,
      wind: { speed: 5, deg: 200 },
      clouds: { all: 0 },
      rain: undefined,
      snow: undefined,
      dt: 1618317040,
      sys: { country: 'US', sunrise: 1618297326, sunset: 1618342563 },
      timezone: -14400,
      id: 123456,
      name: 'New York',
      cod: 200,
    };

    service.getWeather('New York').subscribe((data) => {
      expect(data).toEqual(dummyWeather);
    });

    const req = httpMock.expectOne(
      'https://api.openweathermap.org/data/2.5/weather?q=New York&appid=a7d0625f0a46cc81d1a249c9a9fa98d1'
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyWeather);
  });

  afterEach(() => {
    httpMock.verify();
  });
});

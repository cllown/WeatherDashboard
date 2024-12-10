import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardListComponent } from './card-list.component';
import { WeatherResponse } from '../../models';
import { CardComponentComponent } from '../card-component/card-component.component';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListComponent, CardComponentComponent],
      imports: [CommonModule],
      schemas: [NO_ERRORS_SCHEMA], // Убирает ошибки связанные с дочерними компонентами
    }).compileComponents();

    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new city', () => {
    const city: WeatherResponse = {
      coord: { lon: 0, lat: 0 },
      weather: [
        { id: 1, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      base: 'stations',
      main: {
        temp: 25,
        feels_like: 23,
        temp_min: 22,
        temp_max: 27,
        pressure: 1013,
        humidity: 60,
      },
      visibility: 10000,
      wind: { speed: 5, deg: 270 },
      clouds: { all: 0 },
      rain: undefined,
      snow: undefined,
      dt: 1600000000,
      sys: { country: 'US', sunrise: 1600000000, sunset: 1600000000 },
      timezone: -14400,
      id: 1,
      name: 'Test City',
      cod: 200,
    };

    component.addCity(city);
    expect(component.cities.length).toBe(1);
    expect(component.cities[0].name).toBe('Test City');
  });

  it('should not add the same city twice', () => {
    const city: WeatherResponse = {
      coord: { lon: 0, lat: 0 },
      weather: [
        { id: 1, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      base: 'stations',
      main: {
        temp: 25,
        feels_like: 23,
        temp_min: 22,
        temp_max: 27,
        pressure: 1013,
        humidity: 60,
      },
      visibility: 10000,
      wind: { speed: 5, deg: 270 },
      clouds: { all: 0 },
      rain: undefined,
      snow: undefined,
      dt: 1600000000,
      sys: { country: 'US', sunrise: 1600000000, sunset: 1600000000 },
      timezone: -14400,
      id: 1,
      name: 'Test City',
      cod: 200,
    };

    component.addCity(city);
    component.addCity(city); // Попытка добавить тот же город еще раз
    expect(component.cities.length).toBe(1); // Город не должен быть добавлен дважды
  });

  it('should remove a city', () => {
    const city1: WeatherResponse = {
      coord: { lon: 0, lat: 0 },
      weather: [
        { id: 1, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      base: 'stations',
      main: {
        temp: 25,
        feels_like: 23,
        temp_min: 22,
        temp_max: 27,
        pressure: 1013,
        humidity: 60,
      },
      visibility: 10000,
      wind: { speed: 5, deg: 270 },
      clouds: { all: 0 },
      rain: undefined,
      snow: undefined,
      dt: 1600000000,
      sys: { country: 'US', sunrise: 1600000000, sunset: 1600000000 },
      timezone: -14400,
      id: 1,
      name: 'Test City 1',
      cod: 200,
    };
    const city2: WeatherResponse = {
      coord: { lon: 0, lat: 0 },
      weather: [
        { id: 1, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      base: 'stations',
      main: {
        temp: 25,
        feels_like: 23,
        temp_min: 22,
        temp_max: 27,
        pressure: 1013,
        humidity: 60,
      },
      visibility: 10000,
      wind: { speed: 5, deg: 270 },
      clouds: { all: 0 },
      rain: undefined,
      snow: undefined,
      dt: 1600000000,
      sys: { country: 'US', sunrise: 1600000000, sunset: 1600000000 },
      timezone: -14400,
      id: 2,
      name: 'Test City 2',
      cod: 200,
    };

    component.addCity(city1);
    component.addCity(city2);
    component.removeCard(city1);
    expect(component.cities.length).toBe(1);
    expect(component.cities[0].name).toBe('Test City 2');
  });

  it('should load cities from localStorage', () => {
    const citiesData = [
      {
        coord: { lon: 0, lat: 0 },
        weather: [
          { id: 1, main: 'Clear', description: 'clear sky', icon: '01d' },
        ],
        base: 'stations',
        main: {
          temp: 25,
          feels_like: 23,
          temp_min: 22,
          temp_max: 27,
          pressure: 1013,
          humidity: 60,
        },
        visibility: 10000,
        wind: { speed: 5, deg: 270 },
        clouds: { all: 0 },
        rain: undefined,
        snow: undefined,
        dt: 1600000000,
        sys: { country: 'US', sunrise: 1600000000, sunset: 1600000000 },
        timezone: -14400,
        id: 1,
        name: 'Stored City',
        cod: 200,
      },
    ];

    localStorage.setItem('cities', JSON.stringify(citiesData));
    component.loadCities();
    expect(component.cities.length).toBe(1);
    expect(component.cities[0].name).toBe('Stored City');
  });

  it('should save cities to localStorage', () => {
    const city: WeatherResponse = {
      coord: { lon: 0, lat: 0 },
      weather: [
        { id: 1, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      base: 'stations',
      main: {
        temp: 25,
        feels_like: 23,
        temp_min: 22,
        temp_max: 27,
        pressure: 1013,
        humidity: 60,
      },
      visibility: 10000,
      wind: { speed: 5, deg: 270 },
      clouds: { all: 0 },
      rain: undefined,
      snow: undefined,
      dt: 1600000000,
      sys: { country: 'US', sunrise: 1600000000, sunset: 1600000000 },
      timezone: -14400,
      id: 1,
      name: 'Test City',
      cod: 200,
    };

    component.addCity(city);
    const savedCities = JSON.parse(localStorage.getItem('cities') || '[]');
    expect(savedCities.length).toBe(1);
    expect(savedCities[0].name).toBe('Test City');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponentComponent } from './card-component.component';
import { WeatherResponse } from '../../models';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CardComponentComponent', () => {
  let component: CardComponentComponent;
  let fixture: ComponentFixture<CardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display city name', () => {
    const city: WeatherResponse = {
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

    component.city = city;
    fixture.detectChanges();

    const cityName = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(cityName.textContent).toBe('New York');
  });
});

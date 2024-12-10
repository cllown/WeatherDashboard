import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponentComponent } from '../card-component/card-component.component';
import { WeatherResponse } from '../../models';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardComponentComponent],
  templateUrl: './card-list.component.html',
  animations: [
    trigger('fadeIn', [
      transition('void => *', [style({ opacity: 0 }), animate(500)]),
    ]),
  ],
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  @Input() cities: WeatherResponse[] = [];

  constructor() {
    this.loadCities();
  }

  loadCities() {
    const storedCities = localStorage.getItem('cities');
    if (storedCities) {
      this.cities = JSON.parse(storedCities);
    }
  }

  saveCities() {
    localStorage.setItem('cities', JSON.stringify(this.cities));
  }

  removeCard(city: WeatherResponse) {
    this.cities = this.cities.filter((c) => c.name !== city.name);
    this.saveCities();
  }

  addCity(city: WeatherResponse) {
    const cityExists = this.cities.some((c) => c.name === city.name);
    if (!cityExists) {
      this.cities.push(city);
      this.saveCities();
    } else {
      alert('This city is already added!');
    }
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponentComponent } from '../card-component/card-component.component';
import { WeatherResponse } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardComponentComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  @Input() cities: WeatherResponse[] = [];

  removeCard(city: WeatherResponse): void {
    this.cities = this.cities.filter((c) => c.id !== city.id);
  }
}

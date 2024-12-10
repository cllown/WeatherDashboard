import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherResponse } from './models';
import { WeatherService } from './services/Weather.service';
import { CardListComponent } from './components/card-list/card-list.component';
import { ListboxComponent } from './components/listbox/listbox.component';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardListComponent,
    ListboxComponent,
    InputTextModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cityName: string = '';
  cities: WeatherResponse[] = [];
  selectedCity: WeatherResponse | null = null;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  onSearch(): void {
    if (this.cityName.trim()) {
      this.weatherService.getWeather(this.cityName).subscribe(
        (response) => {
          this.cities = [response];
        },
        (error) => {
          console.error('Error fetching weather data:', error);
        }
      );
    }
  }

  onCitySelect(city: WeatherResponse): void {
    this.selectedCity = city;
    console.log('Selected city:', city);
  }
}

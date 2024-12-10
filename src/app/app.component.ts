import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherResponse } from './models';
import { WeatherService } from './services/Weather.service';
import { CardListComponent } from './components/card-list/card-list.component';
import { ListboxComponent } from './components/listbox/listbox.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardListComponent,
    ListboxComponent,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cityName: string = '';
  cities: WeatherResponse[] = [];
  selectedCity: WeatherResponse | null = null;

  constructor(private weatherService: WeatherService) {
    this.loadCities();
  }

  loadCities() {
    const storedCities = localStorage.getItem('cities');
    if (storedCities) {
      this.cities = JSON.parse(storedCities);
    }
  }

  onSearch() {
    if (!this.cityName.trim()) {
      alert('Please enter a valid city name');
      return;
    }

    this.weatherService.getWeather(this.cityName).subscribe(
      (data) => {
        if (this.cities.some((city) => city.name === data.name)) {
          alert('City is already added!');
        } else {
          this.cities.push(data);
          this.saveCities();
        }
      },
      (error) => {
        console.error('Error fetching weather data', error);
      }
    );
  }

  saveCities() {
    localStorage.setItem('cities', JSON.stringify(this.cities));
  }
}

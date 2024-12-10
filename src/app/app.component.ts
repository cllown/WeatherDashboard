import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherResponse } from './models';
import { WeatherService } from './services/Weather.service';
import { CardListComponent } from './components/card-list/card-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardListComponent,
    InputTextModule,
    ButtonModule,
    ProgressSpinnerModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cityName: string = '';
  cities: WeatherResponse[] = [];
  selectedCity: WeatherResponse | null = null;
  isLoading: boolean = false;
  errorMessage: string = '';

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

    this.isLoading = true;
    this.errorMessage = '';

    this.weatherService.getWeather(this.cityName).subscribe(
      (data) => {
        this.isLoading = false;
        if (this.cities.some((city) => city.name === data.name)) {
          alert('City is already added!');
        } else {
          this.cities.push(data);
          this.saveCities();
        }
      },
      (error) => {
        this.isLoading = false;
        if (error.status === 404) {
          this.errorMessage = 'City not found! Please try again.';
        } else {
          console.error('Error fetching weather data', error);
          this.errorMessage = 'An error occurred. Please try again later.';
        }
      }
    );
  }

  saveCities() {
    localStorage.setItem('cities', JSON.stringify(this.cities));
  }
}

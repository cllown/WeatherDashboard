import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { WeatherService } from './services/Weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponentComponent, SearchComponentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  weatherData: any[] = [];
  loading: boolean = false;

  constructor(private weatherService: WeatherService) {}

  onCityAdded(city: string): void {
    this.loading = true;
    this.weatherService.getWeather(city).subscribe((data) => {
      this.loading = false;
      if (data) {
        this.weatherData.push(data);
      } else {
        alert('City not found');
      }
    });
  }

  onCityRemoved(city: string): void {
    this.weatherData = this.weatherData.filter((w) => w.city !== city);
  }
}

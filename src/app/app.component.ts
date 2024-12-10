import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { WeatherResponse } from './models';
import { Store } from '@ngrx/store';
import { selectWeather } from './store/selectors';
import * as WeatherActions from './store/actions';
import { AutoComplete } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AutoComplete],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  weather$: Observable<WeatherResponse[]> | undefined;
  filteredWeather$: Observable<WeatherResponse[]>;
  cityName: string = '';

  constructor(private store: Store) {
    this.filteredWeather$ = this.store
      .select(selectWeather)
      .pipe(
        map((weather) =>
          weather.filter((city) =>
            city.name.toLowerCase().includes(this.cityName.toLowerCase())
          )
        )
      );
  }

  loadWeather() {
    if (this.cityName) {
      this.store.dispatch(
        WeatherActions.loadWeather({ cityName: this.cityName })
      );
    }
  }
}

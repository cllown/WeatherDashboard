import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { WeatherResponse } from './models';
import { selectWeather } from './store/selectors';
import * as WeatherActions from './store/actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ListboxModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  weather$: Observable<WeatherResponse[]> | undefined;
  filteredWeather$: Observable<WeatherResponse[]>;
  selectedCity: WeatherResponse | null = null;

  constructor(private store: Store) {
    this.filteredWeather$ = this.store
      .select(selectWeather)
      .pipe(map((weather) => (weather ? weather : [])));
  }

  loadWeather() {
    if (this.selectedCity) {
      this.store.dispatch(
        WeatherActions.loadWeather({ cityName: this.selectedCity.name })
      );
    }
  }
}

import { inject, Injectable } from '@angular/core';
import * as WeatherActions from './actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { WeatherService } from '../services/Weather.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

@Injectable()
export class WeatherEffects {
  private actions$ = inject(Actions);
  private weatherService = inject(WeatherService);
  private store = inject(Store);

  loadWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.loadWeather),
      mergeMap(({ cityName }) =>
        this.weatherService.getWeather(cityName).pipe(
          map((weather) => WeatherActions.loadWeatherSuccess({ weather })),
          catchError((error) =>
            of(WeatherActions.loadWeatherFailure({ error }))
          )
        )
      )
    )
  );
}

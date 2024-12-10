import { createAction, props } from '@ngrx/store';
import { WeatherResponse } from '../models';

export const loadWeather = createAction(
  '[Weather] Load Weather',
  props<{ cityName: string }>()
);

export const loadWeatherSuccess = createAction(
  '[Weather] Load Weather Success',
  props<{ weather: WeatherResponse | null }>()
);

export const loadWeatherFailure = createAction(
  '[Weather] Load Weather Failure',
  props<{ error: any }>()
);

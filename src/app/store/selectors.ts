import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from './state';

export const selectState = createFeatureSelector<WeatherState>('WeatherState');

export const selectWeather = createSelector(
  selectState,
  (state: WeatherState) => state?.weather || []
);

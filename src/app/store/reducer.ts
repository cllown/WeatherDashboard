import { createReducer, on } from '@ngrx/store';
import { initialState } from './state';
import * as WeatherActions from './actions';

export const weatherReducer = createReducer(
  initialState,

  on(WeatherActions.loadWeatherSuccess, (state, { weather }) => ({
    ...state,
    weather: weather ? [weather] : null,
  })),

  on(WeatherActions.loadWeatherFailure, (state, { error }) => ({
    ...state,
    error: error,
  }))
);

import { WeatherResponse } from '../models';

export interface WeatherState {
  weather: WeatherResponse[] | null;
}

export const initialState: WeatherState = {
  weather: null,
};

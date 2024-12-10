Angular Weather Dashboard App
Introduction
This project is an Angular application that provides weather information for various cities around the world. It includes features for searching cities, displaying current weather data, and showing detailed forecasts.

Features
City Search: Search for cities by name and view their current weather.
Current Weather: Display the current temperature, humidity, wind speed, and weather conditions for the selected city.
Forecast Display: Show weather forecasts for the upcoming days.
Installation
Clone the repository:

git clone https://github.com/cllown/WeatherDashboard.git
cd WeatherDashboard
Install dependencies:

npm install
Running and Building
Run the application in development mode:

ng serve
The application will be available at http://localhost:4200.

Build the application for production:

npm run build
The build will be created in the dist/ folder.

Architecture
The application is built using Angular and follows a modular structure, with key components, services, and models.


Libraries and Frameworks
Angular: The core framework used to build the application.
PrimeNG: UI component library used for components like p-card, p-dropdown, p-button, etc.
RxJS: For handling asynchronous operations and managing data streams.
OpenWeather API: Provides the weather data used in the application.

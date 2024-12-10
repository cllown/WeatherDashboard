Weather Dashboard
A simple and interactive weather dashboard that allows users to search for cities and view weather information. The app fetches weather data from the OpenWeather API and displays it in a user-friendly interface. The dashboard allows adding, viewing, and removing weather cards dynamically with smooth animations.

Features
Search for cities and get their weather information (temperature, humidity, weather description).
Add multiple cities to the dashboard and display their weather.
Remove cities from the list.
Persistent data using localStorage, so the cities remain even after a page refresh.
A loading spinner is displayed while data is being fetched.
Smooth animations for displaying weather cards.
Error handling for invalid city queries.
Tech Stack
Frontend: Angular
UI Library: PrimeNG, PrimeIcons
API: OpenWeather API
CSS: SCSS (Sass)
Installation
To set up the project locally, follow these steps:

Prerequisites
Ensure you have the following installed on your machine:

Node.js
npm (Node package manager)
Steps to Install
Clone the repository:

bash
git clone https://github.com/cllown/WeatherDashboard.git
Navigate into the project directory:

bash
cd weather-dashboard
Install dependencies:

Use npm to install the required dependencies:

bash
npm install
Configure the OpenWeather API key:

You need to get your own API key from OpenWeather. After obtaining your API key, add it to the WeatherService file in the following line:

typescript
private apiKey = 'YOUR_API_KEY';
Start the application:

Run the following command to start the app:

bash
ng serve
This will start the development server and the application will be available at http://localhost:4200.

Usage
Once the app is running, you can:

Enter a city name in the input field to search for the city's weather.
Click the Search button to fetch the weather data.
The weather details for the selected city will be displayed in a card.
You can add multiple cities, and they will remain saved (using localStorage).
If you wish to remove a city, click the Remove button on the city card.
The application will automatically show a loading spinner while fetching the data and display an error message if the city is not found.

Screenshots

Contributing
Fork the repository.
Create a new branch for your feature or bugfix (git checkout -b feature-name).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-name).
Create a pull request.


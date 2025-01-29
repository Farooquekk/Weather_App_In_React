import { useState, useEffect } from "react";
import axios from "axios";

const Data = () => {
  const [city, setCity] = useState(""); 
  const [searchCity, setSearchCity] = useState(null); 
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); 
  const APIKey = import.meta.env.VITE_WEATHER_APP_KEY;


  useEffect(() => {
    if (searchCity) {  
      axios
        .get(`https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${searchCity}&aqi=no`)
        .then((response) => {
          setData(response.data);
          setError(null); 
        })
        .catch((error) => {
          console.log("Error while fetching the data", error);
          setError("City not found or invalid API key.");
        });
    }
  }, [searchCity]); 

  return (
    <div className="bg-blue-700 min-h-screen w-full p-6 sm:p-10 flex flex-col items-center">
      {/* Search for city */}
      <div className="flex flex-col items-center p-4 max-w-2xl w-full">
        <h1 className="font-bold text-white text-2xl mb-6 underline text-center">
          SEARCH FOR ANY CITY
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)} 
            type="text"
            required
            placeholder="Please Enter City"
            className="h-12 w-full sm:w-[500px] font-bold text-lg text-center border-2 border-white rounded outline-none"
          />
          <button
            onClick={() => setSearchCity(city)} 
            className="bg-yellow-100 w-full sm:w-24 font-semibold text-gray-600 rounded-lg py-2 hover:bg-amber-200 transition"
          >
            Search
          </button>
        </div>
      </div>

      
      {error && (
        <div className="text-red-600 mt-4">
          <p>{error}</p>
        </div>
      )}

      {/* Show weather data if available */}
      {data && !error && (
        <div className="mt-6 p-6 rounded-2xl bg-blue-300 shadow-lg text-center w-[70vw]">
          <h2 className="text-2xl font-bold">
            {data.location.name}, {data.location.country}
          </h2>
          <p className="text-gray-700">Temperature: {data.current.temp_c}°C</p>
          <p className="text-gray-700">Condition: {data.current.condition.text}</p>
          <img
            src={data.current.condition.icon}
            alt="weather icon"
            className="mx-auto"
          />
          <div className="mt-4">
            <h3 className="font-semibold text-2xl">Additional Information:</h3>
            <p className="text-gray-700">Wind Speed: {data.current.wind_kph} km/h</p>
            <p className="text-gray-700">Humidity: {data.current.humidity} %</p>
          </div>
        </div>
      )}

      
        
      
    </div>
  );
};

export default Data;

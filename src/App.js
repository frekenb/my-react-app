import React from "react";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-app-part container">
        <div className="clearfix">
          <form className="float-left">
            <input type="text" placeholder="enter a city" autoComplete="off" />
            <input type="submit" className="btn btn-primary" value="Search" />
          </form>
          <button className="float-left btn btn-success">
            Current location
          </button>
        </div>
        <div className="weather-summary">
          <div className="weather-summary-header pb-4">
            <h1>Kiev</h1>
            <div className="weather-detail-text">Tuesday 18:45</div>
            <div className="weather-detail-text">Clouds</div>
            <div className="row">
              <div className="col-sm-6">
                <div className="clearfix">
                  <div className="float-left weather-icon"></div>
                  <div className="weather-temp weather-temp-today">25 C</div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="weather-detail">Precipitation: 59</div>
                <div className="weather-detail">Wind: 5,4 km/hour</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2">
            <div className="forecast-day">Mon</div>
            <div className="forecast-icon">24</div>
            <div className="forecast-temperature">23</div>
          </div>
          <div className="col-sm-2">
            <div className="forecast-day">Tue</div>
            <div className="forecast-icon">24</div>
            <div className="forecast-temperature">24</div>
          </div>
          <div className="col-sm-2">
            {" "}
            <div className="forecast-day">Wed</div>
            <div className="forecast-icon">23</div>
            <div className="forecast-temperature">23</div>
          </div>
          <div className="col-sm-2">
            <div className="forecast-day">Thu</div>
            <div className="forecast-icon">23</div>
            <div className="forecast-temperature">23</div>
          </div>
          <div className="col-sm-2">
            {" "}
            <div className="forecast-day">Fri</div>
            <div className="forecast-icon">23</div>
            <div className="forecast-temperature">23</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

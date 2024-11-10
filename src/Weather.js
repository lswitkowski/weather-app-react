import "./Weather.css";

export default function Weather(){
    return (
      <div className="Weather p-5 m-4">
        <form className="m-1">
          <input
            className="form-input"
            type="search"
            placeholder="Enter a city"
          />
          <input className="form-button" type="submit" value="Search" />
        </form>
        <h1 class="mt-5 mb-5">New York</h1>
       
        <div className="row mt-4 ">
          <div className="col-3">
            <ul>
              <li>Wednesday 7:00</li>
              <li>Mostly Cloudy</li>
            </ul>
          </div>

          <div className="col-4">
            <img
              className="weather-icon"
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny logo"
            />
            <span className="temperature">6</span>
            <span className="unit">℃</span>
          </div>
          <div className="col-5">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
}
import "./Weather.css";

export default function Weather(){
    return (
      <div className="Weather">
        <form>
            <input className="form-input" type="search" placeholder="Enter a city"/>
        <input className="form-button" type="submit" value="Search"/>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Wednesday 7:00</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny logo"
            />
            6℃
          </div>
          <div className="col-6">
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
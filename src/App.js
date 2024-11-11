import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather.js";



export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This website was coded by{" "}
          <a
            href="https://github.com/lswitkowski/"
            target="_blank"
            rel="noreferrer"
          >
            Lisa W
          </a>
          , open-sourced on{" "}
          <a
            href="https://github.com/lswitkowski?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          , and hosted on{" "}
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noreferrer"
            title="netlify"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

import "./App.css";
import imageSrc from "./Images/strong-coffee.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={imageSrc}
          className="homepage_mainImage"
          alt="a cup of strong and aromatic coffee"
        />
        <h1>Welcome to Coffee 24</h1>
        <p>Best coffee north of Manchester</p>
      </header>
    </div>
  );
}

export default App;

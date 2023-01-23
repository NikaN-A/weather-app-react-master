import "./Weather.css";
import Search from "./Search";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weatherApp-wrapper">
          <div className="weatherApp">
            <Search defaultCity="Amsterdam" />
            <Main />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

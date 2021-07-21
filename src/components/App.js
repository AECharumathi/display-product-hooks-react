import './App.scss';

import {
  BrowserRouter as Router,
  Redirect,
  Route
} from "react-router-dom";

import Header from '../container/Header';
import Home from '../container/Home';
import Footer from "../container/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <Router>
          <Route path="/home" children={<Home />} />
          <Route path="/"
            render={() =>
              <Redirect to="/home" />
            }
          />
        </Router>
      </body>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

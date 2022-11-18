import "./App.css";
import Home from "./home";
import Quiz from "./quiz";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const axios = require("axios").default;

function App() {
  return (
    <div className="App">
      <header className="heading-container">
        <h1>Ulitmate Dog Quiz</h1>
      </header>
      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/quiz">
              <Quiz />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;

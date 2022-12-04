import HomePage from "./components/homepage";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* before swtich no change */}
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

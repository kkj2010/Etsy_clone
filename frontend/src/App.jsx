import HomePage from "./components/homepage"
import {Switch, Route} from "react-router-dom"

function App() {
  

  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>

          <HomePage/>

        </Route>
      </Switch>       
    </div>
  );
}

export default App;

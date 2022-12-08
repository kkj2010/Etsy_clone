import HomePage from "./components/homepage";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AllProducts from "./components/Products/Allproducts";
import ProductShow from "./components/Products/ProductShow";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* before swtich no change */}
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/products/:category"}>
          <AllProducts/>
        </Route>
        <Route exact path={"/products/:category/:productId"}>
          <ProductShow/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

//prpoducts- all products
//products/new - new product
// product/id- product detail
// carts- my cart

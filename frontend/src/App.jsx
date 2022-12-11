import HomePage from "./components/homepage";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AllProducts from "./components/Products/Allproducts";
import ProductShow from "./components/Products/ProductShow";
import ProductForm from "./components/Products/ProductForm";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* before swtich no change */}
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/products/new"}>
          <ProductForm />
        </Route>
        <Route exact path={"/products/:category"}>
          <AllProducts />
        </Route>
        <Route exact path={"/products/:category/:productId"}>
          <ProductShow />
        </Route>
        <Route exact path={"/products/cart"}>
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;



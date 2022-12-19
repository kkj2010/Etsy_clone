import HomePage from "./components/HomePage";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AllProducts from "./components/Products/Allproducts";
import ProductShow from "./components/Products/ProductShow";
import ProductForm from "./components/Products/ProductForm";
import Cart from "./components/Cart/Cart";
import CheckOutPage from "./components/Checkout/CheckOutPage";

function App() {
  return (
    <div className="App">
      <Navigation />

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
        <Route exact path={"/cart"}>
          <Cart />
        </Route>
        <Route exact path={"/cart/checkout"}>
          <CheckOutPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

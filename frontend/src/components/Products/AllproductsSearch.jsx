import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../store/reducers/productReducer";
import "./AllproductsSearch.css";
// import ProductGrid from "./ProductGrid";
import Rating from "./Rating";
import { formatPrice } from "../../utils/formatPrice";
import { Link } from "react-router-dom";

export default function AllProducts() {
  const { text } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = useSelector((state) =>
    Object.values(state.products).filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    )
  );

  return (
    <>
      <div className="lovedItemsContainer">
        <div className="loveditemTitle">
          <h1>Most loved in: "{text}"</h1>
        </div>

        <ul className="lovedItemsImages">
          {filteredProducts?.map((product) => (
            <Link key={product.id} to={`/products/${product.category.name}/${product.id}`} >
            <li className="suggestion1" >
              <div className="lovedList">
                <img src={product.photos[0].url} alt={product.name} />
              </div>
              <div className="lovedItemsProductName">{product.name}</div>
              <div className="lovedItemsUser">{product.seller.firstName}</div>
              <div className="lovedRating">
                <Rating rating={product.rating} />
              </div>
              <div className="lovedPrice">{formatPrice(product.price)}</div>
            </li>
            </Link>
          ))}

        
        </ul>
        <div className="underLine"></div>
        {/* <ProductGrid products={filteredProducts} /> */}
      </div>
    </>
  );
}

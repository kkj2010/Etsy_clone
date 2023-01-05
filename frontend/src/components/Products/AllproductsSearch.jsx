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

          {/* <li className="suggestion1">
            <div className="lovedList">
              <img src="/img/deco1.png" />
            </div>
            <div className="lovedItemsProductName">
              Christmas Stocking,Personalized Chrsitams Stocking
            </div>
            <div className="lovedItemsUser">CPDESIGNusa</div>
          </li>
          <li className="suggestion2">
            <div className="lovedList">
              <img src="/img/deco3.png" />
            </div>
          </li>
          <li className="suggestion3">
            <div className="lovedList">
              <img src="/img/deco4.png" />
            </div>
          </li>
          <li className="suggestion4">
            <div className="lovedList">
              <img src="/img/deco5.png" />
            </div>
          </li>
          <li className="suggestion5">
            <div className="lovedList">
              <img src="/img/deco6.png" />
            </div>
          </li>
          <li className="suggestion5">
            <div className="lovedList">
              <img src="/img/deco6.png" />
            </div>
          </li> */}
        </ul>
        <div className="underLine"></div>
        {/* <ProductGrid products={filteredProducts} /> */}
      </div>
    </>
  );
}

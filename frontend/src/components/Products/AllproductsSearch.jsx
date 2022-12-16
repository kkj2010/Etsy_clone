import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../store/reducers/productReducer";
import "./Allproducts.css";

export default function AllProducts() {
  const { text } = useParams();
  // const dispatch= useDispatch();
  // useEffect(()=>{
  //   dispatch(fetchProducts())
  // },[dispatch])

  return (
    <>
      <div className="lovedItemsContainer">
        <div className="loveditemTitle">
          <h1>Most loved in: "{text} "</h1>
        </div>

        <ul className="lovedItemsImages">
          <li className="suggestion1">
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
          </li>
        </ul>
        <div className="underLine"></div>
      </div>
    </>
  );
}


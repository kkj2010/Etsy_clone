import "./index.css";
import { useState } from "react";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  const [panelId, setPanelId] = useState("farmhouse");
  const history = useHistory();
  const handleClick = () => {
    history.push(`/products/jewelry/2`);
  };
  const handleNavigate = (category,productId) => {
    history.push(`/products/${category}/${productId}`);
  };



  const generatePanel = (panelId) => {
    let panel = null;
    switch (panelId) {
      case "farmhouse":
        panel = (
          <div className="tabPanel">
            <div className="item1" onClick={handleClick}>
              <img src="/img/item1.png" />
            </div>
            <div className="item2" onClick={handleClick}>
              <img src="/img/item2.png" />
            </div>
            <div className="item3" onClick={handleClick}>
              <img src="/img/item3.png" />
            </div>
            <div className="item4" onClick={handleClick}>
              <img src="/img/item4.png" />
            </div>
            <div className="item2" onClick={handleClick}>
              <img src="/img/item5.png" />
            </div>
            <div className="item3" onClick={handleClick}>
              <img src="/img/item6.png" />
            </div>
          </div>
        );
        return panel;
      case "eclectic":
        panel = (
          <div className="tabPanel2">
            <div className="item5" onClick={handleClick}>
              <img src="/img/item10.png" />
            </div>
            <div className="item6" onClick={handleClick}>
              <img src="/img/item8.png" />
            </div>
            <div className="item7" onClick={handleClick}>
              <img src="/img/item7.png" />
            </div>
            <div className="item8" onClick={handleClick}>
              <img src="/img/item11.png" />
            </div>
            <div className="item6" onClick={handleClick}>
              <img src="/img/item9.png" />
            </div>
            <div className="item7" onClick={handleClick}>
              <img src="/img/item12.png" />
            </div>
          </div>
        );
        return panel;
      case "minimal":
        panel = (
          <div className="tabPanel1">
            <div className="item9" onClick={handleClick}>
              <img src="/img/item13.png" />
            </div>
            <div className="item10" onClick={handleClick}>
              <img src="/img/item14.png" />
            </div>
            <div className="item11" onClick={handleClick}>
              <img src="/img/item16.png" />
            </div>
            <div className="item12" onClick={handleClick}>
              <img src="/img/item15.png" />
            </div>
            <div className="item10" onClick={handleClick}>
              <img src="/img/item17.png" />
            </div>
            <div className="item11" onClick={handleClick}>
              <img src="/img/item18.png" />
            </div>
          </div>
        );
        return panel;
      case "holiday":
        panel = (
          <div className="tabPanel3">
            <div className="item13" onClick={handleClick}>
              <img src="/img/item19.png" />
            </div>
            <div className="item14" onClick={handleClick}>
              <img src="/img/item20.png" />
            </div>
            <div className="item15" onClick={handleClick}>
              <img src="/img/item21.png" />
            </div>
            <div className="item16" onClick={handleClick}>
              <img src="/img/item22.png" />
            </div>
            <div className="item14" onClick={handleClick}>
              <img src="/img/item23.png" />
            </div>
            <div className="item15" onClick={handleClick}>
              <img src="/img/item24.png" />
            </div>
          </div>
        );
        return panel;
      default:
        return null;
    }
  };

  return (
    <div className="homepage">
      <div className="textContainer">
        <h1 className="displaysTitle">
          Holiday magic starts with these merry finds
        </h1>
        <ul className="displays">
          <li className="display" onClick={()=> handleNavigate("holiday_shop", 30)}>
            <img src="/img/stringlights.png" />
            <span className="text1">Seasonal Decor</span>
          </li>
          <li className="display" onClick={()=> handleNavigate("art", 20)}>
            <img src="/img/arts.png" />
            <span className="text2">Arts & Crafts</span>
          </li>
          <li className="display" onClick={handleClick}>
            <img src="/img/jewelry.png" />
            <span className="text3">Jewelry Gifts</span>
          </li>
          <li className="display" onClick={handleClick}>
            <img src="/img/sweets.png" />
            <span className="text4">Sweets</span>
          </li>
          <li className="display" onClick={handleClick}>
            <img src="/img/candle.png" />
            <span className="text5">Candle</span>
          </li>
          <li className="display" onClick={handleClick}>
            <img src="/img/love.png" />
            <span className="text6">Love</span>
          </li>
        </ul>
      </div>

      <div className="featureItems">
        <div className="itemsTitle">
          <h1>Featured Items</h1>
        </div>

        <ul className="suggestionFirstrow">
          <li className="suggestion1">
            <div className="list" onClick={handleClick}>
              <img src="/img/deco1.png" />
            </div>
          </li>
          <li className="suggestion2">
            <div className="list" onClick={handleClick}>
              <img src="/img/deco3.png" />
            </div>
          </li>
          <li className="suggestion3">
            <div className="list" onClick={handleClick}>
              <img src="/img/deco4.png" />
            </div>
          </li>
          <li className="suggestion4">
            <div className="list" onClick={handleClick}>
              <img src="/img/deco5.png" />
            </div>
          </li>
          <li className="suggestion5">
            <div className="list" onClick={handleClick}>
              <img src="/img/deco6.png" />
            </div>
          </li>
        </ul>

        <ul className="suggestionSecondrow">
          <li className="suggestion6">
            <div className="list" onClick={handleClick}>
              <img src="/img/deco7.png" />
            </div>
          </li>
          <li className="suggestion7">
            <div className="list" onClick={handleClick}>
              <img src="/img/deco8.png" />
            </div>
          </li>
          <li className="suggestion8">
            <div className="list" onClick={handleClick}>
              <img src="/img/deco9.png" />
            </div>
          </li>
          <li className="suggestion9">
            <div className="list" onClick={handleClick}>
              <img src="/img/deco10.png" />
            </div>
          </li>
          <li className="suggestion10">
            <div className="list" onClick={handleClick}>
              <img src="/img/deco11.png" />
            </div>
          </li>
        </ul>
      </div>

      <div className="discoverItemsContainer">
        <div className="discoverItemsTitle">
          <h1>Discover unique hand-picked items</h1>
          <div className="tabContainer">
            <ul className="tabLists">
              <li onClick={() => setPanelId("farmhouse")}>Modern Farmhouse</li>
              <li onClick={() => setPanelId("eclectic")}>Eclectic Decor</li>
              <li onClick={() => setPanelId("minimal")}>Minimalist</li>
              <li onClick={() => setPanelId("holiday")}>Holiday Decor</li>
            </ul>
          </div>
          {generatePanel(panelId)}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

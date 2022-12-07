import "./index.css";
import { BiRightArrowAlt } from "react-icons/bi";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="textContainer">
        <h1 className="displaysTitle">
          Holiday magic starts with these merry finds
        </h1>
        <ul className="displays">
          <li className="display">
            <img src="/img/stringlights.png" />
            <span className="text1">Seasonal Decor</span>
          </li>
          <li className="display">
            <img src="/img/arts.png" />
            <span className="text2">Arts & Crafts</span>
          </li>
          <li className="display">
            <img src="/img/jewelry.png" />
            <span className="text3">Jewelry Gifts</span>
          </li>
          <li className="display">
            <img src="/img/sweets.png" />
            <span className="text4">Sweets</span>
          </li>
          <li className="display">
            <img src="/img/candle.png" />
            <span className="text5">Candle</span>
          </li>
          <li className="display">
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
            <div className="list">
              <img src="/img/deco1.png" />
            </div>
          </li>
          <li className="suggestion2">
            <div className="list">
              <img src="/img/deco3.png" />
            </div>
            {/* <div className="priceBadge">$5.50</div> */}
          </li>
          <li className="suggestion3">
            <div className="list">
              <img src="/img/deco4.png" />
            </div>
            {/* <div className="priceBadge">$5.50</div> */}
          </li>
          <li className="suggestion4">
            <div className="list">
              <img src="/img/deco5.png" />
            </div>
            {/* <div className="priceBadge">$5.50</div> */}
          </li>
          <li className="suggestion5">
            <div className="list">
              <img src="/img/deco6.png" />
            </div>
            {/* <div className="priceBadge">$5.50</div> */}
          </li>
        </ul>

        <ul className="suggestionSecondrow">
          <li className="suggestion6">
            <div className="list">
              <img src="/img/deco7.png" />
            </div>
            {/* <div className="priceBadge">$5.50</div> */}
          </li>
          <li className="suggestion7">
            <div className="list">
              <img src="/img/deco8.png" />
            </div>
            {/* <div className="priceBadge">$5.50</div> */}
          </li>
          <li className="suggestion8">
            <div className="list">
              <img src="/img/deco9.png" />
            </div>
            {/* <div className="priceBadge">$5.50</div> */}
          </li>
          <li className="suggestion9">
            <div className="list">
              <img src="/img/deco10.png" />
            </div>
            {/* <div className="priceBadge">$5.50</div> */}
          </li>
          <li className="suggestion10">
            <div className="list">
              <img src="/img/deco11.png" />
            </div>
            {/* <div className="priceBadge">$5.50</div> */}
          </li>
        </ul>
      </div>

      
      <div className="discoverItemsContainer">
        <div className="discoverItemsTitle">
          <h1>
            Discover unique hand-picked items
            {/* <BiRightArrowAlt /> */}
          </h1>
          <div className="tabContainer">
            <ul className="tabLists">
              <li>Modern farmhouse</li>
              <li>Boho Decor</li>
              <li>Eclectic Decor</li>
              <li>Minimalist</li>
            </ul>
          </div>
          <div className="tabPanel">
            <div className="item1"><img src="/img/item1.png"/></div>
            <div className="item2"><img src="/img/item2.png"/></div>
            <div className="item3"><img src="/img/item3.png"/></div>
            <div className="item1"><img src="/img/item4.png"/></div>
            <div className="item2"><img src="/img/item5.png"/></div>
            <div className="item3"><img src="/img/item6.png"/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import "./index.css";

export default function HomePage() {
  return (
    <div>
      <div>
        <div className="textContainer">
          <h1 className="displaysTitle">
            Holiday magic starts with these merry finds
          </h1>
          <ul className="displays">
            <li className="display1">
              <img src="/img/stringlights.png" />
              <span className="text1">Seasonal Decor</span>
            </li>
            <li className="display2">
              <img src="/img/arts.png" />
              <span className="text2">Arts & Crafts</span>
            </li>
            <li className="display3">
              <img src="/img/jewelry.png" />
              <span className="text3">Jewelry Gifts</span>
            </li>
            <li className="display4">
              <img src="/img/sweets.png" />
              <span className="text4">Sweets</span>
            </li>
            <li className="display5">
              <img src="/img/candle.png" />
              <span className="text5">Candle</span>
            </li>
            <li className="display6">
              <img src="/img/love.png" />
              <span className="text6">Love</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="featureItems">
        <h1 className="itemsTitle">Featured Items</h1>
        <ul className="suggestionFirstrow">
          <li className="suggestion1">
            <div className="list1">
              <img src="/img/deco1.png" />
            </div>
            {/* <div className="priceBadge">$5.50</div> */}
          </li>
          <li className="suggestion2">
            <div className="list2">
              <img src="/img/deco2.png" />
            </div>
            {/* <div className="priceBadge">$5.50</div> */}
          </li>
          <li className="suggestion3">
            <div className="list3">
              <img src="/img/deco3.png" />
            </div>
            {/* <div className="priceBadge">$5.50</div> */}
          </li>
          <li className="suggestion4">
            <div className="list4">
              <img src="/img/deco4.png" />
            </div>
            {/* <div className="priceBadge">$5.50</div> */}
          </li>
          <li className="suggestion5">
            <div className="list5">
              <img src="/img/deco5.png" />
            </div>
            {/* <div className="priceBadge">$5.50</div> */}
          </li>
          <li className="suggestion6">
            <div className="list6">
              <img src="/img/deco6.png" />
            </div>
            {/* <div className="priceBadge">$5.50</div> */}
          </li>
        </ul>
      </div>
      <div>Fresh from the Blog</div>
    </div>
  );
}

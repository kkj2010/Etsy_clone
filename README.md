# Overview

[Shoppy](https://shoppy-1asz.onrender.com) is a [Etsy](https://www.etsy.com/) clone that allows users to buy directly from someone who put their products. 

# Technologies 
* Javascript
* React
* Redux
* Ruby
* Ruby on Rails
* PostgreSQL
* Webpack
* AWS S3
* Render

# Live
Click [here](https://shoppy-1asz.onrender.com)

# Preview
![](./images/shoppy.gif)

# Code Snippets
Below is a code snippet of adding products to cart.
When users click on "Add to cart" in product show page, and add items to cart, it will create a cart in backend, which makes items retain in shopping cart. The shopping cart items quantities would automaticlly update due to users' changes. When different users login, the cart items would show differently based their carts, and the shopping carts would be empty if users logout.
```js
export default function ProductShow() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [count, setCount] = useState(1);
  const { category, productId } = useParams();
  const userId = useSelector((state) => state.user.current);
  const [showDescription, setShowDescription] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  const product = useSelector((state) => state.products[productId]);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(productId));
    }
  }, [dispatch, productId]);

  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    if (userId) {
      dispatch(addItemToCart(productId, parseInt(selected))).then(() => {
        history.push("/cart");
      });
    } else {
      history.push("/");
    }
    setCount(1);
  };
}
```
Below is a code snippet of the carousel of the product in product show page.
```js

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleSwitchImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePrev = () => {
    let index;
    if (currentImageIndex === 0) {
      index = product.photos.length - 1;
    } else {
      index = currentImageIndex - 1;
    }
    setCurrentImageIndex(index);
  };
  const handleNext = () => {
    let index;
    if (currentImageIndex === product.photos.length - 1) {
      index = 0;
    } else {
      index = currentImageIndex + 1;
    }
    setCurrentImageIndex(index);
  };

```
# Future Plans
* Add correct link in splash page

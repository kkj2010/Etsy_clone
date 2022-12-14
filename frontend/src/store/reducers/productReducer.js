import { csrfFetch } from "../csrf";
const RECEIVE_PRODUCTS = "products/RECEIVE_PRODUCTS";
const RECEIVE_PRODUCT = "products/RECEIVE_PRODUCT";
const REMOVE_PRODUCT = "products/REMOVE_PRODUCT";
// const CREATE_PRODUCT = "products/CREATE_PRODUCT";

// export const createProduct = (product) => ({
//   type: CREATE_PRODUCT,
//   product,
// });

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});

export const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product,
});

export const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  productId,
});

export const createNewProduct = (product) => async (dispatch) => {
  const res = await csrfFetch("/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: product,
  });
  const data = await res.json();
  dispatch(receiveProduct(data));
  return res;
};

export const fetchProducts = () => async (dispatch) => {
  const res = await csrfFetch("/api/products");
  const data = await res.json();
  dispatch(receiveProducts(data));
  return res;
};

export const fetchProduct = (productId) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${productId}`);
  const data = await res.json();
  dispatch(receiveProduct(data));
  return res;
};

export const deleteProduct = (productId) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${productId}`, {
    method: "DELETE",
  });
  dispatch(removeProduct(productId));
  return res;
};

const productReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return { ...state, ...action.products };
    case RECEIVE_PRODUCT:
      return { ...state, [action.product.id]: action.product };
    default:
      return state;
  }
};

export default productReducer;

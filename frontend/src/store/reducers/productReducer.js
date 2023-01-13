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

const ADD_REVIEW = "reviews/ADD_REVIEW";
const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";

export const addReview = (review) => {
  return {
    type: ADD_REVIEW,
    review,
  };
};

export const removeReview = (review) => {
  return {
    type: REMOVE_REVIEW,
    review,
  };
};

export const createNewProduct = (product) => async (dispatch) => {
  const res = await csrfFetch("/api/products", {
    method: "POST",
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

export const createReview = (productId, review) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${productId}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ review }),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(addReview(data));
  }
};

export const editReview = (body, rating, review) => async (dispatch) => {
  const res = await csrfFetch(`/api/review/${review.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ review:{rating,body}}),
  });
  if(res.ok){
    const data= await res.json();
    dispatch(addReview(data.review))
  
  }
};

export const deleteReview = (review) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${review.id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(removeReview(review));
  }
};

const productReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return { ...state, ...action.products };
    case RECEIVE_PRODUCT:
      return { ...state, [action.product.id]: action.product };
    case ADD_REVIEW:
      return {
        ...state,
        [action.review.productId]: {
          ...state[action.review.productId],
          reviews: [action.review, ...state[action.review.productId].reviews],
        },
      };
    case REMOVE_REVIEW: {
      return {
        ...state,
        [action.review.productId]: {
          ...state[action.review.productId],
          reviews: state[action.review.productId].reviews.filter(
            (review) => review.id !== action.review.id
          ),
        },
      };
    }
    default:
      return state;
  }
};

export default productReducer;

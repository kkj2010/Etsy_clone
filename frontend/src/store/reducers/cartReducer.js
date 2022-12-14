import { csrfFetch } from "../csrf";

export const RECEIVE_CART = "cart/RECEIVE_CART";
export const ADD_ITEM = "cart/ADD_ITEM";
export const REMOVE_ITEM = "cart/REMOVE_ITEM";
// export const UPDATE_ITEM = "cart/UPDATE_ITEM";

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const removeItem = (cartItemId) => ({
  type: REMOVE_ITEM,
  cartItemId,
});

// export const updateQuantity = (item) => ({
//   type: UPDATE_ITEM,
//   item,
// });

export const fetchCart = () => async (dispatch) => {
  const res = await fetch(`/api/cart`);
  const data = await res.json();
  dispatch(receiveCart(data));
};

export const addItemToCart = (product_id, quantity) => async (dispatch) => {
  const res = await csrfFetch("/api/cart", {
    method: "POST",
    body: JSON.stringify({ product: product_id, quantity }),
    // body: JSON.stringify({ cart: { cart_id, product_id, quantity } }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(addItem(data));
  }
  return res;
};

export const updateCart =
  ({ id, quantity }) =>
  async (dispatch) => {
    const res = await csrfFetch(`/api/cart_items/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ quantity }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      dispatch(addItem(data));
    }
  };

export const removeItemFromCart = (cartItemId) => async (dispatch) => {
  dispatch(removeItem(cartItemId));
  await csrfFetch(`/api/cart_items/${cartItemId}`, {
    method: "DELETE",
  });
};

const initialState = { items: null };
// let x = {
//   id: 1,
//   name: 'kunju',
//   adddress: {
//     city: 'nyc',
//     state: 'ny'
//   }
// }

const cartReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = { ...state };

  switch (action.type) {
    case RECEIVE_CART:
      return {
        ...state,
        ...action.cart,
      };
    case ADD_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          [action.item.id]: action.item,
        },
      };
    case REMOVE_ITEM:
      delete newState.items[action.cartItemId];
      return newState;
    default:
      return state;
  }
};

export default cartReducer;

export const selectSubTotalPrice = (state) => {
  const items = Object.values(state.cart?.items ?? {});
  return items.reduce(
    (acc, current) => acc + parseInt(current.product.price) * current.quantity,
    // current.quantity,
    0
  );
};

export const selectTotalQuatity = (state) => {
  const items = Object.values(state.cart?.items ?? {});
  return items.reduce(
    (acc, current) => acc + current.quantity,
    // current.quantity,
    0
  );
};

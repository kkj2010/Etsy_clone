import { csrfFetch } from "../csrf";

export const RECEIVE_CART = "cart/RECEIVE_CART";
// export const RECEIVE_ITEM = "cart/RECEIVE_ITEM";
// export const REMOVE_ITEM = "cart/REMOVE_ITEM";


export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart,
});

// export const receiveItem = (product) => ({
//   type: RECEIVE_ITEM,
//   product,
// });


// export const removeItem = (productId) => ({
//   type: REMOVE_ITEM,
//   productId,
// });

export const getCart= (state)=> 
state.carts.cart? Object.values(state.carts.cart):[]


export const fetchCart = (userId) => async (dispatch) => {
  const res = await fetch(`/api/carts/${userId}`);
  const data = await res.json();
  dispatch(receiveCart(data));
};

export const addItemToCart =
  (user_id, product_id, quantity) => async (dispatch) => {
    const res = await csrfFetch("/api/carts", {
      method: "POST",
      body: JSON.stringify({ cart: { user_id, product_id, quantity } }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    dispatch(receiveCart(data));
  };



export const removeItemFromCart = (user_id, product_id) => async (dispatch) => {
  const res = await csrfFetch(`/api/carts/${user_id}`, {
    method: "DELETE",
    body: JSON.stringify({ product_id }),
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await res.json();
  dispatch(receiveCart(data));
};


export const clearCart = () => async (dispatch) => {
  const res = await csrfFetch("/api/clear_cart", {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  dispatch(receiveCart(data));
};

const initialState= {products:null}

const cartReducer = (state = initialState , action) => {
 Object.freeze(state)
 const newState= {...state}

  switch (action.type) {
    case RECEIVE_CART:
      return action.cart;
    // case RECEIVE_ITEM:
    //   return { ...state, [action.product.id]: action.product };
    //   // newState[action.product.id]= action.product;
    //   // return newState
    // case REMOVE_ITEM:
    //   delete newState[action.productId]
    //   return newState
    default:
      return state;
  }
};

export default cartReducer

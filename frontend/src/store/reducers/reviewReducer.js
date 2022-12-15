import { csrfFetch } from "../csrf";

const FIND_REVIEWS = "reviews/FIND_REVIEWS";
const ADD_REVIEW = "reviews/ADD_REVIEW";
const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";

export const findReviews = (reviews) => {
  return {
    type: FIND_REVIEWS,
    reviews,
  };
};

export const addReview = (review) => {
  return {
    type: ADD_REVIEW,
    review,
  };
};

export const removeReview = (reviewId) => {
  return {
    type: REMOVE_REVIEW,
    reviewId,
  };
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

export const deleteReview = (productId, reviewId) => async (dispatch) => {
  const res = await csrfFetch(
    `/api/products/reviews/${reviewId}`,
    {
      method: "DELETE",
    }
  );
  if (res.ok) {
    dispatch(removeReview(reviewId));
  }
};


export default function reviewReducer(state= {}, action){
  Object.freeze(state)
  let newState= {...state}

  switch(action.type){
    case FIND_REVIEWS:
      newState= action.reveiws;
      return newState;
    case ADD_REVIEW:
      newState[action.review.id]= action.reveiw
      return newState
    case REMOVE_REVIEW:
      delete newState[action.reveiwId]
      return newState;
      default:
        return state
  }
  

}

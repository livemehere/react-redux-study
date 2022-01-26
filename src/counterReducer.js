// export const INCREASE = "INCREASE";
// export const DECREASE = "DECREASE";

import { createAction, createReducer } from "@reduxjs/toolkit";

// export const increaseCount = () => ({ type: INCREASE });
// export const decreaseCount = () => ({ type: DECREASE });

export const increaseCount = createAction("INCREASE");
export const decreaseCount = createAction("DECREASE");

const initalState = 0;

// const counterReducer = (state = initalState, action) => {
//   switch (action.type) {
//     case INCREASE:
//       return state + 1;
//     case DECREASE:
//       return state - 1;
//     default:
//       return state;
//   }
// };

const counterReducer = createReducer(initalState, {
  [increaseCount]: (state, action) => state + 1,
  [decreaseCount]: (state, action) => state - 1,
});

export default counterReducer;

export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

export const increaseCount = () => ({ type: INCREASE });
export const decreaseCount = () => ({ type: DECREASE });

const initalState = 0;

const counterReducer = (state = initalState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;

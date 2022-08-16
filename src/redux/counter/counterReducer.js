import { DECREMENT, INCREMENT } from "./actionTypes";

const initalState = {
  value: 5,
};

const counterReducer = (state = initalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 5,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 2,
      };

    default:
      return state;
  }
};

export default counterReducer;

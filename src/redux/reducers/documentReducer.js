import { initialState } from "../initialState";

function documentReducer(state = initialState.document, action) {
  if (action.type == "SET_SKIN") {
    return action.payload;
  } else if (action.type == "UPDATE_SKIN") {
    return { ...state, skinCode: action.payload };
  } else {
    return state;
  }
}

export default documentReducer;

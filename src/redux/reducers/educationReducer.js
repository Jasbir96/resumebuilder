import { initialState } from "../initialState";

function educationReducer(state = initialState.educationDetails, action) {
  if(action.type == "UPDATE_EDUCATION"){
    return {...state , ...action.payload}
  }
  return state;
}

export default educationReducer;

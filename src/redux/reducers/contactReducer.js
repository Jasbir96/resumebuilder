import { initialState } from "../initialState";

function contactReducer(state = initialState.contactDetails, action) {
      if(action.type == "UPDATE_CONTACT"){
            return {...state , ...action.payload};
      }
      return state;
}

export default contactReducer;

import {

  
  Gettingdata_Loading, 
  Gettingdata_SUCCESS,
  Gettingdata_Error,
  GettingCITY,
  GettingCITY_ERROR
} from "./actionTypes";


const initState = {
 Gym:[],
  isLoading: false,
  isError: false,
message:""
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
   

    case Gettingdata_Loading : 
  
    return {
...state,
isLoading: true,
isError: false,

    }
case Gettingdata_SUCCESS:
  
   
    return {
        ...state,
        isLoading: false,
  isError: false,
  Gym:payload
    }
    case Gettingdata_Error: 
    return {
        ...state,
isLoading:false,
isError: true,
Users:[]
    }
    case  GettingCITY:
      console.log(payload)  
     return {
      ...state,
      isLoading: false,
isError: false,
Gym:payload
  }
  case GettingCITY_ERROR:  
  console.log(payload)  
     return {
      ...state,
      isLoading: false,
isError: false,
message:payload

  }

    default : 
    return state
}
}

export default reducer


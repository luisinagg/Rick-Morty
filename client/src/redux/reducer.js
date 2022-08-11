


const initialState = {
    characters:[],
    paged: 1,
    episodes: [],
    detail: {}
    
};

export default function rootReducer(state= initialState, action) {
  switch(action.type){
    case "GET_CHARACTERS":
        return{
            ...state,
            characters: action.payload,
        }
    case "SET_CURRENT_PAGE":
      return{
        ...state,
        paged: action.payload
      }
      case "GET_EPISODES":
        return {
          ...state,
          episodes: action.payload
        }
      case "CREATE_CHARACTER":
        return{
          ...state,
          characters:[...state.characters, action.payload]
        }
      case "GET_DETAIL":
        return{
          ...state,
          detail: action.payload
        }
      case "CLEAN_CACHE":
        return{
          ...state,
          detail:{}
        }
         default:
            return state;

  }
}


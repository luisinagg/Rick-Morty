


const initialState = {
    characters:[],
    allCharacters:[],
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
            allCharacters: action.payload
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
      case "GET_ORDER":
        let sort= action.payload === "A-Z" ? state.characters.sort((a,b)=>{
          if(a.name > b.name) return 1;
          if(b.name > a.name) return -1
          return 0
          
          
        }): state.characters.sort ((a,b)=>{
          if(a.name < b.name) return 1;
          if(b.name < a.name) return -1
          return 0
          
          
        })
        return{
          ...state,
          characters: sort
        }
      case "SET_PAGE":
        return{
          ...state,
          paged: action.payload
        }
      case "SEARCH_NAME":
        const filter = state.allCharacters.filter((cur)=> cur.name.toLowerCase().includes(action.payload))
        //hacemos filter para q me traiga los nombres de a cuerdo a una condicion, true o false, le hace un toLowerCase para q no chashee
        return{
          ...state,
          characters: filter,
          page:1
        }

      
         default:
            return state;

  }
}


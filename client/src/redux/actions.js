import axios from 'axios';

export function getCharacters(){
    return async function (dispatch){
        const allCharacters = await axios.get('http://localhost:3001/characters')
        
        return dispatch ({
            type: "GET_CHARACTERS",
            payload: allCharacters.data
        })
    }
}

export function setCurrentPage(payload){
    return function(dispatch){
        return dispatch({
            type: "SET_CURRENT_PAGE",
            payload: payload
        })
    }
}

export function getEpisodes(){
    return async function(dispatch){
        const epi= await axios.get("http://localhost:3001/episodes")
        return dispatch({
            type: "GET_EPISODES",
            payload: epi.data
        })
    }
}

export function createCharacter(info){
     return async function (dispatch){
        const create = await axios.post('http://localhost:3001/character',info)
        console.log(create)
        return dispatch({
            type: "CREATE_CHARACTER",
            payload: create.data
            
        })

    }

}
export function getDetail(id){
    return async function (dispatch){
        const detail = (await axios.get(`http://localhost:3001/character/${id}`)).data;
        return dispatch({
            type: "GET_DETAIL",
            payload: detail
            
        })
    }
}

export function cleanCache(){
    return {type: "CLEAN_CACHE",
}

}

export function order(value){
    return function (dispatch){
        return dispatch({
            type: "GET_ORDER",
            payload: value
        })
    }
}
 export function setPage(num){
    return function(dispatch){
        return dispatch({
            type: "SET_PAGE",
            payload: num
        })
    }
 }

 export function searchName(name){
    return function (dispatch){
        return dispatch({
            type:"SEARCH_NAME",
            payload: name
        })
    }
 }


 
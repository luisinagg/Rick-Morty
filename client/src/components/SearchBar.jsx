import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchName, setPage } from '../redux/actions';


export default function SearchBar() {
    const [name, setName] = useState ("");
    const dispatch = useDispatch()

function handleInputChange(e){
    setName(e.target.value.toLowerCase())
    }

function handleSubmit(e){
    e.preventDefault()
    dispatch(searchName(name))
    setPage(1)

}

  return (
    <div>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <input type = {"text"} placeholder='Search..' onChange={(e)=>handleInputChange(e)}></input>
            <input type={"submit"} value= {"Search "}></input>
            
        </form>

    </div>
  )
}

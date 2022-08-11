import React from 'react'
import NavBar from './NavBar'
import { useState }from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createCharacter, getEpisodes } from '../redux/actions';
import { Link } from 'react-router-dom';


export default function Create() {
  const dispatch = useDispatch()

  const [input, setInput] = useState({
    image: '',
    name:'',
    origin: '',
    species: '',
    episodes:[],
  })
  
  const allEpisodes = useSelector(store => store.episodes)

    useEffect(() => {
        dispatch(getEpisodes());
    }, [dispatch])

    function handleChange(e){
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
    }

    function handleChangeSelect(e){
      setInput({
        ...input,
        episodes: [...input.episodes, e.target.value ]
      })
    }

    function handleSubmitForm(e){
      e.preventDefault()
      dispatch(createCharacter(input));
      setInput({
        image: '',
        name:'',
        origin: '',
        species: '',
        episodes: [],
      })
    }

  return (

    <div>
      <NavBar/>
      <h1>Create</h1>

      <form onSubmit= {(e)=> {handleSubmitForm(e)}}>
        
        <div>
          <label>Name</label>
          <input type="text" name={"name"} value={input.name}
          onChange={(e)=>{handleChange(e)}} />
        </div>
        <div>
          <label>Origin</label>
          <input type="text" name={"origin"} value={input.origin}
           onChange={(e)=>{handleChange(e)}}/>
        </div>
        <div>
          <label>Species</label>
          <input type="text" name={"species"} value={input.species}
          onChange={(e)=>{handleChange(e)}} />
          <div>
          <label>Image</label>
          <input type="text" name={"image"} value={input.image} 
          onChange={(e)=>{handleChange(e)}}/>
        </div>
        <label>Episodes</label>
          <select onChange={(e)=>{handleChangeSelect(e)}}>
            <option value ="default">Select Episode</option>
            {
              allEpisodes?.map(cur =>{
                return <option key = {cur.id+Math.random()*1000} value={cur.id}>{cur.name}</option>
              })
            }

          </select>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
            
      <div>
      <Link to={'/home'} >
        <button>Volver al Home</button>
        </Link>
      </div>

      </div>
  )
}

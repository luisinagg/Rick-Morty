import React from 'react';
import Card from './Card';
import { getCharacters } from '../redux/actions';
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import NavBar from './NavBar';

export default function Home() {
    const dispatch = useDispatch();
    const allChar = useSelector((state)=>state.characters);
    //me trae estado de redux de characters
    
    useEffect(()=>{
        dispatch(getCharacters())
    },[dispatch]);


  return (
    <div>
        <NavBar/>
        <h1>Home</h1>
        {
            allChar?.map(cur =>{
                return <Card
                key ={cur.id}
                image ={cur.image}
                name ={cur.name}
                species = {cur.species}
                origin ={cur.origin}
                episode ={cur.episode}
                />
            })
        }
    </div>
  )
}

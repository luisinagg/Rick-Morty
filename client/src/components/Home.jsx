import React from 'react';
import Card from './Card';
import { getCharacters } from '../redux/actions';
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import NavBar from './NavBar';
import Paged from './Paged';
import { useState } from 'react';
import styles from './css/Home.module.css';
import { Link } from 'react-router-dom';
import Order from './Order';
import SearchBar from './SearchBar';


export default function Home() {
    const dispatch = useDispatch();
    let allChar = useSelector((state)=>state.characters);
    
    //me trae estado de redux de characters

    //paginado
    const paged = useSelector((state)=>state.paged)
    //me traigo la prop del estado global paged
    const [charactersXPage, setCharactersXPage ] = useState(9)
    //definimos estado local para traer 20 characters x pag
    const indexOfLastCharacter = paged * charactersXPage;
    //numero con el q vamos a ubicar en el array al ultimo de los personajes q mostramos (9)
    const indexOfFirstCharacter = indexOfLastCharacter-charactersXPage
    //numero con el q vamos a ubicar en el array al primer personaje (0)
    const currentCharacters= allChar.slice(indexOfFirstCharacter, indexOfLastCharacter)
    // el slice corta desde el 1er parametro incluido, hasta el ultimo no incluido
    
    
    useEffect(()=>{

        dispatch(getCharacters())
        },[dispatch]);

    function handleChange(e){
        setCharactersXPage(e.target.value)
    }

    const [order, setOrder] = useState();
    //me creo el estado local para renderizar los cambios


  return (
    <div>
        <div><NavBar/></div>
        <div><SearchBar/></div>
        <div>
            <Order setOrder= {setOrder}/>
        </div>
       
        {/* <label>PAGINAS</label>
        <input type = "range" max="40" onChange={(e)=>handleChangeRange(e)} /> */}
        <label htmlFor=""></label>
        <select onChange ={(e)=> handleChange(e)}>
        <option value = {5}>5</option>
        <option value = {10}>10</option>
        <option value = {15}>15</option>
        <option value = {20}>20</option>
        </select>
        <Paged
        allChar = {allChar.length}
        charactersXPage = {charactersXPage}
        />
        <div className={styles.grid}>
        {
            currentCharacters?.map(cur =>{
            return( 
                <Link to = {`/detail/${cur.id}`}>
                <div key= {cur.id + Math.floor()*2500}>
               <Card
                key ={cur.id}
                image ={cur.image}
                name ={cur.name}
                species = {cur.species}
                origin ={cur.origin}
                episode ={cur.episode}
                />
                </div>
                </Link>
                )
            })
        }
        </div>
    </div>
  )
}

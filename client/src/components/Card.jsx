import React from 'react';
import style from './css/Home.module.css'

export default function Card(props) {
  return (
    <div className={style.card}>
        <p><img width="100px" height="100px" src={props.image} alt="imagen"/></p>
        <p>{props.name}</p>
        <p>{props.origin}</p>
        <p>{props.species}</p>
        <p>{props.episode}</p>
    </div>
  )
}

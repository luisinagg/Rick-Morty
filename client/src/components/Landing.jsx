import React from 'react'
import { Link } from 'react-router-dom'
import style from './css/Home.module.css'

export default function Landing() {
  return (
    <div className={style.button}>
        <Link to={'/home'} >
        <button>ingresar</button>
        </Link>
    </div>
  )
}

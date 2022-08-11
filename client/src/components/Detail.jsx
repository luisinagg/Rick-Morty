import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { cleanCache, getDetail } from '../redux/actions';

export default function Detail() {
   const dispatch = useDispatch();
   const {id} = useParams()

   useEffect(()=>{
    dispatch(getDetail(id))
    return function (){
      dispatch(cleanCache())
    }
   },[dispatch, id])

   const detail = useSelector((state)=>state.detail)
 console.log(detail)
  return (
    <div>
      <div>
      <img src={detail.image} alt="img"></img>
      </div>
      <div>
      <h3>{detail.name}</h3>
      </div>
      <div>
      <h2>{detail.species}</h2>
      </div>
      <div>
      <h2>{detail.origin}</h2>
    </div>
    <div>
      <ul>
      {
           detail.episode?.map(cur=>{
              return <li>{cur}</li>
          })
        
      }
      </ul>
      </div>
      <div>
      <Link to={'/home'} >
        <button>Volver al Home</button>
        </Link>
      </div>
    
     </div>
  )
}

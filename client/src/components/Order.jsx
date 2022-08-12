import React from 'react';
import {useDispatch} from 'react-redux';
import { order, setCurrentPage } from '../redux/actions';

export default function Order({setOrder}) {
    const dispatch = useDispatch()
  
  

  const handleChange = (e)=>{
    e.preventDefault (e);
    dispatch(order(e.target.value))
    dispatch(setCurrentPage(1))
    setOrder(`Ordenado${e.target.value}`)
    //con esto seteo el cambio q hice en el home
 }

 
    return (
    <div>
        <select onChange={(e)=>{handleChange(e)}}>
            <option value="default">Order</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
        </select>
    </div>
  )
}

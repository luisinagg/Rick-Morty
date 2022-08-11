import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/actions';

export default function Paged({allChar, charactersXPage}) {
    const dispatch = useDispatch();
    const page = useSelector((state)=> state.paged);
    

    const numPag = [];
    const total = Math.ceil(allChar / charactersXPage);

    for (let i =1; i <= total; i++){
        numPag.push(i)
    }
  
        
    return (
    <nav>
        <button disabled={page-1 === 0} onClick={()=>dispatch(setCurrentPage(page-1))}>{"<"}</button>
        {page}
        <button disabled={page+1 > numPag.length} onClick={()=>dispatch(setCurrentPage(page+1))}>{">"}</button>
    </nav>
  )
}

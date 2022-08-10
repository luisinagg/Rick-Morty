import Landing from '../src/components/Landing';
import Home from '../src/components/Home';
import Detail from '../src/components/Detail';
import NavBar from '../src/components/NavBar';
import Create from '../src/components/Create';


import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
      <Route index element ={<Landing/>}/>
      <Route path ='/home' element ={<Home/>}/>
      <Route path ='/detail' element ={<Detail/>}/>
      <Route path ='/ceate' element ={<Create/>}/>
    </Routes>
    </div>
  )
}

export default App;

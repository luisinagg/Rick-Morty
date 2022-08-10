import Landing from '../src/components/Landing';
import Home from '../src/components/Home';
import Detail from '../src/components/Detail';
import About from '../src/components/About';
import Create from '../src/components/Create';


import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
      <Route index element ={<Landing/>}/>
      <Route path ={'/home'} element ={<Home/>}/>
      <Route path ={'/detail'} element ={<Detail/>}/>
      <Route path ={'/create'} element ={<Create/>}/>
      <Route path ={'/about'} element ={<About/>}/>
    </Routes>
    </div>
  )
}

export default App;


import './App.css';
import GetProduct from './Component/GetProduct';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';



function App() {
  const [getCatgory,setCategory]=useState("jewelery")
  const [progress, setProgress] = useState(0)
  return (
    <BrowserRouter>
    <div >
      <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
      <NavBar/>
      
      {/* <GetProduct  setProgress={setProgress}/> */}
      <Routes>
            <Route path="/Home" element={<Home key={'Home'}  getCatgory={`men's clothing`} setProgress={setProgress} />} />
            <Route path="/Men's clothing" element={<GetProduct key={'mens clothing'}  getCatgory={`men's clothing`} setProgress={setProgress} />} />
            <Route path="/Electronics" element={<GetProduct key={'electronics'}  getCatgory={`electronics`} setProgress={setProgress}/>} />
            <Route path="/Jewelery" element={<GetProduct key={'Jewelery'}  getCatgory={`jewelery`} setProgress={setProgress}/>} />
            <Route path="/Women's clothing" element={<GetProduct key={'women clothing'}  getCatgory={`women's clothing`} setProgress={setProgress}/>} />
            {/* <Route path="/Cart" element={<Cart key={'Cart'}/>} /> */}
          </Routes>
    </div>
     </BrowserRouter>
  );
}

export default App;

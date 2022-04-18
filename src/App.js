import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Components/Login'

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Login/>}></Route>
            {/* <Route path='/videogames' element={<Home/>}></Route>
            <Route path='/videogame' element={<VideogameCreate/>}></Route>
            <Route path='/videogames/:id' element={<Detail/>}></Route> */}
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
  
  export default App;
  
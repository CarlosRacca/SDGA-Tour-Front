import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './Components/LandignPage';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import CargarTarjeta from './Components/CargarTarjeta';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<LandingPage/>}></Route>
            <Route path='/registro' element={<Register/>}></Route>
            <Route path='/ingreso' element={<Login/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/cargarTarjeta' element={<CargarTarjeta/>}></Route>

          </Routes>
        </div>
      </BrowserRouter>
    );
  }
  
  export default App;
  
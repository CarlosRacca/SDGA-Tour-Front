import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandignPage';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import LoadScoreCard from './Components/LoadScoreCard';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<LandingPage/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/loadscorecard' element={<LoadScoreCard/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  };
  
  export default App;
  
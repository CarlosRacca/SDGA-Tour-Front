import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandignPage';
import Register from './Components/Register';
import Home from './Components/Home';
import LoadScoreCard from './Components/LoadScoreCard';
import LoadDates from './Components/LoadDates';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<LandingPage/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/loadscorecard' element={<LoadScoreCard/>}/>
            <Route path='/dates' element={<LoadDates/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  };
  
  export default App;
  
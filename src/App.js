import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Employeeform from './components/Employeeform';


function App() {
  return (
    <div className="App">
      
     <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/f' element={<Employeeform/>}/>
      </Routes>
    </div>
  );
}

export default App;

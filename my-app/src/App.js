import './App.css';
import Header from './components/Header';
import About from './pages/About';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';

function App() {





  return (
    <BrowserRouter>
         <Header/>
         <Routes>
             <Route path="/" element={<HomePage/>}/>
             <Route path="/about" element={<About/>}/>
         </Routes>
    </BrowserRouter>
  ); 
}
export default App;

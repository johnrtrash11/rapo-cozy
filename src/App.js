import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Products ,AppNavbar, Cart} from './components';
function App() {
  return (
    <div className="App">
       <AppNavbar />

       <Routes>
         <Route path='/' element={<Products />} />
         <Route path='cart'  element={<Cart/>} />
         
       </Routes>
    </div>
  );
}

export default App;

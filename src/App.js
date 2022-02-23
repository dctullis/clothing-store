import './App.css';
import HomePage from './pages/homepage/homepage'
import {Route, Routes} from 'react-router-dom'
import ShopPage from './pages/shop/shop';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />}/>
      <Route path="/shop" element={<ShopPage/>}/>
    </Routes>
  );
}

export default App;

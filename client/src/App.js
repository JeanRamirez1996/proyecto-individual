import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Login from './views/Login';
import Signup from './views/Signup';
import Order from './views/Order';
import Purchase from './views/Purchase';
import Account from './views/Account';
import EditarMenu from './views/EditarMenu';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/order" element={<Order />} />
        <Route path="/purchase" element={<Purchase />} /> 
        <Route path="/editarMenu" element={<EditarMenu />} /> 
      </Routes>
    </div>
  );
}

export default App;

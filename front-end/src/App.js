import logo from './logo.svg';
import './App.css';
import Login from './Auth/Login';
import{BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (
   <>
<BrowserRouter>
<Routes>
<Route path='/' element={<Login/>}></Route>
<Route path='/dashboard' element={<h1>Dashboard</h1>}></Route>

</Routes>

</BrowserRouter>
   </>
  );
}

export default App;

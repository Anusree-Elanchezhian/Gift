import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Review from './components/Review';
import Contact from './components/Contact';
import Userprofile from './components/Userprofile';
import Birthday from './components/Birthday';
import Anniversary from './components/Anniversary';
import Customized from './components/Customized';
import Occastional from './components/Occastional';
import AdminHome from './components/Adminhome';
import Anavbar from './components/Anavbar';
import Asidebar from './components/Asidebar';
import Abirthday from './components/Abirthday';
import Cart from './components/Cart';
import Aanniversary from './components/Aanniversary';
function App() {

  return (
<div>
    <Router>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/navbar' element={<Navbar/>}></Route>
      <Route path='/sidebar' element={<Sidebar/>}></Route>
      <Route path='/review' element={<Review/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/profile' element={<Userprofile/>}></Route>
      <Route path='/birthday' element={<Birthday/>}></Route>
      <Route path='/anniversary' element={<Anniversary/>}></Route>
      <Route path='/occastinal' element={<Occastional/>}></Route>
      <Route path='/adminhome' element={<AdminHome/>}></Route>
      <Route path='/customized' element={<Customized/>}></Route>
      <Route path='/navbar' element={<Anavbar/>}></Route>
      <Route path='/sidebar' element={<Asidebar/>}></Route>
      <Route path='/Abirthday' element={<Abirthday/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/Aanniversary' element={<Aanniversary/>}></Route>
      
    </Routes>
  </Router>    
    </div>

  )
}

export default App

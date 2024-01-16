
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn'; 
import About from './pages/About'; 
import SignOut from './pages/SignOut'; 
import Profile from './pages/Profile'; 
import Header from './components/Header';
import SignUp from './pages/SignUp';

export default function  () {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='sign-up' element={<SignUp />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/singout' element={<SignOut />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

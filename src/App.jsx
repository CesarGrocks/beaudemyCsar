
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import DashBoard from './pages/DashBoard';
import Profile from './pages/Profile';
import CourseDetail from './pages/CourseDetail';
import UploadActivity from './pages/UploadActivity';
import NotFound from './pages/NotFound';


function App() {

  return (
<div>
  <h1>Beaudemy</h1>
   <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/dashboard' element={<DashBoard/>} />
    <Route path='/course/:id' element={<CourseDetail/>} />
    <Route path='/upload' element={<UploadActivity/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='*' element={<NotFound/>} />
   </Routes>
</div>

  )
}

export default App;

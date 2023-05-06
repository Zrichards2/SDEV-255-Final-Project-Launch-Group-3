import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import CoursesPage from './pages/CoursesPage'
import TeachersPage from './pages/TeachersPage';
import SchedulePage from './pages/SchedulePage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import URL404 from './pages/404Page';
import { useState } from 'react';
function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<URL404 />}></Route>
          <Route path="/courses" element={<CoursesPage isEnrolling={true}/>}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/" element={<LoginPage onRedirect={(user) => {
            setCurrentUser(user)
          }}/>}></Route>
          <Route path="/schedule" element={<CoursesPage isEnrolling={false} key={3}/>}></Route>
          <Route path="/teachers" element={<TeachersPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

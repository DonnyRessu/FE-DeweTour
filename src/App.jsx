import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/navbar'
import Home from './pages/home'
import Footer from './component/footer'
import Profile from './pages/profile'
import Payment from './pages/payment'
import DetailTour from './pages/detailTour'
import Login from './component/login'
import Register from './component/Register'
import ListTransaction from './pages/listTransaction'
import { PrivateRouteLogin, PrivateRouteUser, PrivateRouteAdmin } from './pages/privateRoute'
import IncomeTrip from './pages/incomeTrip'
import AddTrip from './pages/addTrip'
import ModalApprove from './component/modalApprove'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  

  useEffect(()=> {
      for(let i = 1; i <= localStorage.length; i++) {
        if(JSON.parse(localStorage.getItem(i)).status === true){
          setCurrentUser(JSON.parse(localStorage.getItem(i)))
        }
      }
  }, [])



  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<PrivateRouteLogin user={currentUser} />} >
          <Route element={<PrivateRouteUser user={currentUser} />} >
            <Route path='/profile' element={<Profile />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/detail-tour' element={<DetailTour/>} />
          </Route>
          <Route element={<PrivateRouteAdmin user={currentUser}/>} >
            <Route path='/list-transactions' element={<ListTransaction/>} />
            <Route path='/income-trip' element={<IncomeTrip />} />
            <Route path='add-trip' element={<AddTrip/>} />
            <Route path='/modal-approve' element={<ModalApprove/>} />
          </Route>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App

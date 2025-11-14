import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Splash from './pages/Splash'
import Onboarding from './pages/Onboarding'
import Auth from './pages/Auth'
import Results from './pages/Results'
import SeatSelection from './pages/SeatSelection'
import PassengerDetails from './pages/PassengerDetails'
import Payment from './pages/Payment'
import BookingSuccess from './pages/BookingSuccess'
import BookingDetails from './pages/BookingDetails'
import LiveTracking from './pages/LiveTracking'
import Profile from './pages/Profile'
import Bookings from './pages/Bookings'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/results" element={<Results />} />
        <Route path="/seats" element={<SeatSelection />} />
        <Route path="/passengers" element={<PassengerDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<BookingSuccess />} />
        <Route path="/booking/:id" element={<BookingDetails />} />
        <Route path="/track" element={<LiveTracking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

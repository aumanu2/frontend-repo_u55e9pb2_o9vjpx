import { NavLink } from 'react-router-dom'
import { Home, Ticket, MapPin, User } from 'lucide-react'

const BottomNav = () => {
  const base = 'flex flex-col items-center text-xs'
  const active = 'text-blue-600'
  const inactive = 'text-gray-500'

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-gray-200 z-40">
      <div className="mx-auto max-w-md grid grid-cols-4 py-2">
        <NavLink to="/" className={({isActive}) => `${base} ${isActive ? active : inactive}`}>
          <Home size={22} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/bookings" className={({isActive}) => `${base} ${isActive ? active : inactive}`}>
          <Ticket size={22} />
          <span>My bookings</span>
        </NavLink>
        <NavLink to="/track" className={({isActive}) => `${base} ${isActive ? active : inactive}`}>
          <MapPin size={22} />
          <span>Track</span>
        </NavLink>
        <NavLink to="/profile" className={({isActive}) => `${base} ${isActive ? active : inactive}`}>
          <User size={22} />
          <span>Profile</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default BottomNav

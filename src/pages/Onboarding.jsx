import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../components/PrimaryButton'

const screens = [
  { title: 'Search & Book Buses Easily', desc: 'Find the best routes, seats and prices in seconds.' },
  { title: 'Track in Real‑Time', desc: 'Live GPS tracking with accurate arrival times.' },
  { title: 'Secure Payments', desc: 'Multiple methods with instant e‑tickets.' },
]

const Onboarding = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 p-6 flex flex-col items-center justify-center text-center gap-8">
        {screens.map((s, i) => (
          <div key={i} className="max-w-sm">
            <div className="h-40 w-full bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl" />
            <h2 className="mt-6 text-2xl font-bold">{s.title}</h2>
            <p className="text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="p-6 space-y-3">
        <PrimaryButton onClick={() => navigate('/login')}>Get Started</PrimaryButton>
        <button className="w-full py-3 font-semibold text-gray-700" onClick={() => navigate('/')}>Skip</button>
      </div>
    </div>
  )
}

export default Onboarding

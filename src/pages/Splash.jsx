import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Splash = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const t = setTimeout(() => navigate('/onboarding', { replace: true }), 1500)
    return () => clearTimeout(t)
  }, [navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="text-center animate-fade-in">
        <div className="mx-auto h-20 w-20 rounded-2xl bg-white shadow flex items-center justify-center text-2xl font-bold text-blue-600">BS</div>
        <p className="mt-4 text-gray-600">Travel Made Simple</p>
        <div className="mt-6 flex justify-center gap-1">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" />
          <span className="h-2 w-2 rounded-full bg-teal-500 animate-bounce [animation-delay:120ms]" />
          <span className="h-2 w-2 rounded-full bg-orange-500 animate-bounce [animation-delay:240ms]" />
        </div>
      </div>
    </div>
  )
}

export default Splash

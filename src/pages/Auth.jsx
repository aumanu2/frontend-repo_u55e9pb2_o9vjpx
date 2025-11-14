import { useState } from 'react'
import { Mail, Phone, Shield } from 'lucide-react'
import PrimaryButton from '../components/PrimaryButton'

const Tab = ({ active, children, onClick }) => (
  <button onClick={onClick} className={`flex-1 py-2 rounded-xl border ${active ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-gray-200 text-gray-600'}`}>{children}</button>
)

const Auth = () => {
  const [mode, setMode] = useState('phone')

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-1">Welcome</h1>
      <p className="text-gray-600 mb-6">Login or create your account</p>

      <div className="grid grid-cols-2 gap-2 mb-6">
        <Tab active={mode==='phone'} onClick={() => setMode('phone')}><Phone className="inline mr-2" size={16}/>Phone</Tab>
        <Tab active={mode==='email'} onClick={() => setMode('email')}><Mail className="inline mr-2" size={16}/>Email</Tab>
      </div>

      {mode === 'phone' ? (
        <div className="space-y-3">
          <input className="w-full p-3 rounded-xl bg-gray-50" placeholder="Phone number" />
          <PrimaryButton>Continue</PrimaryButton>
          <div className="flex gap-2">
            {[1,2,3,4].map(i => (
              <input key={i} className="flex-1 p-3 rounded-xl bg-gray-50 text-center" placeholder="0" />
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <input className="w-full p-3 rounded-xl bg-gray-50" placeholder="Email" />
          <input type="password" className="w-full p-3 rounded-xl bg-gray-50" placeholder="Password" />
          <PrimaryButton>Login</PrimaryButton>
          <button className="text-blue-600 text-sm">Forgot password?</button>
        </div>
      )}

      <div className="mt-8 p-4 rounded-xl bg-blue-50 text-blue-700 flex items-start gap-3">
        <Shield className="mt-0.5" size={18}/>
        <p>Your data is encrypted. We never share details with third parties.</p>
      </div>
    </div>
  )
}

export default Auth

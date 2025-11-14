import PrimaryButton from '../components/PrimaryButton'

const PassengerDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="mx-auto max-w-md p-4 space-y-4">
        <h1 className="text-xl font-bold">Passenger Details</h1>
        <div className="bg-white rounded-2xl p-4 space-y-3">
          <input className="w-full p-3 rounded-xl bg-gray-50" placeholder="Name" />
          <div className="grid grid-cols-3 gap-3">
            <input className="p-3 rounded-xl bg-gray-50" placeholder="Age" />
            <select className="p-3 rounded-xl bg-gray-50 col-span-2"><option>Gender</option><option>Male</option><option>Female</option><option>Other</option></select>
          </div>
          <input className="w-full p-3 rounded-xl bg-gray-50" placeholder="Phone" />
          <input className="w-full p-3 rounded-xl bg-gray-50" placeholder="Email" />
          <button className="text-blue-600 text-sm">+ Add passenger</button>
        </div>
        <PrimaryButton>Continue to Payment</PrimaryButton>
      </div>
    </div>
  )
}

export default PassengerDetails

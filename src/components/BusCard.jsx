import PrimaryButton from './PrimaryButton'

const BusCard = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">BlueLine Travels</h3>
        <span className="text-sm text-gray-500">AC • Sleeper</span>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-700">
        <div>
          <p className="font-medium">07:30 PM</p>
          <p className="text-gray-500">City A</p>
        </div>
        <div className="text-center text-gray-400">8h 30m</div>
        <div className="text-right">
          <p className="font-medium">04:00 AM</p>
          <p className="text-gray-500">City B</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-600">12 seats available</p>
        <p className="font-semibold">$24</p>
      </div>
      <PrimaryButton className="!py-2">View Seats</PrimaryButton>
    </div>
  )
}

export default BusCard

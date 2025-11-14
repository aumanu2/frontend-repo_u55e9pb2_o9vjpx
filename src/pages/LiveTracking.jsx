const LiveTracking = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-72 bg-gradient-to-b from-blue-200 to-blue-50 flex items-center justify-center text-blue-700">Live Map</div>
      <div className="mx-auto max-w-md p-4 space-y-3">
        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <p className="font-semibold">BlueLine • AB12CD</p>
            <p className="text-sm text-green-600">On time</p>
          </div>
          <p className="text-sm text-gray-600">ETA 24 min • 6.2 km away</p>
        </div>
        <div className="bg-white rounded-2xl p-4">
          <p className="text-sm text-gray-500">Driver</p>
          <p className="font-semibold">Rahul Sharma • +91 98765 43210</p>
        </div>
      </div>
    </div>
  )
}

export default LiveTracking

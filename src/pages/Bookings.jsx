const Bookings = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-md space-y-3">
        <h1 className="text-xl font-bold">My Bookings</h1>
        {Array.from({length:3}).map((_,i)=> (
          <a key={i} href="/booking/1" className="block bg-white rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold">City A → City B</p>
              <span className="text-sm text-gray-500">PNR 7HG52K</span>
            </div>
            <p className="text-gray-600 text-sm">BlueLine • 07:30 PM • A1,A2</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Bookings

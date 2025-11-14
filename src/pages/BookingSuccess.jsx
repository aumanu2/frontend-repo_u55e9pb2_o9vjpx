const BookingSuccess = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 text-center">
      <div className="max-w-sm">
        <div className="mx-auto h-24 w-24 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-4xl">✓</div>
        <h1 className="mt-6 text-2xl font-bold">Booking Confirmed</h1>
        <p className="text-gray-600 mt-2">Your e‑ticket has been sent to your email.</p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="py-3 rounded-xl border">Download</button>
          <button className="py-3 rounded-xl border">Share</button>
        </div>
        <a href="/bookings" className="block mt-4 text-blue-600">Go to My Bookings</a>
      </div>
    </div>
  )
}

export default BookingSuccess

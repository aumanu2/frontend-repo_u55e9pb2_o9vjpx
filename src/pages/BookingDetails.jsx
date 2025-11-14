const BookingDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-md space-y-4">
        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">PNR 7HG52K</h1>
            <div className="h-16 w-16 bg-gray-100 rounded-xl" />
          </div>
          <p className="text-gray-500">BlueLine Travels • A1, A2</p>
          <div className="grid grid-cols-2 gap-3 mt-3 text-sm">
            <div>
              <p className="text-gray-500">Boarding</p>
              <p className="font-semibold">City A, 07:30 PM</p>
            </div>
            <div>
              <p className="text-gray-500">Dropping</p>
              <p className="font-semibold">City B, 04:00 AM</p>
            </div>
            <div>
              <p className="text-gray-500">Passenger</p>
              <p className="font-semibold">Alex Doe (2)</p>
            </div>
            <div>
              <p className="text-gray-500">Support</p>
              <p className="font-semibold text-blue-600">Chat with us</p>
            </div>
          </div>
          <div className="mt-4 h-24 bg-gray-100 rounded-xl flex items-center justify-center">QR</div>
        </div>
      </div>
    </div>
  )
}

export default BookingDetails

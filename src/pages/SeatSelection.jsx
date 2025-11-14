import PrimaryButton from '../components/PrimaryButton'

const SeatSelection = () => {
  const seat = (id, status='available') => (
    <div key={id} className={`h-8 w-8 rounded-md text-xs flex items-center justify-center ${status==='booked' ? 'bg-gray-200 text-gray-400' : status==='selected' ? 'bg-blue-600 text-white' : 'bg-teal-50 text-teal-700'}`}>{id}</div>
  )

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="mx-auto max-w-md p-4">
        <h1 className="text-xl font-bold mb-2">Select Seats</h1>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="grid grid-cols-4 gap-2">
            {['A1','A2','A3','A4','B1','B2','B3','B4','C1','C2','C3','C4','D1','D2','D3','D4'].map((s,i)=> seat(s, i%5===0?'booked': i%7===0?'selected':'available'))}
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="mx-auto max-w-md">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm text-gray-500">2 Seats Selected</p>
                <p className="font-semibold">$48</p>
              </div>
              <PrimaryButton className="!w-auto px-6">Continue</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeatSelection

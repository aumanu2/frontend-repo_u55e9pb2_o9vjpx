import BusCard from '../components/BusCard'

const Results = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="mx-auto max-w-md p-4 space-y-4">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Available Buses</h1>
            <p className="text-gray-500 text-sm">City A → City B • Today</p>
          </div>
          <button className="px-3 py-2 rounded-lg border text-sm">Filters</button>
        </header>

        <div className="grid grid-cols-2 gap-2">
          {['Earliest', 'Price ↑', 'Price ↓', 'Rating'].map(x => (
            <button key={x} className="py-2 rounded-xl bg-white border text-sm">{x}</button>
          ))}
        </div>

        <div className="space-y-3">
          {Array.from({length:5}).map((_,i) => <BusCard key={i} />)}
        </div>
      </div>
    </div>
  )
}

export default Results

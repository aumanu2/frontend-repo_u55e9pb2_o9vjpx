import { Calendar, MapPin } from 'lucide-react'
import PrimaryButton from './PrimaryButton'

const SearchCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 space-y-3">
      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
        <MapPin className="text-blue-600" />
        <input placeholder="From" className="flex-1 bg-transparent outline-none" />
      </div>
      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
        <MapPin className="text-blue-600" />
        <input placeholder="To" className="flex-1 bg-transparent outline-none" />
      </div>
      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
        <Calendar className="text-blue-600" />
        <input type="date" className="flex-1 bg-transparent outline-none" />
      </div>
      <PrimaryButton>Search Buses</PrimaryButton>
    </div>
  )
}

export default SearchCard

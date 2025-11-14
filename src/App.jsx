import { useState } from 'react'
import { motion } from 'framer-motion'
import HeroSpline from './components/HeroSpline'
import SearchCard from './components/SearchCard'
import OfferCard from './components/OfferCard'
import BusCard from './components/BusCard'
import BottomNav from './components/BottomNav'

function App() {
  const [showResults, setShowResults] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="mx-auto max-w-md p-4 space-y-6">
        <header className="pt-2">
          <h1 className="text-2xl font-bold">Bus Service</h1>
          <p className="text-gray-500">Travel made simple</p>
        </header>

        <HeroSpline />

        <SearchCard />

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Offers for you</h2>
          <div className="grid grid-cols-2 gap-3">
            <OfferCard title="Save 20%" subtitle="On your first ride" />
            <OfferCard title="Festive Sale" subtitle="Flat $5 off" />
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Popular Buses</h2>
            <button className="text-blue-600 text-sm">See all</button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <BusCard />
            <BusCard />
            <BusCard />
          </motion.div>
        </section>
      </div>

      <BottomNav />
    </div>
  )
}

export default App

const OfferCard = ({ title, subtitle }) => {
  return (
    <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow">
      <p className="text-sm opacity-90">{subtitle}</p>
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  )
}

export default OfferCard

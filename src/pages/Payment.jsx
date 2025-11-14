import PrimaryButton from '../components/PrimaryButton'

const Payment = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="mx-auto max-w-md p-4 space-y-4">
        <h1 className="text-xl font-bold">Payment</h1>
        <div className="bg-white rounded-2xl p-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {['UPI','Card','NetBanking','Wallet','Cash'].map(x => (
              <button key={x} className="py-3 rounded-xl border">{x}</button>
            ))}
          </div>
          <input className="w-full p-3 rounded-xl bg-gray-50" placeholder="Promo code" />
          <div className="flex items-center justify-between">
            <p>Total</p>
            <p className="font-semibold">$48</p>
          </div>
          <PrimaryButton>Pay Now</PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default Payment

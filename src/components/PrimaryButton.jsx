const PrimaryButton = ({ children, className = '', ...props }) => (
  <button
    className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default PrimaryButton

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-md space-y-4">
        <div className="bg-white rounded-2xl p-4">
          <h1 className="text-xl font-bold">Profile</h1>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <button className="py-3 rounded-xl border">Edit profile</button>
            <button className="py-3 rounded-xl border">Saved passengers</button>
            <button className="py-3 rounded-xl border">Payment methods</button>
            <button className="py-3 rounded-xl border">Support</button>
            <button className="py-3 rounded-xl border">Terms & Conditions</button>
            <button className="py-3 rounded-xl border">Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

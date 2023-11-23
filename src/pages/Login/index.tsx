import Button from '../../shared/Button'
import Group from '../../assets/icons/Group.svg'
import Motion from '../../shared/motion'

function Login() {
  return (
    <div className="flex w-full h-screen relative bg-[url('../src/assets/icons/bg.svg')]">
      <div className="h-full w-1/2 items-center justify-center md:flex hidden">
        <img src={Group} alt="group" />
      </div>
      <div className="w-full bg-[url('../src/assets/icons/blob-01.svg')] lg:w-3/4 flex items-center justify-center rounded-3xl border-2 border-gray-100 bg-primary-100">
        <div className="max-w-md w-full p-6">
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">Sign Up</h1>
          <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
            Join to Our Community with all time access and free
          </h1>
          <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
              <Button>SignUp with Google</Button>
            </div>
            <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
              <Button>SignUp with Github</Button>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>or with email</p>
          </div>
          <Motion />

          {/* FORM REAL */}
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                placeholder="sometext..."
                className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                placeholder="somepassword..."
                className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
              />
            </div>
            <button className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">
              SignUp
            </button>
          </form>

          {/* FOOTER */}

          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>Already have an accoint?</p>
            <a className="text-black hover:underline">SignIn</a>
          </div>

          {/* END */}
        </div>
      </div>
    </div>
  )
}

export default Login

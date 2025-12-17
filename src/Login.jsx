function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Login</h2>
                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                    Log In
                </button>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account? <p className="text-blue-500 hover:text-blue-600 cursor-pointer">Sign up</p>
                </p>
            </div>
        </div>
    );
}

export default Login;

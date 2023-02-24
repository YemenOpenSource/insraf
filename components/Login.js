
export default function Login() {
    return (
        <div className="min-h-full flex flex-col justify-center p-3 sm:p-0 font-bolder">
            <div className="sm:mx-auto sm:w-full sm:max-w-md mt-8 select-none">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">مرحباً بك 🚀👋</h2>
                <p className="text-center text-sm text-gray-600">
                    أو{' '}
                    <a href="#" className="font-medium text-blue-600 hover:text-indigo-500">
                        إنشاء حساب حديد
                    </a>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        البريد الإكتروني
                    </label>
                    <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none block w-full px-3 py-2 font-bolder border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        كلمة السر
                    </label>
                    <div className="mt-1">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none block w-full px-3 py-2 font-bolder border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

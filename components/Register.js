import { useState, useEffect } from "react";

export default function Login(props) {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
  
    useEffect(() => {
        props.name(name)
        props.email(email)
        props.password(password)
    }, [name, email, password])
    
    return (
        <div className="min-h-full flex flex-col justify-center p-3 sm:p-0 font-bolder">
            <div className="sm:mx-auto sm:w-full sm:max-w-md mt-4 select-none">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">إنشـاء حساب</h2>
            </div>
            <div className="my-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        الاسم
                    </label>
                    <div className="mt-1">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            placeholder="إدخل الاسم كاملاً "
                            onChange={({ target }) => setName(target.value)}
                            className="appearance-none block w-full px-3 py-2 font-regular border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                <div className="mt-4">
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
                            placeholder="إدخل البريد الإكتروني"
                            onChange={({ target }) => setEmail(target.value)}
                            className="appearance-none block w-full px-3 py-2 font-regular border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                            placeholder="إدخل كلمة السر"
                            required
                            onChange={({ target }) => setPassword(target.value)}
                            className="appearance-none block w-full px-3 py-2 font-regular border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

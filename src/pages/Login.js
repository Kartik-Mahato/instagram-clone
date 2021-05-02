import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

const Login = () => {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || email === '';

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            history.push(ROUTES.DASHBOARD);
        } catch (error) {
            setEmail('');
            setPassword('');
            setError(error.message);
        }
    };

    useEffect(() => {
        document.title = 'Login -Instagram';
    }, []);

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5 hidden lg:block">
                <img
                    src="/images/iphone-with-profile.jpg"
                    alt="login"
                />
            </div>
            <div className="flex flex-col w-2/5 mx-auto">
                <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
                    <h1 className="flex justify-center w-full">
                        <img src="/images/logo.png" alt="instagram" className="mt-2 w-6/12 mb-4" />
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
                    <form onSubmit={handleLogin} method="POST">
                        <input
                            type="text"
                            aria-label="Enter your email address"
                            placeholder="Email"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-500 rounded mb-2 outline-none"
                            onChange={({ target }) => setEmail(target.value)}
                            value={email}
                        />
                        <input
                            type="password"
                            aria-label="Enter your password"
                            placeholder="Password"
                            className="border-gray-500 text-sm text-gray-base w-full mr-3 py-5 border px-4 h-2 rounded mb-2 outline-none"
                            onChange={({ target }) => setPassword(target.value)}
                            value={password}
                        />
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-blue-primary text-white w-full rounded h-8 font-bold ${isInvalid && 'opacity-50'} focus:outline-none`}
                        >
                            Login
                    </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary rounded">
                    <p className="text-sm">Don't have an account?
                        <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-primary"> Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login

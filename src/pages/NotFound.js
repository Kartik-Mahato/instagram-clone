import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const NotFound = () => {
    useEffect(() => {
        document.title = 'Not Found - Instagram'
    }, []);

    return (
        <>
            <Header />
            <div className="bg-gray-background">
                <div className="mx-auto max-w-screen-lg mt-20">
                    <p className="text-3xl font-bold flex items-center justify-center">
                        Sorry, this page isn't available.
                    </p>
                    <p className="mt-12 flex items-center justify-center font-normal text-xl">
                        The link you followed may be broken, or the page may have been removed.
                        <span>
                            <Link to="/" className="text-blue-primary">
                                &nbsp; Go back to homepage
                            </Link>
                        </span>
                    </p>
                </div>
            </div></>
    )
}

export default NotFound

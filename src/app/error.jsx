'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error("App Error:", error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-md">
                <h1 className="text-4xl font-bold text-red-500 mb-4">Something went wrong!</h1>
                <p className="text-gray-600 mb-6">
                    {error?.message || "We encountered an unexpected error."}
                </p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={reset}
                        className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                    >
                        Try Again
                    </button>
                    <a
                        href="/"
                        className="px-6 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition"
                    >
                        Go Home
                    </a>
                </div>
            </div>
        </div>
    );
}

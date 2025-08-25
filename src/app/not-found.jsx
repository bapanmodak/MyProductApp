// app/not-found.jsx
"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
            <h1 className="text-7xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Oops! Page Not Found
            </h2>
            <p className="text-gray-600 text-center max-w-md mb-6">
                The page you are looking for might have been removed, had its name
                changed, or is temporarily unavailable.
            </p>

            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
}

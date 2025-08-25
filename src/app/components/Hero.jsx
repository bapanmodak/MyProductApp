"use client";

import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
            {/* Background overlay effect */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="relative z-10 max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                    Welcome to <span className="text-yellow-300">MyShop</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-100 mb-8">
                    Discover amazing products at unbeatable prices. <br />
                    Shop your favorites and explore new arrivals today!
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link
                        href="/products"
                        className="px-8 py-3 rounded-xl bg-yellow-400 text-gray-900 font-semibold shadow-md hover:bg-yellow-300 transition-transform transform hover:scale-105"
                    >
                        Browse Products
                    </Link>

                </div>
            </div>
        </section>
    );
}

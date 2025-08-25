// "use client";

// import Link from "next/link";
// import { signOut, useSession } from "next-auth/react";

// const Navbar = () => {
//     const { data: session } = useSession();

//     return (
//         <nav className="flex justify-between items-center px-6 py-4 shadow-md border-b border-gray-200 dark:border-gray-700">
//             {/* Logo */}
//             <Link
//                 href="/"
//                 className="text-2xl font-bold text-blue-600 dark:text-blue-400"
//             >
//                 MyProductApp
//             </Link>

//             <div className="flex items-center space-x-6">
//                 <Link
//                     href="/products"
//                     className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
//                 >
//                     Products
//                 </Link>

//                 {session ? (
//                     <>
//                         <Link
//                             href="/dashboard/add-product"
//                             className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
//                         >
//                             Dashboard
//                         </Link>
//                         <button
//                             onClick={() => signOut({ callbackUrl: "/" })}
//                             className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
//                         >
//                             Sign Out
//                         </button>
//                     </>
//                 ) : (
//                     <Link
//                         href="/login"
//                         className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
//                     >
//                         Login
//                     </Link>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

const Navbar = () => {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center px-6 py-4 shadow-md border-b border-gray-200 dark:border-gray-700">
            {/* Logo */}
            <Link
                href="/"
                className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            >
                MyProductApp
            </Link>

            <div className="flex items-center space-x-6 relative">
                <Link
                    href="/products"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                    Products
                </Link>

                {session ? (
                    <>
                        {/* Dashboard Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 focus:outline-none"
                            >
                                Dashboard ▾
                            </button>

                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50">
                                    <Link
                                        href="/dashboard/add-product"
                                        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        ➕ Add Product
                                    </Link>
                                    {/* <Link
                                        href="/dashboard/my-products"
                                        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        📦 My Products
                                    </Link> */}
                                </div>
                            )}
                        </div>

                        {/* Sign Out Button */}
                        <button
                            onClick={() => signOut({ callbackUrl: "/" })}
                            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                        >
                            Sign Out
                        </button>
                    </>
                ) : (
                    <Link
                        href="/login"
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    // const handleLogin = async () => {
    //     const result = await signIn("google", {
    //         redirect: false,
    //         callbackUrl: "/products",
    //     });

    //     if (result?.ok) {
    //         router.push("/products");
    //     }
    // };
    const handleLogin = async () => {
        const result = await signIn("google", { redirect: false });

        if (result?.ok) {
            router.push("/products");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-10 text-center w-[350px]">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                    Welcome Back 👋
                </h1>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                    Sign in to continue exploring products
                </p>
                <button
                    onClick={handleLogin}
                    className="flex items-center justify-center gap-3 w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105"
                >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="w-6 h-6"
                    />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
}

import Link from "next/link";

async function getProducts() {
    const res = await fetch("http://localhost:3000/api/products", {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Title */}
                <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
                    Our Products
                </h1>

                {/* Product Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition duration-300"
                        >
                            {/* Product Info */}
                            <div className="p-6 flex flex-col justify-between h-full">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                        {product.name}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Price + Button */}
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                        ${product.price}
                                    </span>
                                    <Link href={`/products/${product.id}`}>
                                        <button className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
                                            Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>


        </div>
    );
}

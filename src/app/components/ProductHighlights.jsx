import Link from "next/link";
import Image from "next/image";

const highlightedProducts = [
    {
        id: 1,
        name: "Premium Laptop",
        price: 1250,
        imageUrl: "/laptop.jpg",
    },
    {
        id: 2,
        name: "Wireless Headphone",
        price: 150,
        imageUrl: "/headphones.jpg",
    },
    {
        id: 3,
        name: "Smart Watch",
        price: 300,
        imageUrl: "/watch.jpg",
    },
];

const ProductHighlights = () => {
    return (
        <section className="py-20 px-6 text-center bg-gray-50 dark:bg-gray-900">
            <h2 className="text-4xl font-extrabold mb-12 text-gray-800 dark:text-white">
                Featured Products ✨
            </h2>

            {/* Product Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                {highlightedProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 p-6"
                    >
                        {/* Product Image */}
                        <div className="relative w-full h-48 mb-6">
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>

                        {/* Product Info */}
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                            {product.name}
                        </h3>
                        <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                            ${product.price}
                        </p>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <Link
                href="/products"
                className="inline-block px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
                View All Products
            </Link>
        </section>
    );
};

export default ProductHighlights;

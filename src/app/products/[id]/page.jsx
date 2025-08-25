

async function getProductById(id) {
    const res = await fetch(`http://localhost:3000/api/products`); // এখানে সব প্রোডাক্ট fetch করে find করতে পারেন, অথবা একটি স্পেসিফিক API বানাতে পারেন
    const products = await res.json();
    return products.find(p => p.id.toString() === id);
}

export default async function ProductDetailsPage({ params }) {
    const { id } = params; // URL থেকে id পাওয়া যায় params অবজেক্টের মাধ্যমে
    const product = await getProductById(id);

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div>

            <main style={{ padding: '2rem' }}>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h2>${product.price}</h2>
            </main>
        </div>
    );
}
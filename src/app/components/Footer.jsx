import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            MyProductApp
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
            Your trusted platform to explore and manage amazing products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-500 dark:hover:text-blue-400">
                Products
              </Link>
            </li>
            <li>

            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Contact
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
            Email: support@myproductapp.com
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Phone: +91 98765 43210
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 dark:border-gray-700 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} MyProductApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

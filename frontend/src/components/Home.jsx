// src/components/HomePage.jsx

import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">
            PayMate
          </div>
          <div className="space-x-4">
            <a
              href="/signin"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Login
            </a>
            <a
              href="/signup"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Simplify Your Payments
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Fast, secure, and reliable payment solutions for your business.
          </p>
          <a
            href="/get-started"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded shadow hover:bg-gray-100"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Feature 1 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
                <div className="text-indigo-600 mb-4">
                  {/* Icon can be replaced with an SVG or an image */}
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2v4m0 16v4m8-10h-4M6 12H2m15.364-6.364l-2.828 2.828M15.364 17.364l-2.828-2.828M6.636 6.636l2.828 2.828M6.636 17.364l2.828-2.828"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Secure Transactions</h3>
                <p className="text-gray-600 text-center">
                  We ensure your payments are safe with top-notch security measures.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
                <div className="text-indigo-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Fast Processing</h3>
                <p className="text-gray-600 text-center">
                  Experience lightning-fast payment processing to keep your business moving.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
                <div className="text-indigo-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 9V7a5 5 0 00-10 0v2M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-center">
                  Our support team is available around the clock to assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Testimonial 1 */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-6 rounded shadow">
                <p className="text-gray-700 mb-4">
                  "PayMate has revolutionized the way we handle transactions. It's fast, secure, and incredibly easy to use."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Customer"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Jane Doe</h4>
                    <span className="text-sm text-gray-500">CEO, Acme Corp</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-6 rounded shadow">
                <p className="text-gray-700 mb-4">
                  "The customer support is outstanding. They helped us integrate PayMate seamlessly into our system."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Customer"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">John Smith</h4>
                    <span className="text-sm text-gray-500">CTO, Beta LLC</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more testimonials as needed */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">PayMate</h3>
            <p className="text-gray-400">© {new Date().getFullYear()} PayMate. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#facebook" className="text-gray-400 hover:text-white">
              {/* Replace with actual icons */}
              Facebook
            </a>
            <a href="#twitter" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="#linkedin" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

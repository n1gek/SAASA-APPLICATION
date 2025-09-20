'use client';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <motion.h1
          className="text-5xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Supercharge Your Workflow 🚀
        </motion.h1>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          A modern SaaS platform to simplify your daily tasks, collaborate with your team,
          and get more done in less time.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-16 max-w-6xl mx-auto">
        {[
          { title: "Real-time Collaboration", desc: "Work with your team instantly and securely." },
          { title: "Analytics Dashboard", desc: "Track your growth with powerful insights." },
          { title: "Integrations", desc: "Connect with tools you already use and love." },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="mt-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Start your free trial today</h2>
        <p className="mb-6">No credit card required. Cancel anytime.</p>
        <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow hover:bg-gray-100 transition">
          Sign Up Free
        </button>
      </section>
    </div>
  );
}

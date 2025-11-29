import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-500 text-white text-center">
      <h2 className="text-4xl font-bold">Need Help or Guidance?</h2>
      <p className="mt-3 text-purple-100 text-lg">
        Our healthcare experts are ready to support you.
      </p>

      <Link
        to="/contact"
        className="inline-block mt-6 px-10 py-3 bg-white text-purple-700 rounded-lg shadow hover:bg-gray-100 transition"
      >
        Contact Us
      </Link>
    </section>
  );
}

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">

      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome</h2>
        <p className="text-lg text-gray-600 mb-6">
          I&apos;m a full-stack developer who enjoys building clean, attractive and scalable web apps.
        </p>
        <Link href="/en/projects" className="inline-block bg-gray-900 text-white px-5 py-2 rounded-xl shadow hover:bg-gray-700 transition">
          View my work
        </Link>
      </section>

      <footer className="p-6 border-t border-gray-200 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Jaime Hyland. All rights reserved.
      </footer>
    </main>
  );
}

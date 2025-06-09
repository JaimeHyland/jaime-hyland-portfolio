import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="p-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Jaime Hyland</h1>
          <nav className="space-x-4">
            <Link href="/">Inicio</Link>
            <Link href="/projects">Proyectos</Link>
            <Link href="/cv">Curriculum Vitae</Link>
            <Link href="/contact">Contactar</Link>
          </nav>
        </div>
      </header>

      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4">¡Bienvenido!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Soy un programador web de pila completa. Me gusta desarrollar aplicaciones web limpios, atractivos y escalables.
        </p>
        <Link href="/projects" className="inline-block bg-gray-900 text-white px-5 py-2 rounded-xl shadow hover:bg-gray-700 transition">
          Explora mis proyectos
        </Link>
      </section>

      <footer className="p-6 border-t border-gray-200 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Jaime Hyland. Reservados todos los derechos.
      </footer>
    </main>
  );
}

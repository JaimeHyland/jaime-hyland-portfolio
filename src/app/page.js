export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      {/* Hero */}
      <section className="text-center my-12">
        <h1 className="text-5xl font-bold mb-4">Jaime Hyland</h1>
        <h1 className="text-4xl">Hiya!</h1>
        <h1 className="text-3xl">How is it going?</h1>
        <h1 className="text-2xl">Hello</h1>
        <p className="text-lg text-gray-600">
          Full-Stack Developer • JavaScript | Python | Django | React | Node.js
        </p>
        <p className="mt-4 text-base text-gray-700">
          I build and deploy content-centred, user-focused web apps from backend to frontend.
        </p>
          <p className="mt-4 text-base text-gray-700">
          This page will give you an idea of what I do and where I&apos;m aiming.
        </p>
      </section>

      {/* CTA Buttons */}
      <section className="flex justify-center gap-4 mt-6 mb-12">
        <a
          href="/cv.pdf"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          download
        >
          Download CV
        </a>
        <a
          href="#projects"
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50"
        >
          View Projects
        </a>
      </section>

      {/* Projects (placeholder for now) */}
      <section id="projects">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="border p-4 rounded shadow">
            <h3 className="font-bold">Project Name</h3>
            <p className="text-sm text-gray-600">Tech: React, Node.js</p>
            <p className="mt-2 text-gray-700">Put a short description of the project in here.</p>
          </div>
          {/* Add more project cards later */}
        </div>
      </section>
    </main>
  );
}

'use client';

import {
  SiPython, SiDjango, SiPostgresql, SiMysql, SiGithub, SiGodaddy, SiHeroku,
  SiVercel, SiNextdotjs, SiTailwindcss, SiStripe, SiAmazonaws,
  SiBootstrap, SiFlask, SiJira, SiJupyter, SiHtml5, SiCss3, SiDart,
  SiFlutter, SiSwagger, SiDotnet,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function HomePage() {
  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">
      {/* Hero / Intro */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">James Hyland</h1>
        <p className="text-xl text-gray-700 mb-2">Developer. Storyteller. Teacher.</p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I&apos;m a full-stack developer with a background in languages and education who enjoys building clean, 
          attractive and scalable web apps that inform, educate, increase productivity and improve quality of life.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Some of the technologies I work with</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center text-gray-800">
          <SiPython className="w-10 h-10" title="Python" />
          <SiDjango className="w-10 h-10" title="Django" />
          <SiPostgresql className="w-10 h-10" title="PostgreSQL" />
          <SiMysql className="w-10 h-10" title="MySQL" />
          <SiGithub className="w-10 h-10" title="GitHub" />
          <SiGodaddy className="w-10 h-10" title="GoDaddy" />
          <SiHeroku className="w-10 h-10" title="Heroku" />
          <SiVercel className="w-10 h-10" title="Vercel" />
          <SiNextdotjs className="w-10 h-10" title="Next.js" />
          <SiTailwindcss className="w-10 h-10" title="Tailwind CSS" />
          <SiStripe className="w-10 h-10" title="Stripe" />
          <SiAmazonaws className="w-10 h-10" title="AWS" />
          <img src="\images\cloudinary_cloud.png" alt="Cloudinary" className="w-10 h-10" title="Cloudinary"/>
          <SiBootstrap className="w-10 h-10" title="Bootstrap" />
          <SiFlask className="w-10 h-10" title="Flask" />
          <SiJira className="w-10 h-10" title="Jira" />
          <SiJupyter className="w-10 h-10" title="Jupyter" />
          <SiHtml5 className="w-10 h-10" title="HTML5" />
          <SiCss3 className="w-10 h-10" title="CSS3" />
          <FaJava className="w-10 h-10" title="Java" />
          <SiDart className="w-10 h-10" title="Dart" />
          <SiFlutter className="w-10 h-10" title="Flutter" />
          <SiSwagger className="w-10 h-10" title="Swagger" />
          <SiDotnet className="w-10 h-10" title="Visual Basic .NET" />
        </div>
      </section>

      {/* Training / Education */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-6">Some of the places where I&apos;ve learned</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
          <img src="/images/Logo-fas_s2.png" alt="FÁS" className="w-24 h-auto" />
          <img src="/images/Trinity_shield.png" alt="Trinity College Dublin" className="w-24 h-auto" />
          <img src="/images/code_institute.png" alt="Code Institute" className="w-24 h-auto" />
          <img src="/images/khan-academy-solid.png" alt="Khan Academy" className="w-24 h-auto" />
          <img src="/images/codefinity_bw.png" alt="Codefinity" className="w-24 h-auto" />
          <img src="/images/brilliant_bw.png" alt="Brilliant" className="w-24 h-auto" />
          <img src="/images/kodekloud_bw.png" alt="KodeKloud" className="w-24 h-auto" />
          <img src="/images/leetcode.png" alt="LeetCode" className="w-24 h-auto" />
          <img src="/images/linkedin-learning.png" alt="LinkedIn Learning" className="w-24 h-auto" />
          <img src="/images/freecodecamp-icon.svg" alt="freecodecamp" className="w-24 h-auto" />
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <p className="text-lg text-gray-700 mb-4">Looking for a collaborator or developer?</p>
        <a
          href="/en/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          Get in touch
        </a>
      </section>
    </main>
  );
}

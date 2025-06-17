export default function ProjektePage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Projekte</h1>

      {/* Portfolio Projects */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Portfolio Projects</h2>
        <p className="mb-4">These projects were created independently and showcase a variety of technologies and applications.</p>
        <ul className="space-y-4">
          <li>
            <strong>Jaime Hyland Portfolio</strong><br />
            <span className="text-sm text-gray-600">This project</span><br />
            <span className="text-blue-600 underline">[Live site URL]</span> | <span className="text-blue-600 underline">[GitHub URL]</span>
          </li>
          <li>
            <strong>Farming Futures</strong> – Robotics in agriculture (HTML5, CSS, JS)<br />
            <span className="text-blue-600 underline">[Live site URL]</span> | <span className="text-blue-600 underline">[GitHub URL]</span>
          </li>
          <li>
            <strong>El acento español</strong> – Spanish tilde explainer (HTML5, CSS, JS)<br />
            <span className="text-blue-600 underline">[Live site URL]</span> | <span className="text-blue-600 underline">[GitHub URL]</span>
          </li>
          <li>
            <strong>Witch-Hazel</strong> – Grafting manager CLI app (Python, Heroku)<br />
            <span className="text-blue-600 underline">[Live app URL]</span> | <span className="text-blue-600 underline">[GitHub URL]</span>
          </li>
          <li>
            <strong>Family Shopping List</strong> – Django/PostgreSQL shopping app<br />
            <span className="text-blue-600 underline">[Live app URL]</span> | <span className="text-blue-600 underline">[GitHub URL]</span>
          </li>
          <li>
            <strong>Mellifera</strong> – Online shop for beekeepers (Stripe, AWS)<br />
            <span className="text-blue-600 underline">[Live site URL]</span> | <span className="text-blue-600 underline">[GitHub URL]</span>
          </li>
          <li>
            <strong>language-landscape.com</strong><br />
            <span className="text-sm text-gray-600">Legacy CakePHP project commissioned by me and currently maintained by me</span><br />
            <span className="text-blue-600 underline">https://language-landscape.com</span>
          </li>
        </ul>
      </section>

      {/* Hackathon Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Hackathon Projects</h2>
        <p className="mb-4">These collaborative projects were developed as part of various hackathons. My contributions are noted where relevant.</p>
        <ul className="space-y-6">
          <li>
            <strong>SparkSync</strong> – Code Institute's February '25 Hackathon<br />
            <em>Dating app</em><br />
            <span className="text-blue-600 underline">[Live site URL]</span> | <span className="text-blue-600 underline">[GitHub URL]</span><br />
            <span className="text-sm text-gray-700">My role: [e.g. Frontend design, React form handling, project coordination]</span>
          </li>
          <li>
            <strong>TechBuddy</strong> – Code Institute's May '25 Hackathon<br />
            <em>Technical help app for all the family</em><br />
            <span className="text-blue-600 underline">[Live site URL]</span> | <span className="text-blue-600 underline">[GitHub URL]</span><br />
            <span className="text-sm text-gray-700">My role: [e.g. Django models, session handling, UI text content]</span>
          </li>
          <li>
            <strong>SheGitsIt</strong> – Code Institute's March '25 Hackathon<br />
            <em>Support app for women in tech</em><br />
            <span className="text-blue-600 underline">[Live site URL]</span> | <span className="text-blue-600 underline">[GitHub URL]</span><br />
            <span className="text-sm text-gray-700">My role: [e.g. Accessibility testing, multilingual copywriting, component logic]</span>
          </li>
          <li>
            <strong>CO<sub>2</sub>nscious</strong> – Battle of the Bootcamps, Berlin, December 2024<br />
            <em>Climate-friendly action app (unfinished)</em><br />
            <span className="text-blue-600 underline">[GitHub URL]</span><br />
            <span className="text-sm text-gray-700">My role: [e.g. Research, UX wireframing, form validation]</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

import React from 'react';

export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Jaime Hyland</h1>
      <p className="text-lg italic">Software developer, storyteller — Berlin</p>
      <p className="text-sm text-gray-600">E-Mail / GitHub / Website / LinkedIn</p>

      <section>
        <h2 className="text-xl font-semibold">Personal profile</h2>
        <p>
          A versatile software developer, trainer and storyteller, I have just
          completed a remote diploma course in Full-Stack development at the Code
          Institute (Dublin)...
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Key technologies</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Programming:</strong> HTML, CSS, JavaScript, Python, Java,
            VB.NET, Dart
          </li>
          <li><strong>Databases:</strong> MySQL, PostgreSQL, Oracle</li>
          <li><strong>Deployment:</strong> AWS, Heroku, Cloudinary, GoDaddy</li>
          <li>
            <strong>Frameworks:</strong> Flask, Django, Bootstrap, Stripe,
            PassoloApp
          </li>
          <li><strong>Tools:</strong> Jira, AuthorIT, Doc2Help</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Education and Training</h2>
        <ul className="list-disc list-inside">
          <li>2023–2024: Code Institute: Full-Stack Diploma</li>
          <li>2000: FAS CITP Programming Course</li>
          <li>1984–1988: BA in Philosophy, Trinity College Dublin</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Portfolio Projects</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Farming Futures</strong> – Robotics in agriculture (HTML5, CSS,
            JS) [GitHub link]
          </li>
          <li>
            <strong>El acento español</strong> – Spanish tilde explainer (HTML5,
            CSS, JS) [GitHub link]
          </li>
          <li>
            <strong>Witch-Hazel</strong> – Grafting manager CLI app (Python, Heroku)
            [GitHub link]
          </li>
          <li>
            <strong>Family Shopping List</strong> – Django/PostgreSQL shopping app
            [GitHub link]
          </li>
          <li>
            <strong>Mellifera</strong> – Online shop for beekeepers (Stripe, AWS)
            [GitHub link]
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <p className="whitespace-pre-line">
          {`2022–2023: Software and mobile project (MySQL, Java Swing, Flutter)
          2020–2022: Translation, localization, training, teaching 2010–2020:
          Freelance localization (language-landscapes.com) 2004–2010: IVU Traffic
          Technologies — Localization manager`}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Languages</h2>
        <p>Fluent: English, Spanish, German (C1)</p>
        <p>Rusty: French, Italian, Irish</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Hobbies and Interests</h2>
        <p>
          Code Institute hackathons, Dart/Flutter, gardening, beekeeping, cooking,
          silicon moulding.
        </p>
      </section>
    </div>
  );
}

export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Jaime Hyland</h1>
      <p className="text-lg italic">Softwareentwickler, Trainer, Geschichtenerzähler — Berlin</p>
      <p className="text-sm text-gray-600">E-Mail / GitHub / Website / LinkedIn</p>

      <section>
        <h2 className="text-xl font-semibold">Persönliches Profil</h2>
        <p>
          Ich bin ein vielseitiger Softwareentwickler, Trainer und Geschichtenerzähler. Ich habe kürzlich einen Fernkurs in Full-Stack-Entwicklung am Code Institute (Dublin) abgeschlossen. Ich verfüge über umfangreiche Erfahrung in Lokalisierung, Übersetzung und technischer Dokumentation sowie über die Fähigkeit, komplexe Themen in unterschiedlichen Fachbereichen verständlich zu vermitteln. Ich freue mich darauf, wieder Teil eines innovativen Entwicklerteams zu sein.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Wichtige Technologien</h2>
        <ul className="list-disc list-inside">
          <li><strong>Programmiersprachen:</strong> HTML, CSS, JavaScript, Python, Java, VB.NET, Dart</li>
          <li><strong>Datenbanken:</strong> MySQL, PostgreSQL, Oracle</li>
          <li><strong>Deployment:</strong> AWS, Heroku, Cloudinary, GoDaddy</li>
          <li><strong>Frameworks/Bibliotheken:</strong> Flask, Django, Bootstrap, Stripe, PassoloApp</li>
          <li><strong>Tools:</strong> Jira, AuthorIT, Doc2Help</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Ausbildung</h2>
        <ul className="list-disc list-inside">
          <li>2023–2024: Code Institute – Diplom in Full-Stack-Entwicklung</li>
          <li>2000: FAS CITP – Diplomkurs in „Computer Programming“</li>
          <li>1984–1988: Universität Dublin (Trinity College Dublin) – B.A. in Philosophie</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Portfolio-Projekte</h2>
        <ul className="list-disc list-inside">
          <li><strong>Farming Futures</strong> – Robotik in der Landwirtschaft (HTML5, CSS, JS)</li>
          <li><strong>El acento español</strong> – Web-App zur spanischen Tilde (HTML5, CSS, JS)</li>
          <li><strong>Witch-Hazel</strong> – CLI-App für Pflanzenveredelung (Python, Heroku)</li>
          <li><strong>Family Shopping List</strong> – Familien-Einkaufslisten-App (Django, PostgreSQL)</li>
          <li><strong>Mellifera</strong> – Online-Shop für Imker (Stripe, AWS)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Berufserfahrung</h2>
        <p className="whitespace-pre-line">
          {`2022–2023: Sprachlern-Softwareprojekt (MySQL, Java Swing, Flutter)
2020–2022: Übersetzung, Lokalisierung, Schulung, Unterricht
2010–2020: Freiberuflicher technischer Übersetzer
2004–2010: Lokalisierungsmanager bei IVU Traffic Technologies, Berlin`}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Sprachen</h2>
        <p>Fließend: Englisch, Spanisch, Deutsch (C1-Zertifikat)</p>
        <p>Grundkenntnisse: Französisch, Italienisch, Irisch</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Hobbys und Interessen</h2>
        <p>
          Teilnahme an Code-Institute-Hackathons, Weiterbildung über brilliant.org, LinkedIn Learning und KodeKloud. Experimente mit Dart/Flutter, Linux-Lernen.
        </p>
        <p>
          Gartenarbeit, Kochen (siehe mein YouTube-Video), Imkerei, Herstellung von Silikonformen.
        </p>
      </section>
    </div>
  );
}

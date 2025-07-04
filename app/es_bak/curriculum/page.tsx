export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Jaime Hyland</h1>
      <p className="text-lg italic">Desarrollador de software, formador, narrador — Berlín</p>
      <p className="text-sm text-gray-600">E-Mail / GitHub / Website / LinkedIn</p>

      <section>
        <h2 className="text-xl font-semibold">Perfil personal</h2>
        <p>
          Soy un desarrollador de software, formador y narrador polivalente. Acabo de completar un diploma a distancia en desarrollo Full-Stack en el Code Institute (Dublín). Tengo una amplia experiencia en localización, traducción y redacción técnica, y una gran capacidad para abordar cuestiones complejas en entornos especializados diversos. Estoy impaciente por reincorporarme a un equipo de desarrollo innovador y competente.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Tecnologías clave</h2>
        <ul className="list-disc list-inside">
          <li><strong>Lenguajes de programación:</strong> HTML, CSS, JavaScript, Python, Java, VB.NET, Dart</li>
          <li><strong>Bases de datos:</strong> MySQL, PostgreSQL, Oracle</li>
          <li><strong>Despliegue:</strong> AWS, Heroku, Cloudinary, GoDaddy</li>
          <li><strong>Frameworks/Librerías:</strong> Flask, Django, Bootstrap, Stripe, PassoloApp</li>
          <li><strong>Herramientas:</strong> Jira, AuthorIT, Doc2Help</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Formación</h2>
        <ul className="list-disc list-inside">
          <li>2023–2024: Code Institute – Diploma en desarrollo Full-Stack</li>
          <li>2000: FAS CITP – Diplomado en Programación informática</li>
          <li>1984–1988: Universidad de Dublín (Trinity College Dublin) – Licenciatura en Filosofía</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Proyectos del portafolio</h2>
        <ul className="list-disc list-inside">
          <li><strong>Farming Futures</strong> – Robótica en la agricultura (HTML5, CSS, JS)</li>
          <li><strong>El acento español</strong> – Explicador de la tilde en español (HTML5, CSS, JS)</li>
          <li><strong>Witch-Hazel</strong> – App CLI para injertos (Python, Heroku)</li>
          <li><strong>Family Shopping List</strong> – App de compras familiares (Django, PostgreSQL)</li>
          <li><strong>Mellifera</strong> – Tienda online para apicultores (Stripe, AWS)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Experiencia laboral</h2>
        <p className="whitespace-pre-line">
          {`2022–2023: Proyecto de app web/móvil (MySQL, Java Swing, Flutter)
2020–2022: Traducción, localización, formación, docencia
2010–2020: Traductor/localizador freelance (Spanish/German to English)
2004–2010: Responsable de localización técnica — IVU Traffic Technologies, Berlín`}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Idiomas</h2>
        <p>Fluido: Inglés, Español, Alemán (Cert. C1)</p>
        <p>Básico: Francés, Italiano, Irlandés</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Aficiones e intereses</h2>
        <p>
          Hackathons del Code Institute, formación en brilliant.org, LinkedIn Learning y KodeKloud, experimentación con Dart/Flutter y aprendizaje de Linux.
        </p>
        <p>
          Me gusta la jardinería, la cocina (ver mi vídeo en YouTube), la apicultura y la fabricación de moldes de silicona.
        </p>
      </section>
    </div>
  );
}

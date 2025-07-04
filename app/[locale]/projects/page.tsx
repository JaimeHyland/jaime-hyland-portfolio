export default function ProjectsPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <p>This page lists a number of the projects I have been involved in recently. 
      I have divided it into three sections, the first one listing the projects that I completed
      as part of my recent course in full-stack software development with 
      {' '}<span className="text-blue-600 underline"><a href="https://codeinstitute.net/" target="_blank" rel="noopener 
      noreferrer">Code Institute</a></span>, 
      while the second one lists some ongoing projects that I have been working on independently over the 
      last few months. The third section lists the projects that I have contributed to as part of the series of
      {' '}<span className="text-blue-600 underline"><a href="https://hackathon.codeinstitute.net/" target="_blank" rel="noopener noreferrer">Hackathons</a></span>
      {' '}organized by Code Institute since November 2024.</p><br />

      {/* Portfolio Projects for Code institute */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Portfolio Projects for my CI full-stack qualification</h2>
        <p className="mb-4">These projects were created independently for assessment as part of my
          {' '}<span className="text-blue-600 underline"><a href="https://codeinstitute.net/" target="_blank" rel="noopener noreferrer">full-stack programming course</a></span>. 
          They showcase a variety of the technologies, methodologies and techniques that learned as part of this course.</p>
        <ul className="space-y-4">
          <li>
            <strong>Farming Futures</strong> – Robotics in agriculture (HTML5, CSS, JS)<br />
            <span className="text-blue-600 underline"><a href="https://jaimehyland.github.io/farming-futures/" 
            target="_blank" rel="noopener noreferrer">Live demo site</a></span> | 
            {' '}<span className="text-blue-600 underline"><a href="https://github.com/JaimeHyland/farming-futures/" 
            target="_blank" rel="noopener noreferrer">GitHub repo</a></span> | 
            {' '}<span className="text-blue-600 underline"><a href="https://github.com/jaimehyland/farming-futures/blob/main/README.md"
            target="_blank" rel="noopener noreferrer">Project readme file</a></span>
          </li>
          <li>
            <strong>El acento español</strong> – Spanish tilde explainer (HTML5, CSS, JS)<br />
            <span className="text-blue-600 underline"><a href="https://jaimehyland.github.io/elAcentoEspanyol/" 
            target="_blank" rel="noopener noreferrer">Live demo site</a></span> | 
            {' '}<span className="text-blue-600 underline"><a href="https://github.com/JaimeHyland/elAcentoEspanyol" 
            target="_blank" rel="noopener noreferrer">GitHub repo</a></span> | 
            {' '}<span className="text-blue-600 underline"><a href="https://github.com/jaimehyland/elAcentoEspanyol/blob/main/readme.md"
            target="_blank" rel="noopener noreferrer">Project readme file</a></span>
          </li>
          <li>
            <strong>Witch-Hazel</strong> – Grafting manager CLI app (Python, Heroku)<br />
            <span className="text-blue-600 underline"><a href="https://jaimehyland.github.io/witch-hazel/" 
            target="_blank" rel="noopener noreferrer">Live demo site</a></span> | 
            {' '}<span className="text-blue-600 underline"><a href="https://witch-hazel-5f8d8dfa45da.herokuapp.com/" 
            target="_blank" rel="noopener noreferrer">GitHub repo</a></span> | 
            {' '}<span className="text-blue-600 underline"><a href="https://github.com/jaimehyland/witch-hazel/blob/main/README.md"
            target="_blank" rel="noopener noreferrer">Project readme file</a></span>
          </li>
          <li>
            <strong>Family Shopping List</strong> – Django/PostgreSQL shopping app<br />
            <span className="text-blue-600 underline"><a href="https://family-shopping-list-v1-bafe564ca613.herokuapp.com/" 
            target="_blank" rel="noopener noreferrer">Live demo site</a></span> | 
            {' '}<span className="text-blue-600 underline"><a href="https://github.com/JaimeHyland/family_shopping_list_v1" 
            target="_blank" rel="noopener noreferrer">GitHub repo</a></span> | 
            {' '}<span className="text-blue-600 underline"><a href="https://github.com/JaimeHyland/family_shopping_list_v1/blob/main/README.md"
            target="_blank" rel="noopener noreferrer">Project readme file</a></span>
          </li>
          <li>
            <strong>Mellifera</strong> – Online shop for beekeepers (Stripe, AWS)<br /><span className="text-blue-600 underline"><a href="https://mellifera-e383ea0670a3.herokuapp.com/" 
            target="_blank" rel="noopener noreferrer">Live demo site</a></span> | 
            {' '}<span className="text-blue-600 underline"><a href="https://github.com/JaimeHyland/Mellifera" 
            target="_blank" rel="noopener noreferrer">GitHub repo</a></span> | 
            {' '}<span className="text-blue-600 underline"><a href="https://github.com/JaimeHyland/Mellifera/blob/main/README.md"
            target="_blank" rel="noopener noreferrer">Project readme file</a></span>
          </li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Ongoing independent Projects</h2>
        <p className="mb-4">These projects were created independently on my own initiative. They showcase some additional  
          competencies and technologies that I&apos;ve learned independently.</p>
        <ul className="space-y-4">
          <li>
            <strong>Jaime Hyland&apos;s Portfolio</strong><br />
            <span className="text-sm text-gray-600">This trilingual site is a personal project of mine. The webpage you&apos;re 
              now looking at is part of it. It is designed to showcase my skills, experiences and aptitudes in web development.
              Even more so than the other projects in this list, it should be regarded as a work in progress. It uses 
              React/Next.js technology and is hosted by Vercel.</span><br />
            <span className="text-blue-600 underline"><a href="https://jaime-hyland.com">jaime-hyland.com&apos;s GitHub repo</a></span> | 
            <span className="text-blue-600 underline"><a href="https://github.com/JaimeHyland/jaime-hyland-portfolio" target="_blank" 
            rel="noopener noreferrer"></a>jaime-hyland.com&apos;s GitHub repo</span>
          </li>
          <li>
            <strong>language-landscapes.com</strong><br />
            <span className="text-sm text-gray-600">This is a legacy CakePHP project originally commissioned to a third party but 
              currently maintained by me. It contains a number of issues, resulting both from incompatibilities between older and 
              newer versions of the CakePhP framework, and the fact that it was not originally designed to be responsive.
              I intend to resolve the problems in both categories on an ongoing basis.</span><br />
              <br />
              <span className="text-sm text-gray-600">It is currently hosted by Godaddy but, mainly for value-for-money and 
                quality-of-service reasons, I intend to move it as soon as possible to another host.</span><br />
            <span className="text-blue-600 underline"><a href="https://language-landscapes.com">language-landscapes.com</a></span> | 
            <span className="text-blue-600 underline"><a href="https://github.com/JaimeHyland/language-landscapes" target="_blank" rel="noopener noreferrer">language-landscapes.com&apos;s GitHub repo</a></span>
          </li>
        </ul>
      </section>

      {/* Hackathon Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Hackathon Projects</h2>
        <p className="mb-4">These collaborative projects were developed as part of various hackathons. My contributions are noted where relevant.</p>
        <ul className="space-y-6">

          <li>
            <strong>TechBuddy</strong> – Code Institute&apos;s May 2025 Hackathon<br />
            <em>Technical help app for all the family</em><br />
            <span className="text-blue-600 underline"><a href="https://support-squad-tech-buddy-9d4a4ad47301.herokuapp.com/" target="_blank" rel="noopener noreferrer">TechBuddy&apos;s live demo</a></span> | <span className="text-blue-600 underline">
              <a href="https://github.com/apeskinian/tech_buddy" target="_blank" rel="noopener noreferrer"></a>TechBuddy&apos;s GitHub repo</span><br />
            <span className="text-sm text-gray-700">My role: conception of original log-in logic; logic, design and implementation of AI chat page, 
              including AI tuning and connection to te OpenAI API.</span>
          </li>
          <li>
            <strong>SheGitsIt</strong> – Code Institute&apos;s March &apos;25 Hackathon<br />
            <em>Support app for women in tech</em><br />
            <span className="text-blue-600 underline"><a href="https://she-gits-it-8555f0353cc7.herokuapp.com/" target="_blank" rel="noopener noreferrer">SheGitsIt&apos;s live demo</a></span> | <span className="text-blue-600 underline"><a href="https://github.com/Carlos-n21/Team-4-SheCanGitIt" 
            target="_blank" rel="noopener noreferrer">SheGitsIt GitHub repo</a></span><br />
            <span className="text-sm text-gray-700">My role: logic, design and implementation of instant messaging page, 
              including changes to deployment details for Django daphne and channels.</span>
          </li>
          <li>
            <strong>SparkSync</strong> – Code Institute&apos;s February &apos;25 Hackathon<br />
            <em>Dating app</em><br />
            <span className="text-blue-600 underline"><a href="https://sparksync-7438f8dc8240.herokuapp.com/" target="_blank" rel="noopener noreferrer">SparkSync&apos;s live demo</a></span> | <span className="text-blue-600 underline"><a href="https://github.com/violaberg/dating-app" target="_blank" rel="noopener noreferrer">SparkSync&apos;s GitHHubRepo</a></span><br />
            <span className="text-sm text-gray-700">My role: logic, design and implementation of instant messaging page,
              including necessary changes to deployment.</span>
          </li>
          <li>
            <strong>CO<sub>2</sub>nscious</strong> – Battle of the Bootcamps, Berlin, November 25 to 28 2024<br />
            <em>Climate-friendly action app (very much still a work-in-progress).</em><br />
            <span className="text-blue-600 underline">CO<sub>2</sub>nscious doesn&apos;t have a live demo</span> | <span className="text-blue-600 underline"><a href="https://github.com/raneem-yad/CO-nsious" target="_blank" rel="noopener noreferrer">CO<sub>2</sub>nscious&apos;s GitHub repo</a></span><br />
            <span className="text-sm text-gray-700">My role: initial wireframing, Django models and Swagger APIs.</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

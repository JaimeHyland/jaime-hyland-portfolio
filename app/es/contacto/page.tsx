export default function ContactoPage() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>
      <p className="mb-2">Puedes ponerte en contacto conmigo a través de los siguientes datos:</p>
      <ul className="space-y-1">
        <li><strong>Correo electrónico:</strong> jaime.hyland@language-landscapes.com</li>
        <li><strong>Teléfono fijo:</strong> +49 3048628468</li>
        <li><strong>Móvil:</strong> +49 177 2570734</li>
        <li><strong>Dirección postal:</strong><br />Kuckhoffstr. 108D<br />13156 Berlín</li>
        <li><strong>Sitio web:</strong> <a href="https://jaime-hyland.com" className="text-blue-600 underline">jaime-hyland.com</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/language-landscapes/" className="text-blue-600 underline" target="_blank">language-landscapes</a></li>
      </ul>
    </div>
  );
}

export default function KontaktPage() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Kontakt</h1>
      <p className="mb-2">Sie können mich über die folgenden Kontaktinformationen erreichen:</p>
      <ul className="space-y-1">
        <li><strong>E-Mail:</strong> jaime.hyland@language-landscapes.com</li>
        <li><strong>Festnetz:</strong> +49 3048628468</li>
        <li><strong>Mobil:</strong> +49 177 2570734</li>
        <li><strong>Postadresse:</strong><br />Kuckhoffstr. 108D<br />13156 Berlin</li>
        <li><strong>Website:</strong> <a href="https://jaime-hyland.com" className="text-blue-600 underline">jaime-hyland.com</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/language-landscapes/" className="text-blue-600 underline" target="_blank">language-landscapes</a></li>
      </ul>
    </div>
  );
}

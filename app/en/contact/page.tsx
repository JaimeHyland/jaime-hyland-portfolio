export default function ContactPage() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="mb-2">You can reach me using the following contact details:</p>
      <ul className="space-y-1">
        <li><strong>Email:</strong> jaime.hyland@language-landscapes.com</li>
        <li><strong>Landline:</strong> +49 3048628468</li>
        <li><strong>Mobile:</strong> +49 177 2570734</li>
        <li><strong>Address:</strong><br />Kuckhoffstr. 108D<br />13156 Berlin</li>
        <li><strong>Website:</strong> <a href="https://jaime-hyland.com" className="text-blue-600 underline">jaime-hyland.com</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/language-landscapes/" className="text-blue-600 underline" target="_blank">language-landscapes</a></li>
      </ul>
    </div>
  );
}
import LegalPage from "@pages/legal/LegalPage";
import privacyContent from "@assets/markdown/aviso-de-privacidad.md?raw";

export default function Privacy() {
  return <LegalPage title="Aviso de Privacidad" content={privacyContent} />;
}

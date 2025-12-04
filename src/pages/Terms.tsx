import LegalPage from "@pages/legal/LegalPage";
import termsContent from "@assets/markdown/terminos-y-condiciones.md?raw";

export default function Terms() {
  return <LegalPage title="Términos y Condiciones" content={termsContent} />;
}

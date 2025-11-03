"use client";

import { useTranslations } from "next-intl";
import { ProjLink } from "../../../components/ProjLink";

export default function ImpressumPage() {
  const t = useTranslations();

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{t("heading")}</h1>

      <p className="mb-2">
        <strong>{t("nameLabel")}:</strong> James Hyland
      </p>

      <p className="mb-2">
        <strong>{t("addressLabel")}:</strong>
        <br />
        Kuckhoffstr 108d
        <br />
        13156 Berlin
      </p>

      <p className="mb-2">
        <strong>{t("emailLabel")}:</strong>{" "}
        <a
          href="mailto:jaime.hyland@language.landscapes.com"
          className="underline"
        >
          jaime.hyland@language.landscapes.com
        </a>
      </p>

      <p className="mb-2">
        <strong>{t("phoneLabel")}:</strong> +49 1772570734
      </p>

      <p className="mb-4">
        <strong>{t("vatLabel")}:</strong> DE 272489105
      </p>

      <h2 className="text-2xl font-semibold mb-2">{t("extraHeading")}</h2>

      <p className="mb-2">
        <strong>{t("hostLabel")}:</strong> Vercel
      </p>

      <p className="mb-2">
        <strong>{t("repoLabel")}:</strong>{" "}
        <ProjLink href="https://github.com/JaimeHyland/jaime-hyland-portfolio">
          {t("repoURLText")}
        </ProjLink>{" "}
        – {t("repoLicense")}
      </p>
    </div>
  );
}

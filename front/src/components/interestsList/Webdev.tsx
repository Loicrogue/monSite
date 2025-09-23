// @ts-expect-error react
import React from 'react';
import { useTranslation } from 'react-i18next';

const WebDev = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="font-bold text-xl mb-3">💻 {t("pages.interests.bookmarks.webDev")}</h2>
      <p className="mb-2">
        J’aime concevoir des applications web modernes et performantes. Mon
        intérêt porte aussi bien sur le <span className="font-semibold">front-end</span>
        , où l’expérience utilisateur est primordiale, que sur le{" "}
        <span className="font-semibold">back-end</span>, où la structure et la
        sécurité jouent un rôle central.
      </p>
      <p>
        Je m’intéresse particulièrement aux architectures{" "}
        <span className="italic">micro-services</span>, à l’optimisation des
        performances, et à la mise en place de solutions robustes et scalables.
      </p>
    </div>
  );
};
export default WebDev;
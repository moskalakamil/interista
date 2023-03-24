import React from "react";
import { useTranslation } from "next-i18next";

const Ads = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <p>{t("ads")}</p>
    </div>
  );
};

export default Ads;

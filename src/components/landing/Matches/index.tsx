import SectionTitle from "../../../common/SectionTitle";
import React from "react";
import Match from "./Match";
import { useTranslation } from "next-i18next";

const Matches = () => {
  const { t } = useTranslation("common");

  const matches = [
    {
      host: "Inter Mediolan",
      guest: "Tempo Rzeszotary",
      date: "20.10.2023",
      hour: "20:00",
    },
    {
      host: "Inter Mediolan",
      guest: "Tempo Rzeszotary",
      date: "22.10.2023",
      hour: "20:00",
    },
    {
      host: "Inter Mediolan",
      guest: "Tempo Rzeszotary",
      date: "26.10.2023",
      hour: "20:00",
    },
  ];

  return (
    <section id="matches">
      <SectionTitle>{t("matches")}</SectionTitle>
      {matches.map(({ host, guest, date, hour }) => (
        <Match key={date} host={host} guest={guest} date={date} hour={hour} />
      ))}
    </section>
  );
};

export default Matches;

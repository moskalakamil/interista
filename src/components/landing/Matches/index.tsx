import SectionTitle from "../../../common/SectionTitle";
import React from "react";
import Match from "./Match";

const Matches = () => {
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
      date: "20.10.2023",
      hour: "20:00",
    },
    {
      host: "Inter Mediolan",
      guest: "Tempo Rzeszotary",
      date: "20.10.2023",
      hour: "20:00",
    },
  ];

  return (
    <section>
      <SectionTitle>Mecze</SectionTitle>
      {matches.map(({ host, guest, date, hour }) => (
        <Match key={date} host={host} guest={guest} date={date} hour={hour} />
      ))}
    </section>
  );
};

export default Matches;

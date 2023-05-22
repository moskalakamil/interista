import { useMemo } from "react";

const useHref = (text: string) =>
  useMemo(() => {
    const regex = /[ąćęłńóśżź]/g;
    const polishChars = {
      ą: "a",
      ć: "c",
      ę: "e",
      ł: "l",
      ń: "n",
      ó: "o",
      ś: "s",
      ź: "z",
      ż: "z",
    };

    return text
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll(regex, (match: string) => polishChars[match as keyof typeof polishChars]);
  }, [text]);

export default useHref;

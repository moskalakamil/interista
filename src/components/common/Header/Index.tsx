import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Header = () => {
  const { t } = useTranslation("common");

  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    addEventListener("scroll", scrollHandler);

    return () => removeEventListener("scroll", scrollHandler);
  }, []);

  const leftLinks = useMemo(
    () => [
      {
        link: "#articles",
        name: t("articles"),
      },
      {
        link: "#matches",
        name: t("matches"),
      },
    ],
    [t]
  );

  const rightLinks = useMemo(
    () => [
      {
        link: "contact/#about",
        name: t("about"),
      },
      {
        link: "contact/#contact",
        name: t("contact"),
      },
    ],
    [t]
  );

  const scrollHandler = () => {
    setIsOnTop(window.scrollY <= 0);
  };

  return (
    <StyledHeader data-testid="header" isOnTop={isOnTop}>
      <Nav links={leftLinks} />
      <Link href={"/"}>
        <Image
          className="image"
          src={`/logo_${isOnTop ? "white" : "black"}.svg`}
          alt="Interista"
          width={80}
          height={80}
        />
      </Link>
      <Nav links={rightLinks} />
    </StyledHeader>
  );
};

interface StyledHeaderProps {
  isOnTop: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  z-index: 2137;
  padding-top: ${({ isOnTop }) => (isOnTop ? 2 : 0)}vh;
  background: ${({ isOnTop }) => (isOnTop ? "transparent" : "white")};
  transition: all 0.1s ease-in-out;

  .image {
    cursor: pointer;
    transition: transform 0.16s ease-in-out;

    :hover {
      transform: scale(0.9);
    }
  }

  a {
    color: ${({ isOnTop }) => (isOnTop ? "white" : "black")};
  }

  @media (min-width: 1024px) {
    padding-inline: 8vw;
  }
`;

export default Header;

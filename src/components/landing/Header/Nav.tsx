import Link from "next/link";
import styled from "styled-components";

interface Link {
  link: string;
  name: string;
}

interface Props {
  links: Link[];
}

const Nav = ({ links }: Props) => {
  return (
    <StyledNav>
      <ul>
        {links.map(({ link, name }) => (
          <li key={link}>
            <Link href={`/${link}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  ul li {
    list-style: none;
    display: inline;
    margin-inline: 3vw;

    & > a {
      font-size: 24px;
      color: white;
      text-decoration: none;
      font-family: "Bebas Neue";
      letter-spacing: 2px;
    }
  }
`;

export default Nav;

import Link from "next/link";
import styled from "styled-components";

interface NavLink {
  link: string;
  name: string;
}

interface Props {
  links: NavLink[];
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
    margin-inline: 6vw;

    & > a {
      font-size: 24px;
      text-decoration: none;
      font-family: "Bebas Neue";
      letter-spacing: 2px;
      transition: color 0.16s ease-in-out;

      :hover {
        color: rgb(164, 164, 196);
      }
    }
  }
`;

export default Nav;

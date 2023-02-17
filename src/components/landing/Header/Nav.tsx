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

export default Nav;

const StyledNav = styled.nav``;

import Link from "next/link";
import styled from "styled-components";

interface Link {
  link: string;
  name: string;
}

interface Props {
  title: string;
  links: Link[];
}

const Category = ({ title, links }: Props) => {
  return (
    <StyledCategory>
      <div>
        <h3>{title}</h3>
        <ul>
          {links.map(({ link, name }) => (
            <li key={link}>
              <Link href={`/${link}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </StyledCategory>
  );
};

const StyledCategory = styled.div`
  width: 25vw;
  margin-left: 10vw;
  z-index: 100;
  display: flex;
  align-items: center;
  font-family: "Bebas Neue";
  color: white;

  div {
    display: flex;
    flex-direction: column;
  }

  h3 {
    border-bottom: 1px solid white;
    padding-bottom: 24px;
    margin-bottom: 24px;
    font-size: 32px;
    padding-inline: 10vw;
    padding-left: 0px;
    font-family: "Bebas Neue", sans-serif;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }

  ul li {
    & > a {
      text-decoration: none;
      font-size: 24px;
      color: white;
      font-family: "Bebas Neue";
    }
  }
`;

export default Category;

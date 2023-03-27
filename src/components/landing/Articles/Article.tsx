import { parseDate } from "@/utils/parseDate";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  name: string;
  date: string;
  tag: string;
  id: string;
}

const Article = ({ name, date, tag, id }: Props) => {
  return (
    <Container>
      <div className="imageContainer">
        <Image
          src={`/articles/104e2a0a-9760-49ae-9848-c371fe2fbb6e/main.webp`}
          alt=""
          fill
        />
      </div>
      <div className="additional-info">
        <p className="tag">{tag}</p>
        <p className="time">{date}</p>
      </div>
      <h1>{name}</h1>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding-inline: 20px;
  box-sizing: content-box;
  margin-inline: auto;
  margin-bottom: 5vw;

  .additional-info {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-block: 5px;

    .tag {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.navyBlue};
    }

    .time {
      font-weight: 300;
    }
  }

  div.imageContainer {
    position: relative;
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  h1 {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 600;
  }

  ::after {
    content: "";
    position: absolute;
    width: 75vw;
    height: 1px;
  }
`;

export default Article;

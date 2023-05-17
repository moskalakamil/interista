import { Article } from "@/types/article";
import dayjs from "dayjs";
import styled from "styled-components";

const Article = ({ title, createdAt, tags, id, avatarUrl }: Article) => {
  const parsedDate = dayjs(createdAt).format("DD.MM.YYYY HH:mm");
  const avatar = avatarUrl ?? `/articles/default.jpeg`;

  return (
    <Container>
      <div className="imageContainer">
        <img src={avatar} alt="article image" height="220" width="350" />
      </div>
      <div className="additional-info">
        {tags &&
          tags.map(({ name, color }) => (
            <Tag key={name} backgroundColor={color}>
              {name}
            </Tag>
          ))}
        <p className="time">{parsedDate}</p>
      </div>
      <h1>{title}</h1>
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
    align-items: center;
    padding-block: 5px;

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

const Tag = styled.p<{ backgroundColor: string }>`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.navyBlue};
  background-color: ${({ backgroundColor }) => backgroundColor || "white"};
  padding: 5px;
  border-radius: 3px;
`;

export default Article;

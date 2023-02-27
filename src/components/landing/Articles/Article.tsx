import styled from "styled-components";

interface Props {
  name: string;
  time: string;
  tag: string;
  id: number;
}

const Article = ({ name, time, tag, id }: Props) => {
  return (
    <Container>
      <img src={`/articles/${id}/mainImage.jpeg`} alt="" />
      <div className="additional-info">
        <p className="tag">{tag}</p>
        <p className="time">{time}</p>
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

  img {
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

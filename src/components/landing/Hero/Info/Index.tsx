import styled from "styled-components";

interface Props {
  articleName: string;
}

const Info = ({ articleName }: Props) => {
  return (
    <Container>
      <h2>ARTICLE</h2>
      <div className="article-info">
        <h1>{articleName}</h1>
        <button>SEE MORE</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 30vh;
  z-index: 100;
  background: rgba(15, 15, 15, 0.61);
  backdrop-filter: blur(7px);
  padding-block: 5vw;
  justify-content: space-between;
  transform: translateY(70%);
  position: relative;

  h2 {
    font-size: 25px;
    letter-spacing: 0.13em;
    height: 5px;
    transform: rotate(90deg);
    border-top: 2px solid white;
    margin-right: auto;
    float: left;
    padding-inline: 30px;
  }

  .article-info {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    padding-right: 30px;

    h1 {
      width: 100%;
      font-size: 50px;
      text-align: right;
      transform: translateY(-50%);
    }

    button {
      position: absolute;
      bottom: 50px;
      right: 30px;
      background: white;
      border: 0;
      padding: 10px 15px;
      color: ${({ theme }) => theme.colors.navyBlue};
      margin-left: auto;
      font-weight: 600;
      margin-top: 20px;
      font-size: 18px;
    }
  }
`;
export default Info;

import styled from "styled-components";

const Contact = () => {
  return (
    <StyledContact>
      {/* <div className="div3">
        <h1>Nasz adres</h1>
        ul.lesna 4
      </div>
      <div className="div1">
        <h1>E-mail</h1>
        chujwamdodupy@gej.com
      </div>
      <div className="div2">
        <h1>Telefon</h1>
        +69 2137 420 8====
      </div>
      <div className="message">
        <h2>Wyslij wiadomosc</h2>
      </div>
      <div className="mail">
        <div className="mail1">
          <input className="input1" placeholder="Podaj swój mail" type="mail" />
        </div>
        <div className="mail2">
          <textarea placeholder="Treść wiadomości" className="input2" />
        </div>
      </div> */}
    </StyledContact>
  );
};

export default Contact;

const StyledContact = styled.div`
  .div1 {
    position: absolute;
    display: column;
    width: 250px;
    height: 100px;
    text-align: center;
    background: #22127c;
    border-radius: 30px;
    margin-top: 70px;
    margin-left: 80px;
    color: white;
    padding: 5px;
  }
  .div2 {
    position: absolute;
    display: column;
    width: 250px;
    height: 100px;
    text-align: center;
    background: #22127c;
    border-radius: 30px;
    margin-top: 200px;
    margin-left: 80px;
    padding: 5px;
    color: white;
  }

  .div3 {
    position: absolute;
    display: column;
    width: 250px;
    height: 100px;
    text-align: center;
    background: #22127c;
    border-radius: 30px;
    color: white;
    margin-left: 80px;
    margin-top: 330px;
    padding: 5px;
  }

  .mail {
    padding: 55px;
    display: relative;
    float: right;
    width: 800px;
    border-radius: 30px;
    background: #100645;
    height: 500px;
    margin-top: 55px;
    margin-right: 50px;
  }
  .input1 {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    outline: none;
    padding: 7px;
    background-color: #22127c;
    border: none;
    color: white;
  }
  .input2 {
    width: 100%;
    height: 300px;
    outline: none;
    padding: 7px;
    border-radius: 5px;
    background-color: #22127c;
    border: none;
    color: white;
  }

  .mail1 {
    margin-bottom: 20px;
  }
  h1 {
    font-size: 20px;
  }

  ::placeholder {
    color: white;
  }

  textarea {
    resize: none;
  }

  .message {
    margin-left: 850px;
    margin-top: 15px;
  }
`;

import styled from "styled-components";
import SubpageTitle from "../layouts/SubpageTitle";
import Header from "../common/Header/Index";
import About from "@/pages/about";
import Footer from "../common/Footer/Index";

interface Props {
  name: string;
  about: string;
}
const Person = ({ name, about }: Props) => {
  return (
    <div className="persondiv">
      <img className="personimg" src="footer.png" alt="" />
      <h3 className="name">{name}</h3>
      <p className="about">{about}</p>
    </div>
  );
};

const Contact = () => {
  return (
    <StyledContact>
      <Header />
      <SubpageTitle title="Kontakt & O nas"></SubpageTitle>
      <div className="about">czesc</div>
      <div className="whitediv">
        <h1 className="abouttitle" id="about">
          Interista.pl
        </h1>
        <p className="aboutp">
          Lorem ipsum adjsadbashjdbhsja dbshaudg usa ds vdsuagdfv gas vdsa
          vduyasg dhasdi hasig duasg diuasgd yisa digg dhasdi hasig duasg
          diuasgd yisa digg dhasdi hasig duasg diuasgd yisa dig Lorem ipsum
          adjsadbashjdbhsja dbshaudg usa ds vdsuagdfv gas vdsa vduyasg dhasdi
          hasig duasg diuasgd yisa digg dhasdi hasig duasg diuasgd yisa digg
          dhasdi hasig duasg diuasgd yisa dig
        </p>
        <div className="person">
          <Person
            name="Kacper Adamczyk"
            about="Gdzieś w hotelowym korytarzu krótka chwila
Splecione ręce gdzieś na plaży oczu błysk
Wysłany w biegu krótki list
Stokrotka śniegu dobra myśl"
          />
          <Person
            name="Szymon Rybczak"
            about="Gdzieś w hotelowym korytarzu krótka chwila
Splecione ręce gdzieś na plaży oczu błysk
Wysłany w biegu krótki list
Stokrotka śniegu dobra myśl"
          ></Person>
          <Person
            name="Kamil Moskała"
            about="Gdzieś w hotelowym korytarzu krótka chwila
Splecione ręce gdzieś na plaży oczu błysk
Wysłany w biegu krótki list
Stokrotka śniegu dobra myśl"
          ></Person>
          <Person
            name="Piotr Pasztor"
            about="Gdzieś w hotelowym korytarzu krótka chwila
Splecione ręce gdzieś na plaży oczu błysk
Wysłany w biegu krótki list
Stokrotka śniegu dobra myśl"
          ></Person>
          <Person
            name="Filip Wnęk"
            about="Gdzieś w hotelowym korytarzu krótka chwila
Splecione ręce gdzieś na plaży oczu błysk
Wysłany w biegu krótki list
Stokrotka śniegu dobra myśl"
          ></Person>
        </div>
        <h1>Kontakt</h1>
        <h1 className="h11">Adres e-mail</h1>
        <input type="text" placeholder="test@mail.com" className="mail" />
        <h1 className="h11">Co ciekawego chcesz napisać?</h1>
        <textarea
          placeholder="Interista jest super"
          className="mailTextarea"
        ></textarea>
        <button className="sendbutton">Wyślij!</button>
      </div>
      <Footer />
    </StyledContact>
  );
};

export default Contact;

const StyledContact = styled.div`
  footer {
    margin-top: 87vw;
  }
  font-family: "Bebas Neue";
  .persondiv {
    padding: 5%;
  }
  .person {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 150px;
  }
  .name {
    margin-top: 5px;
  }
  .about {
    width: 200px;
    margin: 5px auto;
    display: grid;
    position: relative;
  }
  .personimg {
    height: 100px;
    width: 100px;
    border-radius: 60px;
  }
  .whitediv {
    background-color: white;
    height: 500px;
    width: 80%;
    margin: auto;
    align-items: center;
    text-align: center;
    margin-top: -100px;
    z-index: 1;
    position: relative;
    margin-bottom: 0px;
    padding: 80px;
  }

  textarea {
    border: none;
    background: rgba(0, 0, 0, 0.05);
    width: 100%;
    margin-top: 10px;
    resize: none;
    height: 70%;
    padding: 5px;
  }
  .mail {
    width: 100%;
    height: 50px;
    background: rgba(0, 0, 0, 0.05);
    border: none;
    padding: 15px;
    margin-bottom: 10px;
    font-size: 18px;
  }
  textarea,
  input:focus {
    outline: none;
    font-size: 18px;
    padding: 17px;
  }

  .h11 {
    font-size: 25px;
    text-align: left;
  }
  .h12 {
    font-size: 45px;
  }
  .abouttitle {
    font-size: 40px;
  }

  .aboutp {
    margin-top: 35px;
    margin-bottom: 100px;
  }
  button {
    margin-top: 18px;
    width: 140px;
    height: 50px;
    border: none;
    font-size: 17px;
    font-weight: 900;
  }
  button:active {
    box-shadow: 2px 2px 5px #000000;
  }
`;

import Nav from "./Nav";

const Header = () => {
  const links = [
    {
      link: "s",
      name: "s",
    },
    {
      link: "g",
      name: "g",
    },
    {
      link: "h",
      name: "h",
    },
  ];

  return <Nav links={links}></Nav>;
};

export default Header;

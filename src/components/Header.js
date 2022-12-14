import serieLogo from "../images/Rick_and_Morty_title_card.png";

const Header = () => {
  return (
    <header className="header">
      <img src={serieLogo} alt="Logo Rick and Morty" className="header__logo" />
    </header>
  );
};

export default Header;

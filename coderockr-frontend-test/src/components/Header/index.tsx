import { useContext } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../../contexts/modalContext";

const Header = () => {
  const { setOpenModal } = useContext(ModalContext);

  return (
    <header>
      <div>
        <h1>Rockr blog</h1>
        <nav>
          <Link to="/">Posts</Link>
          <button onClick={() => setOpenModal(true)} type="button">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

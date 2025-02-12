import GitHubIcon from "../../assets/symbol-defs.svg";
import css from "./Header.module.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [location]);

  return (
    <header className={css.header}>
      {isVisible && (
        <button className={css.return} onClick={() => navigate(-1)}>
          Back
        </button>
      )}
      <div className={css.wrapper}>
        <svg className={css.icon}>
          <use href={GitHubIcon}></use>
        </svg>
        <h2 className={css.title}>GitHub users</h2>
      </div>
    </header>
  );
}

export default Header;

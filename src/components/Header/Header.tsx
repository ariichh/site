import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/Header.module.css";

interface HeaderProps {
  onSignup: () => void;
  onLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSignup, onLogin }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.logo}>

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h4>Агенство недвижимости</h4>
        </Link>
      </div>
      <nav className={styles.nav}>
        <a href="#" className={styles.forRecruiters}>Для заявок</a>
        <a
          href="#"
          className={styles.buttonjoin}
          onClick={e => {
            e.preventDefault();
            onSignup();
          }}
        >
          Регистрация
        </a>
        <a
          href="#"
          className={styles.login}
          onClick={e => {
            e.preventDefault();
            onLogin();
          }}
        >
          Авторизация
        </a>
      </nav>
    </div>
  </header>
);

export default Header;

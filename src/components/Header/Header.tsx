import styles from "./Header.module.css";
import { Github, SunMoon } from "lucide-react";

interface HeaderProps {
  toggleTheme: () => void;
  setInputValue: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, setInputValue }) => {
  return (
    <div className={styles.header}>
      <div onClick={() => setInputValue("")} className={styles.logo}>
        <Github color={`var(--bg-color)`} size={24} />
      </div>
      <div className={styles.right}>
        <h1 className={styles.header_text}>GitHub Explorer</h1>
        <p>Discover amaizing developers</p>
      </div>
      <SunMoon
        className={styles.theme_toggler}
        onClick={() => toggleTheme()}
        size={44}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Header;

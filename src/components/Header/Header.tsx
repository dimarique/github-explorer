import styles from "./Header.module.css";
import { Github, SunMoon } from "lucide-react";

interface HeaderProps {
  toggleTheme: () => void;
  setInputValue: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, setInputValue }) => {
  return (
    <div className={styles.header}>
      <div onClick={() => setInputValue("")} className={styles.icon}>
        <Github color={`var(--bg-color)`} size={24} />
      </div>
      <div className={styles.right}>
        <h1 className={styles.header_text}>GitHub Explorer</h1>
        <SunMoon onClick={() => toggleTheme()} />
        <p>Discover amaizing developers</p>
      </div>
    </div>
  );
};

export default Header;

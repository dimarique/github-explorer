import styles from "./Header.module.css";
import { Github } from "lucide-react";

interface HeaderProps {
  // props?
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles.header}>
      <div className={styles.icon}>
        <Github color="#ffffff" size={24} />
      </div>
      <div className={styles.right}>
        <h1 className={styles.header_text}>GitHub Explorer</h1>
        <p>Discover amaizing developers</p>
      </div>
    </div>
  );
};

export default Header;

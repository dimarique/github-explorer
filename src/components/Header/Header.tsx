import styles from "./Header.module.css";
import { Github } from "lucide-react";

interface HeaderProps {
	// props?
}

const Header: React.FC<HeaderProps> = () => {
	return (
		<div className={styles.header}>
			<div className={styles.left}>
				<div className={styles.icon}>
					<Github color="#ffffff" size={24} />
				</div>
				<h2 className={styles.header_text}>GitHub Explorer</h2>
			</div>
			<p>Discover amaizing developers</p>
		</div>
	);
};

export default Header;

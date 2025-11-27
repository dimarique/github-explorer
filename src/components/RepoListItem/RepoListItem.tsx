import styles from "./RepoListItem.module.css";
import { Star } from "lucide-react";

interface RepoListItemProps {
	// props?
}

const RepoListItem: React.FC<RepoListItemProps> = () => {
	return <div className={styles.repoListItem}>
		<span className={styles.repo_language}></span>
		<h2 className={styles.repo_name}></h2>
		<p className={styles.repo_description}></p>
		<div className={styles.repo_footer}>
			<div className={styles.repo_footer_stars}>
				< Star />
				<span className="number"></span>
			</div>
		</div>
	</div>;
};

export default RepoListItem;

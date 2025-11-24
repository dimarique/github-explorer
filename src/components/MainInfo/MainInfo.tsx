import styles from "./MainInfo.module.css";
import { Users, BookOpen } from "lucide-react";
import type { Person } from "../../types";

interface MainInfoProps {
	person: Person;
}

const MainInfo: React.FC<MainInfoProps> = ({ person }) => {
	return (
		<div className={styles.mainInfo}>
			<div className={styles.upper_part}>
				<img className={styles.portrait} src={person?.avatar_url} alt="" />
				<h1 className={styles.user_full_name}>{person?.name}</h1>
				<h3 className={styles.user_login}>{person?.login}</h3>
				<p className={styles.user_location}>{person?.location}</p>
				<p className={styles.user_bio}>{person?.bio}</p>
			</div>
			<div className={styles.lower_part}>
				<div className={styles.user_metrics}>
					<div className={styles.user_repositories}>
						<BookOpen color="grey" />
						<h1 className={styles.number}>{person?.public_repos}</h1>
						<p className={styles.metric_name}>repositories</p>
					</div>
					<div className={styles.user_folowers}>
						<Users color="grey" />
						<h1 className={styles.number}>{person?.followers}</h1>
						<p className={styles.metric_name}>followers</p>
					</div>
					<div className={styles.user_folowing}>
						<Users color="grey" />
						<h1 className={styles.number}>{person?.following}</h1>
						<p className={styles.metric_name}>following</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainInfo;

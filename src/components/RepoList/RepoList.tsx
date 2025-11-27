import RepoListItem from "../RepoListItem/RepoListItem";
import styles from "./RepoList.module.css";

interface RepoListProps {
	// props?
}

const RepoList: React.FC<RepoListProps> = ({ userReposList }) => {
	return <div className={styles.repoList}>
		<RepoListItem />
		{userReposList}
	</div>;
};

export default RepoList;

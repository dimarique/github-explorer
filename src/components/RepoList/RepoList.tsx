import RepoListItem from "../RepoListItem/RepoListItem";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./RepoList.module.css";

import type { components } from "@octokit/openapi-types";

type GithubRepo = components["schemas"]["repository"];
type GithubReposList = GithubRepo[];

interface RepoListProps {
  reposList: GithubReposList;
}

const RepoList: React.FC<RepoListProps> = ({ reposList }) => {
  return (
    <div className={styles.repos_info}>
      <SectionHeader text="Repositories" />
      <div className={styles.repos_list_wrapper}>
        <div className={styles.repo_list}>
          {reposList.map((el) => {
            return <RepoListItem key={el.id} repo={el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RepoList;

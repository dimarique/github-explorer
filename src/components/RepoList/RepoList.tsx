import RepoListItem from "../RepoListItem/RepoListItem";
import styles from "./RepoList.module.css";

import type { components } from "@octokit/openapi-types";

type GithubRepo = components["schemas"]["repository"];
type GithubReposList = GithubRepo[];

interface RepoListProps {
  reposList: GithubReposList;
}

const RepoList: React.FC<RepoListProps> = ({ reposList }) => {
  return (
    <div className={styles.repoList}>
      {reposList &&
        reposList.map((repo) => {
          return <RepoListItem key={repo.id} repo={repo} />;
        })}
    </div>
  );
};

export default RepoList;

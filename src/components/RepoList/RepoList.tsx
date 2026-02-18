import RepoListItem from "../RepoListItem/RepoListItem";
import styles from "./RepoList.module.css";

import type { components } from "@octokit/openapi-types";

type GithubRepo = components["schemas"]["repository"];
type GithubReposList = GithubRepo[];

interface RepoListProps {
  reposList: GithubReposList;
  onNextPage: () => void;
  onPrevPage: () => void;
  page: number;
}

const RepoList: React.FC<RepoListProps> = ({
  reposList,
  onNextPage,
  onPrevPage,
  page,
}) => {
  return (
    <div className={styles.repos_info}>
      <h2 className={styles.section_header}>Repositories</h2>
      <div className={styles.repos_list_wrapper}>
        <div className={styles.repo_list}>
          {reposList.map((el) => {
            return <RepoListItem key={el.id} repo={el} />;
          })}
        </div>
      </div>
      <div className={styles.buttons_wrapper}>
        {page > 1 && <button onClick={() => onPrevPage()}>Prev</button>}
        {(page > 1 || reposList.length === 30) && <span>{page}</span>}
        {reposList.length === 30 && (
          <button onClick={() => onNextPage()}>Next</button>
        )}
      </div>
    </div>
  );
};

export default RepoList;

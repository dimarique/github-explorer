import styles from "./Navigation.module.css";

import type { components } from "@octokit/openapi-types";
type GithubRepo = components["schemas"]["repository"];
type GithubReposList = GithubRepo[];
interface NavigationProps {
  reposList: GithubReposList;
  onNextPage: () => void;
  onPrevPage: () => void;
  page: number;
}

const Navigation: React.FC<NavigationProps> = ({
  onNextPage,
  onPrevPage,
  page,
  reposList,
}) => {
  return (
    <div className={styles.buttons_wrapper}>
      {page > 1 && <button onClick={() => onPrevPage()}>Prev</button>}
      {(page > 1 || reposList.length === 30) && <span>{page}</span>}
      {reposList.length === 30 && (
        <button onClick={() => onNextPage()}>Next</button>
      )}
    </div>
  );
};

export default Navigation;

import styles from "./RepoListItem.module.css";
import { Star, GitFork } from "lucide-react";

import type { components } from "@octokit/openapi-types";

type GithubRepo = components["schemas"]["repository"];
interface RepoListItemProps {
  repo: GithubRepo;
}

const RepoListItem: React.FC<RepoListItemProps> = ({ repo }) => {
  return (
    <div className={styles.repoListItem}>
      <span className={styles.repo_language}>{repo.language}</span>
      <h2 className={styles.repo_name}>{repo.name}</h2>
      <p className={styles.repo_description}>{repo.description}</p>
      <div className={styles.repo_footer}>
        <div className={styles.repo_footer_stars}>
          <Star />
          <span className={styles.number}>{repo.stargazers_count}</span>
        </div>
        <div className={styles.repo_footer_forks}>
          <GitFork />

          <span className={styles.number}>{repo.forks}</span>
        </div>
      </div>
    </div>
  );
};

export default RepoListItem;

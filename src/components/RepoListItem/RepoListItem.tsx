import styles from "./RepoListItem.module.css";
import {
  Star,
  GitFork,
  ExternalLink,
  GitBranch,
  Calendar,
  Archive,
} from "lucide-react";

import type { components } from "@octokit/openapi-types";

type GithubRepo = components["schemas"]["repository"];
interface RepoListItemProps {
  repo: GithubRepo;
}

const RepoListItem: React.FC<RepoListItemProps> = ({ repo }) => {
  return (
    <div className={styles.repoListItem}>
      {repo.language && (
        <span className={styles.repo_language}>{repo.language}</span>
      )}
      <h2 className={styles.repo_name}>
        {repo.fork && (
          <span title="Forked" style={{ display: "inline-flex" }}>
            <GitBranch />
          </span>
        )}
        {repo.archived && (
          <span title="Archived" style={{ display: "inline-flex" }}>
            <Archive />
          </span>
        )}
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
        <ExternalLink size={14} />
      </h2>

      <p className={styles.number}>
        Created at {new Date(repo.created_at).toLocaleDateString()}
      </p>
      {new Date(repo.created_at).toLocaleDateString() !==
      new Date(repo.pushed_at).toLocaleDateString() ? (
        <p className={styles.number}>
          Last push at {new Date(repo.pushed_at).toLocaleDateString()}
        </p>
      ) : (
        ""
      )}
      {repo.homepage && (
        <a
          href={repo.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.repo_homepage}
        >
          {repo.homepage}
          {repo.homepage && <ExternalLink size={12} />}
        </a>
      )}
      <p className={styles.repo_description}>{repo.description}</p>
      <div className={styles.repo_footer}>
        <div
          className={`${styles.repo_footer_stars} ${styles.repo_footer_numbers}`}
        >
          <Star />
          <span className={styles.number}>{repo.stargazers_count}</span>
        </div>
        <div
          className={`${styles.repo_footer_forks} ${styles.repo_footer_numbers}`}
        >
          <GitFork />
          <span className={styles.number}>{repo.forks}</span>
        </div>
        <div
          className={`${styles.repo_footer_updated} ${styles.repo_footer_numbers}`}
        ></div>
      </div>
    </div>
  );
};

export default RepoListItem;

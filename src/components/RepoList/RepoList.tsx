import RepoListItem from "../RepoListItem/RepoListItem";
import styles from "./RepoList.module.css";
import { useEffect, useState } from "react";

import type { components } from "@octokit/openapi-types";

type GithubRepo = components["schemas"]["repository"];
type GithubReposList = GithubRepo[];

interface RepoListProps {
  reposList: GithubReposList;
}

const RepoList: React.FC<RepoListProps> = ({ reposList }) => {
  const [activeTab, setActiveTab] = useState<"all" | "archived" | "starred">(
    "all",
  );

  const filterRepos = () => {
    if (!reposList) return [];
    if (activeTab === "starred") {
      return reposList.filter((el) => el.stargazers_count > 0);
    }
    if (activeTab === "archived") {
      return reposList.filter((el) => el.archived);
    }
    return reposList;
  };
  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);
  return (
    <div className={styles.reposInfo}>
      <span
        onClick={() => setActiveTab("all")}
        className={`${styles.tab_header} ${activeTab === "all" ? styles.active : ""}`}
      >
        all
      </span>
      <span
        onClick={() => setActiveTab("starred")}
        className={`${styles.tab_header} ${activeTab === "starred" ? styles.active : ""}`}
      >
        starred
      </span>
      <span
        onClick={() => setActiveTab("archived")}
        className={`${styles.tab_header} ${activeTab === "archived" ? styles.active : ""}`}
      >
        archived
      </span>
      <div className={styles.reposListWrapper}>
        <div className={styles.repoList}>
          {filterRepos().map((el) => {
            return <RepoListItem key={el.id} repo={el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RepoList;

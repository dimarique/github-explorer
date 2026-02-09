import RepoListItem from "../RepoListItem/RepoListItem";
import styles from "./RepoList.module.css";
import { useEffect, useState } from "react";

import type { components } from "@octokit/openapi-types";

type GithubUser = components["schemas"]["public-user"];
type GithubRepo = components["schemas"]["repository"];
type GithubReposList = GithubRepo[];

interface RepoListProps {
  reposList: GithubReposList;
  person: GithubUser;
  onNextPage: () => void;
  onPrevPage: () => void;
  page: number;
}

const RepoList: React.FC<RepoListProps> = ({
  reposList,
  person,
  onNextPage,
  onPrevPage,
  page,
}) => {
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
    <div className={styles.repos_info}>
      <h2 className={styles.section_header}>Repositories</h2>
      <div className={styles.tabname_wrapper}>
        <span
          onClick={() => setActiveTab("all")}
          className={`${styles.tabname} ${activeTab === "all" ? styles.active : ""}`}
        >
          all
        </span>
        <span
          onClick={() => setActiveTab("starred")}
          className={`${styles.tabname} ${activeTab === "starred" ? styles.active : ""}`}
        >
          starred
        </span>
        <span
          onClick={() => setActiveTab("archived")}
          className={`${styles.tabname} ${activeTab === "archived" ? styles.active : ""}`}
        >
          archived
        </span>
      </div>
      <div className={styles.repos_list_wrapper}>
        <div className={styles.repo_list}>
          {filterRepos().map((el) => {
            return <RepoListItem key={el.id} repo={el} />;
          })}
        </div>
      </div>
      <div className={styles.buttons_wrapper}>
        <button onClick={() => onPrevPage()}>Prev</button>
        <span>{page}</span>
        <button onClick={() => onNextPage()}>Next</button>
      </div>
    </div>
  );
};

export default RepoList;

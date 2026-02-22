import { Footer } from "../Footer/Footer";
import MainInfo from "../MainInfo/MainInfo";
import Navigation from "../Navigation/Navigation";
import RepoList from "../RepoList/RepoList";
import styles from "./ContentWrapper.module.css";

import type { components } from "@octokit/openapi-types";

type GithubRepo = components["schemas"]["repository"];
type GithubReposList = GithubRepo[];
type GithubUser = components["schemas"]["public-user"];

interface ContentWrapperProps {
  person: GithubUser;
  reposList: GithubReposList;
  onNextPage: () => void;
  onPrevPage: () => void;
  page: number;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  person,
  reposList,
  onNextPage,
  onPrevPage,
  page,
}) => {
  return (
    <>
      <div className={styles.contentWrapper}>
        <MainInfo person={person} />
        <RepoList reposList={reposList} />
      </div>
      <Navigation
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        page={page}
        reposList={reposList}
      />
      <Footer />
    </>
  );
};

export default ContentWrapper;

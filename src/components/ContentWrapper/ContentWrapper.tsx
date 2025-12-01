import MainInfo from "../MainInfo/MainInfo";
import RepoList from "../RepoList/RepoList";
import styles from "./ContentWrapper.module.css";

interface ContentWrapperProps {
  // props?
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  person,
  reposList,
}) => {
  return (
    <div className={styles.contentWrapper}>
      <MainInfo person={person} />
      <RepoList reposList={reposList} />
    </div>
  );
};

export default ContentWrapper;

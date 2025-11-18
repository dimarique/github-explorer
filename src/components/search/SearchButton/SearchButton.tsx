import styles from "./SearchButton.module.css";

interface SearchButtonProps {
  // props?
}

const SearchButton: React.FC<SearchButtonProps> = () => {
  return (
    <>
      <button className={styles.searchButton}>Search</button>
    </>
  );
};

export default SearchButton;

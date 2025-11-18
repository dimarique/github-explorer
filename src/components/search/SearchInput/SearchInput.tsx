import styles from "./SearchInput.module.css";

interface SearchInputProps {
  setPerson: Function;
}

const SearchInput: React.FC<SearchInputProps> = ({ setPerson }) => {
  return (
    <div className={styles.searchInput}>
      <input type="text" placeholder="Search GitHub username..." />
    </div>
  );
};

export default SearchInput;

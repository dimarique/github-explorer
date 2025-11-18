import SearchButton from "../SearchButton/SearchButton";
import SearchInput from "../SearchInput/SearchInput";
import styles from "./SearchField.module.css";

interface SearchFieldProps {
  setPerson: Function;
}

const SearchField: React.FC<SearchFieldProps> = ({ setPerson }) => {
  return (
    <div className={styles.searchField}>
      <SearchInput setPerson={setPerson} />
      <SearchButton />
    </div>
  );
};

export default SearchField;

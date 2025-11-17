import SearchButton from '../SearchButton/SearchButton';
import SearchInput from '../SearchInput/SearchInput';
import styles from './SearchField.module.css';

interface SearchFieldProps {
  // props?
}

const SearchField: React.FC<SearchFieldProps> = () => {
  return (
    <div className={styles.searchField}>
      <SearchInput />
      <SearchButton />
    </div>
  );
};

export default SearchField;

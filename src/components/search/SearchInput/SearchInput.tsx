import styles from './SearchInput.module.css';

interface SearchInputProps {
  // props?
}

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <div className={styles.searchInput}>
      <input type="text" />
    </div>
  );
};

export default SearchInput;

import styles from './SearchButton.module.css';

interface SearchButtonProps {
  // props?
}

const SearchButton: React.FC<SearchButtonProps> = () => {
  return (
    <div className={styles.searchButton}>
      <button>test</button>
    </div>
  );
};

export default SearchButton;

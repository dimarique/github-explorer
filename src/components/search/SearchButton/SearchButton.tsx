import styles from "./SearchButton.module.css";

interface SearchButtonProps {
  localValue: string;
  setInputValue: (value: string) => void;
  setLocalValue: (value: string) => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  setInputValue,
  localValue,
  setLocalValue,
}) => {
  return (
    <>
      <button
        onClick={() => {
          setInputValue(localValue);
          setLocalValue("");
        }}
        className={styles.searchButton}
      >
        Find →
      </button>
    </>
  );
};

export default SearchButton;

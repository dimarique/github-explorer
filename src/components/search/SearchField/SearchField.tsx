import SearchButton from "../SearchButton/SearchButton";
import SearchInput from "../SearchInput/SearchInput";
import styles from "./SearchField.module.css";
import { useState } from "react";

interface SearchFieldProps {
  setInputValue: (value: string) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ setInputValue }) => {
  const [localValue, setLocalValue] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalValue(value);
  };
  return (
    <>
      <div className={styles.searchWrapper}>
        <div className={styles.searchField}>
          <SearchInput
            localValue={localValue}
            handleInputChange={handleInputChange}
            setInputValue={setInputValue}
            setLocalValue={setLocalValue}
          />
          <SearchButton
            localValue={localValue}
            setInputValue={setInputValue}
            setLocalValue={setLocalValue}
          />
        </div>
        <p className={styles.hint}>
          Try searching:{" "}
          {
            <a
              style={{ cursor: "pointer" }}
              onClick={() => setInputValue("torvalds")}
            >
              torvalds
            </a>
          }
          ,{" "}
          {
            <a
              style={{ cursor: "pointer" }}
              onClick={() => setInputValue("dimarique")}
            >
              dimarique
            </a>
          }
          ,{" "}
          {
            <a
              style={{ cursor: "pointer" }}
              onClick={() => setInputValue("gaearon")}
            >
              gaearon
            </a>
          }
          ,{" "}
          {
            <a
              style={{ cursor: "pointer" }}
              onClick={() => setInputValue("octocat")}
            >
              octocat
            </a>
          }
        </p>
      </div>
    </>
  );
};

export default SearchField;

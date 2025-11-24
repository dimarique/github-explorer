import type React from "react";
import styles from "./SearchInput.module.css";

interface SearchInputProps {
	localValue: string
	handleInputChange: React.ChangeEventHandler<HTMLInputElement>
	setInputValue: (value: string) => void
	setLocalValue: (value: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({
	localValue,
	handleInputChange,
	setInputValue,
	setLocalValue

}) => {
	return (
		<div className={styles.searchInput}>
			<input
				value={localValue}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						setInputValue(localValue);
						setLocalValue("")
					}
				}}
				onChange={handleInputChange}
				type="text"
				placeholder="Search GitHub username..."
			/>
		</div>
	);

};
export default SearchInput;

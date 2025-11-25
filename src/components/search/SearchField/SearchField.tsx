import SearchButton from "../SearchButton/SearchButton";
import SearchInput from "../SearchInput/SearchInput";
import styles from "./SearchField.module.css";
import { useState } from "react";

interface SearchFieldProps {
	setInputValue: (value: string) => void;
	inputValue: string;
}

const SearchField: React.FC<SearchFieldProps> = ({ setInputValue
}) => {
	const [localValue, setLocalValue] = useState("");
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setLocalValue(value);
	}
	return (
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
	);
};

export default SearchField;

import { useState, useEffect } from "react";
import SearchField from "./components/search/SearchField/SearchField";
import "./App.css";
import Header from "./components/Header/Header";
import { useUserInfo } from "./hooks/useUserInfo";
import { useUserReposList } from "./hooks/useUserReposList";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
// import { useFetchRepos } from "./hooks/useFetchRepos";

function App() {
	const [isDark, setIsDark] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const person = useUserInfo(inputValue);
	const reposList = useUserReposList(inputValue);
	// const fullList = useFetchRepos(inputValue);
	/* useEffect(() => {
		console.log(reposList);
		console.log(person);
	}); */
	useEffect(() => {
		if (person || reposList) {
			window.scrollTo({ top: 250, behavior: "smooth" });
		}
	}, [person, reposList]);
	const toggleTheme = () => {
		setIsDark(!isDark);
		document.documentElement.setAttribute(
			"data-theme",
			!isDark ? "dark" : "light",
		);
	};
	return (
		<>
			<Header toggleTheme={toggleTheme} setInputValue={setInputValue} />
			<SearchField setInputValue={setInputValue} inputValue={inputValue} />
			{(person || reposList) && (
				<ContentWrapper person={person} reposList={reposList} />
			)}
		</>
	);
}

export default App;

import { useState, useEffect } from "react";
import SearchField from "./components/search/SearchField/SearchField";
import "./App.css";
import MainInfo from "./components/MainInfo/MainInfo";
import Header from "./components/Header/Header";
import RepoList from "./components/RepoList/RepoList";
// import users from "./data/github.json";

function App() {
	const [inputValue, setInputValue] = useState("");
	const [person, setPerson] = useState(null);
	const [userReposList, setUserReposList] = useState("");
	const url = "https://api.github.com/users/";
	const searchPattern = `${url}${inputValue}`;

	useEffect(() => {
		if (!inputValue) return;
		fetch(searchPattern)
			.then((res) => {
				if (!res.ok) {
					throw new Error("User not found");
				}
				return res.json();
			})
			.then((parsed) => {
				setPerson(parsed);
				setUserReposList(`https://api.github.com/users/${parsed.login}/repos`);
			})
			.catch(() => {
				setPerson(null);
			});
	}, [inputValue]);
	useEffect(() => {
		console.log(userReposList);

	}, [userReposList])

	// console.log("userReposList:", userReposList);
	/* useEffect(() => {
		fetch("https://api.github.com/users/dimarique/repos")
			.then(async (res) => {
				console.log("status:", res.status); // ← ВАЖНО
				const text = await res.text();
				console.log("raw:", text); // ← Посмотрим, что пришло реально
			})
			.catch(console.error);
	}, []); */
	useEffect(() => {
		if (!userReposList) return
		fetch(userReposList)
			.then((res) => res.json())
			.then((result) => console.log(result));
	}, [userReposList]);
	return (
		<>
			<Header />
			<SearchField setInputValue={setInputValue} inputValue={inputValue} />
			<p className="hint">Try searchimg: torvalds, gaearon, octocat</p>
			<MainInfo person={person} />
			<RepoList userReposList={userReposList} />
		</>
	);
}

export default App;

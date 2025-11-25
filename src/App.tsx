import { useState, useEffect } from "react";
import SearchField from "./components/search/SearchField/SearchField";
import "./App.css";
import MainInfo from "./components/MainInfo/MainInfo";
import Header from "./components/Header/Header";
// import users from "./data/github.json";

function App() {
	const [inputValue, setInputValue] = useState("");
	const [person, setPerson] = useState(null);
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
			})
			.catch(() => {
				setPerson(null);
			});
	}, [inputValue]);
	return (
		<>
			<Header />
			<SearchField setInputValue={setInputValue} inputValue={inputValue} />
			<p className="hint">Try searchimg: torvalds, gaearon, octocat</p>
			<MainInfo person={person} />
		</>
	);
}

export default App;

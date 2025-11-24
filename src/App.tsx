import { useState, useEffect } from "react";
import SearchField from "./components/search/SearchField/SearchField";
import "./App.css";
import MainInfo from "./components/MainInfo/MainInfo";
// import users from "./data/github.json";

function App() {
	const [inputValue, setInputValue] = useState("");
	const [person, setPerson] = useState(null);
	const url = "https://api.github.com/users/"
	const searchPattern = `${url}${inputValue}`
	useEffect(() => {
		const data = fetch(searchPattern);
		data
			.then((res) => res.json())
			.then((parsed) => {
				setPerson(parsed);
			});
	}, [inputValue]);

	/* useEffect(() => {
		const person = users.find((user) => user.login === inputValue) ?? null;
		setPerson(person);
	}, [inputValue]); */
	return (
		<>
			<SearchField setInputValue={setInputValue} inputValue={inputValue} />
			<p className="hint">Try searchimg: torvalds, gaearon, octocat</p>
			<MainInfo person={person} />
		</>
	);
}

export default App;

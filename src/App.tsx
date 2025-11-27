import { useState, useEffect } from "react";
import SearchField from "./components/search/SearchField/SearchField";
import "./App.css";
import MainInfo from "./components/MainInfo/MainInfo";
import Header from "./components/Header/Header";
import RepoList from "./components/RepoList/RepoList";
import { useUserInfo } from "./hooks/useUserInfo";
import { useUserReposList } from "./hooks/useUserReposList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const person = useUserInfo(inputValue);
  const reposList = useUserReposList(inputValue);
  useEffect(() => {
    console.log(reposList);
  });
  return (
    <>
      <Header />
      <SearchField setInputValue={setInputValue} inputValue={inputValue} />
      <p className="hint">Try searchimg: torvalds, gaearon, octocat</p>
      <MainInfo person={person} />
      <RepoList reposList={reposList} />
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import SearchField from "./components/search/SearchField/SearchField";
import "./App.css";
import Header from "./components/Header/Header";
import { useUserInfo } from "./hooks/useUserInfo";
import { useUserReposList } from "./hooks/useUserReposList";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";

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
      <ContentWrapper person={person} reposList={reposList} />
    </>
  );
}

export default App;

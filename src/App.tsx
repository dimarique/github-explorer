import { useState, useEffect } from "react";
import SearchField from "./components/search/SearchField/SearchField";
import "./App.css";
import MainInfo from "./components/MainInfo/MainInfo";

function App() {
  const [person, setPerson] = useState("");
  useEffect(() => {
    // const data = fetch("https://dummyjson.com/users");
    const data = fetch("https://api.github.com/users/dimarique");
    data.then((res) => res.json()).then((parsed) => console.log(parsed));
  }, []);
  return (
    <>
      <SearchField setPerson={setPerson} />
      <MainInfo />
    </>
  );
}

export default App;

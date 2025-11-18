import { useState, useEffect } from "react";
import SearchField from "./components/search/SearchField/SearchField";
import "./App.css";

function App() {
  const [person, setPerson] = useState("");
  useEffect(() => {
    const data = fetch("https://dummyjson.com/users");
    data.then((res) => res.json()).then((parsed) => console.log(parsed));
  }, []);
  return <SearchField />;
}

export default App;

import { useState, useEffect } from "react";
import SearchField from "./components/search/SearchField/SearchField";
import "./App.css";
import Header from "./components/Header/Header";
import { useUserInfo } from "./hooks/useUserInfo";
import { useUserReposList } from "./hooks/useUserReposList";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import GoUpButton from "./components/GoUpButton/GoUpButton";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { person, isUserLoading, userError } = useUserInfo(inputValue);
  const {
    userReposList,
    isRepoLoading,
    repoError,
    goToNextPage,
    goToPrevPage,
    page,
  } = useUserReposList(person ? inputValue : "");
  const isLoading = isUserLoading || isRepoLoading;
  const error = userError || repoError;

  useEffect(() => {
    console.log(userReposList);
    console.log(person);
  });

  useEffect(() => {
    if (person || userReposList) {
      window.scrollTo({ top: 250, behavior: "smooth" });
    }
  }, [person, userReposList]);
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.setAttribute(
      "data-theme",
      !isDark ? "dark" : "light",
    );
    localStorage.setItem("theme", String(isDark));
  };

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header toggleTheme={toggleTheme} setInputValue={setInputValue} />
      <SearchField setInputValue={setInputValue} />
      {error && <div className="error">{error}</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        person &&
        userReposList && (
          <ContentWrapper
            person={person}
            onNextPage={goToNextPage}
            onPrevPage={goToPrevPage}
            reposList={userReposList}
            page={page}
          />
        )
      )}
      {isVisible && <GoUpButton />}
    </>
  );
}

export default App;

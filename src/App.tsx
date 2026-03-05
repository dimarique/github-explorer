import { useState, useEffect } from "react";
import SearchField from "./components/search/SearchField/SearchField";
import "./App.css";
import Header from "./components/Header/Header";
import { useUserInfo } from "./hooks/useUserInfo";
import { useUserReposList } from "./hooks/useUserReposList";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import GoUpButton from "./components/GoUpButton/GoUpButton";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("theme") as "light" | "dark") ?? "light";
  });

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
    document.documentElement.setAttribute("data-theme", theme);

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const color = theme === "dark" ? "#1e293b" : "#f8fafc";

    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", color);
    } else {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = color;
      document.head.appendChild(meta);
    }
  }, [theme]);

  useEffect(() => {
    console.log(userReposList);
    console.log(person);
  });

  useEffect(() => {
    if (person || userReposList) {
      window.scrollTo({ top: 250, behavior: "smooth" });
    }
  }, [person, userReposList]);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  };
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

import { useEffect, useState } from "react";

import type { components } from "@octokit/openapi-types";

type GithubRepo = components["schemas"]["repository"];
type GithubReposList = GithubRepo[];
export function useUserReposList(username: string) {
  const [userReposList, setUserReposList] = useState<GithubReposList | null>(
    null,
  );
  const [isRepoLoading, setIsRepoLoading] = useState(false);
  const [repoError, setRepoError] = useState(false);
  const [page, setPage] = useState(1);
  const url = `https://api.github.com/users/${username}/repos?page=${page}`;

  const goToNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    setPage((prev) => Math.max(1, prev - 1));
  };

  useEffect(() => {
    if (!username) {
      setUserReposList(null);
      return;
    }
    setIsRepoLoading(true);
    setRepoError(null);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something wrong");
        }
        return res.json();
      })
      .then((parsed) => {
        setUserReposList(parsed);
      })
      .catch((err) => {
        setUserReposList(null);
        setRepoError(err.message);
      })
      .finally(() => {
        setIsRepoLoading(false);
      });
  }, [username, page]);

  useEffect(() => {
    setPage(1);
  }, [username]);

  return {
    userReposList,
    isRepoLoading,
    repoError,
    goToNextPage,
    goToPrevPage,
    page,
  };
}

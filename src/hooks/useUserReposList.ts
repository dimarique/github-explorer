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
  const url = `https://api.github.com/users/${username}/repos`;

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
  }, [username]);
  return { userReposList, isRepoLoading, repoError };
}

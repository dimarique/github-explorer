import { useEffect, useState } from "react";
import type { components } from "@octokit/openapi-types";

type GithubUser = components["schemas"]["public-user"];
type UseUserInfoReturn = {
  person: GithubUser | null;
  isUserLoading: boolean;
  userError: string | null;
};

export function useUserInfo(username: string): UseUserInfoReturn {
  const [person, setPerson] = useState<GithubUser | null>(null);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [userError, setUserError] = useState<string | null>(null);
  const url = "https://api.github.com/users/";
  const searchPattern = `${url}${username}`;

  useEffect(() => {
    if (!username) {
      setPerson(null);
      return;
    }
    setIsUserLoading(true);
    setUserError(null);

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
      .catch((err) => {
        setPerson(null);
        setUserError(err.message);
      })
      .finally(() => {
        setIsUserLoading(false);
      });
  }, [username]);
  return { person, isUserLoading, userError };
}

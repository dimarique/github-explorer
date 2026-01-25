import { useEffect, useState } from "react";
import type { components } from "@octokit/openapi-types";

type GithubUser = components["schemas"]["public-user"];
type UseUserInfoReturn = {
  person: GithubUser | null;
  loading: boolean;
};
export function useUserInfo(username: string): UseUserInfoReturn {
  const [person, setPerson] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const url = "https://api.github.com/users/";
  const searchPattern = `${url}${username}`;
  useEffect(() => {
    if (!username) {
      setPerson(null);
      return;
    }
    setLoading(true);
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
      .catch(() => {
        setPerson(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [username]);
  return { person, loading };
}

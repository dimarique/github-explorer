import { useEffect, useState } from "react";
import type { components } from "@octokit/openapi-types";

type GithubUser = components["schemas"]["public-user"];

export function useUserInfo(username: string): GithubUser | null {
  const [person, setPerson] = useState<GithubUser | null>(null);
  const url = "https://api.github.com/users/";
  const searchPattern = `${url}${username}`;
  useEffect(() => {
    if (!username) {
      setPerson(null);
      return;
    }

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
      });
  }, [username]);
  return person;
}

import type { components } from "@octokit/openapi-types";
import { useEffect, useState } from "react";

type GithubRepo = components["schemas"]["repository"];
type GithubReposList = GithubRepo[];

export function useFetchRepos(username: string): GithubReposList {
  const [repos, setRepos] = useState<GithubReposList | null>(null);
  useEffect(() => {
    if (!username) return;
    async function getRepos() {
      let page = 1;
      const fullList = [];
      while (true) {
        const link = `https://api.github.com/users/${username}/repos?page=${page}&per_page=100`;
        const res = await fetch(link);
        const data = await res.json();

        if (data.length === 0) break;
        fullList.push(...data);
        page++;
      }
      setRepos(fullList);
    }
    getRepos();
  }, [username]);
  return repos;
}

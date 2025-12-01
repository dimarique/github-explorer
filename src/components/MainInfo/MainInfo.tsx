import styles from "./MainInfo.module.css";
import { Users, BookOpen, MapPin, Link, Calendar } from "lucide-react";

import type { components } from "@octokit/openapi-types";

type GithubUser = components["schemas"]["public-user"];

interface MainInfoProps {
  person: GithubUser;
}

const MainInfo: React.FC<MainInfoProps> = ({ person }) => {
  return (
    person && (
      <div className={styles.user_info}>
        <div className={styles.upper_part}>
          <img className={styles.portrait} src={person?.avatar_url} alt="" />
          <h1 className={styles.user_full_name}>{person?.name}</h1>
          <h3 className={styles.user_login}>@{person?.login}</h3>
          <p className={styles.user_bio}>{person?.bio}</p>
          <div className={styles.user_footer}>
            <div className={styles.footer_items}>
              {person.location ? <MapPin size={16} /> : ""}
              <p className={styles.user_location}>{person?.location}</p>
            </div>
            <div className={styles.footer_items}>
              {person.blog ? <Link size={16} /> : ""}
              <p className={styles.user_blog}>{person?.blog}</p>
            </div>
            <div className={styles.footer_items}>
              <Calendar size={16} />
              <p className={styles.user_joined}>
                {person?.created_at &&
                  `Joined ${new Date(person.created_at).toLocaleString(
                    undefined,
                    {
                      month: "long",
                      year: "numeric",
                    },
                  )}`}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.lower_part}>
          <div className={styles.user_metrics}>
            <div className={styles.user_repositories}>
              <BookOpen color="#782d92" />
              <h1 className={styles.number}>{person?.public_repos}</h1>
              <p className={styles.metric_name}>repositories</p>
            </div>
            <div className={styles.user_folowers}>
              <Users color="#782d92" />
              <h1 className={styles.number}>{person?.followers}</h1>
              <p className={styles.metric_name}>followers</p>
            </div>
            <div className={styles.user_folowing}>
              <Users color="#782d92" />
              <h1 className={styles.number}>{person?.following}</h1>
              <p className={styles.metric_name}>following</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MainInfo;

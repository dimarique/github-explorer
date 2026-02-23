import styles from "./MainInfo.module.css";
import {
  Users,
  BookOpen,
  MapPin,
  Link,
  Calendar,
  Briefcase,
} from "lucide-react";
import SectionHeader from "../SectionHeader/SectionHeader";

import type { components } from "@octokit/openapi-types";

type GithubUser = components["schemas"]["public-user"];

interface MainInfoProps {
  person: GithubUser;
}

const MainInfo: React.FC<MainInfoProps> = ({ person }) => {
  return (
    person && (
      <div className={styles.user_info}>
        <SectionHeader text="Main User info" />
        <div className={styles.user_info_wrapper}>
          <div className={styles.user_info_header}>
            <img
              className={styles.user_image}
              src={person?.avatar_url}
              alt=""
            />
            <div className={styles.user_name_block}>
              <h1 className={styles.user_full_name}>{person?.name}</h1>
              <h3 className={styles.user_login}>@{person?.login}</h3>
            </div>
          </div>
          <div className={styles.user_details}>
            <p className={styles.user_bio}>{person?.bio}</p>
            {person.location && (
              <>
                <div className={styles.user_details_item}>
                  <MapPin size={16} />

                  <p className={styles.user_location}>{person?.location}</p>
                </div>
              </>
            )}
            {person.blog && (
              <>
                <div className={styles.user_details_item}>
                  <Link size={16} />
                  <a
                    href={person?.blog}
                    className={styles.user_blog}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {person?.blog}
                  </a>
                </div>
              </>
            )}
            {person.created_at && (
              <>
                <div className={styles.user_details_item}>
                  <Calendar size={16} />
                  <p className={styles.user_joined}>
                    {`Joined
                  ${new Date(person.created_at).toLocaleString(undefined, {
                    month: "long",
                    year: "numeric",
                  })}
                  `}
                  </p>
                </div>
              </>
            )}
            {person.hireable && (
              <>
                <div className={styles.user_details_item}>
                  <Briefcase size={16} />
                  <p className={styles.user_hireable}>Available for hire</p>
                </div>
              </>
            )}
          </div>
          <div className={styles.user_metrics}>
            <div className={styles.user_repositories}>
              <BookOpen />
              <h1 className={styles.number}>{person?.public_repos}</h1>
              <p className={styles.metric_name}>repositories</p>
            </div>
            <div className={styles.user_folowers}>
              <Users />
              <h1 className={styles.number}>{person?.followers}</h1>
              <p className={styles.metric_name}>followers</p>
            </div>
            <div className={styles.user_folowing}>
              <Users />
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

import RecentsListItem from "../RecentsListItem/RecentsListItem";
import styles from "./RecentsList.module.css";
import type { RecentSearch } from "../../types";

interface RecentsListProps {
  recents: RecentSearch[];
  setInputValue: (value: string) => void;
}

const RecentsList: React.FC<RecentsListProps> = ({
  recents,
  setInputValue,
}) => {
  return (
    <>
      <div className={styles.recentsList}>
        {recents.length > 0 && (
          <h2 className={styles.header}>Recent searches</h2>
        )}
        {recents.map((item: RecentSearch) => (
          <RecentsListItem
            key={item.login}
            item={item}
            onSelect={setInputValue}
          />
        ))}
      </div>
    </>
  );
};

export default RecentsList;

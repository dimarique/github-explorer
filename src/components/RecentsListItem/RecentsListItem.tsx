import type { RecentSearch } from "../../types";
import styles from "./RecentsListItem.module.css";

interface RecentsListItemProps {
  item: RecentSearch;
  onSelect: (value: string) => void;
}

const RecentsListItem: React.FC<RecentsListItemProps> = ({
  item,
  onSelect,
}) => {
  return (
    <div
      className={styles.recentsListItem}
      onClick={() => onSelect(item.login)}
    >
      <div className={styles.name}>{item.name}</div>
      <div className={styles.login}>@{item.login}</div>
    </div>
  );
};

export default RecentsListItem;

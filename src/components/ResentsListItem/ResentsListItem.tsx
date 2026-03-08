import type { ResentSearch } from "../../types";
import styles from "./ResentsListItem.module.css";

interface ResentsListItemProps {
  item: ResentSearch;
  onSelect: (value: string) => void;
}

const ResentsListItem: React.FC<ResentsListItemProps> = ({
  item,
  onSelect,
}) => {
  return (
    <div
      className={styles.resentsListItem}
      onClick={() => onSelect(item.login)}
    >
      <div className={styles.name}>{item.name}</div>
      <div className={styles.login}>@{item.login}</div>
    </div>
  );
};

export default ResentsListItem;

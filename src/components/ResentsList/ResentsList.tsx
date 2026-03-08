import ResentsListItem from "../ResentsListItem/ResentsListItem";
import styles from "./ResentsList.module.css";
import type { ResentSearch } from "../../types";

interface ResentsListProps {
  resents: ResentSearch[];
  setInputValue: (value: string) => void;
}

const ResentsList: React.FC<ResentsListProps> = ({
  resents,
  setInputValue,
}) => {
  return (
    <>
      <div className={styles.resentsList}>
        <h2 className={styles.header}>Recent searches</h2>
        {resents.map((item: ResentSearch) => (
          <ResentsListItem
            key={item.login}
            item={item}
            onSelect={setInputValue}
          />
        ))}
      </div>
    </>
  );
};

export default ResentsList;

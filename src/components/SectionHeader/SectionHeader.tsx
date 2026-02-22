import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text }) => {
  return (
    <div className={styles.section_header}>
      <h2>{text}</h2>
    </div>
  );
};

export default SectionHeader;

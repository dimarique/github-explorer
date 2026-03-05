import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text }) => {
  return <h2 className={styles.section_header}>{text}</h2>;
};

export default SectionHeader;

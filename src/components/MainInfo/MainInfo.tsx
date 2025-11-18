import styles from "./MainInfo.module.css";

interface MainInfoProps {
  // props?
}

const MainInfo: React.FC<MainInfoProps> = () => {
  return (
    <div className={styles.mainInfo}>
      <div className="upper_part">
        <img
          className={styles.portrait}
          src="https://lipsum.app/70x70"
          alt=""
        />
        <h2 className="user_full_name"></h2>
        <h3 className="user_login"></h3>
        <p className="user_description"></p>
        <div className={styles.user_metrics}>
          <div className="user_repositories">
            <img src="" alt="" />
            <h1 className="number">21</h1>
            <p className="metric_name"></p>
          </div>
          <div className="user_folowers">
            <img src="" alt="" />
            <h1 className="number">34</h1>
            <p className="metric_name"></p>
          </div>
          <div className="user_folowing">
            <img src="" alt="" />
            <h1 className="number">45</h1>
            <p className="metric_name"></p>
          </div>
        </div>
      </div>
      <div className="lower_part"></div>
    </div>
  );
};

export default MainInfo;

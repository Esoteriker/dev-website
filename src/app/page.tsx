import Image from "next/image";
import styles from "./page.module.css";
import DashboardPage from "./dashboard/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Hey guys! This is haidong&rsquo;s personal website. I am a full-stack
          developer, AI enthusiast, and a lifelong learner.
        </p>
      </div>

      <div className={styles.center}>
        <div className={styles.devName}>SDE</div>
      </div>

      <DashboardPage />
    </main>
  );
}

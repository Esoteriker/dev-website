// app/dashboard/page.tsx
import React from "react";
import styles from "./page.module.css";
import { PageDesciption, PageTitle } from "../../../public/ui-constant";
import Link from "next/link";

const titles = Object.values(PageTitle);
const descriptions = Object.values(PageDesciption);

const DashboardPage: React.FC = () => {
  return (
    <div className={styles.grid}>
      {titles.map((title, index) => (
        <div className={styles.card} key={index}>
          <Link href={`/dashboard/${title.toLowerCase()}`} key={index}>
              <h2>
                {title} <span>-&gt;</span>
              </h2>
              <p>{descriptions[index]}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;

import Link from "next/link"
import styles from "./style.module.scss";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <div>Navigation</div>
    // <ul className={styles.logo}>
    //   <Link href="/">Dusktopia</Link>
    // </ul>
  )
}
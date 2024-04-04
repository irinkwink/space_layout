import Link from "next/link"
import styles from "./style.module.scss";
import classNames from "classnames";

interface NavigationProps {}

const navigationLinks = [
  {
    id: 1,
    title: 'Home',
    href: '/',
    active: true,
  },
  {
    id: 2,
    title: 'Factions',
    href: '/',
    active: false,
  },
  {
    id: 3,
    title: 'Roadmap',
    href: '/',
    active: false,
  },
  {
    id: 4,
    title: 'Collaborations',
    href: '/',
    active: false,
  },
  {
    id: 5,
    title: 'FAQ',
    href: '/',
    active: false,
  },
  {
    id: 6,
    title: 'Team',
    href: '/',
    active: false,
  },
]

export const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
      {navigationLinks.map((navigationLink) => (
        (navigationLink.id < 4) &&
        <li 
          key={navigationLink.id}
          className={styles.navigationItem}
        >
          <Link 
            target="_blank"
            href={navigationLink.href }
            className={classNames(styles.navigationLink,
              navigationLink.active && styles.navigationLinkActive)}
          >
            {navigationLink.title}
          </Link>
        </li>
      ))}
     </ul>
    </nav>
  )
}
import Link from "next/link"
import styles from "./style.module.scss";
import classNames from "classnames";

interface SocialNetworksProps {}

const socialNetworks = [
  {
    id: 1,
    title: 'Discord',
    className: 'Discord',
    link: 'http://discord.com'
  },
  {
    id: 2,
    title: 'Twitter',
    className: 'Twitter',
    link: 'https://twitter.com'
  },
  {
    id: 3,
    title: 'Medium',
    className: 'Medium',
    link: 'https://medium.com'
  },
]

export const SocialNetworks: React.FC<SocialNetworksProps> = ({}) => {
  return (
    <ul className={styles.socialNetworks}>
      {socialNetworks.map((socialNetwork) => (
        <li 
          key={socialNetwork.id}
          className={styles.socialNetworksItem}
        >
          <Link 
            target="_blank"
            href={socialNetwork.link}
            className={classNames(styles.socialNetworksLink,
              styles[`socialNetworks${socialNetwork.className}`])}
          >
            {socialNetwork.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
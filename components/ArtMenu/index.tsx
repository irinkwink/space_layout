import classNames from "classnames";
import Link from "next/link"
import styles from "./style.module.scss";
import { Diamond } from "../Diamond";
import { CardMore } from "../CardMore";
import { useState } from "react";
import { ArtMenuItem } from "./ArtMenuItem";

interface ArtMenuProps {}

const links = [
  {
      id: 1,
      href: '/',
      title: 'Blighted Badlands',
      src: '/images/blighted_badlands.jpg',
  },
  {
      id: 2,
      href: '/',
      title: 'Glacial Frontier',
      src: '/images/glacial_frontier.jpg',
  },
  {
      id: 3,
      href: '/',
      title: 'Sundered Grove',
      src: '/images/sundered_grove.jpg',
  },
  {
      id: 4,
      href: '/',
      title: 'Sky Citadel',
      src: '/images/sky_citadel.jpg',
  }
];

export const ArtMenu: React.FC<ArtMenuProps> = ({}) => {
  const [openedId, setOpenedId ] = useState(0);

  return (
    <div className={styles.artMenu}>
      {links.map((link) => (
        <ArtMenuItem
          key={link.id}
          onClick={(event) => {
            event.preventDefault();
            setOpenedId(link.id !== openedId ? link.id : 0)
          }}
          isOpened={link.id === openedId}
          {...link}
        />
      ))}
    </div>
  )
}
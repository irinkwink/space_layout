
import styles from "./style.module.scss";
import { useState } from "react";
import { ArtMenuItem } from "./ArtMenuItem";

interface ArtMenuProps {}

const items = [
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
      {items.map((item) => (
        <ArtMenuItem
          key={item.id}
          onClick={(event) => {
            event.preventDefault();
            setOpenedId(item.id !== openedId ? item.id : 0)
          }}
          isLastChild={item.id === items.length}
          isOpened={item.id === openedId}
          {...item}
        />
      ))}
    </div>
  )
}
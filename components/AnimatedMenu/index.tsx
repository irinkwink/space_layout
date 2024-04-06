import classNames from "classnames";
import { useState } from "react";
import { AnimatedMenuItem } from "./AnimatedMenuItem";
import styles from "./style.module.scss";

interface Item {
  id: string;
  title: string;
  text?: string;
  imageUrl: string;
}

const items: Item[] = [
  {
    id: "01",
    title: "Genesis lands drop",
    text: "An original collection of 5,555 land plots will be made ready for the very first Dusktopian adventurers.",
    imageUrl: "/animatedMenu/01.png",
  },
  {
    id: "02",
    title: "Staking goes live",
    text: "The EON Corporation Superbank begins rewarding Dusktopians staking their land plots with $DAWN.",
    imageUrl: "/animatedMenu/02.png",
  },
  {
    id: "03",
    title: "New worlds emerge",
    text: "Claim a slice of our secret land collection with $DAWN. Outfit your existing land with new properties and accessories.",
    imageUrl: "/animatedMenu/03.png",
  },
  {
    id: "04",
    title: "Avatar collection drop",
    text: "Get the PFP avatars you will use for in-universe interaction, synergized with your asset holdings.",
    imageUrl: "/animatedMenu/04.png",
  },
  {
    id: "05",
    title: "Let's the game begin",
    imageUrl: "/animatedMenu/05.png",
  },
];

interface AnimatedMenuProps {}

export const AnimatedMenu: React.FC<AnimatedMenuProps> = ({}) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div>
      <div className={styles.animatedMenu}>
        {items.map((item, index) => (
          <AnimatedMenuItem
            key={item.id}
            index={index}
            isLastChild={index === items.length - 1}
            currentTheme={items[activeItem].id}
            onClick={() => {
              setActiveItem(index);
            }}
            isActive={index === activeItem}
            {...item}
          />
        ))}
      </div>
      <div className={styles.animatedImages}>
        {items.map((item, index) => (
          <div
            key={item.id}
            style={{
              backgroundImage: `url('${item.imageUrl}')`,
            }}
            className={classNames(
              styles.animatedImagesItem,
              activeItem === index && styles.animatedImagesItemActive
            )}
          />
        ))}
      </div>
    </div>
  );
};

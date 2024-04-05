import classNames from "classnames";
import Link from "next/link"
import styles from "./style.module.scss";
import { Diamond } from "../Diamond";
import { ArtButton } from "../ArtButton";
import Image from "next/image";

interface ArtMenuItemProps {
  id: number;
  href: string;
  title: string;
  src: string;
  isLastChild: boolean;
  isOpened: boolean;
  onClick: (event: React.MouseEvent) => void;
}

export const ArtMenuItem: React.FC<ArtMenuItemProps> = ({
  id,
  href,
  title,
  src,
  isLastChild,
  isOpened,
  onClick,
}) => {
  return (
    <Link
      key={id}
      href={href}
      onClick={onClick}
      className={
        classNames(styles.artMenuItem, isOpened && styles.artMenuItemActive)
      }
    >
      <h3 className={styles.artMenuTitle}>{title}</h3>
      <Diamond 
        active={isOpened}
        isLastChild={isLastChild}
        side={ id % 2 === 0 ? 'Right' : 'Left'}
        className={styles.artMenuDiamond}
      />
      <div className={styles.artMenuCard}>
        <div className={styles.artMenuCardButton}>
          <ArtButton
            type={`Type${id}`}
            onClick={() =>{}}
          >
            More
          </ArtButton>
        </div>
        <Image
          src={src}
          alt={title}
          width={272}
          height={184}
          className={styles.artMenuCardImage}
        />
      </div>
    </Link>
  )
}
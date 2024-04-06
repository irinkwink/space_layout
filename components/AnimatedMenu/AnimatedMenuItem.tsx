import classNames from "classnames";
import { Diamond } from "../Diamond";
import styles from "./style.module.scss";

interface AnimatedMenuItemProps {
  index: number;
  id: string;
  isLastChild: boolean;
  title: string;
  text?: string;
  imageUrl: string;
  currentTheme: string;
  isActive: boolean;
  onClick: (event: React.MouseEvent) => void;
}

export const AnimatedMenuItem: React.FC<AnimatedMenuItemProps> = ({
  index,
  id,
  isLastChild,
  title,
  text,
  isActive,
  currentTheme,
  onClick,
}) => {
  return (
    <div
      key={id}
      onClick={onClick}
      className={classNames(styles.animatedMenuItem)}
    >
      <Diamond
        active={isActive}
        isLastChild={isLastChild}
        type="Center"
        side={index % 2 === 0 ? "Left" : "Right"}
        className={styles.animationMenuDiamond}
      />
      <div
        className={classNames(
          styles.animatedMenuCard,
          isActive && styles.animatedMenuCardActive,
          styles[`animatedMenuCardTheme${currentTheme}`]
        )}
      >
        <div className={styles.animatedMenuCardContent}>
          <span className={styles.animatedMenuCardNumber}>{id}</span>
          <h4 className={styles.animatedMenuCardTitle}>{title}</h4>
          {text && <p className={styles.animatedMenuCardText}>{text}</p>}
        </div>
      </div>
    </div>
  );
};

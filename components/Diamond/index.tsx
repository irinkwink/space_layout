import classNames from "classnames";
import styles from "./style.module.scss";
import { ReactNode } from "react";

interface DiamondProps {
  active?: boolean;
  side?: 'Left' | 'Right';
  className?: string;
}


export const Diamond: React.FC<DiamondProps> = ({
  active = false,
  side,
  className,
}) => {
  return (
    <div className={classNames(styles.diamond, className)}>
      {side && 
        <span className={classNames(styles.diamondSide, styles[`diamondSide${side}`])}></span>
      }
      <span
        className={classNames(
          styles.diamondItem, 
          active && styles.diamondItemActive,
        )}>
      </span>
    </div>
  )
}
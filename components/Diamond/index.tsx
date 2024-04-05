import classNames from "classnames";
import styles from "./style.module.scss";
import { ReactNode } from "react";

interface DiamondProps {
  active?: boolean;
  isLastChild?: boolean;
  type?: 'Center';
  side?: 'Left' | 'Right';
  className?: string;
}


export const Diamond: React.FC<DiamondProps> = ({
  active = false,
  isLastChild,
  type,
  side,
  className,
}) => {
  return (
    <div className={classNames(
      styles.diamond,
      className,
      type && styles[`diamond${type}`]
    )}>
      {side && 
        <span className={classNames(
          styles.diamondSide,
          styles[`diamondSide${side}`],
          isLastChild && styles.diamondSideLast,
        )}></span>
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
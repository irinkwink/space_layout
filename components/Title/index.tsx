import classNames from "classnames";
import styles from "./style.module.scss";
import { ReactNode } from "react";

interface TitleProps {
  size?: 'Medium' | 'Large',
  children: ReactNode,
}

export const Title: React.FC<TitleProps> = ({
  size = 'Medium',
  children,
}) => {
  return (
    <h2 className={classNames(styles.title, styles[`title${size}`])}>
      {children}
    </h2>
  )
}
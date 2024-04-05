import classNames from "classnames";
import styles from "./style.module.scss";
import { ReactNode } from "react";

interface TitleProps {
  size?: 'Small' | 'Medium' | 'Large',
  className?: string,
  children: ReactNode,
}

export const Title: React.FC<TitleProps> = ({
  size = 'Medium',
  className,
  children,
}) => {
  console.log(className);
  return (
    <h2 className={classNames(styles.title, styles[`title${size}`], className)}>
      {children}
    </h2>
  )
}
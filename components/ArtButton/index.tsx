import classNames from "classnames";
import styles from "./style.module.scss";
import { ReactNode } from "react";

interface ArtButtonProps {
  type?: string,
  onClick: () => void,
  children: ReactNode,
}

export const ArtButton: React.FC<ArtButtonProps> = ({
  type = 'Standart',
  onClick,
  children,
}) => {
  return (
    <button
      className={classNames(
        styles.artButton,
        type && styles[`artButton${type}`]
        )}
      onClick={onClick}
    >
      <span>
        {children}
      </span>
    </button>
  )
}
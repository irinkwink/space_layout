import styles from "./style.module.scss";
import { ReactNode } from "react";

interface ArtTitleProps {
  type: 'Up' | 'Down',
  children: ReactNode,
}

export const ArtTitle: React.FC<ArtTitleProps> = ({
  type = 'Up',
  children,
}) => {
  return (
    <h3 className={styles.artTitle}>
      <span className={styles.artTitleText}>
        {children}
      </span>
      {type === 'Up' && (
        <svg width="123" height="12" viewBox="0 0 123 12" fill="none" className={styles.artTitleBorder}>
          <path d="M122.5 11L112.5 5.5H75.5L66.5 1H57L50 5.5H25M0 5.5H17" stroke="url(#paint0_linear_0_542)" strokeWidth="1.5"/>
          <defs>
            <linearGradient id="paint0_linear_0_542" x1="122.5" y1="6" x2="0" y2="6" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFB800"/>
            <stop offset="0.70625" stopColor="#FFBAC3"/>
            </linearGradient>
          </defs>
        </svg>
        
      )}
      {type === 'Down' && (
        <svg width="160" height="12" viewBox="0 0 160 12" fill="none" className={styles.artTitleBorder}>
          <path d="M159.5 1L149.5 6.5H75.5L66.5 11H57L50 6.5H25M0 6.5H17" stroke="url(#paint0_linear_0_469)" strokeWidth="1.5"/>
          <defs>
            <linearGradient id="paint0_linear_0_469" x1="159.5" y1="6" x2="0" y2="6" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFB800"/>
            <stop offset="0.70625" stopColor="#FFBAC3"/>
            </linearGradient>
          </defs>
        </svg>
      )}
    </h3>
  )
}
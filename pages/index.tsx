import { ArtMenu } from "@/components/ArtMenu";
import { ArtButton } from "@/components/ArtButton";
import { Logo } from "@/components/Logo";
import { Navigation } from "@/components/Navigation";
import { SocialNetworks } from "@/components/SocialNetworks";
import { Title } from "@/components/Title";
import styles from "@/styles/home.module.scss";
import classNames from "classnames";
import { ArtTitle } from "@/components/ArtTitle";
import { AnimatedMenu } from "@/components/AnimatedMenu";

export default function Home() {
  return (
    <div>
      <section className={classNames(styles.section, styles.sectionMain)}>
        <header
          className={styles.header}
        >
          <Logo />
          <SocialNetworks />
          <ArtButton onClick={() => {}}>
            Whitepaper
          </ArtButton>
        </header>
        <Navigation />
        <div className={styles.sectionHero}>
          <Title>
            From dusk to&nbsp;dawn
          </Title>
          <ul className={styles.buttonList}>
            <li>
              <ArtButton onClick={() => {}}>
                Mint
              </ArtButton>
            </li>
            <li>
              <ArtButton onClick={() => {}}>
                Connect Wallet
              </ArtButton>
            </li>
          </ul>
        </div>
      </section>
      <section className={classNames(styles.section, styles.sectionFactions)}>
        <Title size="Large">
          Factions
        </Title>
        <ArtMenu />
      </section>
      <section className={classNames(styles.section, styles.sectionRoadmap)}>
        <ArtTitle type='Down'>
          Our way
        </ArtTitle>
        <Title size="Small" className={styles.titleLeft}>
          Road
          <svg width="39" height="39" viewBox="0 0 39 39" fill="none" style={{marginRight: '1.5rem',}}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3692 39L39 19.5L19.3692 -8.58091e-07L19.3692 19.24L1.43051e-06 -1.70474e-06L-2.74233e-07 39L19.3692 19.7599L19.3692 39Z" fill="white"/>
          </svg>
          Map
        </Title>
        <AnimatedMenu/>
      </section>
    </div>
  );
}

import { ArtMenu } from "@/components/ArtMenu";
import { ArtButton } from "@/components/ArtButton";
import { Logo } from "@/components/Logo";
import { Navigation } from "@/components/Navigation";
import { SocialNetworks } from "@/components/SocialNetworks";
import { Title } from "@/components/Title";
import styles from "@/styles/home.module.scss";
import classNames from "classnames";

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
      </section>
    </div>
  );
}

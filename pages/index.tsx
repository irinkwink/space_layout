import { Button } from "@/components/Button";
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
          <Button onClick={() => {}}>
            Whitepaper
          </Button>
        </header>
        <Navigation />
        <div className={styles.sectionHero}>
          <Title>
            From dusk to&nbsp;dawn
          </Title>
          <ul className={styles.buttonList}>
            <li>
              <Button onClick={() => {}}>
                Mint
              </Button>
            </li>
            <li>
              <Button onClick={() => {}}>
                Connect Wallet
              </Button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

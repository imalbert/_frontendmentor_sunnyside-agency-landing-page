import Image from "next/image";
import styles from "../styles/Home.module.css";
import ArrowDownIcon from "../images/icon-arrow-down.svg";
import ImageTransform from "../images/desktop/image-transform.jpg";
import ImageStandOut from "../images/desktop/image-stand-out.jpg";
import HamburgerIcon from "../images/icon-hamburger.svg";

export default function Home() {
  return (
    <>
      <header>
        <div className={styles.hero}>
          <nav className={styles.mobileNav}>
            <Image src={HamburgerIcon} alt="scroll down" />
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </nav>
          <main>
            <h1>We are creatives</h1>
            <Image src={ArrowDownIcon} alt="scroll down" />
          </main>
        </div>
      </header>
      <main>
        <Image
          src={ImageTransform}
          alt="A render of an egg on a yellow background"
        />
        <section className={styles.section}>
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a className="yellow" href="#">
            Learn more
          </a>
        </section>
        <Image
          src={ImageStandOut}
          alt="A render of a pink cup on a pink background"
        />
        <section className={styles.section}>
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, reseearchers,
            photographers, videographers, and copywriters, we&apos;ll build and
            extend your brand in digital places.
          </p>
          <a className="pink" href="#">
            Learn more
          </a>
        </section>
        <section
          className={`${styles.tallSection} ${styles.graphicDesignerBg}`}
        >
          <h2>Graphic design</h2>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </section>
        <section className={`${styles.tallSection} ${styles.photographyBg}`}>
          <h2>Photography</h2>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </section>
        <section>
          <h3>Client testimonials</h3>
          <div>
            {/* <Image src="" alt="" /> */}
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <h4>Emily R.</h4>
            <span>Marketing Director</span>
          </div>
          <div>
            {/* <Image src="" alt="" /> */}
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <h4>Thomas S. Chief</h4>
            <span>Operating Officer</span>
          </div>
          <div>
            {/* <Image src="" alt="" /> */}
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <h4>Jennie F.</h4>
            <span>Business Owner</span>
          </div>
        </section>
        {/* <Image src="" alt="" /> */}
        <footer>About Services Projects Contact</footer>

        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </main>
    </>
  );
}

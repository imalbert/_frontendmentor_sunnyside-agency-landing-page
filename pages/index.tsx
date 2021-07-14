import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ArrowDownIcon from "../images/icon-arrow-down.svg";
import ImageTransform from "../images/desktop/image-transform.jpg";
import ImageStandOut from "../images/desktop/image-stand-out.jpg";
import HamburgerIcon from "../images/icon-hamburger.svg";
import ImageEmily from "../images/image-emily.jpg";
import ImageThomas from "../images/image-thomas.jpg";
import ImageJennie from "../images/image-jennie.jpg";
import ImageGalleryCone from "../images/desktop/image-gallery-cone.jpg";
import ImageGalleryMilkBottle from "../images/desktop/image-gallery-milkbottles.jpg";
import ImageGalleryOrange from "../images/desktop/image-gallery-orange.jpg";
import ImageGallerySugarcubes from "../images/desktop/image-gallery-sugarcubes.jpg";

export default function Home() {
  const [navOpen, toggleNav] = React.useState(false);
  return (
    <>
      <header>
        <div className={styles.hero}>
          <nav className={styles.nav}>
            <span className={styles.logo}>sunnyside</span>
            <div onClick={() => toggleNav(!navOpen)}>
              <Image
                height="20"
                width="25"
                src={HamburgerIcon}
                alt="scroll down"
              />
            </div>
          </nav>
          <nav className={`${styles.mobileNav} ${navOpen ? styles.open : ""}`}>
            <div onClick={() => toggleNav(!navOpen)}>
              <Image
                height="20"
                width="25"
                src={HamburgerIcon}
                alt="scroll down"
              />
            </div>
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
        <section className={`${styles.section} ${styles.testimonials}`}>
          <h3>Client testimonials</h3>
          <div className={styles.avatar}>
            <Image
              height="70"
              width="70"
              src={ImageEmily}
              alt="Image of Emily R."
            />
          </div>
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className={styles.nameAndTitle}>
            <h4>Emily R.</h4>
            <h5>Marketing Director</h5>
          </div>

          <div className={styles.avatar}>
            <Image
              height="70"
              width="70"
              src={ImageThomas}
              alt="Image of Thomas S. Chief"
            />
          </div>
          <p>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <div className={styles.nameAndTitle}>
            <h4>Thomas S. Chief</h4>
            <h5>Operating Officer</h5>
          </div>

          <div className={styles.avatar}>
            <Image
              height="70"
              width="70"
              src={ImageJennie}
              alt="Image of Jennie F."
            />
          </div>
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div className={styles.nameAndTitle}>
            <h4>Jennie F.</h4>
            <h5>Business Owner</h5>
          </div>
        </section>
        <section className={styles.gallery}>
          <Image
            layout="responsive"
            src={ImageGalleryMilkBottle}
            alt="Milk bottle"
            width="240"
            height="240"
            objectFit="cover"
          />
          <Image
            width="240"
            height="240"
            objectFit="cover"
            layout="responsive"
            src={ImageGalleryOrange}
            alt="Orange"
          />
          <Image
            layout="responsive"
            src={ImageGalleryCone}
            alt="Ice cream cone"
            width="240"
            height="240"
            objectFit="cover"
          />
          <Image
            layout="responsive"
            src={ImageGallerySugarcubes}
            alt="Sugar cubes"
            width="240"
            height="240"
            objectFit="cover"
          />
        </section>
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

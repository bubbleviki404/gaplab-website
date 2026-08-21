import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const spotifyArtistUrl = "https://open.spotify.com/artist/7qvPjiQ3SdLUhNQh5OMYqe";

export const metadata: Metadata = {
  title: { absolute: "viki006 — GapLab" },
  description: "Official artist page for viki006, a music project by GapLab.",
  alternates: { canonical: "/viki006/" },
};

export default function Viki006Page() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark} aria-label="GapLab home">
          GapLab
        </Link>
        <span>Official artist page</span>
      </header>

      <section className={styles.artist} aria-labelledby="artist-name">
        <div className={styles.portrait}>
          <Image
            src="/viki006/viki006.png"
            alt="viki006 artist avatar"
            width={1254}
            height={1254}
            priority
          />
        </div>

        <div className={styles.details}>
          <p className={styles.eyebrow}>Artist / music project by GapLab</p>
          <h1 id="artist-name">viki006</h1>

          <dl className={styles.identity}>
            <div>
              <dt>Name</dt>
              <dd>Viki</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:gaplab_viki@163.com">gaplab_viki@163.com</a>
              </dd>
            </div>
          </dl>

          <p className={styles.distribution}>Music distributed via Amuse.</p>

          <a
            className={styles.spotifyLink}
            href={spotifyArtistUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true" className={styles.spotifyDot} />
            Listen on Spotify
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>viki006</span>
        <span>Music project by GapLab</span>
      </footer>
    </main>
  );
}

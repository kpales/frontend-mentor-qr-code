import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";

import { Outfit } from "next/font/google";
import QrCode from "../../public/image-qr-code.png";

const outfit = Outfit({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>FrontEnd Mentor QR Code</title>
        <meta name="description" content="First newbie project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className={outfit.className}>
        <div className={styles.qrComponent}>
          <Image
            className={styles.qrCode}
            src={QrCode}
            alt="QR Code"
            priority
          />
          <h1 className={styles.center}>
            Improve your front-end skills by building projects
          </h1>
          <p className={styles.center}>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </main>
    </Layout>
  );
}

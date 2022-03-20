import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BaseLink from "../components/BaseLink";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container my-3">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BaseLink route={"/admin"} text={"Admin Portal"}/>
      <BaseLink route={"/driver"} text={"Driver Portal"}/>

    </div>
  );
}

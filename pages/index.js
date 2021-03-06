import Head from "next/head";
import Header from "../components/Header";
import ManualHeader from "../components/ManualHeader";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Connect to Wallet Button with Web3UiKit and Moralis</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ManualHeader />
      <Header />
    </div>
  );
}

import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Home: Hostmi"
        description="Bienvenue. Rechercher facilement vos maisons."
        canonical="https://hostmi.vercel.app/"
        openGraph={{
          url: "https://hostmi.vercel.app/",
        }}
      />
      <Head>
        <meta lang="fr" />
        <title>Hostmi</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

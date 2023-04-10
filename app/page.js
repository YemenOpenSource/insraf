"use client";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PrimaryFeatures from "@/components/PrimaryFeatures";
import SecondaryFeatures from "@/components/SecondaryFeatures";
import AppFeatures from "@/components/AppFeatures";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main className="bg-white">
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <AppFeatures />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

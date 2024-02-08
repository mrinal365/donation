import Image from "next/image";
import Hello from '../components/Homepage/index';
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      {/* <p>Hello</p> */}
      {/* <Hello /> */}
      <SEO
        title="Home"
        description="Welcome to our website"
        image="https://files.eliteprospects.com/layout/players/pnina_basov_isr.jpg"
      />
      <Header />
      <Layout />
      <Footer />
    </>
  );
}

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
        title="Donate for Pnina Basov"
        description="Pnina Basov, 18 year old girl in Canada -from Haifa Israel,
        Playing professional hockey in Canada and wants continue education in USA but the thing is that she is running our of money and in the spring if she will not find it she will go to army in Israel.
        leading to of sport career"
        image="https://files.eliteprospects.com/layout/players/pnina_basov_isr.jpg"
      />
      <Header />
      <Layout />
      <Footer />
    </>
  );
}

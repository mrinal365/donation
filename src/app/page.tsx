import Image from "next/image";
import Hello from '../components/Homepage/index';
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* <p>Hello</p> */}
      {/* <Hello /> */}
      <Header />
      <Layout />
      <Footer />
    </>
  );
}

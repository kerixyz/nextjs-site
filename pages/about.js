import Layout from "../components/Layout";
import Header from "../components/Navbar";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import How from '../components/How';
import Footer from '../components/Footer';
import GetStarted from "../components/GetStarted";

const Index = () => {
  return (
    <Layout pageTitle="Evalubot">
      <Header />
      <About />
      <Footer />
    </Layout>
  )
}

export default Index;

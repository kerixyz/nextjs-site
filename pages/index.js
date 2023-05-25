import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
// import Service from '../components/Service';
import How from '../components/How';
import Footer from '../components/Footer';
import GetStarted from "../components/GetStarted";

const Index = () => {
  return (
    <Layout pageTitle="Evalubot">
      <Header />
      <Hero />
      <Feature />
      <How />
      <GetStarted />
      <Footer />
    </Layout>
  )
}

export default Index;

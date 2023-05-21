import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';
import GetStarted from "../components/GetStarted";

const Index = () => {
  return (
    <Layout pageTitle="Evalubot">
      <Header />
      {/* <Hero /> 
      <Service />  */}
      <Feature/>
      <About />
      <GetStarted />
      <Footer />
    </Layout>
  )
}

export default Index;

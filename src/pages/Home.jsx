import BackToTop from "../components/atoms/Button/BackToTop";
import Footer from "../components/organisme/Footer/Footer";
import Header from "../components/organisme/Header/Header";
import Category from "../components/organisme/Home/Category";
import Hero from "../components/organisme/Home/Hero";


export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Category />
    <BackToTop />
    <Footer />
    </>
  );
}

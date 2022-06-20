import "../styles/globals.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import withDarkMode from "next-dark-mode";

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ParallaxProvider>
  );
}

export default withDarkMode(MyApp);

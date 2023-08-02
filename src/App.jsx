import MyCard from "./components/MyCard";
import Navbar from "./components/navbar/Navbar";
import image01 from "./assets/images/01.jpg";
import image02 from "./assets/images/02.jpg";
import image03 from "./assets/images/03.jpg";
import HeadText from "./components/HeadText";
import MyGrid from "./components/MyGrid";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <HeadText />
      <MyCard
        bgImage={image01}
        color="black"
        title='Macbook Air 15"'
        subtitle="Impressively big. Impressively thin." />
      <MyCard
        bgImage={image02}
        color="white"
        title="iPhone 14 Pro"
        subtitle="Pro. Beyond." />
      <MyCard
        bgImage={image03}
        color="black"
        title="iPhone 14"
        subtitle="Wonderfull." />
      <MyGrid />
      <Footer />
    </>
  );
}

export default App;

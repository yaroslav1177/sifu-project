import { Available } from "./components/Available/Available";
import { Follow } from "./components/Follow/Follow";
import { Footer } from "./components/Footer/Footer";
import { NewsLetter } from "./components/Form/NewsLetter";
import { Gallery } from "./components/Gallery/Gallery";
import { MainScreen } from "./components/MainScreen/MainScreen";
import { News } from "./components/News/News";
import { Slider } from "./components/Slider/Slider";
import { TopBar } from "./components/TopBar/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <MainScreen />
      <Slider />
      <News />
      <Gallery />
      <Available />
      <NewsLetter />
      <Follow />
      <Footer />
    </>
  );
}

export default App;

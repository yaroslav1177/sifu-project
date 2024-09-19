import { useState, useEffect } from 'react';
import { Available } from "./components/Available/Available";
import { Follow } from "./components/Follow/Follow";
import { Footer } from "./components/Footer/Footer";
import { NewsLetter } from "./components/NewsLetter/NewsLetter";
import { Gallery } from "./components/Gallery/Gallery";
import { MainScreen } from "./components/MainScreen/MainScreen";
import { News } from "./components/News/News";
import { About } from "./components/About/About";
import { TopBar } from "./components/TopBar/TopBar";
import { Loader } from './components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TopBar />
          <MainScreen />
          <About />
          <News />
          <Gallery />
          <Available />
          <NewsLetter />
          <Follow />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

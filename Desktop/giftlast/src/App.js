import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import GiftsPage from "./components/pages/GiftsPage";
import Main from "./components/pages/Main";
import Special from "./components/pages/Special";
import MainLayout from "./layout/MainLayout";
import ReactLoading from "react-loading";
import { useState } from "react";

function App() {
  const [loaded, setLoaded] = useState(false);
  document.onreadystatechange = function () {
    setLoaded(document.readyState === "complete");
  };
  return (
    <>
      {loaded ? (
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Main />} />
                <Route path="special" element={<Special />} />
                <Route path="about" element={<About />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="gifts/:age/:sex" element={<GiftsPage />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      ) : (
        <div className="loadBox">
          <ReactLoading
            type="spokes"
            color="#333333"
            className="load"
            width={500}
            height={500}
          />
        </div>
      )}
    </>
  );
}

export default App;

import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import Slider from "./components/section/Slider";
import Image from "./components/section/Image";
import ImgText from "./components/section/ImgText";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Main>
        <Slider fonts="nexon" />
        <Image attr={["section", "nexon", "container"]} />
        <ImgText attr={["section", "nexon", "gray", "container"]} />
        <Card attr={["section", "nexon", "container"]} />
        <Banner attr={["section", "nexon"]} />
        <Text attr={["section", "nexon", "container"]} />
      </Main>
      <Footer attr={["section", "nexon", "gray", "container"]} />
    </>
  );
}

export default App;

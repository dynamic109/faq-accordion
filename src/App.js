import React, { useState } from "react";

import faqData from "./data";
import "./App.css";
import Faq from "./components/Faq";
import faqIcon from "./images/icon-star.svg";
import desktopBackground from "./images/background-pattern-desktop.svg";
import mobileBackground from "./images/background-pattern-mobile.svg";

function App() {
  const screenWidth = window.screen.width;
  const styles = {
    backgroundImage: `url(${
      screenWidth < "768px" ? mobileBackground : desktopBackground
    })`,
    backgroundSize: "cover", // Ensure the image covers the entire main element
    backgroundPosition: "center", // Center the background image
    height: "200px",
  };
  return (
    <main className="flex justify-center p-5 font-sans" style={styles}>
      <div className="w-3/4 md:w-2/4  mt-[100px] shadow-xl rounded-md absolute bg-white p-5">
        <div className="flex w-2/5 md:w-1/5 justify-between items-center mb-8">
          <img src={faqIcon} />
          <h1 className="tracking-widest font-extrabold text-[22px]">FAQs</h1>
        </div>
        <Faq faqData={faqData} />
      </div>
    </main>
  );
}

export default App;

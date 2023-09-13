"use client";
import React from "react";

import Header from "../components/Header";

import "./styles.css";

export const SoundContext = React.createContext(null);

function RootLayout({ children }) {
  const [isEnabled, setIsEnabled] = React.useState(true);
  function toggleSound () {
    setIsEnabled(!isEnabled);
  }

  return (
    <html lang="en">
      <body>
        <SoundContext.Provider value={isEnabled}>
          <Header toggleSound={toggleSound} />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </SoundContext.Provider>
      </body>
    </html>
  );
}

export default RootLayout;

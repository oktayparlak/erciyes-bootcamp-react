import React from "react";
import About from "./About";
import OurMenu from "./OurMenu";
import Contact from './Contact';

function PageContent() {
  return (
    <div className="w3-content" style={{ maxWidth: 1100 }}>
      <About />
      <OurMenu />
      <Contact/>
    </div>
  );
}

export default PageContent;

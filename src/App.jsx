/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Muhammad Ahsan Khan",
  title: "AI Engineer & Blogger",
  email: "333ahsankhan@gmail.com",
  gitHub: "https://github.com/ahsann455",
  instagram: "https://www.instagram.com/ahsann455/?__coig_restricted=1",
  linkedIn: "https://www.linkedin.com/in/muhammad-ahsan-khan-596aaa222",
  medium: "https://medium.com/@333ahsankhan",
  twitter: "microoft",
  youTube: "https://www.youtube.com/channel/UCdMsMOVdbIYOaxfI0NVoJSA",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;

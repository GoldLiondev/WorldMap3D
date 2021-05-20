import * as React from "react";
import { render } from "react-dom";
import ReactGlobe from "react-globe";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import markers from "./markers";
import markerRenderer from "./markerRender";

const options = {
  markerRenderer,
};
export default function index() {
  return (
    <div className="App">
      <ReactGlobe
        height="100vh"
        // globeTexture="https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg"
        markers={markers}
        width="100vw"
        options={options}
      />
    </div>
  );
}

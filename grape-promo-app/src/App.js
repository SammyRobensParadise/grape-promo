import React from "react";
import Wrapper from "./wrapper";
import colors from "colors";

/**
 * constants
 */
const CONSOLE_MESSAGE =
  "Website created by Sammy Robens-Paradise for Grape Design © 2019 | Waterloo, ON.";
const CONSOLE_MESSAGE_NEXT =
  "Curious about my other projects? Visit https://sammyrp.com or follow me on github https://github.com/sammyrobensparadise";
const DSICLAIMER =
  "All libraries used in this website are not for commercial purposes.";
const LOVE_REACT_MESSAGE = "Built with ❤️ using React and hosted on 🔥-Base";

/**
 * @param {null} null
 * `App` takes no args and returns the `Wrapper` component
 * that contains the app content
 */
function App() {
  // Console Messages
  colors.enable();
  console.log(CONSOLE_MESSAGE.underline.brightGreen);
  console.log(CONSOLE_MESSAGE_NEXT.underline.brightGreen);
  console.log(DSICLAIMER.underline.underline.yellow);
  console.log(LOVE_REACT_MESSAGE.underline.brightGreen);
  return (
    <div className="App">
      <Wrapper />
    </div>
  );
}

export default App;

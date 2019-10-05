import React from 'react';
import Wrapper from './wrapper'
import  colors from 'colors'
const CONSOLE_MESSAGE = 'Website created by Sammy Robens-Paradise for Grape Design © 2019 | Waterloo, ON.'
const CONSOLE_MESSAGE_NEXT = 'Curious about my other projects? Visit https://sammyrp.com or follow me on github https://github.com/sammyrobensparadise'
const DSICLAIMER = 'All libraries used in this website are not for commercial purposes.'
function App() {
  colors.enable();
  console.log(CONSOLE_MESSAGE.underline.brightGreen)
  console.log(CONSOLE_MESSAGE_NEXT.underline.brightGreen)
  console.log(DSICLAIMER.underline.underline.yellow)
  return (
    <div className="App">
      <Wrapper/>
    </div>
  );
}

export default App;

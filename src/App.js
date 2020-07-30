import React from 'react';
import './App.css';
import Home from './components/Layout/Home'
// import UIfx from 'uifx'
// import StartBeep from './sounds/triple start beep.wav'
// import Beep from './sounds/very short beep low.wav'

// const startBeep = new UIfx(
//   StartBeep,
//   {
//     volume: .0001,
//     throttleMs: 50
//   }
// )

// const beep = new UIfx(
//   Beep,
//   {
//     volume: .0001,
//     throttleMs: 50
//   }
// )

// const doNothing = () => {
//   beep.play()
//   startBeep.play()
// }

function App() {
  return (
    <div className="App">
      <Home />
      {/* {doNothing()} */}
    </div>
  );
}

export default App;

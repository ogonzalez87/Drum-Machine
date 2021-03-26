 
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const keys = [
  {
    letter: "Q",
    soundLink:
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    letter: "W",
    soundLink:
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    letter: "E",
    soundLink:
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    letter: "A",
    soundLink:
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    letter: "S",
    soundLink:
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    letter: "D",
    soundLink:
    'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    letter: "Z",
    soundLink:
    'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    letter: "X",
    soundLink:
    'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    letter: "C",
    soundLink:
    'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

const App = () => {
  return (
    <div
      id="drum-machine"
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <div id="display">
        <div id="drum-pad" className="grid">
          {keys.map((k) => {
            return <Key letter={k.letter} audio={k.soundLink} />;
          })}
        </div>
      </div>
    </div>
  );
};

class Key extends React.Component {
  constructor(props) {
    super(props); 
    this.audio = React.createRef();
  }

 
  play = () => {
    this.audio.current.play(); 
  }
  render() {
    const { letter, audio } = this.props;
    return (
      <div
       id = { 'key_' + letter}
 
        onClick={this.play}
        className="drum-pad d-flex justify-content-center align-items-center h-150"
        
      >
        {letter}
        <audio
          id={letter}
          ref={this.audio}
          src={audio}
          className="click"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

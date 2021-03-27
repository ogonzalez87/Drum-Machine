 
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const keys = [
  {
    letter: "Q",
    soundLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    letter: "W",
    soundLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    letter: "E",
    soundLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    letter: "A",
    soundLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    letter: "S",
    soundLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    letter: "D",
    soundLink: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    letter: "Z",
    soundLink: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    letter: "X",
    soundLink: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    letter: "C",
    soundLink: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      keyPlaying: ''
    };
  }
  displayKey = (keyPressed) =>{
    this.setState({keyPlaying: keyPressed})
}
  render() {
    return (
      <div
        id="drum-machine"
        className="d-flex justify-content-center align-items-center vh-100"
      >
        <div id="display">
          <div className="text-center">
            <h2> {this.state.keyPlaying}</h2>
          </div>
          <div id="drum-pad" className="grid">
            {keys.map((k) => { 
              return <Key displayKey = {this.displayKey} letter={k.letter} audio={k.soundLink} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }

  play = () => {
    this.audio.current.play();
    // console.log(this.audio.current.id)
    //  this.props.displayKey("Data from child")
     this.props.displayKey(this.audio.current.id)

  };
  render() {
    const { letter, audio } = this.props;
    return (
      <div
        id={"key_" + letter}
        onClick={this.play}
        className="drum-pad d-flex justify-content-center align-items-center h-150"
      >
        {letter}
        <audio id={letter} ref={this.audio} src={audio} className="clip" />
      </div>
    );
  }
}

document.addEventListener("keydown", (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);

  if (audio) {
    const parent = audio.parentNode;
    parent.classList.add("active");
    audio.play();

    audio.addEventListener("ended", () => {
      parent.classList.remove("active");
    });
  }
});

ReactDOM.render(<App />, document.getElementById("root"));

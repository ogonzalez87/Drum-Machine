import React   from 'react';
import ReactDOM from 'react-dom';
import './index.css';

 
class App extends React.Component {
  render() {
    const keys = [
      "Q", 
      "W", 
      "E", 
      "A", 
      "S", 
      "D", 
      "Z", 
      "X", 
      "C"
    ];
    return (
      <div id="drum-machine" className = 'd-flex justify-content-center align-items-center vh-100'>
        <div id="display"></div>
        <div id="drum-pad" className="grid">
          {keys.map(k =>{
            return <div className= ' drum-pad text-center p-2'key= {k}>{k}</div>
          })}
          
        </div>
        
        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

(this.webpackJsonpdrum_machine=this.webpackJsonpdrum_machine||[]).push([[0],{13:function(e,t,a){},8:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(4),c=a(6),r=a(5),i=a(1),d=a.n(i),o=a(7),m=a.n(o),u=(a(13),a(0)),p=[{letter:"Q",soundLink:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{letter:"W",soundLink:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{letter:"E",soundLink:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{letter:"A",soundLink:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{letter:"S",soundLink:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{letter:"D",soundLink:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{letter:"Z",soundLink:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{letter:"X",soundLink:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{letter:"C",soundLink:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],l=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).displayKey=function(e){s.setState({keyPlaying:e})},s.state={keyPlaying:""},s}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{id:"drum-machine",className:"d-flex justify-content-center align-items-center vh-100",children:Object(u.jsxs)("div",{id:"display",children:[Object(u.jsx)("div",{className:"text-center",children:Object(u.jsxs)("h2",{children:[" ",this.state.keyPlaying]})}),Object(u.jsx)("div",{id:"drum-pad",className:"grid",children:p.map((function(t){return Object(u.jsx)(h,{displayKey:e.displayKey,letter:t.letter,audio:t.soundLink})}))})]})})}}]),a}(d.a.Component),h=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).play=function(){s.audio.current.play(),s.props.displayKey(s.audio.current.id)},s.audio=d.a.createRef(),s}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.letter,a=e.audio;return Object(u.jsxs)("div",{id:"key_"+t,onClick:this.play,className:"drum-pad d-flex justify-content-center align-items-center h-150",children:[t,Object(u.jsx)("audio",{id:t,ref:this.audio,src:a,className:"clip"})]})}}]),a}(d.a.Component);document.addEventListener("keydown",(function(e){var t=e.key.toUpperCase(),a=document.getElementById(t);if(a){var n=a.parentNode;n.classList.add("active"),a.play(),a.addEventListener("ended",(function(){n.classList.remove("active")}))}})),m.a.render(Object(u.jsx)(l,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.4bc11626.chunk.js.map
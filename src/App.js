import React from "react";
import './App.css';
import DropFile from "./components/DropFile";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="App">
         <DropFile
          
        />
       
      </div>
    );
  }
}

export default App;

import React from "react";
import './App.css';
import DropFile from "./components/DropFile";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
  }
  
  handleFileSelect(e) {
    e.stopPropagation();
    e.preventDefault();
    if (window.FileReader) {
      document.querySelector(".drop-zone").classList.remove("active");
      let file = e.dataTransfer.files[0],
        reader = new FileReader(),
        self = this;
      reader.onload = function(r) {
        console.log("onload");
        const usersArray = JSON.parse(r.target.result);
        console.log(usersArray);

      };
      reader.readAsText(file);
      self.setState({ value: reader });
    } else {
      alert("Sorry, your browser doesn't support fileReader");
    }
  }

  handleDragOver(e) {
    document.querySelector(".drop-zone").classList.add("active");
    e.stopPropagation();
    e.preventDefault();
  }

  render () {
    return (
      <div className="App">
        <DropFile
          handleDragOver={this.handleDragOver}
          handleFileSelect={this.handleFileSelect}
        />
       
      </div>
    );
  }
}

export default App;

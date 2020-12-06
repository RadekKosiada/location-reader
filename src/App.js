import React from "react";
import './App.css';
import keys from "./keys";
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
        self.getAddresses(usersArray);
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

  getAddresses(array) {
    console.log("getAddresses fired", array);
    let usersData = [];
    array.map(user => {
      fetch(`https://revgeocode.search.hereapi.com/v1/revgeocode?at=${user.Latitude}%2C${user.Longitude}&apiKey=${keys.API_KEY}`)
        .then(response => response.json())
        .then(data => {
          usersData.push({
            name: user.Name,
            address: data.items[0].address.label
          });
          this.forceUpdate();
        })
        .catch(error => {
          console.error("Error:", error.message);
        });
    });

    console.log("usersData: ", usersData);
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

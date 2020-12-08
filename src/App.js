import React from "react";
import './App.css';
import keys from "./keys";
import DropFile from "./components/DropFile";
import Users from "./components/Users.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
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
        // getting data from json and saving in a variable
        const usersArray = JSON.parse(r.target.result);
        // calling getAddresses method with usersArray as an argument
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
    let usersData = []; 
    // iterating through the array sending a request for each user from the json file
    array.forEach(user => {
      fetch(`https://revgeocode.search.hereapi.com/v1/revgeocode?at=${user.Latitude}%2C${user.Longitude}&apiKey=${keys.API_KEY}`)
        .then(response => response.json())
        .then(data => {
          //saving names and addresses in an array
          usersData.push({
            name: user.Name,
            address: data.items[0].address.label
          });
          // forcing the page to re-render after getting data
          this.forceUpdate();
        })
        .catch(error => {
          console.error("Error:", error.message);
        });
    });
    this.setState({
      users: usersData
    });
  }

  render () {
    return (
      <div className="App">
        <DropFile
          handleDragOver={this.handleDragOver}
          handleFileSelect={this.handleFileSelect}
        />
       <Users usersArray={this.state.users} />
      </div>
    );
  }
}

export default App;

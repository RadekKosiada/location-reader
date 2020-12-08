# Address Reader

Single Page Application displaying names and addresses.
You can drag-drop a JSON file containing names and geo-coordinates, both latitude and longitude, and the Reader will display names of listed users and their addresses.
The Reader is using HERE Geocoding and Search API 7
More information here: https://developer.here.com/documentation/geocoding-search-api/dev_guide/topics-api/code-revgeocode.html

### Built with
* React.js

### Setup
to run this project, install it locally using
```sh
npm install
npm start
```
And open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Requirements
 To run the Reader on your local machine you will need your own **API key** from HERE. For more information please check https://developer.here.com/

### Example of correct JSON to be used
```
[
  {
    "Name": "Max Mustermann",
    "Latitude": 52.56222,
    "Longitude": 13.35125
  }
]
```
### Screen shot

![Screen shot](./public/screenshot.jpg)
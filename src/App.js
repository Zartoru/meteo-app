import React, { Component } from "react";
import axios from "axios";
import TodayWeather from './TodayWeather';
import OtherDaysWeather from './OtherDaysWeather'

class App extends Component {
  state = {
    data: {}
  }
  componentDidMount() {
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=5931fdc0f6bd9ac69ef8a7687cb3ad1e')
    .then(res => {
      this.setState({
        data: res.data
      })
    })
  }

  render() {
    const data = this.state.data;

    if(Object.keys(data).length !== 0) {

      return (
        <div className="App">
          <h1>Ville de Lens</h1>
          <TodayWeather/>
          <OtherDaysWeather/>
        </div>
      );
    }
    else {
      // Sinon j'affiche un loading
      return (<p>Loading...</p>);
    }


  }
}

export default App;
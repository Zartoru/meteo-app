import React, {Component} from 'react';
import axios from 'axios';

class TodayWeather extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.42893&lon=2.83183&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=5931fdc0f6bd9ac69ef8a7687cb3ad1e')
        .then(res => {
            this.setState({
                data: res.data
            })
        })
    }

    render() {
        const data = this.state.data;
            if (Object.keys(data).length !== 0) {
                return (
                    <div className="today">
                        <p>Météo actuelle:  {this.state.data.daily[0].temp.day}° / {this.state.data.daily[0].weather[0].description}</p>
                    </div>
                )
            } else {
                return (<p>Loading...</p>)
            }
      }

}

export default TodayWeather
import React, {Component} from 'react';
import axios from 'axios';

class OtherDaysWeather extends Component {

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
            if (Object.keys(data).length !== 0) {
                return (
                    <div className="today">
                        <p>Météo de demain : {this.state.data.daily[1].temp.day}° / {this.state.data.daily[1].weather[0].description}</p> 
                        <p>Météo dans 2 jours : {this.state.data.daily[2].temp.day}° / {this.state.data.daily[2].weather[0].description}</p>
                        <p>Météo dans 3 jours : {this.state.data.daily[3].temp.day}° / {this.state.data.daily[3].weather[0].description}</p>
                        <p>Météo dans 4 jours : {this.state.data.daily[4].temp.day}° / {this.state.data.daily[4].weather[0].description}</p>
                    </div>
                )
            } else {
                return (<p>Loading...</p>)
            }
      }

}

export default OtherDaysWeather 
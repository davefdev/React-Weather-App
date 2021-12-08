import React from "react";

class Forecast extends React.Component {
  render() {
    this.props.forecast.map({f} => {
      let ampm = 'AM';
      let hour = new Date(f.dt * 1000).getHours();
      
      
      if (hour > 12) {
        
        hour = hour - 12;
        ampm = 'PM';

      }
      return (
      <div className="forecast-item">
        <p className="forecast-item__hour">  {hour}:00 {ampm}    </p>
        <p>{f.temp}</p>
        <p>{f.weather[0].main}</p>
       </div>


      );
    });

    return <div className="forecast">
      

     
  }
}

export default Forecast;

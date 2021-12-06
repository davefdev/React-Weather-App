import React from "react";

class Forecast extends React.Component {
  render() {
    this.props.forecast.map({f} => {
      return (
      <div className="forecast-item"></div>
      <p>

      </p>
        <p>
          {f.temp}
        </p>
             <p>
             {f.weather[0].main}
           </p>
       </div>


      )
    });

    return (<div className="forecast">
      )

     
  }
}

export default Forecast;

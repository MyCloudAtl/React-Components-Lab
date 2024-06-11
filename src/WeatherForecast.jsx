import "./WeatherForecast.css"

const WeatherForecast = (props) => {
    return(
        <div className="weather">
        <h2>Day of the Week {props.weather.day}</h2>
        <img src={props.weather.img} alt={props.weather.imgAlt} />
        <p><span>conditions: {props.weather.conditions}</span></p>
        <p><span>time: {props.weather.time}</span></p>
        </div>
    )
    }
    
    export default WeatherForecast
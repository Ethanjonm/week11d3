import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';
import { useEffect, useState } from 'react';


function ClimateStats() {

  const {humidity, setHumidity} = useClimate()
  const {temperature, setTemperature} = useClimate()



  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temperature}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
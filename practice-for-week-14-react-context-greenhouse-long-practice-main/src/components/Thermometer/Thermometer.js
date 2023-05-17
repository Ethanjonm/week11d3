import ReactSlider from "react-slider";
import "./Thermometer.css";
import { useClimate } from "../../context/ClimateContext";
import { useEffect, useState } from "react";

function Thermometer() {
  const { temperature, setTemperature } = useClimate();
  const [newTemp, setNewTemp] = useState(temperature);

  useEffect(() => {
    // debugger;
    let plusTemp = setInterval(() => {
      if (temperature > newTemp) {
        setTemperature((prevTemperature) => {
          return prevTemperature - 1;
        });
      } else if (temperature < newTemp) {
        setTemperature((prevTemperature) => {
          return prevTemperature + 1;
        });
      }
    }, 1000);

    return () => {
      clearInterval(plusTemp);
    };
  }, [temperature, newTemp]);

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={newTemp}
        onAfterChange={setNewTemp}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;

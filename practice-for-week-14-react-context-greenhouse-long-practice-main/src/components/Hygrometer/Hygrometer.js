import ReactSlider from "react-slider";
import "./Hygrometer.css";
import { useClimate } from "../../context/ClimateContext";
import { useEffect, useState } from "react";

function Hygrometer() {
  const { humidity, setHumidity } = useClimate();
  const [newHum, setNewHum] = useState(humidity);

  useEffect(() => {
    let interval = setInterval(() => {
      if (humidity > newHum) {
        setHumidity((prevHumidity) => {
          return prevHumidity - 2;
        });
      } else if (humidity < newHum) {
        setHumidity((prevHumidity) => {
          return prevHumidity + 2;
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [humidity, newHum]);

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={newHum}
        onAfterChange={setNewHum}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;

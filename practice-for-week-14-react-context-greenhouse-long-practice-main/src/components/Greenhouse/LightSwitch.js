import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const {themeName, setThemeName} = useTheme()

 const handleClickNight = () => {
  if(themeName === "day") {
    setThemeName("night")
  }
}
const handleClickDay = () => {
  if(themeName === "night") {
    setThemeName("day")
  }
}


  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={handleClickDay}>DAY</div>
      <div className="off" onClick={handleClickNight}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;
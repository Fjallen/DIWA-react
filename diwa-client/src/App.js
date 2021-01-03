import './App.css';
import { useEffect, useState } from 'react'
function App() {
  const [locationString, setLocationString] = useState("")
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  let success = (pos) => {
    var crd = pos.coords;
    setLocationString(`Your current position is: \nLatitude : ${crd.latitude}\nLongitude: ${crd.longitude}\nMore or less ${crd.accuracy} meters.`)
  }
  let error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [])
  return (
    <div className="App">
      <p>
        {locationString}
      </p>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./App.css";
import Controls from "./components/controls";
import SensorDisplay from "./components/sensor-display";

export interface SensorReading {
  greenhouse: string;
  measurement: string;
  isNominal: boolean;
  sensor: string;
}

const get_Data = async (): Promise<SensorReading[]> => {
  const MEASUREMENTS = [
    {greenhouse: 'Tomato Hut', measurement: '36 C', isNominal: false, sensor: 'Temp'},
    {greenhouse: 'Tomato Hut', measurement: '75 %', isNominal: true, sensor: 'Humidity'},
    {greenhouse: 'Tomato Hut', measurement: '400 ppm', isNominal: true, sensor: 'CO2'},
    {greenhouse: 'Beetville', measurement: '25 C', isNominal: true, sensor: 'Temp'},
    {greenhouse: 'Beetville', measurement: '88 %', isNominal: true, sensor: 'Humidity'},
    {greenhouse: 'Beetville', measurement: '900 ppm', isNominal: false, sensor: 'CO2'}
  ];
  return Promise.resolve(MEASUREMENTS);
}

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [sensorData, setSensorData] = useState([{}]);

  const [sensorFilter, setSensorFilter] = useState('');
  const [showNomOnly, setShowNomOnly] = useState(false);

  const requestSensorData = async () => {
    try {
      // get some data ...
      const data = await get_Data();

      setSensorData(data);
      
    } catch(err) {
      console.error('(!) Sorry couldn\'t get data (!):', err);
      
    }

    setIsLoading(false);
  }

  useEffect(() => {
    if(isLoading) {
      requestSensorData();
    }
  }, [isLoading]);
  
  return (
    <div className="App">

      {isLoading ? (
        <div className='text-center my-5'>
          <Spinner animation="grow" />
          <p className='my-2'>Loading Data...</p>
        </div>
      ) : (
        <>
          <Controls
            setSensorFilter={setSensorFilter}
            setShowNomOnly={setShowNomOnly}/>
          <SensorDisplay
            sensorData={sensorData}
            sensorFilter={sensorFilter}
            showNomOnly={showNomOnly}/>
        </>
      )}
    </div>
  );
}

export default App;

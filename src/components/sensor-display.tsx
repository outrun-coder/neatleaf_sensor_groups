import { SensorReading } from "../App";

interface SensorDispProps {
  sensorData: Array<any>;
  sensorFilter: string;
  showNomOnly: boolean;
}

interface SensorGroup {
  greenhouse: string;
  readings: Array<SensorReading>
}

const SensorDisplay = (props: SensorDispProps) => {
  const { sensorData, sensorFilter, showNomOnly } = props;
  console.log('>> SENSOR_FILTER:', sensorFilter);
  console.log('>> SHOW_NOMINAL_ONLY:', showNomOnly);
  
  const sensorGroups = sensorData.reduce((groupings: Array<SensorGroup>, reading: SensorReading): Array<SensorGroup> => {
    const { greenhouse } = reading;
    const targetGH = greenhouse;

    const targetSensorGroup = groupings.filter((group: SensorGroup) => {
      return group.greenhouse === targetGH;
    })[0];

    if (targetSensorGroup) {
      targetSensorGroup.readings.push(reading);
      return groupings;
    } else {
      // new grouping
      return [
        ...groupings,
        {
          greenhouse,
          readings: [
            reading
          ]
        }
      ]
    }
  }, []);

  return (
    <div className="sensor-display">
      <h1>Sensor Measurements</h1>

      {sensorGroups.map((group: SensorGroup, i: number) => (
        <div key={i} className="greenhouse-status">
        
        <div className="greenhouse-label">{group.greenhouse}</div>

       

      </div>
      ))}
      

    </div>
  );
}

export default SensorDisplay;
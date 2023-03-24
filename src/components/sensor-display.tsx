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

  console.log('>> SENSOR_GROUPS:', sensorGroups);
  

  return (
    <div className="sensor-display">
      <h1>Sensor Measurements</h1>

      {sensorGroups.map((group: SensorGroup, i: number) => (
        <div key={i} className="greenhouse-status">
        
        <div className="greenhouse-label">{group.greenhouse}</div>

        <ul className="measurement-list">
          
          {group.readings.filter((reading) => {
            const matchesSearchFilter = sensorFilter === '' || reading.sensor === sensorFilter;
            const nomOnly = !showNomOnly || reading.isNominal;
            // console.log('>> SENSOR', reading.sensor);
            // console.log('>> NOMINAL', reading.isNominal);
            return (
              matchesSearchFilter
              && nomOnly
            );
          }).map((reading, i) => (
            <li key={i} className="sensor-measurement">
              <span className={`sensor-label ${(!reading.isNominal) ? 'alerted' : ''}`}>{reading.sensor}</span>
              <span className="sensor-reading">{reading.measurement}</span>
            </li>
          ))}

        </ul>

      </div>
      ))}
      

    </div>
  );
}

export default SensorDisplay;
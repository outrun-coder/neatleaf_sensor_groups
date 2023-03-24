
interface SensorDispProps {
  sensorData: Array<any>;
  sensorFilter: string;
  showNomOnly: boolean;
}

const SensorDisplay = (props: SensorDispProps) => {
  const { sensorFilter, showNomOnly } = props;
  console.log('>> SENSOR_FILTER:', sensorFilter);
  console.log('>> SHOW_NOMINAL_ONLY:', showNomOnly);
  

  return (
    <div className="sensor-display">
      <h1>Sensor Measurements</h1>

      <div className="greenhouse-status">
        <div className="greenhouse-label">Greenhouse label</div>

        <ul className="measurement-list">
          <li className="sensor-measurement">
              <span className="sensor-label">Sensor Label</span>
              <span className="sensor-reading">Sensor Reading</span>
          </li>
        </ul>

      </div>

    </div>
  );
}

export default SensorDisplay;
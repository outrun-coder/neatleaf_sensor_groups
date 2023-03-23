import "./App.css";

const get_Data = async () => {
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
  
  return (
    <div className="App">
      YOUR CODE HERE
    </div>
  );
}

export default App;

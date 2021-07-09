import logo from './logo.svg';
import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard lastName='Doe' firstName='Jane' age={69} hairColor='blonde'/>
      <PersonCard lastName='Smith' firstName='John' age={48} hairColor='dirty blonde'/>
      <PersonCard lastName='Fillmore' firstName='Millard' age={95} hairColor='platinum blonde'/>
      <PersonCard lastName='Smith' firstName='Maria' age={27} hairColor='strawberry blonde'/>
    </div>
  );
}

export default App;

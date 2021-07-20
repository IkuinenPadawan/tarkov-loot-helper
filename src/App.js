import './App.css';
import Header from './components/Header'
import LevelPicker from './components/LevelPicker'

function App() {
  return (
    <div className="App">
      <Header title='Tarkov Loot Tool'/>
      <LevelPicker />
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header'
import LevelPicker from './components/LevelPicker'
import QuestPicker from './components/QuestPicker'

function App() {
  return (
    <div className="App">
      <Header title='Tarkov Loot Tool'/>
      <LevelPicker levels={20}/>
      <QuestPicker />
    </div>
  );
}

export default App;

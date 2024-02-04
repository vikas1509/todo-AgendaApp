import './App.css';
import NewAgenda from './Components/NewAgenda';
import PendingList from './Components/PendingList';
import DoneList from './Components/DoneList';

function App() {
  return (
    <div className="app">
      <main>
        <h1>Easy Agenda</h1>
        <NewAgenda/>
        <PendingList/>

        
        <DoneList/>
      </main>
    </div>
  );
}

export default App;
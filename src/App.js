import './App.css';
import Header from './components/Header';
import Histories from './components/Histories';
import Publications from './components/Publications';
import Options from './components/Options';

function App() {  
  return (
    <div className="App">
      <Header />
      <div className="app_container">
        <div className="pubs_and_histories">
          <Histories />
          <Publications />
        </div>
        <Options className="options" />
      </div>
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';
import Clicker from './components/Clicker/Clicker';



function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect( () => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header />
      <Clicker />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;

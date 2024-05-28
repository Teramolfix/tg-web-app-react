import { useEffect } from 'react';
import './App.css';
// import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';



function App() {
  const {tg, onToggleButton} = useTelegram;

  useEffect( () => {
    tg.ready();
  })

  return (
    <div className="App">
      {/* <Header /> */}
      <button onClick={onToggleButton}>toggle</button>
      {/* <h1>Hello World!</h1> */}
    </div>
  );
}

export default App;

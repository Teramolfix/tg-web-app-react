import './App.css';
window.Telegram.WebApp;

function App() {

  useEffect( () => {
    tg.ready();
  })

  const onClose = () => {
    tg.close()
  }
  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;

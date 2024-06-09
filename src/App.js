import './App.css';
import {useEffect} from 'react';
import { useTelegram } from './hooks/useTelegram';
import Clicker from './components/Clicker/Clicker';

function App() {
    const {onToggleButton} = useTelegram();

    useEffect(() => {
      tg.ready();
    }, [])

  return (
    <div className="App">
      <Clicker />
    </div>
  );
}

export default App;

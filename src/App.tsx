import { useState } from 'react';
import './App.css';
import SearchField from './components/search/SearchField/SearchField';

function App() {
  const [count, setCount] = useState(0);

  return <SearchField />;
}

export default App;

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import data from './component/data';
import List from './component/list';
function App(){
  const [people, setPeople] = useState(data);
  function clearAllRecords(){
    setPeople([]);
  }
    return(
    <main>
      <div className="container">
        <h3>{data.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={clearAllRecords}>Clear All</button>
      </div>
    </main>
  );  
}

export default App;

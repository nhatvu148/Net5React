import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from "axios";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(()=>{
    (async () => {
      const response = await Axios.get("http://localhost:5000/api/activities");
       setActivities(response.data);
    })();
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {activities.map((activity: any) => (
            <li key={activity.id}>
              {activity.title}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Route} from "react-router-dom";
import Create from './components/Create';
import Showdata from './components/Showdata';
import UpdateData from "./components/UpdateData";


function App() {
  
  return (
    <div className= "App">
    <switch>
      <Route exact path='/' component={Create}></Route>
      <Route path= "/showdata" component= {Showdata}></Route>
      <Route path="/update/:id" component={UpdateData}></Route>
    </switch>
    </div>
  );
}

export default App;

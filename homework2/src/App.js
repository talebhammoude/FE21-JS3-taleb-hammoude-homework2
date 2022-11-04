import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Fridge from './Components/Fridge';
import List from './Components/List';
import { useState } from "react";






const data = [
  
]



function App() {


  const [currentData, setData] = useState(data)


  const handleSubmit = (e)=> {
    e.preventDefault();
    const productname = document.querySelector("#pname").value;
    const pamount = document.querySelector("#pamount").value;
    const pdate = document.querySelector("#pdate").value;
    const pcat = document.querySelector("#pcat").value;

    setData((prev)=>{
      return(
        [
          ...prev, {
            id: Math.floor(Math.random() * 999),
            name: productname,
            amount: pamount,
            date: pdate, 
            category: pcat
            }
        ]
      )
      
    })
    }




  return (
    <div className="App">
      <header className="App-header">
       <Fridge handleSubmitFunc = {handleSubmit}/>
       <List theData = {currentData}/>
      </header>
    </div>
  );
}

export default App;

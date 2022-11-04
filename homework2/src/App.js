import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Fridge from './Components/Fridge';
import List from './Components/List';
import { useState } from "react";
import CategoryButtons from './Components/CategoryButtons';




const data = [];


function App() {


  const [currentData, setData] = useState(data)


  const handleSubmit = (e)=> {
    e.preventDefault();
    let productname = document.querySelector("#pname").value;
    let pamount = document.querySelector("#pamount").value;
    let pdate = document.querySelector("#pdate").value;
    let pcat = document.querySelector("#pcat").value;


        if(productname && pamount && pdate && pcat) {

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

        } else {
          alert("Fyll i alla fält för att kunna skicka in")
        }
    }




  return (
    <div className="App">
      <header className="App-header">
       <Fridge handleSubmitFunc = {handleSubmit}/>
       <CategoryButtons theData = {currentData}/>
       <List theData = {currentData}/>
      </header>
    </div>
  );
}

export default App;

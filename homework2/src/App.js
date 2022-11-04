import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Fridge from './Components/Fridge';
import List from './Components/List';




const data = [
  {
    id: 1,
    name: "talang",
    amount: 1,
    date: new Date(2022, 11, 7), 
    category: "fruit"
  },
  {
    id: 2,
    name: "mannushi",
    amount: 3,
    date: new Date(2022, 11, 9), 
    category: "vegetable"
  }
]



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Fridge/>
       <List theData = {data}/>
      </header>
    </div>
  );
}

export default App;

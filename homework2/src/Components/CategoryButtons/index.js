import "./styles.css";
import Button from 'react-bootstrap/Button';
import List from "../List";
import { useState } from "react";

function CategoryButtons(props) {

 

    const [currentFilteredValue, setFilteredValue] = useState();


    const setCats = new Set(props.theCats);
    const setCatsArray = [...setCats];



    const handleClickOnOthers = (event)=> {
      setFilteredValue([...props.theData.filter(e=>e.category===event.target.innerHTML)]);
    }



    const handleClickOnAll = (event)=> {
      setFilteredValue();
    }



   const markOn = (event) => {
    event.target.style['border-width'] = "7px";
    event.target.style['border-color'] = "white";
   }


   const markOff = (event) => {
    event.target.style['border-width'] = "0px";
    event.target.style['border-color'] = "";
   }

   


  return (
    
    <div className="catButtons">

        <Button variant="secondary"  id="allBtn"  onFocus={markOn}  onBlur={markOff}   onClick={handleClickOnAll}>ALL</Button>{'  '}
          {setCatsArray.map((e) => {
            return (
              <span>
                 <Button variant="warning"  onFocus={markOn}  onBlur={markOff}    onClick={handleClickOnOthers} id="catBtn">{e}</Button>{'  '}
              </span>
            );
          })}
        
        <List theData={props.theData}  theFilteredArrayValue={currentFilteredValue} />

    </div>
  );
}

export default CategoryButtons;

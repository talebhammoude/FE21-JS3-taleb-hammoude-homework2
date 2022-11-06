import "./styles.css";
import Button from 'react-bootstrap/Button';
import List from "../List";
import { useState } from "react";

function CategoryButtons(props) {

  const [currentFilteredValue, setFilteredValue] = useState();

    const setCats = new Set(props.theCats);
    const setCatsArray = [...setCats];



    const filterData = (event)=> {
        // event.target.style['border-width'] = "7px";
        setFilteredValue([...props.theData.filter(e=>e.category===event.target.innerHTML)]);
    }



    const handleClickOnAll = (e)=> {
      setFilteredValue();
    }




  return (
    
    <div className="catButtons">

        <Button variant="secondary" onClick={handleClickOnAll}>ALL</Button>{'  '}
          {setCatsArray.map((e) => {
            return (
              <span>
                 <Button variant="warning" onClick={filterData} id="catBtn">{e}</Button>{'  '}
              </span>
            );
          })}
        
        <List theData={props.theData}  theFilteredArrayValue={currentFilteredValue} />

    </div>
  );
}

export default CategoryButtons;

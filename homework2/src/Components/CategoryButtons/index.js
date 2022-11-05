import "./styles.css";
import Button from 'react-bootstrap/Button';

function CategoryButtons(props) {


    const setCats = new Set(props.theCats);
    const setCatsArray = [...setCats];



    const handleClickOnCat = (e)=> {
        // e.target.style['border-width'] = "7px";
        
    }

    const handleClickOnAll = (e)=> {
        
        
    }




  return (
    
    <div className="catButtons">

        <Button variant="secondary" onClick={handleClickOnAll}>ALL</Button>{'  '}
          {setCatsArray.map((e) => {
            return (
              <span>
                 <Button variant="warning" onClick={handleClickOnCat} id="catBtn">{e}</Button>{'  '}
              </span>
            );
          })}
    </div>
       
  );
}

export default CategoryButtons;

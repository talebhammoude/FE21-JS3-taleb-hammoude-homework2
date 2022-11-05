import "./styles.css";
import Button from 'react-bootstrap/Button';

function CategoryButtons(props) {


    const setCats = new Set(props.theCats);
    const setCatsArray = [...setCats];
    

  return (
    
    <div className="catButtons">

        <Button variant="secondary" >ALL</Button>{'  '}
          {setCatsArray.map((e) => {
            return (
              <span>
                 <Button variant="warning">{e}</Button>{'  '}
              </span>
            );
          })}
    </div>
       
  );
}

export default CategoryButtons;

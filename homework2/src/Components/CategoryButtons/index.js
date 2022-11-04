import "./styles.css";
import Button from 'react-bootstrap/Button';

function CategoryButtons(props) {
  return (
    
    <div className="catButtons">

        <Button variant="secondary" >ALL</Button>{'  '}
          {props.theData.map((e) => {
            return (
              <span>
                 <Button variant="warning">{e.category}</Button>{'  '}
              </span>
            );
          })}
    </div>
       
  );
}

export default CategoryButtons;

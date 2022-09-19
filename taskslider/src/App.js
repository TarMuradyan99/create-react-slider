
import './App.css';
import Button from './components/Button/Button';
import List from './components/List/List';
import Wrapper from './components/Wrapper/Wrapper';
import Card from './Ui/Card/Card';
import Listitems from './components/Listitems/Listitems';
import { useEffect, useState } from 'react';
import './Ui/Globalmodule.css';


const App = () => {
const [data,setData] = useState([]);
const [page,setPage] = useState(1)


const fetchedDataFirst =()=>{
  fetch(`https://dummyjson.com/products?limit=3&skip=${(page-1)*3}`)
  .then(data => data.json())
  .then(res => setData(res))
  
}
const fetchedDataanother = () =>{
  setPage({
    page: page + 1
  })
}




  return(
    <Wrapper>
      <Card className='task-window-box'>
      <Card  className='your-data-box'>
      <List>
        {
          data.map(el => {
            console.log(el)
        return(<Listitems className='my-data-listitems' key={el.id}>
              {el.id}
              {el.brand}
              {el.category}
              {el.description}
              {el.price}
              {el.discountPercentage}
              {el.rating}
              {el.images}
              {el.title}
        </Listitems>)
            })
        }
       
      </List>
      </Card>
      <Card className='click-card'>
      <Button onClick={fetchedDataFirst}>1</Button>
      <Button onClick={fetchedDataFirst}>2</Button>
      <Button onClick={fetchedDataFirst}>3</Button>
      <Button onClick={fetchedDataanother}>4</Button>
      </Card>
      </Card>
    </Wrapper>
  )
}

export default App;




import './App.css';
import Button from './components/Button/Button';
import List from './components/List/List';
import Wrapper from './components/Wrapper/Wrapper';
import Card from './Ui/Card/Card';
import Listitems from './components/Listitems/Listitems';
import { useEffect, useState } from 'react';
import Img from './components/img/Img';
import './Ui/Globalmodule.css';


const App = () => {
const [data,setData] = useState([]);
const [page,setPage] = useState(1)
const pageData = [
  {id: 1, page: 1},
  {id: 2, page: 2},
  {id: 3, page: 3},
  {id: 4, page: 4}
]


const fetchedDataFirst =()=>{
  fetch(`https://dummyjson.com/products?limit=3&skip=${page}`)
  .then(data => data.json())
  .then(res => setData(res))

}
useEffect(()=>{
    fetchedDataFirst()
},[page])
const fetchedDataanother = (index) =>{
  setPage(index)
}
console.log(data);



  return(
    <Wrapper>
      <Card className='task-window-box'>
      <Card  className='your-data-box'>
      <List className='my-data-list'>
        {
          data?.products?.map(el => {
            console.log(el)
        return(<Listitems className='my-data-listitems' key={el.id}>
              {el.id}
              {el.brand}
              {el.category}
              {el.description}
              {el.price}
              {el.discountPercentage}
              {el.rating}
              {el.title}
              <Img src = {el.images[0]} className='data-images'/>
        </Listitems>)
            })
        }
       
      </List>
      </Card>
      <Card className='click-card'>
       { pageData.map(el =>
      <Button onClick={() => fetchedDataanother(el.id)}>Click{el.page}</Button>
       )}
      </Card>
      </Card>
    </Wrapper>
  )
}

export default App;



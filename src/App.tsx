import { useEffect, useState } from 'react'
import './App.css'
import { Link, NavLink, Outlet } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(2);
  const [document, SetDocuments] = useState([]);
  const ClickHandler  = () => {
    setCount(count + 1)
  }
  const arr = [1,2,3,4];
  const url = 'http://192.168.1.110/CPESD-MIS2.0/public/api/all-documents';
  useEffect(() =>{
    async function FetchData() {
      const request = await axios.get(url);
      SetDocuments(request.data);
      return request;
    }
    FetchData();
  }, [url]);
  let d = [
    {
      'name' : 'basil John',
      'age' : 9,
      'color' : 'red'
    },
    {
      'name' : 'Juan',
      'age' : 9,
      'color' : 'blue'
    }
  ];



  return (
    <>
     <h1>{count}</h1>
     <button onClick={ClickHandler}>Click</button>
     {arr.map((index) => <NavLink to={'/home/profile/'+index } key={index} className={({isActive}) =>{ return isActive ? 'text-primary' : ''}}>Profile {index}
     </NavLink>)}
 
     <Outlet />
     <table>
      <thead>
          <tr>
            <th>A</th>
            <th>B</th>
            <th>C</th>
          </tr>
        </thead>
        <tbody>
         
            {
            d.map((data,index) => 

              <tr key={index}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.color}</td>
           
            </tr>
            )
            }
             
            
        </tbody>
     </table>
    </>
  )
}

export default App

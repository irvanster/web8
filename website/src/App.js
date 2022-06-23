import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [dataMovies, setDataMovies] = useState([])
  useEffect(()=> {
    axios.get('http://localhost:5001/api/v1/movies').then((res)=> {
      setDataMovies(res.data.data)
    }).catch((err)=> {
      console.log(err.response.message)
    })
  },[])
  console.log(dataMovies)
  return (
    <div className="App">
    <div class="container flex-wrap">
    {dataMovies.map((item, index)=> {
        return(
          <div class="flex flex-column card-wrapper">
          <div class="shadow card card-premiere">
              <div class="flex align-items-center card-premiere-title card-section">
                  <div><img src={item.cover} /></div>
                  <div>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                  </div>
              </div>
              <div class="flex align-items-center card-premiere-price card-section">
                  <div class="flex flex-1">
                      <button class="btn btn-block btn-primary-outline">Update</button>
                  </div>
                  <div class="flex flex-1">
                      <button class="btn btn-block btn-danger-outline">Delete</button>
                  </div>
              </div>
          </div>
      </div>
        )
      })}
    </div>

    </div>
  );
}

export default App;

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {

  const [input, setinput] = useState("");

  const inptOnChange = (event) => {
    setinput(event.target.value);
  }


  return (
    <>
      <div className='mb-5 pt-3 text-decoration-underline'>
        <h1>Weather App</h1>
      </div>
      <div className='card_box'>
        <div className='inputDiv'>
          <input type='search' onChange={inptOnChange} />
        </div>

        <div className='location_name d-flex align-items-center justify-content-center text-capitalize'>
          <h1>{input}</h1>
        </div>


      </div>
    </>
  );
}

export default App;

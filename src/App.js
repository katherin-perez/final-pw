import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [quote, getQuote] = useState("Aquí va el dato que viene de la petición a la API");

  
  useEffect(() => {
    fetch('https://api.kanye.rest/')
      .then(response => response.json())
      .then((data) => {quote(data.quote);
      });
  }, [])


  function postData() {
    /*fetch('https://webhook.site/fdd2e07f-f2cf-49ae-adc1-cb9ccc8bdcc6',
      {
        method: 'POST',
        body: JSON.stringify()
      })*/
  }

  return (
    <div className="App">
      <div className="app-container">
        <div className="header">
          <img src="https://www.pngkey.com/png/full/313-3135653_on-about-3-years-ago-yeezus-hat-yeezy.png" alt="img-header"></img>
        </div>
        <div className="content">
          <div className="info-content">
            <h1>{quote}</h1>
            <p>This is your Kanye West quote for today, click below to get another one</p>
            <button  >GET NEW ONE</button>
          </div>
          <img src="https://www.e-dea.co/hubfs/lucidchart-en-colombia-decoration.png" alt="img-content"></img>
        </div>
        <div className="footer">
          <h2>Be the first to access it</h2>
          <p>Subscribe to receive updates and join our beta list.</p>
          <input placeholder="Enter your email"></input>
          <button onClick={postData}>SUSCRIBE</button>
        </div>
      </div>
    </div>
  );
}

export default App;

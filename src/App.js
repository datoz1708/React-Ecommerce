import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(Response => {
      console.log(Response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

};

export default App;

import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        console.log('Request Intercepted:', config);
        return config;
      }
    );

    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        console.log('Response Intercepted:', response);
        return response;
      }
    );
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:3000/data');
      setData(response.data);
    } catch (error: any) {
      console.error('Fetch Data Error:', error);
    }
  }

  return (
    <div>
      <button onClick={fetchData}>Get Data</button>
      {data.length > 0 ? (
        <div>{JSON.stringify(data)}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
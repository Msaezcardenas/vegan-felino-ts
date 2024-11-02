import { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components';
// app.tsX, esa X al final significa que renderiza html CON javascript
// Usamos  useEffect para sincronizar con entidades externas
function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/carts');
      console.log(response);

      if (!response.ok) {
        throw new Error('Error al obtener datos');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err as string);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div> Cargando...</div>;
  }

  if (error) {
    return <div> UPS! hay un error: {error}</div>;
  }

  const countMore = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore} />
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

    const fetchData = async () => {
      setLoading(true);
      setError(null); 
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('errore');
        }

        const result = await response.json();
        setData(result); 
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false); 
      }
    }};

    useEffect(() =>{
      fetchData()
    }, [url])
  

  return { data, loading, error };


export default useFetch;

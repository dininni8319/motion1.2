import { useState, useCallback } from 'react';

export const useHttpClient = () => {
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const sendRequest = useCallback(async (url, method = "GET", body = null, headers = {}) => {
   setLoading(true);
  
   try {
     const response = await fetch(
       url,
       {
        method,
        body,
        headers
      }
     );
     const responseData = await response.json();
      
     if(!response.ok) {
      throw new Error(responseData.message)
     }
     setLoading(false);
     return responseData;
   } catch (err) {
     setError(err.message);
     setLoading(false);
   }
  },[]);
 
  const clearError = () => {
    setError(null);
  }

  return {
    loading,
    error,
    sendRequest,
    clearError,
  }
};
import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);

      setResponseData(data.data.images.fixed_height.url);
    } catch (error) {
      console.log(error);
      setError("There was an error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { responseData, loading, error };
};

export default useFetch;

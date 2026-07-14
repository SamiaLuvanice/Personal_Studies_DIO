import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../config';

const withDataFetching = (title, WrappedComponent, endpoint) => {
  const WithDataFetching = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const controller = new AbortController();

      const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
          const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
            signal: controller.signal,
          });

          if (!response.ok) {
            throw new Error(
              `Failed to fetch data: ${response.status} ${response.statusText}`
            );
          }

          const result = await response.json();
          setData(result);
        } catch (err) {
          if (err.name !== 'AbortError') {
            console.error(`Error fetching data from ${endpoint}:`, err);
            setError(err.message || 'An error occurred while fetching the data.');
          }
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();

      return () => {
        controller.abort();
      };
    }, []);

    if (isLoading) {
      return (
        <div>
          <h2>{title}</h2>
          <p>Loading...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div>
          <h2>{title}</h2>
          <p>Error: {error}</p>
        </div>
      );
    }

    if (!Array.isArray(data) || data.length === 0) {
      return (
        <div>
          <h2>{title}</h2>
          <p>No data was found.</p>
        </div>
      );
    }

    return <WrappedComponent {...props} data={data} />;
  };

  WithDataFetching.displayName = `withDataFetching(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WithDataFetching;
};

export default withDataFetching;
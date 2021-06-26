import React from 'react';

export default function UseFetch(url) {
  let [data, setData] = React.useState(void 0);
  let [loading, setLoading] = React.useState(void 0);
  let [error, setError] = React.useState(void 0);

  React.useEffect(() => {
    setData(void 0);
    setLoading(true);

    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        setLoading(false);
        setData(resp);
      })
      .catch(err => {
        setLoading(false);
        setError(err);
      });

  }, [url])
  return [{ data, loading, error }];
}
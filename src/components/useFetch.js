import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((e) => console.log(e))
      .finally((e) => setloading(e));
  }, []);
  return [data, loading];
}

export default useFetch;

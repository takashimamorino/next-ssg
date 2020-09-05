import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import useFetch from "use-http";

const HomePage = () => {
  const [state, setState] = useState({ title: "", body: "" });
  const { get, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await get();
    setState(res);
  };

  return (
    <>
      {error && <h2>Error</h2>}
      {loading && <h2>Loading</h2>}

      <h2>{state.title}</h2>
      <p>{state.body}</p>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  };
};

export default HomePage;

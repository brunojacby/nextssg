// pages/teste/[id].js

import { useRouter } from 'next/router';

const TesteID = ({ data }) => {
  const router = useRouter();
  
  // Show loading state while fetching data on the server
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data ? (
        <>
          <h1>{data.id}</h1>
          <p>{data.title}</p>
        </>
      ) : (
        <h1>Data not found</h1>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params; // Get the ID from the parameters

  // Fetch data from your API
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await response.json();

  // Handle cases where the data is not found
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // Pass data as props to the component
  };
}

export default TesteID;

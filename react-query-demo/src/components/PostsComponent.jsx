import { useQuery } from "react-query";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const PostsComponent = () => {
  // Use the useQuery hook to handle data fetching and caching
  const { data, error, isLoading, isError, refetch } = useQuery(
    "fetchData",
    fetchData
  );
  // Create a custom function to trigger refetch
  const fetchPosts = () => {
    refetch(); // Manually trigger the refetch
  };
  // Handle loading state
  if (isLoading) return <div>Loading...</div>;

  // Handle error state
  if (error) return <div>Error loading data</div>;
  // Display loading state while refetching
  if (isError) return <div>Refetching...</div>;
  // Render the fetched data with refetch button
  return (
    <div>
      <button onClick={() => fetchPosts()}>Refetch Data</button>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;

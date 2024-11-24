import { useQuery } from "react-query";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

const PostsComponent = () => {
  // Use the useQuery hook to handle data fetching and caching
  const {
    data,
    error,
    isLoading,
    isError,
    refetch
  } = useQuery(
    "fetchData", 
    fetchData, 
    {
      cacheTime: 1000 * 60 * 5, // Keep cached data for 5 minutes
      staleTime: 1000 * 60 * 1, // Data is considered fresh for 1 minute
      refetchOnWindowFocus: true, // Refetch data when the window is focused
      keepPreviousData: true // Keep previous data when refetching
    }
  );

  const fetchPosts = () => {
    refetch(); // Manually trigger the refetch
  };

  // Handle loading state
  if (isLoading) return <div>Loading...</div>;

  // Handle error state
  if (isError) return <div>Error loading data: {error.message}</div>;

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

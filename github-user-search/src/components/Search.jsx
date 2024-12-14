import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    setUserData([]);

    try {
      const results = await fetchUserData({
        username,
        location,
        minRepos,
        page,
      });
      setUserData((prevData) => [...prevData, ...results]); // Append new results for pagination
    } catch (err) {
      setError(err.message || "Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1); // Reset to the first page on a new search
    handleSearch();
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); // Increment the page number
    handleSearch();
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white shadow-md rounded-lg p-6"
      >
        <h1 className="text-xl font-bold">GitHub User Search</h1>
        <div>
          <label className="block font-medium">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter GitHub username"
          />
        </div>
        <div>
          <label className="block font-medium">Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter location"
          />
        </div>
        <div>
          <label className="block font-medium">Minimum Repositories:</label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter minimum repositories"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {userData.length > 0 && (
        <div className="mt-8 grid gap-4">
          {userData.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-bold">{user.login}</h2>
                {user.location && <p>Location: {user.location}</p>}
                {user.public_repos !== undefined && (
                  <p>Repositories: {user.public_repos}</p>
                )}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {userData.length > 0 && !loading && (
        <button
          onClick={handleLoadMore}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;

import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Import the API service

function Search() {
  const [username, setUsername] = useState(""); // Input field value
  const [userData, setUserData] = useState(null); // Fetched user data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  const handleChange = (e) => {
    setUsername(e.target.value); // Update input value
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading message
    setError(""); // Reset error message
    setUserData(null); // Reset previous user data
    try {
      const data = await fetchUserData(username); // Call GitHub API
      setUserData(data); // Store fetched user data
    } catch (err) {
      setError("Looks like we can't find the user."); // Set error message
    } finally {
      setLoading(false); // Hide loading message
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">GitHub Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {/* Conditional rendering for different states */}
      {loading && <p>Loading...</p>} {/* Loading state */}
      {error && <p>{error}</p>} {/* Error message */}
      {userData /* Success state: Display user data */ && (
        <div>
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <h3>{userData.name || userData.login}</h3>
          <p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;

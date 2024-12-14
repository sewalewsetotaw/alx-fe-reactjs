import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Import the API service

function Search() {
  const [user, setUser] = useState(""); // For input field
  const [userData, setUserData] = useState(null); // To store user data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  const handleChange = (e) => {
    setUser(e.target.value); // Update input field value
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading message
    setError(""); // Reset error message
    setUserData(null); // Reset previous data
    try {
      const data = await fetchUserData(user); // Fetch user data
      setUserData(data); // Update state with fetched data
    } catch (err) {
      setError(err.message); // Update error state
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
          name="username"
          value={user}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>} {/* Display loading state */}
      {error && <p>{error}</p>} {/* Display error message */}

      {/* Display user details if data is available */}
      {userData && (
        <div>
          <img
            src={userData.avatar_url}
            alt={userData.login}
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

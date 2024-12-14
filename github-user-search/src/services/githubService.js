
import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

/**
 * Fetch user data from GitHub API with advanced search criteria
 * @param {object} params - Search parameters: { username, location, minRepos }
 * @returns {Promise<object>} - Search results containing user data
 */
export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    // Construct query parameters
    let query = username ? `${username} in:login` : "";
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    // Make the API call with the constructed query
    const response = await axios.get(`${BASE_URL}?q=${query}`);
    return response.data.items; // Return the list of matched users
  } catch (error) {
    // Handle API errors
    if (error.response && error.response.status === 404) {
      throw new Error("No users found matching the criteria");
    }
    throw new Error("An error occurred while searching for users");
  }
};

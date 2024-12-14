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
    let q = [];
    if (username) q.push(`${username} in:login`);
    if (location) q.push(`location:${location}`);
    if (minRepos) q.push(`repos:>=${minRepos}`);
    const queryString = q.join("+");

    // Make the API call with the constructed query
    const url = `${BASE_URL}?q=${queryString}`;
    const response = await axios.get(url);
    return response.data.items; // Return the list of matched users
  } catch (error) {
    // Handle API errors
    if (error.response && error.response.status === 404) {
      throw new Error("No users found matching the criteria");
    }
    throw new Error("An error occurred while searching for users");
  }
};

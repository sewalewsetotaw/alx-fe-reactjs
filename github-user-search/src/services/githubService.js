import axios from "axios";


const BASE_URL = "https://api.github.com/users";

/**
 * Fetch user data from GitHub API
 * @param {string} username - The GitHub username to search for
 * @returns {Promise<object>} - The user data object if the API call is successful
 */
export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/${username}`);
        return response.data; 
    } catch (error) {
        // Handle API errors
        if (error.response && error.response.status === 404) {
            throw new Error("User not found");
        }
        throw new Error("An error occurred while fetching user data");
    }
};

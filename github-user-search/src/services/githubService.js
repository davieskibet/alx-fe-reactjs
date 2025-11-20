import axios from "axios";

// Base URL for GitHub API
const BASE_URL = "https://api.github.com";

/**
 * Fetch users from GitHub based on search criteria
 * @param {Object} params - Search parameters
 * @param {string} params.username - GitHub username
 * @param {string} params.location - Location filter
 * @param {string|number} params.minRepos - Minimum number of public repos
 * @returns {Array} - Array of user objects
 */
export async function fetchUserData({ username, location, minRepos }) {
  try {
    // Build query string
    let query = username ? `${username} in:login` : "";
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    // Call GitHub search API
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query, per_page: 10 },
    });

    const users = response.data.items;

    // Fetch additional details for each user (like name, location, repo count)
    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        const userDetails = await axios.get(`${BASE_URL}/users/${user.login}`);
        return userDetails.data;
      })
    );

    return detailedUsers;
  } catch (error) {
    console.error("GitHub API error:", error);
    return [];
  }
}

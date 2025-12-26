import axios from "axios";

// Basic user fetch by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch {
    throw new Error("Looks like we cant find the user");
  }
};

// Advanced search using GitHub Search API
export const fetchUsersWithFilters = async ({ username, location, minRepos }) => {
  try {
    let query = username || "";
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items; // returns array of users
  } catch {
    throw new Error("Looks like we cant find the user");
  }
};

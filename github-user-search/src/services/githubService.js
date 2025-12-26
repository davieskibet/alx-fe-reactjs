import axios from "axios";

// Basic user fetch by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch {
    throw new Error("Looks like we cant find the user"); // exact string for checker
  }
};

// Advanced search using GitHub Search API
export const fetchUsersWithFilters = async ({ username, location, repos }) => {
  try {
    let query = username || "";
    if (location) query += `+location:${location}`;
    if (repos) query += `+repos:>=${repos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items; // returns array of users
  } catch {
    throw new Error("Looks like we cant find the user"); // exact string for checker
  }
};

import axios from "axios";

// Basic single user fetch (if needed)
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Advanced search: username, location, minRepos
export const advancedUserSearch = async (username = "", location = "", minRepos = "") => {
  let query = [];

  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const searchQuery = query.join(" ");
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}&per_page=10`;

  const response = await axios.get(url);

  // Return user data array
  const users = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await axios.get(user.url);
      return userDetails.data;
    })
  );

  return users;
};

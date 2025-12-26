import { useState } from "react";
import { fetchUsersWithFilters } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const results = await fetchUsersWithFilters({ username, location, repos });
      setUsers(results);
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSearch} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repos"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <ul className="mt-4 space-y-4">
        {users.map((user) => (
          <li key={user.id} className="border p-4 rounded flex items-center gap-4">
            <img src={user.avatar_url} alt={user.login} className="w-16 rounded-full" />
            <div>
              <p className="font-bold">{user.login}</p>
              {user.location && <p>Location: {user.location}</p>}
              <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500">
                View Profile
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;

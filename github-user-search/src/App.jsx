// src/App.jsx
import { useState } from "react";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import { searchUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);       // multiple users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async ({ username, location, minRepos }) => {
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await searchUsers({ username, location, minRepos });
      if (data.length === 0) {
        setError("Looks like we can't find any users");
      } else {
        setUsers(data);
      }
    } catch (err) {
      setError("Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>GitHub User Search</h1>
      <h1 className="text-3xl font-bold text-blue-600">
  Tailwind v4 is working!
</h1>

      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;

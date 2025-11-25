import { useState } from "react";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import { getUser } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await getUser(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user"); // <-- error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}              {/* Loading state */}
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Error state */}
      {user && <UserCard user={user} />}          {/* Display user info */}
    </div>
  );
}

export default App;

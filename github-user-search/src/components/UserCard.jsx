export default function UserCard({ user }) {
  if (!user) return null;

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <img src={user.avatar_url} alt="avatar" width="100" />
      <h2>{user.login}</h2>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank">Visit Profile</a>
    </div>
  );
}

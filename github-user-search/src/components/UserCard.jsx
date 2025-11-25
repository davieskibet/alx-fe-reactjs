// src/components/UserCard.jsx
import React from "react";

const UserCard = ({ user }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        width: "220px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        width="100"
        height="100"
        style={{ borderRadius: "50%" }}
      />
      <h3 style={{ margin: "10px 0 5px" }}>{user.name || user.login}</h3>
      {user.location && <p style={{ margin: "5px 0" }}>📍 {user.location}</p>}
      <p style={{ margin: "5px 0" }}>Repos: {user.public_repos}</p>
      {user.bio && <p style={{ margin: "5px 0", fontSize: "0.9rem" }}>{user.bio}</p>}
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "5px 10px",
          backgroundColor: "#0366d6",
          color: "#fff",
          borderRadius: "4px",
          textDecoration: "none",
        }}
      >
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
